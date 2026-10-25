// Generates the bundled Mandarin clips so every tablet hears the same voice without a system speech pack.
// Needs macOS `say` with the Tingting voice and ffmpeg. Existing clips are kept; run again after adding words.
// `say` is slow to start, so texts are spoken in batches separated by long pauses and cut apart at the pauses;
// a batch whose pause count does not match falls back to one call per text.
import {WORDS} from '../public/data.js';
import {mkdir,access} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const exec=promisify(execFile),out=fileURLToPath(new URL('../public/assets/audio/',import.meta.url));await mkdir(out,{recursive:true});
const all=WORDS.flatMap(w=>[[`${w.char}-w`,`${w.word}的${w.char}。${w.word}。`],[`${w.char}-s`,w.sentence],[`${w.char}-1`,w.word],[`${w.char}-2`,w.other]]);
const todo=[];for(const job of all){try{await access(path.join(out,job[0]+'.mp3'));}catch{todo.push(job);}}
const encode=(src,dst,from,to)=>exec('ffmpeg',['-hide_banner','-loglevel','error','-y',...(from!=null?['-ss',String(from),'-to',String(to)]:[]),'-i',src,'-ac','1','-ar','22050','-b:a','32k',dst]);
async function single([name,text],tag){const aiff=path.join(tmpdir(),`island-${tag}.aiff`);await exec('say',['-v','Tingting','-r','150','-o',aiff,text]);await encode(aiff,path.join(out,name+'.mp3'));}
async function batch(jobs,tag){const aiff=path.join(tmpdir(),`island-b${tag}.aiff`);await exec('say',['-v','Tingting','-r','150','-o',aiff,jobs.map(j=>j[1]).join(' [[slnc 1600]] ')]);
 const {stderr}=await exec('ffmpeg',['-hide_banner','-i',aiff,'-af','silencedetect=noise=-50dB:d=1.2','-f','null','-']);
 const starts=[...stderr.matchAll(/silence_start: ([\d.]+)/g)].map(m=>Number(m[1])),ends=[...stderr.matchAll(/silence_end: ([\d.]+)/g)].map(m=>Number(m[1]));
 const {stdout}=await exec('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',aiff]),total=Number(stdout);
 const cuts=[];let from=0;for(let i=0;i<starts.length&&cuts.length<jobs.length-1;i++){if(starts[i]<=from+.05)continue;cuts.push([from,starts[i]+.08]);from=Math.max(0,(ends[i]??total)-.08);}cuts.push([from,total]);
 if(cuts.length!==jobs.length){for(const j of jobs)await single(j,tag);return 'fallback';}
 await Promise.all(jobs.map((j,i)=>encode(aiff,path.join(out,j[0]+'.mp3'),cuts[i][0].toFixed(3),cuts[i][1].toFixed(3))));return 'ok';}
const groups=[];for(let i=0;i<todo.length;i+=25)groups.push(todo.slice(i,i+25));
let next=0,done=0,fallbacks=0;
await Promise.all(Array.from({length:3},async(_,w)=>{while(next<groups.length){const g=groups[next++];if((await batch(g,w))==='fallback')fallbacks++;done+=g.length;console.log(`${done}/${todo.length}`);}}));
console.log(`Prepared ${todo.length} new clips (${fallbacks} batches fell back to single calls); ${all.length} total.`);

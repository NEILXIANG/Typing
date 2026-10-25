import {PICTURES,glyphFilename} from '../public/scenes.js';
import {mkdir,access} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile),root=new URL('../public/assets/illustrations/',import.meta.url);await mkdir(root,{recursive:true});
const files=[...new Set(Object.values(PICTURES).map(p=>glyphFilename(p.glyph)))];let index=0;
await Promise.all(Array.from({length:6},async()=>{while(index<files.length){const name=files[index++],file=new URL(name,root).pathname;try{await access(file);continue;}catch{}await exec('curl',['-fsSL','--retry','2','--max-time','30',`https://cdn.jsdelivr.net/gh/jdecked/twemoji@16.0.1/assets/svg/${name}`,'-o',file]);}}));
console.log(`Prepared ${files.length} local SVG illustration assets.`);

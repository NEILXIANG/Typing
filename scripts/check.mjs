import {WORDS,THEMES} from '../public/data.js';
import {PICTURES,glyphFilename,visualPlan} from '../public/scenes.js';
import {LIFE_QUESTS} from '../public/life.js';
import {readFile,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
assert.equal(WORDS.length,500);assert.equal(new Set(WORDS.map(w=>w.char)).size,500);
for(const w of WORDS){assert(w.char.length===1);assert(w.word.includes(w.char),`${w.char}: word`);assert(w.other.includes(w.char),`${w.char}: other`);assert(w.sentence?.includes(w.other),`${w.char}: sentence`);assert(w.pinyin&&w.radical);assert(THEMES[w.unit]);const data=JSON.parse(await readFile(new URL(`../public/assets/characters/${w.char}.json`,import.meta.url)));assert(data.strokes.length>0);assert.equal(data.strokes.length,data.medians.length);assert(data.medians.every(s=>s.length>=2));}
for(const w of WORDS){const plan=visualPlan(w);assert(plan.caption.includes(w.char),`${w.char}: visual caption`);if(plan.kind==='picture'){const asset=PICTURES[w.char];assert(asset&&asset.caption===plan.caption);const svg=await readFile(new URL(`../public/assets/illustrations/${glyphFilename(asset.glyph)}`,import.meta.url),'utf8');assert(svg.includes('<svg'),`${w.char}: missing illustration`);}}
for(const char of ['棉','桌','奶','面','鼠','龙','雀'])assert.notEqual(visualPlan(WORDS.find(w=>w.char===char)).kind,'picture',`${char}: misleading picture`);
for(const q of LIFE_QUESTS)for(const c of q.chars){const w=WORDS.find(x=>x.char===c);assert(w,`${q.id}: ${c} not in word list`);assert(q.task(c,w).includes(c)||q.task(c,w).includes(w.word),`${q.id}: ${c} task text`);}
for(const file of ['app.js','core.js','life.js','audio.js','scenes.js','data.js','extra-data.js'])execFileSync(process.execPath,['--check',new URL('../public/'+file,import.meta.url).pathname]);
for(const file of ['index.html','licenses.html','styles.css','assets/hanzi-writer.min.js','assets/island.svg','assets/island-icon.svg','assets/licenses/hanzi-writer-MIT.txt','assets/licenses/Arphic-Public-License.txt','assets/licenses/twemoji-graphics.txt'])await access(new URL('../public/'+file,import.meta.url));
console.log(`Verified ${WORDS.length} unique characters, ${THEMES.length} themes, all word/sentence references, stroke datasets, and JavaScript syntax.`);

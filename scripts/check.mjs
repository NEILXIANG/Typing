import {WORDS,THEMES,STORIES} from '../public/data.js';
import {PINYIN_EXTRA} from '../public/pinyin-extra.js';
import {PICTURES,glyphFilename,visualPlan} from '../public/scenes.js';
import {LIFE_QUESTS} from '../public/life.js';
import {readFile,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
assert.equal(WORDS.length,500);assert.equal(new Set(WORDS.map(w=>w.char)).size,500);
for(const w of WORDS){assert(w.char.length===1);assert(w.word.includes(w.char),`${w.char}: word`);assert(w.other.includes(w.char),`${w.char}: other`);assert(w.sentence?.includes(w.other),`${w.char}: sentence`);assert(w.pinyin&&w.radical);assert(THEMES[w.unit]);const data=JSON.parse(await readFile(new URL(`../public/assets/characters/${w.char}.json`,import.meta.url)));assert(data.strokes.length>0);assert.equal(data.strokes.length,data.medians.length);assert(data.medians.every(s=>s.length>=2));}
for(const w of WORDS){const plan=visualPlan(w);assert(plan.caption.includes(w.char),`${w.char}: visual caption`);if(plan.kind==='picture'){const asset=PICTURES[w.char];assert(asset&&asset.caption===plan.caption);const svg=await readFile(new URL(`../public/assets/illustrations/${glyphFilename(asset.glyph)}`,import.meta.url),'utf8');assert(svg.includes('<svg'),`${w.char}: missing illustration`);}}
for(const char of ['棉','桌','奶','面','鼠','龙','雀'])assert.notEqual(visualPlan(WORDS.find(w=>w.char===char)).kind,'picture',`${char}: misleading picture`);
for(const f of ['x-hello-bunny','x-hello','x-test',...Array.from({length:8},(_,i)=>`x-story-${i}`)])await access(new URL(`../public/assets/audio/${f}.mp3`,import.meta.url));
for(const w of WORDS)for(const k of ['w','s','1','2'])await access(new URL(`../public/assets/audio/${w.char}-${k}.mp3`,import.meta.url));
for(const q of LIFE_QUESTS)for(const c of q.chars){const w=WORDS.find(x=>x.char===c);assert(w,`${q.id}: ${c} not in word list`);assert(q.task(c,w).includes(c)||q.task(c,w).includes(w.word),`${q.id}: ${c} task text`);}
for(const file of ['app.js','core.js','life.js','strokes.js','audio.js','scenes.js','data.js','extra-data.js'])execFileSync(process.execPath,['--check',new URL('../public/'+file,import.meta.url).pathname]);
// A matching board with two identical radicals cannot be solved without guessing, so every round must stay unambiguous.
const appSource=await readFile(new URL('../public/app.js',import.meta.url),'utf8');
const roundsLiteral=appSource.match(/const GAME_ROUNDS=(\[.*?\]);\n/s);
assert(roundsLiteral,'GAME_ROUNDS not found');
const gameRounds=eval(roundsLiteral[1]);
assert(gameRounds.length>=8,`only ${gameRounds.length} game rounds`);
for(const [i,round] of gameRounds.entries()){
 const radicals=round.sets.map(s=>s[1]),chars=round.sets.map(s=>s[0]);
 assert.equal(new Set(radicals).size,radicals.length,`game round ${i+1}: repeated radical ${radicals.join(',')}`);
 assert.equal(new Set(chars).size,chars.length,`game round ${i+1}: repeated character`);
 assert(!chars.some(c=>radicals.includes(c)),`game round ${i+1}: a card shows both as character and radical`);
 for(const [char,radical] of round.sets){const w=WORDS.find(x=>x.char===char);assert(w,`game round ${i+1}: ${char} not in word list`);assert.equal(w.radical,radical,`game round ${i+1}: ${char} radical mismatch`);}}
// The in-session matching round falls back to these friendly characters when today's own words share no radical, so they must always be playable.
const fallback=appSource.match(/const MATCH_FALLBACK=\[([^\]]*)\]/);
assert(fallback,'MATCH_FALLBACK not found');
for(const char of fallback[1].split(',').map(s=>s.trim().replace(/^'|'$/g,'')).filter(Boolean)){
 const w=WORDS.find(x=>x.char===char);assert(w,`MATCH_FALLBACK: ${char} not in word list`);
 assert.notEqual(w.radical,char,`MATCH_FALLBACK: ${char} is its own radical`);}
// Every picture the island can show must be a local asset, so writing a character never depends on the network.
for(const [char,{glyph}] of Object.entries(PICTURES)){
 const file=`${glyphFilename(glyph)}`;
 await access(new URL(`../public/assets/illustrations/${file}`,import.meta.url));}
// The magic layer falls back to a wooden sign when there is no picture, so every character can always leave a mark.
assert(appSource.includes('magic-sign'),'the island magic has no fallback for characters without a picture');
// A picture only counts if she can meet that character; keep enough of them so writing usually changes the island with a picture, not only a sign.
const withPicture=WORDS.filter(w=>PICTURES[w.char]).length;
assert(withPicture>=100,`only ${withPicture} of ${WORDS.length} characters can show a picture`);
// Every module the app imports must be cached for offline use, or the app breaks the moment the network drops.
const swSource=await readFile(new URL('../public/sw.js',import.meta.url),'utf8');
const shellMatch=swSource.match(/const SHELL=\[([^\]]*)\]/);
assert(shellMatch,'SHELL list not found in sw.js');
const shell=shellMatch[1].split(',').map(s=>s.trim().replace(/^'|'$/g,'')).filter(Boolean);
for(const module of ['app.js','core.js','data.js','extra-data.js','pinyin-extra.js','strokes.js','life.js','audio.js','scenes.js','styles.css'])
 assert(shell.includes(module),`sw.js does not cache ${module}`);
// Every look-alike distractor she may meet must carry a pinyin, or a transfer option shows an empty slot.
const coreSource=await readFile(new URL('../public/core.js',import.meta.url),'utf8');
const similarStart=coreSource.indexOf('const SIMILAR={');
const similarEnd=coreSource.indexOf('};',similarStart);
const SIMILAR=new Function('return '+coreSource.slice(similarStart+'const SIMILAR='.length,similarEnd+1))();
const pinyinOf=c=>WORDS.find(w=>w.char===c)?.pinyin||PINYIN_EXTRA[c];
const distractors=new Set();
for(const [char,sims] of Object.entries(SIMILAR)){distractors.add(char);for(const s of sims)distractors.add(s);}
for(const c of distractors)assert(pinyinOf(c),`no pinyin for ${c}`);
for(const [c,p] of Object.entries(PINYIN_EXTRA))assert(/^\p{L}+$/u.test(p),`bad pinyin for ${c}: ${p}`);
// Two stories with the same title look like a broken page, and every answer must point at a real option.
assert(STORIES.length>=8,`only ${STORIES.length} stories`);
assert.equal(new Set(STORIES.map(s=>s.title)).size,STORIES.length,'duplicate story titles');
for(const [i,story] of STORIES.entries()){
 assert(Array.isArray(story.choices)&&story.choices.length>=3,`story ${i+1}: too few choices`);
 assert(new Set(story.choices).size===story.choices.length,`story ${i+1}: repeated choice`);
 assert(Number.isInteger(story.answer)&&story.answer>=0&&story.answer<story.choices.length,`story ${i+1}: answer out of range`);
 assert(story.text&&story.question,`story ${i+1}: missing text`);}
for(const file of ['index.html','sw.js','licenses.html','styles.css','assets/hanzi-writer.min.js','assets/island.svg','assets/island-icon.svg','assets/buddy.svg','assets/licenses/hanzi-writer-MIT.txt','assets/licenses/Arphic-Public-License.txt','assets/licenses/twemoji-graphics.txt','assets/fonts/island-kai.woff2','manifest.webmanifest','assets/icons/icon-180.png','assets/icons/icon-192.png','assets/icons/icon-512.png','assets/licenses/LXGW-WenKai-OFL.txt'])await access(new URL('../public/'+file,import.meta.url));
console.log(`Verified ${WORDS.length} unique characters, ${THEMES.length} themes, ${gameRounds.length} matching rounds, all word/sentence references, stroke datasets, and JavaScript syntax.`);

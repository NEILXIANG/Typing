import {readFile,writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {WORDS} from '../public/data.js';

const root=new URL('../public/',import.meta.url);
const modules=['extra-data','data','core','audio','scenes','app'];
let bundle='/* Cindy 汉字小岛 · 单文件脚本，供 offline.html 使用 */\n(()=>{\n"use strict";\n';
for(const name of modules){
  const source=await readFile(new URL(`${name}.js`,root),'utf8');
  bundle+=`\n/* ${name}.js */\n`+source.replace(/^import .*?;\s*$/gm,'').replace(/^export \{.*?\};\s*$/gm,'').replace(/^export /gm,'')+'\n';
}
bundle+='\n})();\n';
await writeFile(new URL('app.bundle.js',root),bundle);
execFileSync(process.execPath,['--check',fileURLToPath(new URL('app.bundle.js',root))]);

const characters={};
for(const w of WORDS)characters[w.char]=JSON.parse(await readFile(new URL(`assets/characters/${w.char}.json`,root),'utf8'));
await writeFile(new URL('assets/characters.js',root),`/* 500 个本地笔顺数据，源许可见 assets/licenses/Arphic-Public-License.txt */\nwindow.CHARACTER_DATA=${JSON.stringify(characters)};\n`);

const html=await readFile(new URL('index.html',root),'utf8');
const offline=html.replace('<script type="module" src="app.js"></script>','<script src="assets/characters.js" defer></script><script src="app.bundle.js" defer></script>');
if(offline===html)throw Error('Offline entry replacement failed');
await writeFile(new URL('offline.html',root),offline);
console.log('Built offline.html, app.bundle.js, and 500 local stroke datasets.');

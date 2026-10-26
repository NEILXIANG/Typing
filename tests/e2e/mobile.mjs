// 移动端（iPhone 竖屏 390×844）回归
import { newPage } from './cdp.mjs';
import fs from 'node:fs/promises';
import {mkdirSync} from 'node:fs';
mkdirSync(process.env.SHOT_DIR||'/tmp/hanzi-e2e',{recursive:true});
const BASE = process.env.APP_URL || 'http://localhost:4173/';
const OUT = process.env.SHOT_DIR || '/tmp/hanzi-e2e';
const p = await newPage(BASE);
await p.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await p.goto(BASE + '#home', 1200);
await p.eval(`(()=>{const K='cindy-island-v1';const s=JSON.parse(localStorage.getItem(K)||'{}');s.version=1;s.settings={target:3,writeTarget:1,level:'auto',musicVolume:.12,name:'Cindy'};s.onboarded=true;s.placement={complete:true,day:'2026-10-23'};s.placementNote='';s.tier=1;s.records={};s.days={'2026-10-23':{newChars:['人'],reviewChars:[],written:[],points:3},'2026-10-24':{newChars:['口'],reviewChars:[],written:[],points:3}};s.sessions=[];s.stars=40;s.owned=['flower'];s.decor=['flower'];s.badges={};s.letters={};s.active=null;s.confusions=[];s.family={};s.writing={'人':{char:'人',attempts:2,traceDays:['2026-10-23','2026-10-24'],blindDays:['2026-10-25'],strokeErrors:{},ms:9000,downshifts:0,pending:false,lastDay:'2026-10-25'}};s.life={};s.decorPos={};localStorage.setItem(K,JSON.stringify(s));return 1;})()`);
await p.eval('location.hash="#home"');
await p.eval('location.reload()');
await p.sleep(2400);
const shot = async n => { const r = await p.send('Page.captureScreenshot', { format: 'png' }); await fs.writeFile(`${OUT}/${n}.png`, Buffer.from(r.data, 'base64')); };
await shot('19-mobile-home');
console.log('streak:', await p.eval(`(document.querySelector('.streak')||{}).textContent||'NONE'`));
console.log('overflowX:', await p.eval(`document.documentElement.scrollWidth+'/'+innerWidth`));

// 字库
await p.eval(`location.hash='#book'`); await p.sleep(1200);
await shot('20-mobile-book');
console.log('book overflowX:', await p.eval(`document.documentElement.scrollWidth+'/'+innerWidth`));
console.log('book grid cols:', await p.eval(`getComputedStyle(document.querySelector('.char-grid')).gridTemplateColumns`));

// 地图
await p.eval(`location.hash='#map'`); await p.sleep(1200);
await shot('21-mobile-map');
console.log('map overflowX:', await p.eval(`document.documentElement.scrollWidth+'/'+innerWidth`));
console.log('voyage rail:', await p.eval(`document.querySelectorAll('.voyage-rail i').length`));

// 错选字
await p.eval(`document.querySelector('[data-act="mapFilter"][data-value="all"]')?.click()`); await p.sleep(800);
await p.eval(`document.querySelector('[data-act="theme"][data-unit="0"]')?.click()`); await p.sleep(1200);
await shot('22-mobile-book-theme');
console.log('theme overflowX:', await p.eval(`document.documentElement.scrollWidth+'/'+innerWidth`));
console.log('JS_ERRORS:', await p.eval(`JSON.stringify(window.__errs||[])`));
await p.close();

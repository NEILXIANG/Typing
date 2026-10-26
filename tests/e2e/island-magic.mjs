// 验证：写字 → 小岛发生变化（首页 / 我的小岛 / 结算页三处可见）
import { newPage } from './cdp.mjs';
import fs from 'node:fs/promises';
import {mkdirSync} from 'node:fs';
mkdirSync(process.env.SHOT_DIR||'/tmp/hanzi-e2e',{recursive:true});
const BASE = process.env.APP_URL || 'http://localhost:4173/';
const OUT = process.env.SHOT_DIR || '/tmp/hanzi-e2e';
const p = await newPage(BASE);
await p.send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 1024, deviceScaleFactor: 1, mobile: false });
await p.goto(BASE + '#home', 1200);
await p.eval(`window.__errs=[];addEventListener('error',e=>window.__errs.push('error:'+String(e.message)));addEventListener('unhandledrejection',e=>window.__errs.push('rejection:'+String(e.reason)));const ce=console.error;console.error=function(...a){window.__errs.push('console:'+a.map(String).join(' '));ce.apply(console,a)};`);

// 注入：今天已经写了三个字（两个有图，一个没有图→应显示字牌）
const day = await p.eval(`(()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');})()`);
await p.eval(`(()=>{const K='cindy-island-v1';const s=JSON.parse(localStorage.getItem(K)||'{}');s.version=1;s.settings=Object.assign({target:3,writeTarget:1,level:'auto',musicVolume:.12,name:'Cindy'},s.settings||{});s.onboarded=true;s.placement={complete:true,skipped:true,day:'${day}'};s.tier=1;s.records=s.records||{};s.days=s.days||{};s.days['${day}']={newChars:['火','花','妈'],reviewChars:[],written:['火','花','妈'],points:9,target:3,writeTarget:1};s.sessions=s.sessions||[];s.stars=s.stars||12;s.owned=s.owned||[];s.decor=s.decor||[];s.badges=s.badges||{};s.letters=s.letters||{};s.active=null;s.confusions=[];s.family={};s.writing={};s.life={};s.decorPos={};localStorage.setItem(K,JSON.stringify(s));return 1;})()`);
await p.eval('location.reload()');
await p.sleep(2000);

const probe = async () => JSON.parse(await p.eval(`JSON.stringify({
  layer:!!document.querySelector('.magic-layer'),
  effects:document.querySelectorAll('.magic-effect').length,
  emojis:document.querySelectorAll('.magic-effect .emoji').length,
  signs:document.querySelectorAll('.magic-effect .magic-sign').length,
  signChars:[...document.querySelectorAll('.magic-effect .magic-sign')].map(e=>e.textContent),
  line:(document.querySelector('.magic-line')||{}).textContent||'',
  brokenImgs:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.getAttribute('src'))
})`));

console.log('--- 首页 ---');
console.log(JSON.stringify(await probe(), null, 1));
await p.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }).then(async r => fs.writeFile(`${OUT}/30-magic-home.png`, Buffer.from(r.data, 'base64')));

// 我的小岛
await p.goto(BASE + '#garden', 1500);
console.log('--- 我的小岛 ---');
console.log(JSON.stringify(await probe(), null, 1));
await p.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }).then(async r => fs.writeFile(`${OUT}/31-magic-garden.png`, Buffer.from(r.data, 'base64')));

console.log('JS_ERRORS:', await p.eval(`JSON.stringify(window.__errs||[])`));
await p.close();

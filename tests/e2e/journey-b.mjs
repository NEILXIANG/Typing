// 终验 B 段：字库搜索 / 本周天数 / 故事页 / 游戏页 / 装饰生长 / 离线包 / 零 JS 错误
import { newPage } from './cdp.mjs';
import fs from 'node:fs/promises';
import {mkdirSync} from 'node:fs';
mkdirSync(process.env.SHOT_DIR||'/tmp/hanzi-e2e',{recursive:true});
const BASE = process.env.APP_URL || 'http://localhost:4173/';
const OUT = process.env.SHOT_DIR || '/tmp/hanzi-e2e';
await fs.mkdir(OUT, { recursive: true });
const p = await newPage(BASE);
const errors = [];
await p.goto(BASE + '#home', 1200);
await p.eval(`window.__errs=[];addEventListener('error',e=>window.__errs.push('error:'+String(e.message)));addEventListener('unhandledrejection',e=>window.__errs.push('rejection:'+String(e.reason)));const ce=console.error;console.error=function(...a){window.__errs.push('console:'+a.map(String).join(' '));ce.apply(console,a)};addEventListener('unhandledrejection',e=>window.__errs.push('rej:'+e.reason));`);
await p.eval(`localStorage.clear()`);
await p.eval('location.reload()');
await p.sleep(2200);
const snap = async (n, note) => { await p.shot(`${OUT}/${n}.png`); console.log(`== ${n} ${note} ==\n` + (await p.text()).slice(0, 240).replace(/\n/g, ' | ')); };

// ---- 1. 字库搜索 ----
await p.eval(`location.hash='#book'`); await p.sleep(900);
const groups = await p.eval(`document.querySelectorAll('.char-group').length`);
const groups2 = await p.eval(`[...document.querySelectorAll('.char-group h3 small')].map(s=>s.textContent.trim()).slice(0,5)`);
console.log('BOOK_GROUPS', JSON.stringify({ groups, firstCounts: groups2 }));
await p.eval(`(()=>{const i=document.querySelector('#book-search');i.value='晴';i.dispatchEvent(new Event('input',{bubbles:true}));return 1;})()`);
await p.sleep(700);
const search = await p.eval(`(()=>({hits:document.querySelectorAll('.char-card').length, hint:(document.querySelector('.search-hint')||{}).textContent||'', names:[...document.querySelectorAll('.char-card .hanzi')].map(x=>x.textContent.trim())}))()`);
console.log('BOOK_SEARCH', JSON.stringify(search));
await snap('09-book-search', '(字库搜索)');

// 空结果
await p.eval(`(()=>{const i=document.querySelector('#book-search');i.value='zzz';i.dispatchEvent(new Event('input',{bubbles:true}));return 1;})()`);
await p.sleep(700);
console.log('BOOK_EMPTY', await p.eval(`!!document.querySelector('.empty')`));

// ---- 2. 注入历史数据：验证本周天数 + 装饰生长 ----
await p.eval(`(()=>{const K='cindy-island-v1';const s=JSON.parse(localStorage.getItem(K)||'{}');s.version=1;s.settings={target:3,writeTarget:1,level:'auto',musicVolume:.12,name:'Cindy'};s.onboarded=true;s.placement={complete:true,day:'2026-10-23'};s.placementNote='';s.tier=1;s.records={};s.days={};s.sessions=[];s.stars=40;s.owned=['flower','bird'];s.decor=['flower','bird'];s.badges={};s.letters={};s.active=null;s.confusions=[];s.family={};s.writing={};s.life={};s.decorPos={};
// 本周 2 天：前两天有学习，今天还没开始
s.days['2026-10-23']={newChars:['人'],reviewChars:[],written:[],points:3};
s.days['2026-10-24']={newChars:['口'],reviewChars:[],written:[],points:3};
localStorage.setItem(K,JSON.stringify(s));return 1;})()`);
await p.eval('location.hash="#home"'); await p.eval('location.reload()'); await p.sleep(2400);
const streak = await p.eval(`(()=>{const s=document.querySelector('.streak');return {has:!!s, text:s?s.textContent.trim():'', route:location.hash};})()`);
console.log('STREAK', JSON.stringify(streak));
await snap('10-home-streak', '(首页 · 本周天数)');

// ---- 3. 装饰生长动画类名 ----
await p.eval(`location.hash='#garden'`); await p.sleep(1200);
const decor = await p.eval(`(()=>{const d=document.querySelector('.decoration');return {count:document.querySelectorAll('.decoration').length, cls:d?d.className:'', anim:d?getComputedStyle(d).animationName:'', dur:d?getComputedStyle(d).animationDuration:''};})()`);
console.log('DECOR', JSON.stringify(decor));
await snap('11-garden', '(我的小岛)');

// ---- 4. 故事页（从"我的小岛"的任务卡进入） ----
await p.eval(`location.hash='#garden'`); await p.sleep(1100);
await p.eval(`document.querySelector('[data-act="story"]')?.click()`); await p.sleep(1300);
const story = await p.eval(`(()=>({title:(document.querySelector('.card-header h2')||{}).textContent||'', choices:document.querySelectorAll('[data-act="storyAnswer"]').length}))()`);
console.log('STORY', JSON.stringify(story));
await snap('12-story', '(故事页)');

// ---- 5. 游戏页（从"我的小岛"的任务卡进入） ----
await p.eval(`location.hash='#garden'`); await p.sleep(1100);
await p.eval(`document.querySelector('[data-act="game"]')?.click()`); await p.sleep(1300);
const game = await p.eval(`(()=>{const bs=[...document.querySelectorAll('[data-act="match"]')];return {cards:bs.length, chars:bs.filter(b=>!b.classList.contains('rad')).length, rads:bs.filter(b=>b.classList.contains('rad')).length, texts:bs.map(b=>b.textContent.trim())};})()`);
console.log('GAME', JSON.stringify(game));
await snap('13-game', '(偏旁小侦探)');

// 完成一次游戏配对
const RAD = await p.eval(`(async()=>{const m=await import('./data.js');const map={};for(const w of m.WORDS)map[w.char]=w.radical;return JSON.stringify(map);})()`);
const radMap = JSON.parse(RAD);
for (let round = 0; round < 3; round++) {
  const cards = JSON.parse(await p.eval(`JSON.stringify([...document.querySelectorAll('[data-act="match"]')].map(b=>({t:b.textContent.trim(),rad:b.classList.contains('rad'),i:[...document.querySelectorAll('[data-act="match"]')].indexOf(b)})))`));
  const chars = cards.filter(c => !c.rad);
  for (const c of chars) {
    const want = radMap[c.t];
    const target = cards.find(x => x.rad && x.t === want);
    if (!target) continue;
    await p.eval(`document.querySelectorAll('[data-act="match"]')[${c.i}]?.click()`); await p.sleep(260);
    await p.eval(`document.querySelectorAll('[data-act="match"]')[${target.i}]?.click()`); await p.sleep(360);
  }
  const matched = await p.eval(`document.querySelectorAll('[data-act="match"].matched').length`);
  const hasNext = await p.eval(`!!document.querySelector('[data-act="nextGame"]')`);
  console.log('GAME_ROUND', JSON.stringify({ round, matched, hasNext }));
  if (!hasNext) break;
  await p.eval(`document.querySelector('[data-act="nextGame"]')?.click()`); await p.sleep(700);
}
await snap('14-game-done', '(游戏完成)');

// ---- 6. 家长页门禁 ----
await p.eval(`location.hash='#parent'`); await p.sleep(1000);
const gate = await p.eval(`!!document.querySelector('.modal-title')`);
console.log('GATE', JSON.stringify({ gateShown: gate }));
await snap('15-parent-gate', '(家长门禁)');

// ---- 7. JS 错误汇总 ----
const errs = await p.eval(`JSON.stringify(window.__errs||[])`);
console.log('JS_ERRORS', errs);
await p.close();

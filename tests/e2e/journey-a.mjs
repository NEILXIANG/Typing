// 终验 A 段：完整学习流程（欢迎页 → 摸底 → 首页 → 学习 → 结算页）
import { newPage } from './cdp.mjs';
import fs from 'node:fs/promises';
import {mkdirSync} from 'node:fs';
mkdirSync(process.env.SHOT_DIR||'/tmp/hanzi-e2e',{recursive:true});
const BASE = process.env.APP_URL || 'http://localhost:4173/';
const OUT = process.env.SHOT_DIR || '/tmp/hanzi-e2e';
await fs.mkdir(OUT, { recursive: true });
const p = await newPage(BASE);
const errs = [];
await p.goto(BASE + '#home', 1200);
await p.eval(`localStorage.clear()`);
await p.eval('location.reload()');
await p.sleep(2200);

const snap = async (n, note) => {
  await p.shot(`${OUT}/${n}.png`);
  console.log(`== ${n} ${note} ==\n` + (await p.text()).slice(0, 300).replace(/\n/g, ' | '));
};

// ---- 1. 欢迎页：验证"稍后再看"按钮存在且可点 ----
const welcome = await p.eval(`(()=>{const s=document.querySelector('.skip-later');return {hasSkip:!!s, label:s?s.textContent.trim():'', hasStart:!!document.querySelector('[data-act="welcomeNext"]')};})()`);
console.log('WELCOME', JSON.stringify(welcome));
await snap('01-welcome', '(欢迎页)');

// ---- 2. 走完引导 + 摸底 ----
for (let i = 0; i < 4; i++) {
  const ok = await p.eval(`(()=>{const b=document.querySelector('[data-act="welcomeNext"],[data-act="welcomeDone"]');if(!b)return false;b.click();return true;})()`);
  await p.sleep(900);
  if (!ok) break;
}
for (let i = 0; i < 20; i++) {
  const done = await p.eval(`!document.querySelector('[data-act="placementAnswer"]')`);
  if (done) break;
  const ok = await p.eval(`(()=>{const b=document.querySelector('[data-act="placementAnswer"][data-char]:not([data-char="?"])');if(!b)return false;b.click();return true;})()`);
  if (!ok) break;
  await p.sleep(1200);
}
await p.clickText('好的', 900);
await p.clickText('知道啦', 900);
await p.clickText('好的', 900);

// ---- 3. 首页：验证连续天数小火苗 ----
const home = await p.eval(`(()=>{const s=document.querySelector('.streak');return {hasStreak:!!s, text:s?s.textContent.trim():'', stars:JSON.parse(localStorage.getItem('cindy-island-v1')||'{}').stars};})()`);
console.log('HOME', JSON.stringify(home));
await snap('02-home', '(首页 · 连续天数)');

// ---- 4. 开始学习，完整走一遍 ----
await p.eval(`document.querySelector('[data-act="start"]')?.click()`);
await p.sleep(1800);

let sawTransfer = false, sawMatch = false, sawWrite = false, sawLearn = false;
let matchOk = false, matchCards = [];
for (let i = 0; i < 120; i++) {
  const s = JSON.parse(await p.eval(`JSON.stringify({
    ans:[...document.querySelectorAll('[data-act="answer"]')].filter(b=>!b.disabled).length,
    learn:!!document.querySelector('[data-act="learnMore"]'),
    skip:!!document.querySelector('[data-act="skipWrite"]'),
    next:!!document.querySelector('[data-act="next"]'),
    hint:!!document.querySelector('[data-act="hint"]'),
    transfer:document.body.innerText.includes('换个词，再认一次'),
    match:!!document.querySelector('[data-act="matchTask"]'),
    done:!!document.querySelector('.completion'),
    write:document.body.innerText.includes('凭记忆写一写')||document.body.innerText.includes('跟着写')
  })`));
  if (s.done) break;
  if (s.learn && !sawLearn) { sawLearn = true; await snap('03-learn', '(学习页)'); }
  if (s.write && !sawWrite) { sawWrite = true; await snap('04-write', '(写字页)'); }
  if (s.transfer && !sawTransfer) {
    sawTransfer = true;
    const opt = await p.eval(`(()=>{const b=document.querySelector('.choice.word-choice');if(!b)return null;return {html:b.innerHTML, text:b.innerText.replace(/\\n/g,'/')};})()`);
    console.log('TRANSFER_OPTION', JSON.stringify(opt));
    await snap('05-transfer', '(迁移题 · 标色+拼音)');
  }
  if (s.match && !sawMatch) {
    sawMatch = true;
    // 读出卡片文本与类型
    matchCards = JSON.parse(await p.eval(`JSON.stringify([...document.querySelectorAll('[data-act="matchTask"]')].map(b=>({t:b.textContent.trim(),rad:b.classList.contains('rad')})).map((b,i)=>({...b,i})))`));
    console.log('MATCH_CARDS', JSON.stringify(matchCards));
    await snap('06-match', '(偏旁配对任务)');
    // 用 data.js 建 char→radical 映射，按正确配对点击
    const RAD = await p.eval(`(async()=>{const m=await import('./data.js');const map={};for(const w of m.WORDS)map[w.char]=w.radical;return JSON.stringify(map);})()`);
    const radMap = JSON.parse(RAD);
    const chars = matchCards.filter(c => !c.rad);
    for (const c of chars) {
      const want = radMap[c.t];
      const target = matchCards.find(x => x.rad && x.t === want);
      if (!target) { console.log('MATCH_NO_TARGET', c.t, want); continue; }
      await p.eval(`document.querySelectorAll('[data-act="matchTask"]')[${c.i}]?.click()`);
      await p.sleep(320);
      await p.eval(`document.querySelectorAll('[data-act="matchTask"]')[${target.i}]?.click()`);
      await p.sleep(420);
    }
    const matched = await p.eval(`document.querySelectorAll('[data-act="matchTask"].matched').length`);
    const nextVisible = await p.eval(`(()=>{const n=document.querySelector('#match-next');return n?!n.hidden:false;})()`);
    console.log('MATCH_RESULT', JSON.stringify({ matched, pairs: chars.length, nextVisible }));
    matchOk = matched >= 2 && matched === chars.length * 2; // matched counts every card, chars.length only the character cards
    await snap('07-match-done', '(配对完成)');
    if (matched >= 2) { await p.eval(`document.querySelector('#match-next')?.click()`); await p.sleep(1200); continue; }
  }
  if (s.ans) { await p.eval(`[...document.querySelectorAll('[data-act="answer"]')].filter(b=>!b.disabled)[0].click()`); await p.sleep(750); continue; }
  if (s.learn) { await p.eval(`document.querySelector('[data-act="learnMore"]').click()`); await p.sleep(850); continue; }
  if (s.skip) { await p.eval(`document.querySelector('[data-act="skipWrite"]').click()`); await p.sleep(1100); continue; }
  if (s.hint) { await p.eval(`document.querySelector('[data-act="hint"]').click()`); await p.sleep(850); continue; }
  if (s.next) { await p.eval(`document.querySelector('[data-act="next"]').click()`); await p.sleep(950); continue; }
  break;
}

// ---- 5. 结算页：今天的小卡片 ----
const done = await p.eval(`(()=>{const c=document.querySelector('.day-card');return {hasCard:!!c, chars:c?[...c.querySelectorAll('.dc-char')].map(x=>x.textContent.trim()):[], stamp:!!c?.querySelector('.day-card-stamp'), body:document.body.innerText.slice(0,200)};})()`);
console.log('COMPLETE', JSON.stringify(done));
await snap('08-complete', '(结算页 · 今天的小卡片)');
console.log('SUMMARY', JSON.stringify({ sawLearn, sawWrite, sawTransfer, sawMatch, matchOk }));
await p.close();

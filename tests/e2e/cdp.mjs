// 极简 CDP 驱动：用 Node 22 内置 WebSocket，无需安装任何依赖
const CDP_HTTP = 'http://localhost:9222';

export async function newPage(url = 'about:blank') {
  const res = await fetch(`${CDP_HTTP}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  const info = await res.json();
  const ws = new WebSocket(info.webSocketDebuggerUrl);
  await new Promise((ok, bad) => { ws.onopen = ok; ws.onerror = bad; });
  let id = 0;
  const pending = new Map();
  const events = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { ok, bad } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? bad(new Error(JSON.stringify(msg.error))) : ok(msg.result);
    } else if (msg.method) events.push(msg);
  };
  const send = (method, params = {}) => new Promise((ok, bad) => {
    const mid = ++id;
    pending.set(mid, { ok, bad });
    ws.send(JSON.stringify({ id: mid, method, params }));
    setTimeout(() => { if (pending.has(mid)) { pending.delete(mid); bad(new Error('timeout ' + method)); } }, 30000);
  });
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable').catch(() => {});
  await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 1024, deviceScaleFactor: 1, mobile: false });

  const api = {
    send, events, info,
    async goto(u, wait = 1200) {
      await send('Page.navigate', { url: u });
      await api.sleep(wait);
    },
    async eval(expr) {
      const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
      if (r.exceptionDetails) throw new Error('JS 异常: ' + JSON.stringify(r.exceptionDetails.exception?.description || r.exceptionDetails.text));
      return r.result.value;
    },
    async click(selector, wait = 700) {
      const done = await api.eval(`(()=>{const el=document.querySelector(${JSON.stringify(selector)});if(!el)return 'NOT_FOUND';el.click();return 'OK';})()`);
      await api.sleep(wait);
      return done;
    },
    async clickText(text, wait = 700) {
      const done = await api.eval(`(()=>{const el=[...document.querySelectorAll('button,a')].find(e=>e.textContent.replace(/\\s+/g,'').includes(${JSON.stringify(text)}));if(!el)return 'NOT_FOUND';el.click();return el.textContent.trim().slice(0,30);})()`);
      await api.sleep(wait);
      return done;
    },
    async shot(path) {
      const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
      const fs = await import('node:fs/promises');
      await fs.writeFile(path, Buffer.from(r.data, 'base64'));
      return path;
    },
    async text() {
      return api.eval(`(()=>{const t=document.body.innerText.replace(/\\n{2,}/g,'\\n').trim();return t.slice(0,3000);})()`);
    },
    sleep: (ms) => new Promise(r => setTimeout(r, ms)),
    close: async () => { ws.close(); await fetch(`${CDP_HTTP}/json/close/${info.id}`).catch(() => {}); }
  };
  return api;
}

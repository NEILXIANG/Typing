// Offline cache: the app shell is network-first (fresh when online, cached when not);
// stroke data, illustrations, fonts and icons are cache-first because they never change.
const VERSION='island-v1';
const SHELL=['./','index.html','app.js','core.js','data.js','extra-data.js','strokes.js','life.js','audio.js','scenes.js','styles.css','manifest.webmanifest','assets/hanzi-writer.min.js','assets/island.svg','assets/island-icon.svg','assets/fonts/island-kai.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin)return;
  const isAsset=url.pathname.includes('/assets/');
  e.respondWith(isAsset
    ?caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok)caches.open(VERSION).then(c=>c.put(e.request,res.clone()));return res;}))
    :fetch(e.request).then(res=>{if(res.ok)caches.open(VERSION).then(c=>c.put(e.request,res.clone()));return res;}).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('index.html'))));
});

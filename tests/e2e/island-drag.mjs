import { newPage } from './cdp.mjs';
const B=process.env.APP_URL||'http://localhost:4173/';
const p=await newPage(B);
await p.send('Emulation.setDeviceMetricsOverride',{width:1366,height:1024,deviceScaleFactor:1,mobile:false});
await p.goto(B+'#garden',1500);
await p.eval(`(()=>{const K='cindy-island-v1';const s=JSON.parse(localStorage.getItem(K)||'{}');s.version=1;s.settings=Object.assign({target:3,writeTarget:1,level:'auto',musicVolume:.12,name:'Cindy'},s.settings||{});s.onboarded=true;s.placement={complete:true,skipped:true,day:'2026-10-25'};s.tier=1;s.records={};s.days={'2026-10-25':{newChars:[],reviewChars:[],written:[],points:0}};s.sessions=[];s.stars=60;s.owned=['flower'];s.decor=['flower'];s.badges={};s.letters={};s.active=null;s.confusions=[];s.family={};s.writing={};s.life={};s.decorPos={};localStorage.setItem(K,JSON.stringify(s));return 1;})()`);
await p.eval('location.reload()'); await p.sleep(2200);
await p.goto(B+'#garden',2000);
console.log(await p.eval(`(()=>{
 const el=document.querySelector('.garden .decoration[data-decor]');
 if(!el)return 'NO_DECOR';
 const art=el.parentElement;
 const artRect=art.getBoundingClientRect();
 const elRect=el.getBoundingClientRect();
 const svg=document.querySelector('.garden-art img').getBoundingClientRect();
 const fire=(t,x,y,target)=>(target||document).dispatchEvent(new PointerEvent(t,{bubbles:true,cancelable:true,clientX:x,clientY:y,pointerId:1,pointerType:'mouse',isPrimary:true,button:0,buttons:t==='pointerup'?0:1}));
 const cx=elRect.left+elRect.width/2, cy=elRect.top+elRect.height/2;
 const tx=artRect.left+artRect.width*0.5, ty=artRect.top+artRect.height*0.75;
 fire('pointerdown',cx,cy,el); fire('pointermove',tx,ty,el); fire('pointerup',tx,ty,document);
 return JSON.stringify({parentIsGardenArt:art.classList.contains('garden-art'),
   artRect:{x:Math.round(artRect.x),y:Math.round(artRect.y),w:Math.round(artRect.width),h:Math.round(artRect.height)},
   svgRect:{x:Math.round(svg.x),y:Math.round(svg.y),w:Math.round(svg.width),h:Math.round(svg.height)},
   aligned:Math.abs(artRect.x-svg.x)<2&&Math.abs(artRect.width-svg.width)<2},null,1);})()`));
await p.sleep(500);
console.log('decorPos 落点:', await p.eval(`JSON.stringify(JSON.parse(localStorage.getItem('cindy-island-v1')).decorPos)`));
const fs=await import('node:fs');await p.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}).then(r=>fs.writeFileSync('/tmp/final/61-drag.png',Buffer.from(r.data,'base64')));
await p.close();

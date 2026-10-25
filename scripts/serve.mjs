import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(fileURLToPath(new URL('../public/',import.meta.url)));
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.mp3':'audio/mpeg'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'),relative=decodeURIComponent(url.pathname);const target=path.resolve(root,'.'+relative);if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}const info=await stat(target);const file=info.isDirectory()?path.join(target,'index.html'):target;const data=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Not found');}}).listen({port,host:'::',ipv6Only:false},()=>{console.log(`Cindy’s island: http://localhost:${port}\nSame Wi-Fi tablet: http://<your-computer-LAN-IP>:${port}`);});

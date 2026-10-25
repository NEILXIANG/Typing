export const STORAGE_KEY='cindy-island-v1';
export const INTERVALS=[1,3,7,14,30];
export function today(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function addDays(day,n){const d=new Date(day+'T12:00:00');d.setDate(d.getDate()+n);return today(d);}
export function freshState(){return {version:1,settings:{target:3,writeTarget:1,level:'auto',musicVolume:.12},placement:null,tier:1,records:{},days:{},sessions:[],stars:0,owned:[],decor:[],active:null,confusions:[],family:{},writing:{},life:{}};}
export function getDay(state,day=today()){return state.days[day]||{newChars:[],reviewChars:[],written:[],points:0};}
export function dueWords(state,words,day=today()){return words.filter(w=>state.records[w.char]?.due<=day&&state.records[w.char]?.lastDay!==day).sort((a,b)=>state.records[a.char].due.localeCompare(state.records[b.char].due)||state.records[b.char].mistakes-state.records[a.char].mistakes);}
export function tierFor(state){return state.settings.level==='g1'?Math.min(state.tier,2):state.settings.level==='g2'?3:state.tier;}
export function createPlan(state,words,day=today()){
 const d=getDay(state,day), count=Math.max(0,(d.target??state.settings.target)-d.newChars.length), tier=tierFor(state);
 let available=words.filter(w=>!state.records[w.char]);
 if(state.settings.level==='g1')available=available.filter(w=>w.grade===1);
 if(state.settings.level==='g2')available=available.filter(w=>w.grade===2);
 available.sort((a,b)=>Math.abs(a.tier-tier)-Math.abs(b.tier-tier)||a.unit-b.unit);
 const fresh=available.slice(0,count);
 // Strong readers still check one earlier, untested foundation character each day.
 if(state.settings.level==='auto'&&tier===3&&fresh.length>1){const foundation=available.find(w=>w.grade===1&&!fresh.includes(w));if(foundation)fresh[fresh.length-1]=foundation;}
 const reviews=dueWords(state,words,day).slice(0,5);
 const writingLeft=Math.max(0,(d.writeTarget??state.settings.writeTarget)-d.written.length);
 // Writing runs on its own track: characters left unfinished on an earlier day come back first.
 const writeChars=Object.values(state.writing||{}).filter(r=>r.pending&&r.lastDay!==day&&state.records[r.char]).sort((a,b)=>a.lastDay.localeCompare(b.lastDay)).slice(0,writingLeft).map(r=>r.char);
 for(const w of [...fresh,...reviews]){if(writeChars.length>=writingLeft)break;if(!writeChars.includes(w.char))writeChars.push(w.char);}
 return {day,newChars:fresh.map(w=>w.char),reviewChars:reviews.map(w=>w.char),writeChars};
}
export function placementTier(correct,total){return correct/total>=.8?3:correct/total>=.5?2:1;}
export function placementPick(words,tier,used,random=Math.random){return shuffle(words.filter(w=>w.tier===tier&&!used.includes(w.char)),random)[0]?.char;}
export function placementResult(answers){const ok=t=>answers.filter(a=>a.tier===t&&a.correct).length;return ok(3)>=2?3:ok(2)>=2||ok(3)>=1?2:1;}
// A character recognised during placement skips the first lesson but must be confirmed by a review tomorrow.
export function recordDiagnosed(state,char,day=today()){if(state.records[char])return false;state.records[char]={char,firstDay:day,cleanDays:[],strength:1,writeCount:0,mistakes:0,lastDay:day,due:addDays(day,1),diagnosed:true};return true;}
export function recordRecognition(state,char,{clean,mistakes=0,wasNew=false},day=today()){
 let r=state.records[char]||{char,firstDay:day,cleanDays:[],strength:0,writeCount:0,mistakes:0,lastDay:null,due:day};
 if(r.lastDay===day)return false;
 r.mistakes+=mistakes;r.lastDay=day;
 if(clean){if(!r.cleanDays.includes(day))r.cleanDays.push(day);r.strength=Math.min(r.strength+1,5);}else{r.strength=0;}
 r.due=addDays(day,clean?INTERVALS[Math.max(0,r.strength-1)]:1);state.records[char]=r;
 state.days[day]??={newChars:[],reviewChars:[],written:[],points:0};
 const list=wasNew?state.days[day].newChars:state.days[day].reviewChars;if(!list.includes(char))list.push(char);return true;
}
export const WRITE_LEVELS=['blind','trace','guided','watch'];
export function recordWriting(state,char,{level='trace',completed=false,strokeErrors={},ms=0,assigned=false,downshift=false},day=today()){
 state.writing??={};const r=state.writing[char]||{char,attempts:0,traceDays:[],blindDays:[],strokeErrors:{},ms:0,downshifts:0,pending:false,lastDay:day};
 r.attempts++;r.lastDay=day;r.ms=Math.min(r.ms+Math.max(0,Number(ms)||0),36e6);if(downshift)r.downshifts++;
 for(const [k,v] of Object.entries(strokeErrors)){const i=Number(k);if(Number.isInteger(i)&&i>=0&&i<64)r.strokeErrors[i]=(r.strokeErrors[i]||0)+Math.max(0,Number(v)||0);}
 const solid=completed&&(level==='trace'||level==='blind');
 if(solid){const list=level==='blind'?r.blindDays:r.traceDays;if(!list.includes(day))list.push(day);r.pending=false;}else if(assigned)r.pending=true;
 state.writing[char]=r;return r;
}
// Tracing on one day, then writing without the outline on a later day, separates copying from remembering.
export function writeModeFor(state,char,day=today()){return state.writing?.[char]?.traceDays.some(d=>d<day)?'blind':'trace';}
export function writeStageOf(r){return !r?'未练写':r.blindDays.length>=2?'写得牢':r.blindDays.length?'能独立写':r.traceDays.length?'描红完成':'练习中';}
export function stageOf(r){return !r?'未探索':r.strength>=3&&r.cleanDays.length>=3?'记得牢':r.strength>=2&&r.cleanDays.length>=2?'在长大':'小芽';}
export function completeSession(state,session,day=today()){
 if(state.sessions.some(s=>s.id===session.id))return null;
 let earned=0,independent=0,attempts=0;const used=[];
 for(const char of [...session.plan.reviewChars,...session.plan.newChars]){
  const p=session.results[char];if(!p?.recognized||!p?.transfer)continue;
  const clean=p.mistakes===0&&!p.hinted;
  if(recordRecognition(state,char,{clean,mistakes:p.mistakes,wasNew:session.plan.newChars.includes(char)},day)){
   earned+=clean?3:1;used.push(char);attempts++;if(clean)independent++;
   if(p.written){state.records[char].writeCount++;if(!state.days[day].written.includes(char)){state.days[day].written.push(char);earned+=2;}}
  }
 }
 state.days[day]??={newChars:[],reviewChars:[],written:[],points:0};
 for(const char of session.plan.writeChars||[]){if(used.includes(char)||!session.results[char]?.written||state.days[day].written.includes(char))continue;state.days[day].written.push(char);earned+=2;}
 const score=attempts?Math.round(100*independent/attempts):0;
 state.stars+=earned;state.days[day]??={newChars:[],reviewChars:[],written:[],points:0};state.days[day].points+=earned;
 const result={id:session.id,day,earned,score,independent,total:attempts,chars:used,written:[...new Set([...used,...(session.plan.writeChars||[])])].filter(c=>session.results[c]?.written).length,help:Object.values(session.results).filter(p=>p.hinted).length};
 state.sessions.push(result);state.sessions=state.sessions.slice(-180);state.active=null;
 const recent=state.sessions.filter(s=>s.total>0).slice(-2);
 if(state.settings.level==='auto'&&recent.length===2&&recent.every(s=>s.score>=85))state.tier=Math.min(3,state.tier+1);
 if(score<50&&attempts>=3&&state.settings.level==='auto')state.tier=Math.max(1,state.tier-1);
 return result;
}
export function shuffle(a,random=Math.random){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
const SIMILAR={人:'入八大',口:'日目回',手:'毛于牛',足:'走是定',耳:'目自日',目:'日自白',心:'必少小',头:'大买太',日:'目白田',月:'用目日',水:'木永小',火:'人灭大',山:'出凶仙',石:'右后古',田:'由甲申',土:'士干王',一:'二三十',二:'三一工',三:'王二丰',四:'西回田',五:'互王工',六:'穴八大',七:'匕十九',八:'人入六',大:'太天犬',小:'少水木',多:'夕名各',少:'小步沙',上:'下止土',下:'上卜不',左:'右在工',右:'左石后',木:'本术禾',禾:'木米未',米:'来木禾',竹:'个节竿',花:'化草华',草:'早花苗',叶:'吐汁什',果:'里课棵',天:'夫大无',地:'他池也',风:'凤凡几',雨:'两而雪',云:'去运元',电:'申田由',星:'是早生',光:'先兴尖',妈:'吗码蚂',爸:'爬爷巴',家:'冢象安',爱:'受友爰',我:'找成钱',你:'他您作',他:'她地池',她:'他好妈',吃:'气乞汽',喝:'渴唱揭',走:'足起赶',跑:'抱泡炮',看:'着春目',听:'叶诉折',说:'悦脱税',笑:'笔笛笼',森:'林木焚',林:'森休材',杨:'扬场汤',柳:'迎卯抑',松:'公枫柏',晴:'清睛情',清:'晴睛请',睛:'晴清情',请:'清情晴',情:'晴清睛',暖:'缓援爱',冷:'铃玲领',雪:'雷雨寻',雾:'雪雷需',雷:'雪雾电',露:'路霜雾',冰:'水冷凉',季:'李秀香',温:'湿渴汤',凉:'惊京冷',秋:'伙和种',猫:'描苗锚',狗:'句拘钩',猪:'诸著堵',猴:'候喉侯',狐:'孤瓜弧',狸:'理里埋',狮:'师帅筛',狼:'狠良浪',蝶:'碟谍蝴',蛙:'娃洼挂',蚁:'议仪义',蜂:'锋峰逢',窗:'空穿穷',户:'尸卢声',教:'数放故',室:'宝定至',课:'棵颗果',桌:'卓掉棹',椅:'奇骑倚',铅:'沿船钒',笔:'毛笑笛',纸:'低底抵',操:'澡燥噪',场:'扬汤杨',饭:'板反返',饱:'抱跑泡',菜:'采彩茶',味:'未妹昧',甜:'甘舌恬',糖:'塘唐搪',蛋:'虫蚕旦',糕:'羔羚精',烧:'浇绕晓',洗:'先选冼',净:'静争挣',碗:'腕宛婉',愿:'原顾源',望:'忘旺王',喜:'吉善嘉',欢:'吹饮次',惊:'凉京景',忙:'芒忘亡',怕:'拍伯白',谢:'射榭躲',礼:'补扎孔',助:'组且姐',信:'言住位',湖:'糊胡蝴',海:'梅每悔',洋:'样羊祥',湾:'弯变恋',岛:'鸟乌鸣',桥:'乔侨娇',船:'沿铅般',岸:'岩崖炭',景:'京惊晾',游:'流旅族',路:'洛露各',旅:'族旋游',童:'重章量',话:'活括舌',故:'放做古',事:'吏史更',梦:'林禁楚',精:'睛晴请',灵:'寻录灭',宝:'实玉定',贝:'见页负',勇:'男甬涌',敢:'取散教',胜:'姓性生',眼:'很根银',观:'现欢规',察:'祭擦蔡',植:'值直置',物:'牧牺特',根:'很跟眼',芽:'牙呀穿',泉:'白水原',溪:'奚蹊鸡',认:'从队让',真:'直具填',读:'卖续实',写:'与马鸟',练:'炼拣栋',习:'刁羽刃',思:'恩想息',考:'老孝者',记:'纪己计',忘:'忙亡妄',坚:'竖紧贤',持:'待诗特'};
export function optionsFor(w,words,random=Math.random){const candidates=[...(SIMILAR[w.char]||''),...shuffle(words.filter(x=>x.radical===w.radical).map(x=>x.char),random),...words.map(x=>x.char)];return shuffle([w.char,...[...new Set(candidates)].filter(x=>x!==w.char).slice(0,3)],random);}
export function validateBackup(raw,words){
 if(!raw||raw.version!==1||typeof raw.records!=='object'||Array.isArray(raw.records)||!raw.settings)throw Error('这不是有效的小岛进度文件。');
 const valid=new Set(words.map(w=>w.char));const s=freshState();
 s.settings.target=[3,4,5].includes(raw.settings.target)?raw.settings.target:3;s.settings.writeTarget=[1,2].includes(raw.settings.writeTarget)?raw.settings.writeTarget:1;s.settings.level=['auto','g1','g2'].includes(raw.settings.level)?raw.settings.level:'auto';
 s.placement=raw.placement&&typeof raw.placement==='object'?{complete:true}:null;s.tier=[1,2,3].includes(raw.tier)?raw.tier:1;
 const date=/^\d{4}-\d{2}-\d{2}$/,num=(v,max)=>Math.max(0,Math.min(max,Math.round(Number(v)||0))),days=a=>Array.isArray(a)?[...new Set(a.filter(x=>date.test(x)))].slice(-180):[];
 for(const [c,r] of Object.entries(raw.records)){if(!valid.has(c)||!r||!date.test(r.due)||!date.test(r.lastDay))continue;s.records[c]={char:c,firstDay:date.test(r.firstDay)?r.firstDay:r.lastDay,lastDay:r.lastDay,due:r.due,cleanDays:Array.isArray(r.cleanDays)?[...new Set(r.cleanDays.filter(x=>date.test(x)))].slice(-180):[],strength:Math.max(0,Math.min(5,Number(r.strength)||0)),writeCount:Math.max(0,Math.min(10000,Number(r.writeCount)||0)),mistakes:Math.max(0,Math.min(10000,Number(r.mistakes)||0)),...(r.diagnosed===true?{diagnosed:true}:{})};}
 if(raw.days&&typeof raw.days==='object')for(const [d,r] of Object.entries(raw.days)){if(date.test(d)&&r)s.days[d]={newChars:Array.isArray(r.newChars)?r.newChars.filter(x=>valid.has(x)):[],reviewChars:Array.isArray(r.reviewChars)?r.reviewChars.filter(x=>valid.has(x)):[],written:Array.isArray(r.written)?r.written.filter(x=>valid.has(x)):[],points:Math.max(0,Number(r.points)||0),...([3,4,5].includes(r.target)?{target:r.target}:{}),...([1,2].includes(r.writeTarget)?{writeTarget:r.writeTarget}:{})};}
 s.stars=Math.max(0,Math.min(100000,Number(raw.stars)||0));s.owned=Array.isArray(raw.owned)?raw.owned.filter(x=>['flower','kite','rainbow','cat','balloon','lighthouse'].includes(x)):[];s.decor=Array.isArray(raw.decor)?raw.decor.filter(x=>s.owned.includes(x)):[];
 if(Array.isArray(raw.sessions))s.sessions=raw.sessions.filter(r=>r&&typeof r.id==='string'&&date.test(r.day)&&Number.isFinite(r.score)&&Number.isFinite(r.total)&&Number.isFinite(r.earned)).slice(-180).map(r=>({id:r.id.slice(0,40),day:r.day,earned:num(r.earned,1000),score:num(r.score,100),independent:num(r.independent,100),total:num(r.total,100),written:num(r.written,100),help:num(r.help,100),chars:Array.isArray(r.chars)?r.chars.filter(c=>valid.has(c)):[]}));
 if(raw.family&&typeof raw.family==='object')for(const [k,v] of Object.entries(raw.family)){if(date.test(k))s.family[k]=!!v;}
 if(raw.writing&&typeof raw.writing==='object')for(const [c,r] of Object.entries(raw.writing)){if(!valid.has(c)||!r||!date.test(r.lastDay))continue;const strokeErrors={};if(r.strokeErrors&&typeof r.strokeErrors==='object')for(const [k,v] of Object.entries(r.strokeErrors)){const i=Number(k);if(Number.isInteger(i)&&i>=0&&i<64)strokeErrors[i]=num(v,10000);}s.writing[c]={char:c,attempts:num(r.attempts,10000),traceDays:days(r.traceDays),blindDays:days(r.blindDays),strokeErrors,ms:num(r.ms,36e6),downshifts:num(r.downshifts,10000),pending:r.pending===true,lastDay:r.lastDay};}
 if(raw.life&&typeof raw.life==='object')for(const [k,v] of Object.entries(raw.life)){if(date.test(k)&&v&&/^[a-z]{2,12}$/.test(v.id)&&valid.has(v.char))s.life[k]={id:v.id,char:v.char};}
 return s;
}

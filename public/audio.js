let context,master,fx,timer,enabled=false,step=0,volume=.12,speaking=false;
function ensureContext(){if(context)return true;const A=window.AudioContext||window.webkitAudioContext;if(!A)return false;context=new A();master=context.createGain();master.gain.value=0;master.connect(context.destination);fx=context.createGain();fx.gain.value=.5;fx.connect(context.destination);return true;}
const melody=[0,4,7,12,7,4,2,7,9,7,4,2,0,4,7,14,12,9,7,4,2,4,7,2];
function tone(midi,when,length,gain){const o=context.createOscillator(),g=context.createGain();o.type='sine';o.frequency.value=440*Math.pow(2,(midi-69)/12);g.gain.setValueAtTime(0,when);g.gain.linearRampToValueAtTime(gain,when+.08);g.gain.exponentialRampToValueAtTime(.0001,when+length);o.connect(g);g.connect(master);o.start(when);o.stop(when+length+.05);}
function tick(){if(!enabled||document.hidden||!context||context.state!=='running')return;const t=context.currentTime; tone(60+melody[step%melody.length],t,2.9,.18);if(step%4===0){tone(48+(step%8===0?0:5),t,4,.12);tone(55+(step%8===0?0:5),t+.12,3.6,.06);}step++;}
export async function toggleMusic(){if(!ensureContext())throw Error('这个浏览器暂不支持背景音乐。');enabled=!enabled;if(enabled){await context.resume();master.gain.setTargetAtTime(volume,context.currentTime,.3);tick();timer=setInterval(tick,1400);}else{clearInterval(timer);master.gain.setTargetAtTime(0,context.currentTime,.2);}return enabled;}
export function setVolume(v){volume=v;if(master)master.gain.setTargetAtTime(enabled?(speaking?v*.12:v):0,context.currentTime,.15);}
export function musicOn(){return enabled;}
export function speak(text,onUnavailable=()=>{},opts={}){
 if(!('speechSynthesis'in window)){onUnavailable();return;}
 window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-CN';u.rate=opts.rate||.78;u.pitch=opts.pitch||1;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.voiceURI===preferredVoice)||voices.find(v=>/^zh[-_]CN/i.test(v.lang))||voices.find(v=>/^zh/i.test(v.lang));if(voice)u.voice=voice;
 speaking=true;setVolume(volume);const restore=()=>{speaking=false;setVolume(volume);};u.onend=restore;u.onerror=e=>{restore();if(!['interrupted','canceled'].includes(e.error))onUnavailable();};window.speechSynthesis.speak(u);
}
export function stopSpeech(){window.speechSynthesis?.cancel();speaking=false;setVolume(volume);}
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopSpeech();context?.suspend();}else if(enabled)context?.resume();});
let preferredVoice='';
export function setVoice(uri){preferredVoice=uri;}
export function chineseVoices(){return window.speechSynthesis?.getVoices().filter(v=>/^zh|^cmn/i.test(v.lang))||[];}
// Short effect sounds for a correct answer or a finished character; independent of the music switch.
export function chime(kind='ok'){if(!ensureContext())return;context.resume?.();const notes=kind==='done'?[67,72,76,79]:kind==='ok'?[72,79]:[69],t=context.currentTime;notes.forEach((n,i)=>{const o=context.createOscillator(),g=context.createGain();o.type='triangle';o.frequency.value=440*Math.pow(2,(n-69)/12);g.gain.setValueAtTime(0,t+i*.11);g.gain.linearRampToValueAtTime(.35,t+i*.11+.02);g.gain.exponentialRampToValueAtTime(.001,t+i*.11+.35);o.connect(g);g.connect(fx);o.start(t+i*.11);o.stop(t+i*.11+.4);});}

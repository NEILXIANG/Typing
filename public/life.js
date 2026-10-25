// Life quests connect learned characters to places a child abroad actually visits.
// Each quest only uses characters she has already met; nothing here earns stars.
const SPOTS={门:'房门',窗:'窗户',书:'书架'};
export const LIFE_QUESTS=[
{id:'market',place:'超市',icon:'🛒',chars:'米面菜鱼鸡蛋奶果',task:c=>`在超市的亚洲食品货架或家里的包装袋上，找一找「${c}」。找到了，指给家人看。`},
{id:'menu',place:'中餐馆',icon:'🥢',chars:'饭面鸡鱼菜',task:c=>`下次看中餐馆菜单或外卖单时，找找「${c}」，再把那道菜名读出来。`},
{id:'notes',place:'便利贴',icon:'📝',chars:'门窗书',task:c=>`把「${c}」写在便利贴上，贴到家里的${SPOTS[c]}上。过几天看看还认不认得。`},
{id:'park',place:'公园',icon:'🌳',chars:'花草木山日月',task:(c,w)=>`去公园或小区散步时，找一样能用“${w.word}”来说的东西，用它说一句话。`},
{id:'signs',place:'标识',icon:'🚪',chars:'出口开关上下左右男女大小中',task:c=>`在机场、唐人街或中文学校的中文标识上找「${c}」。没找到也没关系，画一个带「${c}」的小标识。`},
{id:'call',place:'视频',icon:'📱',chars:'爸妈爷奶家人',task:(c,w)=>`和爷爷奶奶视频时，用“${w.word}”说一句话，请他们猜猜你今天认识了哪个字。`},
{id:'festival',place:'节日',icon:'🏮',chars:'春月红',task:c=>`看看春联、红包或月饼盒，找找「${c}」藏在哪里。`},
{id:'road',place:'路上',icon:'🚗',chars:'车站东西南北',task:(c,w)=>`坐车时看看地图或路牌，用“${w.word}”说一说你们往哪里走。`}
];
export function lifeQuest(state,words,day){
 const byChar=new Map(words.map(w=>[w.char,w])),fresh=state.days[day]?.newChars||[];
 const options=LIFE_QUESTS.flatMap(q=>[...q.chars].filter(c=>state.records[c]&&byChar.has(c)).map(c=>({q,c})));
 const preferred=options.filter(o=>fresh.includes(o.c)),pool=preferred.length?preferred:options;
 // The same quest stays on screen all day, so reloading cannot reroll an easier one.
 const seed=[...day].reduce((n,ch)=>(n*31+ch.charCodeAt(0))>>>0,7);
 if(pool.length){const {q,c}=pool[seed%pool.length];return {id:q.id,place:q.place,icon:q.icon,char:c,text:q.task(c,byChar.get(c))};}
 const w=byChar.get(fresh.at(-1)||Object.keys(state.records).at(-1));
 return w?{id:'story',place:'讲故事',icon:'🏠',char:w.char,text:`用“${w.word}”给家人讲一句今天的小故事。`}:{id:'story',place:'讲故事',icon:'🏠',char:'木',text:'在家里找一样木头做的东西，用“木”说一句话。'};
}

/* Cindy 汉字小岛 · 单文件脚本，供 offline.html 使用 */
(()=>{
"use strict";

/* extra-data.js */
// Additional hand-authored vocabulary; the curriculum assembler deduplicates by character.
// char | pinyin | first word | transfer word | dictionary radical | original example sentence
const EXTRA_GROUPS=[
{name:'句子里的小帮手',grade:1,icon:'💬',rows:`的|de|我的|红色的|白|这是红色的书包。
了|le|好了|学会了|乛|我学会了自己整理书包。
着|zhe|看着|听着|目|我认真听着老师讲故事。
在|zài|在家|正在|土|小猫正在晒太阳。
这|zhè|这里|这个|辶|这个苹果又大又红。
那|nà|那里|那个|阝|那个小朋友是我的好朋友。
哪|nǎ|哪里|哪个|口|你最喜欢哪个故事？
什|shén|什么|为什么|亻|你知道叶子为什么会变黄吗？
么|me|什么|怎么|丿|这个字怎么读？
怎|zěn|怎么|怎样|心|你想怎样装扮小岛？
样|yàng|样子|一样|木|这两朵花的颜色一样。
些|xiē|一些|这些|止|这些书都是我喜欢的。
吗|ma|好吗|是吗|口|这本书是你的，是吗？
呢|ne|你呢|哪里呢|口|小猫躲在哪里呢？
吧|ba|好吧|走吧|口|天气真好，我们走吧。
啊|a|好啊|真好啊|口|能和朋友一起读书，真好啊！
又|yòu|又来|又大又圆|又|今晚的月亮又大又圆。
两|liǎng|两个|两边|一|小路两边都开满了花。
太|tài|太阳|太好了|大|我们终于找到了，太好了！
阳|yáng|阳光|太阳|阝|太阳从山后升起来。
亮|liàng|月亮|明亮|亠|我们的教室很明亮。
圆|yuán|圆形|团圆|囗|中秋节，一家人团圆了。
形|xíng|形状|外形|彡|这片叶子的外形像一把小扇子。
许|xǔ|许多|也许|讠|也许明天会有彩虹。
还|hái|还有|还是|亻|你想看故事书，还是画画？
点|diǎn|雨点|点头|灬|听见我的请求，妈妈笑着点头。
对|duì|对面|不对|寸|这个字写得不对，我想再试一次。
把|bǎ|把手|一把|扌|我带了一把雨伞。
它|tā|它们|它的|宀|小兔住进了它的新家。
就|jiù|就是|这就|尢|我这就把书包整理好。`},

{name:'时间与数字',grade:1,icon:'🕰️',rows:`九|jiǔ|九个|九月|丿|九月，我们开学了。
十|shí|十个|十天|十|小种子十天后长出了叶子。
百|bǎi|一百|百花|白|春天到了，百花盛开。
千|qiān|一千|千万|丿|走路时千万要看清前方。
万|wàn|一万|万里|一|晴空万里，适合出去散步。
零|líng|零食|零下|雨|冬天的气温降到了零下。
个|gè|一个|几个|人|盘子里还有几个苹果？
只|zhī|一只|两只|口|树上站着两只小鸟。
条|tiáo|一条|面条|木|今天中午吃面条。
本|běn|书本|本子|木|我在本子上写字。
张|zhāng|一张|张开|弓|小鸟张开翅膀。
双|shuāng|一双|双手|又|我用双手捧起书。
片|piàn|一片|叶片|片|叶片上有小水珠。
颗|kē|一颗|颗粒|页|沙子的颗粒很小。
块|kuài|一块|石块|土|路边有几块石块。
朵|duǒ|一朵|花朵|木|花朵在阳光下开放。
年|nián|新年|今年|干|今年我学会了骑车。
岁|suì|岁月|八岁|山|Cindy 今年八岁。
时|shí|时间|小时|日|我们散步用了一个小时。
分|fēn|分钟|分开|刀|把两本书分开放。
秒|miǎo|秒针|几秒|禾|等几秒，灯就亮了。
今|jīn|今天|今年|人|今年的春天很暖和。
明|míng|明天|明亮|日|我们的教室宽敞明亮。
昨|zuó|昨天|昨日|日|昨日的小雨让花草喝饱了水。
早|zǎo|早上|早安|日|早上见到妈妈，我说早安。
晚|wǎn|晚上|晚饭|日|我们一起准备晚饭。
午|wǔ|中午|午后|十|午后，我们到公园散步。
夜|yè|夜晚|黑夜|夕|黑夜里亮起了小灯。
前|qián|前面|从前|刂|从前，山里住着一只小兔。
后|hòu|后面|以后|口|吃饭以后记得漱口。
先|xiān|先生|先后|儿|大家先后走进教室。
再|zài|再见|再来|冂|这次没写好，我们再来一次。
已|yǐ|已经|早已|己|小鸟早已飞回了家。
经|jīng|已经|经过|纟|上学时，我们经过一座小桥。
过|guò|过去|过年|辶|过年时，家人聚在一起。
每|měi|每天|每次|母|每次读书，我都会坐端正。
次|cì|一次|下次|欠|下次我们再一起去图书馆。
半|bàn|一半|半天|十|我们在公园玩了半天。
久|jiǔ|很久|长久|丿|我希望这份友谊能长久。
期|qī|星期|日期|月|请在日记上写好日期。`},
{name:'家人与朋友',grade:1,icon:'👪',rows:`爷|yé|爷爷|爷孙|父|爷孙俩一起下棋。
奶|nǎi|奶奶|牛奶|女|早餐时，我喝了一杯牛奶。
哥|gē|哥哥|大哥|口|大哥帮我把书拿下来。
姐|jiě|姐姐|大姐|女|邻居大姐教我折纸。
弟|dì|弟弟|兄弟|弓|兄弟俩一起踢球。
妹|mèi|妹妹|姐妹|女|姐妹俩一起唱歌。
父|fù|父亲|父母|父|我帮父母做家务。
母|mǔ|母亲|母校|母|爸爸带我参观他的母校。
亲|qīn|亲人|亲切|立|老师的笑容很亲切。
子|zǐ|孩子|儿子|子|爷爷和儿子一起散步。
儿|ér|儿童|女儿|儿|女儿给妈妈送了一朵花。
女|nǚ|女孩|女生|女|班里的女生和男生一起打球。
男|nán|男孩|男生|田|男生们正在整理书包。
孩|hái|孩子|小孩|子|小孩也能帮忙收拾桌子。
们|men|我们|人们|亻|人们在广场上散步。
友|yǒu|朋友|友好|又|大家友好地打了招呼。
朋|péng|朋友|亲朋|月|节日里，亲朋聚在一起。
同|tóng|同学|相同|冂|这两朵花的颜色相同。
学|xué|学校|学习|子|我喜欢和朋友一起学习。
校|xiào|学校|校园|木|校园里种着许多树。
师|shī|老师|师生|巾|师生一起整理教室。
生|shēng|生日|生活|生|我发现生活里有许多汉字。
老|lǎo|老师|老人|耂|我们帮助老人过马路。
少|shào|少年|少女|小|少女在花园里看书。
众|zhòng|众人|观众|人|观众为精彩的表演鼓掌。
队|duì|队伍|排队|阝|上车前要排队。
伴|bàn|伙伴|同伴|亻|我和同伴一起完成任务。
伙|huǒ|伙伴|大伙|亻|大伙一起把院子打扫干净。
客|kè|客人|做客|宀|周末，我去朋友家做客。
邻|lín|邻居|邻里|阝|邻里之间要互相帮助。
居|jū|居住|居民|尸|小区居民一起种树。
乡|xiāng|家乡|乡村|乙|乡村的小路旁开满了花。
您|nín|您好|您早|亻|见到老师，我说您早。
谁|shuí|谁的|是谁|讠|是谁把花盆摆好了？
名|míng|名字|姓名|口|请在本子上写下姓名。
姓|xìng|姓名|百姓|女|从前，百姓在河边生活。
性|xìng|性格|个性|忄|每个人都有自己的个性。
别|bié|别人|分别|刂|我们把书和本子分别放好。
自|zì|自己|自然|自|大自然里有许多秘密。
己|jǐ|自己|知己|己|能互相理解的朋友叫知己。`},
{name:'教室新发现',grade:1,icon:'📚',rows:`书|shū|书本|书包|乛|我把课本装进书包。
包|bāo|书包|面包|勹|早餐有牛奶和面包。
文|wén|文字|中文|文|我喜欢用中文讲故事。
字|zì|汉字|名字|宀|我会写自己的名字。
汉|hàn|汉字|汉语|氵|我用汉语和家人聊天。
语|yǔ|语文|词语|讠|我把新学的词语读了两遍。
言|yán|语言|发言|言|课堂上，我举手发言。
词|cí|词语|歌词|讠|这首歌的歌词很有趣。
句|jù|句子|造句|勹|我用新学的词语造句。
问|wèn|问题|问好|门|见到邻居要主动问好。
答|dá|回答|答案|竹|我在书里找到了答案。
题|tí|题目|难题|页|我和朋友一起想办法解决难题。
页|yè|书页|页面|页|这个页面里有许多汉字。
画|huà|画画|图画|田|这幅图画里有小猫和花。
图|tú|图画|地图|囗|我们看地图寻找公园。
色|sè|颜色|彩色|色|我用彩色的笔画彩虹。
红|hóng|红色|红旗|纟|操场上升起了红旗。
黄|huáng|黄色|黄豆|黄|我把黄豆种在花盆里。
蓝|lán|蓝色|蓝天|艹|白云在蓝天上飘着。
绿|lǜ|绿色|绿叶|纟|花朵旁边长着绿叶。
白|bái|白色|白天|白|白天，我和朋友在公园玩。
黑|hēi|黑色|黑板|黑|老师在黑板上写字。
紫|zǐ|紫色|紫菜|糸|妈妈煮了一碗紫菜汤。
彩|cǎi|彩虹|彩笔|彡|我用彩笔画出今天的天空。
歌|gē|唱歌|歌声|欠|教室里传来了歌声。
唱|chàng|唱歌|合唱|口|我们参加了学校的合唱活动。
音|yīn|声音|音乐|音|轻柔的音乐让人放松。
乐|lè|快乐|乐园|丿|这里是孩子们的乐园。
数|shù|数学|数字|攵|我认识了新的数字。
算|suàn|计算|打算|竹|周末你打算做什么？
加|jiā|加法|参加|力|我想参加读书活动。
减|jiǎn|减法|减少|冫|我们要减少浪费。
等|děng|等待|等候|竹|请在门外安静等候。
于|yú|于是|大于|二|十这个数大于九。
正|zhèng|正确|正好|止|这双鞋正好合脚。
错|cuò|错误|认错|钅|我把两个相似的字认错了。
改|gǎi|改正|改变|攵|春天改变了小山的颜色。
成|chéng|成功|完成|戈|我认真完成了今天的任务。
功|gōng|成功|功课|力|我每天按时做功课。
课|kè|课本|课堂|讠|课堂上要认真听讲。`},
{name:'动作魔法屋',grade:1,icon:'🪁',rows:`来|lái|来到|回来|木|放学后，我回来了。
去|qù|过去|出去|厶|天气晴朗，我们出去走走。
回|huí|回家|回答|囗|我举手回答老师的问题。
到|dào|到了|找到|刂|我找到了丢失的铅笔。
进|jìn|进去|前进|辶|小船慢慢向前进。
出|chū|出来|日出|凵|我们早起去看日出。
开|kāi|打开|开花|廾|花园里的小树开花了。
关|guān|关门|关心|丷|朋友之间应该互相关心。
坐|zuò|坐下|请坐|土|客人来了，我说请坐。
站|zhàn|站立|车站|立|我们在车站等公交车。
立|lì|立正|独立|立|我试着独立整理书包。
行|xíng|行走|行动|行|有了好想法，就开始行动。
飞|fēi|飞鸟|飞机|飞|飞机从白云旁飞过。
跳|tiào|跳绳|心跳|足|跑步以后，我的心跳加快了。
爬|pá|爬山|爬树|爪|小猴子很会爬树。
爬|pá|爬山|爬行|爪|小蜗牛慢慢爬行。
转|zhuǎn|转弯|转身|车|听见叫声，我转身看了看。
动|dòng|动物|活动|力|下课后，我们到操场活动。
停|tíng|停止|停车|亻|司机把车停进停车场。
打|dǎ|打球|打开|扌|我轻轻打开书本。
拍|pāi|拍手|拍照|扌|我们在花园里拍照。
拉|lā|拉手|拉开|扌|我拉开窗帘，让阳光进来。
推|tuī|推车|推开|扌|我轻轻推开了门。
拿|ná|拿起|拿走|手|请把自己的书拿走。
放|fàng|放学|放下|攵|我把书包放下，再去洗手。
收|shōu|收拾|收好|攵|玩完积木，要把它收好。
送|sòng|送给|送行|辶|朋友要出发了，我们去送行。
给|gěi|给你|送给|纟|我把画送给了妈妈。
找|zhǎo|找到|寻找|扌|小猫正在寻找它的玩具。
用|yòng|用心|使用|用|请正确使用剪刀。
做|zuò|做事|做饭|亻|我帮爸爸做饭。
把|bǎ|把手|一把|扌|桌上放着一把尺子。
抬|tái|抬头|抬起|扌|我们一起抬起小桌子。
举|jǔ|举手|举起|丶|我举起手，准备回答问题。
抱|bào|抱住|拥抱|扌|妈妈给了我一个温暖的拥抱。
背|bēi|背包|背起|月|我背起书包去上学。
穿|chuān|穿衣|穿过|穴|小鹿穿过了树林。
脱|tuō|脱下|脱掉|月|进屋以后，我脱掉了外套。
带|dài|带来|带领|巾|老师带领我们参观校园。
戴|dài|戴帽|爱戴|戈|老师受到同学们的爱戴。
换|huàn|交换|更换|扌|花盆太小了，我们更换一个大的。
借|jiè|借书|借用|亻|我想借用一下你的尺子。
还|huán|还书|归还|亻|借来的东西要按时归还。
画|huà|画画|画家|田|我想成为一名画家。
种|zhòng|种花|种树|禾|春天，我们一起去种树。
浇|jiāo|浇水|浇花|氵|爸爸每天早上给花园浇花。
扫|sǎo|扫地|打扫|扌|我们一起打扫教室。
擦|cā|擦桌|擦掉|扌|我用橡皮擦掉写错的字。
折|zhé|折纸|打折|扌|书店里的这本书正在打折。
吹|chuī|吹风|吹起|口|风把窗帘轻轻吹起。
敲|qiāo|敲门|敲打|攴|雨点轻轻敲打窗户。
招|zhāo|招手|招呼|扌|见到朋友，我主动打招呼。
招|zhāo|招手|招待|扌|我们热情地招待客人。
呼|hū|呼吸|欢呼|口|大家为获胜的队伍欢呼。
吸|xī|吸气|吸收|口|树根从泥土里吸收水分。
睡|shuì|睡觉|午睡|目|午饭后，我会午睡一会儿。
醒|xǐng|醒来|提醒|酉|妈妈提醒我出门带伞。
觉|jué|觉得|感觉|见|我感觉今天的风很凉快。
告|gào|告诉|告别|口|出发前，我们向家人告别。
诉|sù|告诉|诉说|讠|小朋友诉说着自己的心愿。
让|ràng|让开|礼让|讠|过马路时，司机礼让行人。`},
{name:'身体小卫士',grade:1,icon:'🧼',rows:`面|miàn|面包|见面|面|周末，我们在公园见面。
脸|liǎn|笑脸|洗脸|月|早上起床，我先洗脸。
鼻|bí|鼻子|鼻尖|鼻|小狗的鼻尖湿湿的。
嘴|zuǐ|嘴巴|张嘴|口|小鸟张嘴等着妈妈喂食。
牙|yá|牙齿|刷牙|牙|每天早晚都要刷牙。
齿|chǐ|牙齿|齿轮|齿|玩具里面有小小的齿轮。
舌|shé|舌头|口舌|舌|大家费了一番口舌，终于解释清楚了。
发|fà|头发|白发|又|奶奶的头上有了白发。
毛|máo|毛衣|羽毛|毛|地上有一根轻轻的羽毛。
身|shēn|身体|身边|身|妈妈坐在我的身边。
体|tǐ|身体|体育|亻|我很喜欢上体育课。
肚|dù|肚子|肚皮|月|小猫露出软软的肚皮。
脚|jiǎo|双脚|山脚|月|山脚下有一个小村庄。
腿|tuǐ|小腿|双腿|月|跑步时，双腿交替向前。
力|lì|力气|努力|力|我努力把字写得更清楚。
气|qì|空气|力气|气|搬这块石头需要一些力气。
痛|tòng|疼痛|头痛|疒|爸爸头痛了，需要休息。
病|bìng|生病|病人|疒|医生正在照顾病人。
医|yī|医生|医院|匚|生病时，我们到医院看医生。
院|yuàn|医院|院子|阝|院子里种着一棵桂树。
药|yào|吃药|药水|艹|医生给伤口涂了药水。
休|xiū|休息|午休|亻|午饭后有一段午休时间。
息|xī|休息|消息|心|我收到一个好消息。
安|ān|安全|平安|宀|我们平安到家了。
全|quán|全部|安全|人|过马路要注意安全。
好|hǎo|好人|美好|女|今天是美好的一天。
坏|huài|坏人|坏了|土|小钟坏了，爸爸正在修理。
忙|máng|帮忙|忙碌|忄|妈妈度过了忙碌的一天。
累|lèi|很累|劳累|糸|工作劳累后要休息。
饥|jī|饥饿|饥寒|饣|从前，有些人过着饥寒交迫的生活。
饿|è|饿了|饥饿|饣|小鸟寻找食物，填饱饥饿的肚子。
渴|kě|口渴|解渴|氵|运动后喝水很解渴。
困|kùn|困难|困住|囗|小猫被困住了，我们来帮助它。
健|jiàn|健康|健壮|亻|小树慢慢长得健壮起来。
康|kāng|健康|安康|广|我祝爷爷奶奶安康。
卫|wèi|卫生|守卫|卩|士兵认真守卫着大门。
护|hù|保护|爱护|扌|我们要爱护花草树木。`},
{name:'自然百宝箱',grade:1,icon:'🌻',rows:`春|chūn|春天|春风|日|春风吹绿了大地。
夏|xià|夏天|夏日|夂|夏日的傍晚很热闹。
冬|dōng|冬天|冬雪|夂|冬雪给大地盖上了白被子。
东|dōng|东方|东边|一|太阳从东边升起来。
西|xī|西方|西边|西|傍晚，太阳落到西边。
南|nán|南方|南瓜|十|菜园里长着一个大南瓜。
北|běi|北方|北风|匕|冬天的北风很冷。
中|zhōng|中间|中午|丨|中午，我们在学校吃饭。
外|wài|外面|窗外|夕|窗外有一只小鸟。
里|lǐ|里面|家里|里|家里种了几盆绿萝。
边|biān|旁边|河边|辶|我们在河边散步。
远|yuǎn|远方|远处|辶|远处的小山变绿了。
近|jìn|近处|附近|辶|我家附近有一个公园。
高|gāo|高山|高兴|高|学会新本领，我很高兴。
低|dī|低头|高低|亻|这两棵树高低不同。
长|cháng|长短|长城|长|我想去看看长城。
短|duǎn|短小|长短|矢|这两根绳子的长短不同。
宽|kuān|宽大|宽广|宀|眼前是一片宽广的草原。
窄|zhǎi|狭窄|窄小|穴|这条小路很窄小。
深|shēn|深浅|深夜|氵|深夜里，大家都睡着了。
浅|qiǎn|浅水|浅色|氵|她穿了一件浅色的衣服。
河|hé|小河|河水|氵|河水清清地流过村庄。
江|jiāng|长江|江水|氵|江水一直流向大海。
池|chí|池塘|水池|氵|水池里游着几条金鱼。
塘|táng|池塘|鱼塘|土|爷爷的鱼塘里有许多鱼。
流|liú|流水|河流|氵|这条河流经过我们的家乡。
浪|làng|海浪|浪花|氵|浪花轻轻拍打沙滩。
沙|shā|沙子|沙滩|氵|我们在沙滩上搭城堡。
滩|tān|沙滩|海滩|氵|海滩上有漂亮的贝壳。
坡|pō|山坡|上坡|土|上坡的时候，骑车有点累。
岩|yán|岩石|岩洞|山|山里有一个神秘的岩洞。
洞|dòng|山洞|树洞|氵|小松鼠住进了树洞。
谷|gǔ|山谷|谷雨|谷|谷雨时节，田里的秧苗长大了。
原|yuán|草原|原来|厂|原来小猫躲在椅子下面。
野|yě|田野|野花|里|路边开着许多野花。
园|yuán|公园|花园|囗|花园里有红色和黄色的花。
树|shù|树木|树苗|木|我们种下一棵小树苗。
苗|miáo|禾苗|幼苗|艹|幼苗需要阳光和水。
种|zhǒng|种子|种类|禾|花园里有许多种类的花。
豆|dòu|豆子|土豆|豆|爸爸做了一盘香香的土豆。
瓜|guā|西瓜|瓜子|瓜|小松鼠捧着一颗瓜子。
桃|táo|桃子|桃花|木|春天，桃花开了。
梨|lí|梨子|梨花|木|梨花像雪一样白。
杏|xìng|杏子|杏花|木|院子里的杏花开放了。
李|lǐ|李子|桃李|木|春天，山坡上桃李争艳。
苹|píng|苹果|苹果树|艹|苹果树上挂着红红的果子。
蕉|jiāo|香蕉|芭蕉|艹|芭蕉的叶子又宽又大。
橙|chéng|橙子|橙色|木|我用橙色的笔画夕阳。
茶|chá|喝茶|茶叶|艹|杯子里的茶叶慢慢展开。
香|xiāng|香味|花香|香|风里飘来一阵花香。`},
{name:'动物来做客',grade:1,icon:'🐾',rows:`鸟|niǎo|小鸟|飞鸟|鸟|天空中有一群飞鸟。
鸡|jī|小鸡|公鸡|又|公鸡一早就开始打鸣。
鸭|yā|小鸭|鸭子|鸟|鸭子在池塘里游泳。
鹅|é|白鹅|鹅毛|鸟|一根鹅毛轻轻飘下来。
牛|niú|小牛|奶牛|牛|奶牛在草地上吃草。
羊|yáng|小羊|绵羊|羊|绵羊的毛又软又白。
马|mǎ|小马|木马|马|我在公园里骑旋转木马。
兔|tù|白兔|兔子|刀|兔子在草地上跳来跳去。
鼠|shǔ|松鼠|老鼠|鼠|小老鼠钻进了洞里。
虎|hǔ|老虎|虎牙|虍|他笑起来露出一颗虎牙。
熊|xióng|小熊|熊猫|灬|熊猫正在吃竹子。
鹿|lù|小鹿|长颈鹿|鹿|长颈鹿伸长脖子吃树叶。
象|xiàng|大象|小象|豕|小象跟着妈妈走过草地。
鱼|yú|小鱼|金鱼|鱼|金鱼在水里游来游去。
虫|chóng|小虫|虫子|虫|树叶上有一只小虫子。
蚂|mǎ|蚂蚁|蚂蚁窝|虫|我们发现了一个蚂蚁窝。
蝴|hú|蝴蝶|蝴蝶结|虫|妹妹扎着一个漂亮的蝴蝶结。
蜻|qīng|蜻蜓|红蜻蜓|虫|一只红蜻蜓停在荷叶上。
蜓|tíng|蜻蜓|蜻蜓点水|虫|我看见蜻蜓点水的样子。
蚊|wén|蚊子|蚊帐|虫|睡觉时，我们放下蚊帐。
蛇|shé|小蛇|水蛇|虫|水蛇在水里游动。
龟|guī|乌龟|海龟|龟|海龟慢慢爬向大海。
虾|xiā|小虾|虾米|虫|菜里加了一点虾米。
蟹|xiè|螃蟹|河蟹|虫|河蟹举起了两只钳子。
龙|lóng|恐龙|龙舟|龙|端午节，人们在河上划龙舟。
雀|què|麻雀|孔雀|小|孔雀展开了美丽的尾巴。
鸦|yā|乌鸦|寒鸦|鸟|几只寒鸦停在冬天的树枝上。
乌|wū|乌云|乌黑|丿|妹妹有一头乌黑的头发。
燕|yàn|燕子|飞燕|灬|春天，飞燕在屋檐下筑巢。
鸽|gē|鸽子|白鸽|鸟|一群白鸽飞上蓝天。
尾|wěi|尾巴|结尾|尸|这个故事的结尾很温暖。
巴|bā|尾巴|嘴巴|己|吃饭时，要慢慢咀嚼，不要塞满嘴巴。
羽|yǔ|羽毛|羽衣|羽|传说中的仙女穿着羽衣。
翅|chì|翅膀|鸡翅|羽|爸爸烤的鸡翅很香。
膀|bǎng|翅膀|肩膀|月|爸爸的肩膀又宽又结实。`},
{name:'城市漫游',grade:2,icon:'🚲',rows:`车|chē|汽车|火车|车|火车沿着轨道向前行驶。
汽|qì|汽车|汽水|氵|瓶子里的汽水冒着小气泡。
辆|liàng|车辆|一辆|车|门口停着一辆自行车。
轮|lún|轮船|车轮|车|车轮转起来，车子向前走。
轨|guǐ|轨道|铁轨|车|火车沿着铁轨行驶。
铁|tiě|铁路|地铁|钅|我们坐地铁去博物馆。
交|jiāo|交通|交流|亠|我和朋友交流读书的发现。
通|tōng|通过|通知|辶|老师发了一份活动通知。
公|gōng|公园|公共|八|我们要爱护公共设施。
共|gòng|共同|一共|八|这里一共有五个苹果。
门|mén|开门|校门|门|老师在校门口迎接我们。
房|fáng|房子|书房|户|爸爸正在书房里看书。
屋|wū|屋子|房屋|尸|小村庄里有许多漂亮的房屋。
楼|lóu|高楼|楼梯|木|上下楼梯要慢慢走。
层|céng|一层|云层|尸|飞机穿过了云层。
顶|dǐng|头顶|山顶|页|我们终于走到了山顶。
底|dǐ|海底|井底|广|小青蛙住在井底。
墙|qiáng|墙壁|围墙|土|小猫跳上了围墙。
壁|bì|墙壁|石壁|土|山洞里的石壁很凉。
城|chéng|城市|长城|土|长城沿着山岭伸向远方。
市|shì|城市|超市|巾|我和妈妈去超市买菜。
村|cūn|村子|农村|木|农村的田野里长满了庄稼。
庄|zhuāng|村庄|农庄|广|周末，我们参观了一座农庄。
街|jiē|街道|大街|行|大街上来来往往的人很多。
道|dào|道路|知道|辶|我知道这朵花的名字。
店|diàn|商店|书店|广|我在书店里选了一本故事书。
商|shāng|商店|商量|亠|遇到问题，我们一起商量。
买|mǎi|买书|购买|乙|我们购买了需要的学习用品。
卖|mài|卖书|买卖|十|这家小店做着买卖文具的生意。
钱|qián|花钱|零钱|钅|我把零钱放进存钱罐。
币|bì|钱币|硬币|巾|桌上有一枚硬币。
元|yuán|一元|元旦|儿|元旦，我们一起迎接新的一年。
角|jiǎo|三角|角落|角|小猫在角落里睡觉。
票|piào|车票|门票|示|我们拿着门票走进公园。
灯|dēng|电灯|路灯|火|夜晚，路灯照亮了小路。
伞|sǎn|雨伞|打伞|人|下雨了，出门记得打伞。
衣|yī|衣服|大衣|衣|冬天，我穿上一件大衣。
服|fú|衣服|服务|月|图书馆为大家提供借书服务。
鞋|xié|鞋子|布鞋|革|爷爷穿着一双舒服的布鞋。
帽|mào|帽子|草帽|巾|农民戴着草帽在田里干活。
巾|jīn|毛巾|围巾|巾|天气冷了，妈妈给我围上围巾。
裙|qún|裙子|短裙|衤|妹妹穿着一条蓝色短裙。
裤|kù|裤子|长裤|衤|秋天，我换上了长裤。
床|chuáng|小床|起床|广|每天早上，我按时起床。
被|bèi|被子|被动|衤|学习时主动提问，比被动等待更好。
枕|zhěn|枕头|枕边|木|枕边放着我最喜欢的故事书。
布|bù|布料|公布|巾|老师公布了活动安排。
针|zhēn|指针|时针|钅|钟上的时针慢慢移动。
线|xiàn|毛线|光线|纟|窗边的光线很明亮。
钟|zhōng|时钟|闹钟|钅|早上，闹钟把我叫醒了。`},
{name:'认真成长营',grade:2,icon:'⭐',rows:`想|xiǎng|想法|想念|心|我很想念远方的朋友。
知|zhī|知道|知识|矢|书里藏着许多有趣的知识。
识|shí|认识|识字|讠|识字以后，我能自己读故事了。
能|néng|能够|能力|月|认真练习能提高我们的能力。
会|huì|学会|开会|人|老师们正在开会。
要|yào|需要|重要|覀|学会照顾自己很重要。
得|dé|得到|获得|彳|我获得了一枚认真勋章。
不|bù|不是|不同|一|每个人都有不同的想法。
是|shì|是的|可是|日|我想出门，可是外面下雨了。
有|yǒu|有趣|所有|月|我把所有的书整理好了。
没|méi|没有|没事|氵|小小的失误没事，重新试一试。
也|yě|也是|也许|乙|也许明天我们还能看见彩虹。
和|hé|和平|温和|禾|老师温和地提醒我注意字形。
很|hěn|很好|很多|彳|花园里有很多蝴蝶。
更|gèng|更好|更加|曰|认真观察，让我更加了解小树。
最|zuì|最好|最后|曰|最后，我们一起把桌子收拾干净。
都|dōu|都是|全都|阝|大家全都参加了种树活动。
就|jiù|就是|成就|尢|学会自己读书是一件有成就感的事。
才|cái|才能|刚才|扌|刚才，我发现了一个形近字。
可|kě|可以|可能|口|今天可能会下雨。
以|yǐ|可以|所以|人|因为下雨，所以我们带了伞。
为|wèi|为了|因为|丶|因为认真练习，我有了进步。
因|yīn|因为|原因|囗|我们一起寻找小树发黄的原因。
但|dàn|但是|不但|亻|她不但会唱歌，还会跳舞。
然|rán|自然|然后|灬|先看清字形，然后慢慢写。
如|rú|如果|比如|女|我喜欢水果，比如苹果和梨。
果|guǒ|如果|结果|木|认真观察后，我把结果记下来。
所|suǒ|所以|住所|斤|小松鼠找到了温暖的住所。
从|cóng|从前|从来|人|我从来没有见过这么大的树。
向|xiàng|方向|向前|口|小船向前慢慢行驶。
往|wǎng|来往|往常|彳|今天和往常一样，我按时起床。
互|hù|互相|互助|一|班里的同学组成了互助小组。
相|xiāng|相信|相同|目|这两片叶子的形状相同。
帮|bāng|帮助|帮手|巾|我是家里的小帮手。
努|nǔ|努力|努嘴|力|妹妹向门口努嘴，示意我看小猫。
劳|láo|劳动|勤劳|艹|蜜蜂十分勤劳。
勤|qín|勤劳|勤快|力|他是个勤快的小帮手。
敢|gǎn|勇敢|不敢|攵|我开始不敢举手，后来勇敢试了试。
强|qiáng|坚强|强大|弓|团结让我们的力量更强大。
弱|ruò|弱小|微弱|弓|远处闪着微弱的灯光。
难|nán|困难|难过|隹|朋友要搬家了，我有些难过。
易|yì|容易|轻易|日|遇到困难，不要轻易放弃。
简|jiǎn|简单|简洁|竹|这个房间布置得很简洁。
单|dān|简单|名单|丷|老师在名单上找到了我的名字。
细|xì|细心|仔细|纟|我仔细比较这两个字。
粗|cū|粗细|粗心|米|粗心会让我们漏看小小的区别。
轻|qīng|轻重|轻声|车|图书馆里要轻声说话。
重|zhòng|重量|重要|里|每天认真复习很重要。
快|kuài|快乐|飞快|忄|小鸟飞快地掠过天空。
慢|màn|慢慢|缓慢|忄|蜗牛缓慢地向前爬。
急|jí|着急|急忙|心|下雨了，我急忙跑到屋檐下。
静|jìng|安静|平静|青|湖面平静得像一面镜子。
耐|nài|耐心|忍耐|而|排队时要学会忍耐和等待。
完|wán|完成|完整|宀|我用完整的句子讲了一个故事。
整|zhěng|整齐|整理|攵|每天放学后，我整理书包。
齐|qí|整齐|齐心|齐|大家齐心把小船推到了水里。
平|píng|平安|公平|干|大家轮流玩，才公平。
实|shí|诚实|果实|宀|秋天，树上结满了果实。
诚|chéng|诚实|真诚|讠|我真诚地向朋友道谢。
美|měi|美丽|美好|羊|我记住了这个美好的下午。
丽|lì|美丽|秀丽|一|这里的山水十分秀丽。
奇|qí|好奇|神奇|大|汉字里藏着神奇的小秘密。
妙|miào|奇妙|美妙|女|树林里传来美妙的歌声。
趣|qù|有趣|兴趣|走|我对观察小虫很有兴趣。
兴|xìng|高兴|兴趣|八|我对阅读产生了兴趣。
感|gǎn|感谢|感动|心|朋友的帮助让我十分感动。
受|shòu|感受|接受|又|我愿意接受朋友的建议。
合|hé|合作|合适|人|这本书的难度很合适。
作|zuò|作业|合作|亻|我们合作完成了一幅画。
约|yuē|约定|节约|纟|我们要节约用水。
定|dìng|一定|决定|宀|我决定每天读一小段故事。
选|xuǎn|选择|选手|辶|选手们认真准备比赛。
择|zé|选择|择日|扌|天气不好，我们择日再去郊游。
比|bǐ|比赛|比较|比|我比较了两个字的不同。
赛|sài|比赛|赛跑|宀|小动物们一起参加赛跑。
赢|yíng|输赢|赢得|亡|认真和友善，让他赢得了大家的信任。
输|shū|输赢|运输|车|卡车正在运输水果。
失|shī|失去|失望|大|这次没有成功，我有些失望，但还想再试一次。
败|bài|失败|打败|攵|大家齐心打败了困难。
试|shì|尝试|试一试|讠|遇到新问题，我愿意试一试。
验|yàn|实验|经验|马|每一次尝试都能积累经验。
查|chá|检查|查找|木|我在字典里查找不认识的字。
检|jiǎn|检查|检验|木|换个句子认一认，可以检验自己是否记住了。
证|zhèng|证明|证书|讠|我收到了一张阅读活动的证书。
确|què|正确|确定|石|看清楚以后，我确定了答案。
疑|yí|疑问|怀疑|疋|小猫怀疑树后藏着一只小鸟。
决|jué|决定|解决|冫|我们一起解决了这个问题。
法|fǎ|方法|办法|氵|我想出了一个好办法。
办|bàn|办法|办公|力|老师正在办公室里备课。
功|gōng|成功|功夫|力|把字写好，需要下功夫。`}
];


/* data.js */

const THEMES = [
{ name:'森林来信', icon:'🌳', color:'#dfeccf', desc:'到森林里，认识自然的朋友', rows:`森|sēn|森林|森严|木
林|lín|树林|竹林|木
杨|yáng|杨树|白杨|木
柳|liǔ|柳树|柳枝|木
松|sōng|松树|松果|木
枫|fēng|枫叶|枫树|木
柏|bǎi|柏树|松柏|木
棉|mián|棉花|棉衣|木
杉|shān|杉树|水杉|木
桂|guì|桂花|桂树|木
桐|tóng|梧桐|桐树|木
枝|zhī|树枝|枝叶|木`},
{ name:'天气研究所',icon:'🌤️',color:'#ffe9b5',desc:'听风看雨，发现天空的秘密',rows:`晴|qíng|晴天|晴空|日
暖|nuǎn|温暖|暖风|日
冷|lěng|冷水|寒冷|冫
雪|xuě|雪花|下雪|雨
雾|wù|大雾|云雾|雨
雷|léi|雷声|雷雨|雨
露|lù|露水|露珠|雨
冰|bīng|冰雪|冰块|冫
季|jì|四季|季节|子
温|wēn|温度|气温|氵
凉|liáng|凉风|清凉|冫
秋|qiū|秋天|秋风|禾`},
{ name:'动物奇遇',icon:'🦋',color:'#eedff7',desc:'和小动物一起认字探险',rows:`猫|māo|小猫|花猫|犭
狗|gǒu|小狗|花狗|犭
猪|zhū|小猪|野猪|犭
猴|hóu|猴子|金丝猴|犭
狐|hú|狐狸|白狐|犭
狸|lí|狐狸|狸猫|犭
狮|shī|狮子|雄狮|犭
狼|láng|灰狼|狼群|犭
蝶|dié|蝴蝶|彩蝶|虫
蛙|wā|青蛙|牛蛙|虫
蚁|yǐ|蚂蚁|白蚁|虫
蜂|fēng|蜜蜂|蜂蜜|虫`},
{ name:'校园寻宝',icon:'🎒',color:'#dce9fa',desc:'在熟悉的校园里找到汉字',rows:`窗|chuāng|窗户|窗外|穴
户|hù|窗户|门户|户
教|jiào|教室|教师|攵
室|shì|教室|室内|宀
课|kè|上课|课本|讠
桌|zhuō|桌子|书桌|木
椅|yǐ|椅子|木椅|木
铅|qiān|铅笔|铅球|钅
笔|bǐ|铅笔|毛笔|竹
纸|zhǐ|白纸|纸张|纟
操|cāo|做操|操场|扌
场|chǎng|操场|广场|土`},
{ name:'小小生活家',icon:'🍓',color:'#ffdfd4',desc:'把生活里的话变成看得懂的字',rows:`饭|fàn|吃饭|米饭|饣
饱|bǎo|吃饱|饱满|饣
菜|cài|青菜|白菜|艹
味|wèi|味道|香味|口
甜|tián|香甜|甜瓜|甘
糖|táng|糖果|白糖|米
蛋|dàn|鸡蛋|蛋糕|虫
糕|gāo|蛋糕|年糕|米
烧|shāo|烧水|烧饭|火
洗|xǐ|洗手|清洗|氵
净|jìng|干净|洁净|冫
碗|wǎn|饭碗|洗碗|石`},
{ name:'心情邮局',icon:'💌',color:'#f6e4ee',desc:'学会表达，也学会关心朋友',rows:`情|qíng|心情|友情|忄
愿|yuàn|愿望|心愿|心
望|wàng|愿望|看望|月
喜|xǐ|喜欢|欢喜|口
欢|huān|欢乐|欢笑|欠
惊|jīng|惊喜|吃惊|忄
忙|máng|帮忙|连忙|忄
怕|pà|害怕|可怕|忄
谢|xiè|谢谢|感谢|讠
礼|lǐ|礼物|有礼|礻
助|zhù|帮助|助手|力
信|xìn|写信|相信|亻`},
{ name:'山水旅行记',icon:'⛵',color:'#d5eeee',desc:'带着汉字护照去看世界',rows:`湖|hú|湖水|西湖|氵
海|hǎi|大海|海边|氵
洋|yáng|海洋|洋流|氵
湾|wān|海湾|港湾|氵
岛|dǎo|小岛|海岛|山
桥|qiáo|小桥|石桥|木
船|chuán|小船|轮船|舟
岸|àn|河岸|岸边|山
景|jǐng|风景|美景|日
游|yóu|游玩|游泳|氵
路|lù|马路|走路|足
旅|lǚ|旅行|旅客|方`},
{ name:'童话小剧场',icon:'🏰',color:'#e6def8',desc:'读懂故事，让想象飞起来',rows:`童|tóng|童话|儿童|立
话|huà|说话|童话|讠
故|gù|故事|故乡|攵
事|shì|故事|事情|亅
梦|mèng|做梦|梦想|木
精|jīng|精神|精彩|米
灵|líng|心灵|机灵|火
宝|bǎo|宝贝|宝石|宀
贝|bèi|宝贝|贝壳|贝
勇|yǒng|勇敢|勇气|力
敢|gǎn|勇敢|敢于|攵
胜|shèng|胜利|获胜|月`},
{ name:'发现实验室',icon:'🔍',color:'#e7edc9',desc:'观察、比较，找到汉字的线索',rows:`清|qīng|清水|清晨|氵
睛|jīng|眼睛|目不转睛|目
请|qǐng|请问|请求|讠
眼|yǎn|眼睛|眼光|目
观|guān|观察|观看|见
察|chá|观察|察看|宀
植|zhí|植物|种植|木
物|wù|动物|植物|牜
根|gēn|树根|根本|木
芽|yá|发芽|豆芽|艹
泉|quán|泉水|山泉|水
溪|xī|小溪|溪水|氵`},
{ name:'成长星球',icon:'🚀',color:'#f9e5c4',desc:'认真一点点，每天都有新收获',rows:`认|rèn|认真|认识|讠
真|zhēn|认真|真正|目
读|dú|读书|朗读|讠
写|xiě|写字|书写|冖
练|liàn|练习|练字|纟
习|xí|学习|习惯|乙
思|sī|思考|心思|心
考|kǎo|思考|考试|耂
记|jì|记住|日记|讠
忘|wàng|忘记|难忘|心
坚|jiān|坚持|坚强|土
持|chí|坚持|保持|扌`}
];
THEMES.forEach(t => { t.grade=2; t.tier=3; });
THEMES.unshift(
{name:'生活里的第一笔',grade:1,tier:1,icon:'🌱',color:'#e1eddf',desc:'从熟悉的生活开始',rows:`人|rén|家人|好人|人
口|kǒu|门口|开口|口
手|shǒu|小手|洗手|手
足|zú|足球|手足|足
耳|ěr|耳朵|木耳|耳
目|mù|目光|目的|目
心|xīn|开心|爱心|心
头|tóu|点头|石头|大`},
{name:'日月小山谷',grade:1,tier:1,icon:'☀️',color:'#f8edcc',desc:'汉字里藏着美丽的世界',rows:`日|rì|日子|生日|日
月|yuè|月亮|月光|月
水|shuǐ|喝水|水果|水
火|huǒ|大火|火山|火
山|shān|大山|山羊|山
石|shí|石头|石子|石
田|tián|水田|田地|田
土|tǔ|泥土|土地|土`},
{name:'数字藏宝图',grade:1,tier:1,icon:'🧭',color:'#e4e9fa',desc:'用数字解开小岛的线索',rows:`一|yī|一个|一起|一
二|èr|二月|第二|二
三|sān|三天|三人|一
四|sì|四季|四个|囗
五|wǔ|五个|五天|二
六|liù|六个|六月|亠
七|qī|七天|七个|一
八|bā|八个|八月|八`},
{name:'大小侦探社',grade:1,tier:1,icon:'🔎',color:'#eadff5',desc:'找一找汉字的不同',rows:`大|dà|大象|大风|大
小|xiǎo|小鸟|小雨|小
多|duō|许多|多少|夕
少|shǎo|多少|少量|小
上|shàng|上学|向上|一
下|xià|下雨|向下|一
左|zuǒ|左手|左边|工
右|yòu|右手|右边|口`},
{name:'种子小花园',grade:1,tier:2,icon:'🌷',color:'#f2e5e9',desc:'一粒种子，一点新发现',rows:`木|mù|木头|木马|木
禾|hé|禾苗|锄禾|禾
米|mǐ|大米|米饭|米
竹|zhú|竹子|竹叶|竹
花|huā|花朵|红花|艹
草|cǎo|小草|草地|艹
叶|yè|树叶|叶子|口
果|guǒ|水果|果园|木`},
{name:'天空观察站',grade:1,tier:2,icon:'🌈',color:'#dcecf6',desc:'抬头看看，天空会说什么',rows:`天|tiān|天空|今天|大
地|dì|土地|大地|土
风|fēng|大风|风车|风
雨|yǔ|下雨|雨衣|雨
云|yún|白云|云朵|二
电|diàn|电话|闪电|田
星|xīng|星星|星光|日
光|guāng|阳光|月光|儿`},
{name:'我的暖暖家',grade:1,tier:2,icon:'🏡',color:'#fae4d4',desc:'把爱说出来，也读出来',rows:`妈|mā|妈妈|爸妈|女
爸|bà|爸爸|老爸|父
家|jiā|家人|回家|宀
爱|ài|爱心|可爱|爫
我|wǒ|我们|自我|戈
你|nǐ|你好|你们|亻
他|tā|他们|其他|亻
她|tā|她们|她的|女`},
{name:'快乐行动队',grade:1,tier:2,icon:'🪁',color:'#e1eddc',desc:'读一读，做一做',rows:`吃|chī|吃饭|好吃|口
喝|hē|喝水|喝茶|口
走|zǒu|走路|走开|走
跑|pǎo|跑步|跑道|足
看|kàn|看书|看见|目
听|tīng|听见|听说|口
说|shuō|说话|小说|讠
笑|xiào|微笑|笑声|竹`}
);
// Keep a stable 500-character curriculum; duplicate characters (including other readings) are not counted twice.
const selectedChars=new Set(THEMES.flatMap(t=>t.rows.split('\n').map(r=>r.split('|')[0])));
const extraSentences={};
const groupRows=EXTRA_GROUPS.map(g=>g.rows.split('\n'));
const selectedRows=EXTRA_GROUPS.map(()=>[]);
// Round-robin selection avoids filling all 316 expansion slots from the earliest themes.
for(let rowIndex=0;selectedChars.size<500&&rowIndex<150;rowIndex++){
 for(let gi=0;gi<EXTRA_GROUPS.length&&selectedChars.size<500;gi++){
  const row=groupRows[gi][rowIndex];if(!row)continue;
  const [char,pinyin,word,other,radical,sentence]=row.split('|');
  if(selectedChars.has(char))continue;
  selectedChars.add(char);selectedRows[gi].push([char,pinyin,word,other,radical].join('|'));extraSentences[char]=sentence;
 }
}
EXTRA_GROUPS.forEach((group,i)=>{if(selectedRows[i].length)THEMES.push({...group,tier:group.grade===1?2:3,color:'#e9edf5',desc:'在词语和生活情境中发现汉字',rows:selectedRows[i].join('\n')});});
const WORDS=THEMES.flatMap((t,unit)=>t.rows.split('\n').map(row=>{const [char,pinyin,word,other,radical]=row.split('|');return {char,pinyin,word,other,radical,unit,grade:t.grade,tier:t.tier};}));
const STORIES=[
{title:'森林的来信',text:'秋天到了，森林换上了新衣。枫叶红了，杨树的叶子黄了。小松鼠抱着松果，在树枝间跳来跳去。',question:'谁抱着松果？',choices:['小松鼠','小猫','小猴'],answer:0},
{title:'窗外的小发现',text:'早晨，窗外下起了小雨。过了一会儿，太阳出来了，天气变晴了。Cindy 打开窗户，看见叶子上亮亮的水珠。',question:'太阳出来后，天气怎样了？',choices:['变冷了','变晴了','下雪了'],answer:1},
{title:'小兔的礼物',text:'小兔想送给朋友一份礼物。她没有买糖果，而是在花盆里种下一颗种子。每天，她都认真浇水。小芽终于长出来了！',question:'小兔每天认真做什么？',choices:['买糖果','浇水','画画'],answer:1}
];
const SENTENCES = `人|帮助别人的人是好人。
口|小鸟开口唱歌了。
手|吃饭以前要洗手。
足|哥哥和妹妹情同手足。
耳|妈妈买了一袋木耳。
目|这次旅行的目的是看大海。
心|我们把爱心送给需要帮助的人。
头|小路旁有一块石头。
日|今天是妈妈的生日。
月|月光照在窗前。
水|每天吃一点新鲜的水果。
火|这是一座很高的火山。
山|山羊在山坡上吃草。
石|小河里有许多石子。
田|农民在田地里种菜。
土|春雨滋润了土地。
一|我们一起去公园。
二|小兔第二个到达终点。
三|我们三人一起读书。
四|桌上有四个苹果。
五|种子过了五天发芽了。
六|六月的天气很暖和。
七|树上有七个果子。
八|八月，我们去了海边。
大|今天刮起了大风。
小|窗外下起了小雨。
多|盒子里有多少颗糖？
少|花盆里只需要少量的水。
上|小树努力向上生长。
下|小溪向下流去。
左|小猫在门的左边。
右|请把书放在右边。
木|小朋友坐上了木马。
禾|我们一起读古诗《锄禾》。
米|今天的米饭真香。
竹|熊猫喜欢吃竹叶。
花|院子里开了一朵红花。
草|我们在草地上放风筝。
叶|秋天的叶子变黄了。
果|果园里的苹果成熟了。
天|今天我要学三个新字。
地|春天让大地变绿了。
风|风车慢慢转起来了。
雨|下雨了，我穿上雨衣。
云|天空飘着白白的云朵。
电|天空中出现了一道闪电。
星|星光照亮了夜空。
光|月光洒在小路上。
妈|我和爸妈一起散步。
爸|我给老爸画了一幅画。
家|放学以后，我和朋友一起回家。
爱|这只小猫真可爱。
我|我学会了自我检查。
你|你们想去哪里玩？
他|我们也要关心其他小朋友。
她|这本书是她的。
吃|妈妈做的面条真好吃。
喝|爷爷喜欢坐在窗边喝茶。
走|小猫轻轻走开了。
跑|运动员站在跑道上。
看|我看见了一只蝴蝶。
听|听说公园里的花开了。
说|姐姐正在读一本小说。
笑|教室里传来快乐的笑声。
森|城堡的守卫十分森严。
林|熊猫住在竹林旁边。
杨|路边有一排高高的白杨。
柳|春风吹动了细细的柳枝。
松|松鼠抱着一颗松果。
枫|山坡上长着几棵枫树。
柏|松柏在冬天也是绿的。
棉|冬天到了，我穿上棉衣。
杉|水杉长得又高又直。
桂|院子里的桂树开花了。
桐|门前的桐树长出了新叶。
枝|春天，树木长出了新的枝叶。
晴|小鸟在晴空中飞翔。
暖|暖风轻轻吹过草地。
冷|寒冷的冬天到了。
雪|下雪了，大地变白了。
雾|云雾遮住了远处的山。
雷|夏天常常会有雷雨。
露|叶子上有一颗露珠。
冰|杯子里有一小块冰块。
季|我最喜欢春天这个季节。
温|今天的气温升高了。
凉|树下十分清凉。
秋|秋风吹黄了树叶。
猫|小花猫在晒太阳。
狗|一只花狗跑过来了。
猪|野猪住在森林里。
猴|金丝猴的毛是金黄色的。
狐|雪地里有一只白狐。
狸|狸猫轻轻跳上了墙头。
狮|雄狮站在草原上。
狼|狼群在森林里寻找食物。
蝶|彩蝶在花丛中飞舞。
蛙|池塘里传来牛蛙的叫声。
蚁|白蚁喜欢潮湿的地方。
蜂|蜂蜜甜甜的。
窗|窗外的小鸟在唱歌。
户|我们要爱护家里的门户。
教|教师教我们读书写字。
室|下雨时，我们在室内活动。
课|我把课本放进书包。
桌|书桌上放着一盏台灯。
椅|爷爷坐在木椅上。
铅|运动员把铅球投得很远。
笔|爷爷用毛笔写字。
纸|我们要节约纸张。
操|同学们在操场上跑步。
场|广场上有许多人在跳舞。
饭|碗里的米饭香喷喷的。
饱|这些豆子颗颗饱满。
菜|妈妈买了一棵白菜。
味|厨房里飘出饭菜的香味。
甜|这个甜瓜很好吃。
糖|杯子里加了一点白糖。
蛋|我给妈妈做了一个蛋糕。
糕|过年时，我们一起吃年糕。
烧|爸爸正在厨房烧饭。
洗|吃水果前要先清洗。
净|我们要保持教室洁净。
碗|吃完饭，我帮爸爸洗碗。
情|我们珍惜彼此的友情。
愿|我的心愿是学会游泳。
望|周末，我去看望奶奶。
喜|听到好消息，大家满心欢喜。
欢|大家在草地上欢笑。
惊|这个消息让大家十分吃惊。
忙|下雨了，我连忙收起衣服。
怕|遇到困难并不可怕。
谢|我要感谢帮助我的朋友。
礼|见到长辈问好，是有礼的表现。
助|我是妈妈的小助手。
信|我相信自己会越学越好。
湖|西湖的风景很美。
海|我们在海边捡贝壳。
洋|海水的流动形成了洋流。
湾|小船停在安静的港湾里。
岛|海岛上有许多椰子树。
桥|小河上有一座石桥。
船|轮船慢慢驶向远方。
岸|岸边长着一排柳树。
景|我们停下来欣赏眼前的美景。
游|我在夏天学会了游泳。
路|走路时要注意安全。
旅|旅客们排队上车。
童|今天是儿童的节日。
话|我喜欢听有趣的童话。
故|奶奶常常想起自己的故乡。
事|自己的事情自己做。
梦|我的梦想是成为一名画家。
精|这场表演十分精彩。
灵|小猴子非常机灵。
宝|王冠上有一颗宝石。
贝|沙滩上有许多美丽的贝壳。
勇|第一次上台需要勇气。
敢|我们要敢于提出问题。
胜|大家为球队获胜而欢呼。
清|清晨，小鸟开始唱歌。
睛|我目不转睛地看着小蝴蝶。
请|我向老师提出一个请求。
眼|妈妈的眼光十分温柔。
观|我们一起观看表演。
察|我仔细察看叶子上的小虫。
植|我们在春天种植花草。
物|阳台上有许多绿色植物。
根|认真是学好本领的根本。
芽|小小的豆芽慢慢长高了。
泉|清清的山泉流过石头。
溪|溪水叮叮咚咚地流着。
认|今天我认识了三个新字。
真|真正的朋友会互相帮助。
读|我每天朗读一小段故事。
写|书写时要坐端正。
练|我每天认真练字。
习|读完书放回原处，是个好习惯。
思|我猜到了妹妹的心思。
考|考试时要认真读题。
记|我在日记里写下今天的发现。
忘|这真是难忘的一天。
坚|小草十分坚强。
持|我们要保持桌面整洁。`;
const sentenceMap=Object.fromEntries(SENTENCES.split('\n').map(x=>x.split('|')));
WORDS.forEach(w=>w.sentence=sentenceMap[w.char]||extraSentences[w.char]);


/* core.js */
const STORAGE_KEY='cindy-island-v1';
const INTERVALS=[1,3,7,14,30];
function today(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
function addDays(day,n){const d=new Date(day+'T12:00:00');d.setDate(d.getDate()+n);return today(d);}
function freshState(){return {version:1,settings:{target:3,writeTarget:1,level:'auto',musicVolume:.12},placement:null,tier:1,records:{},days:{},sessions:[],stars:0,owned:[],decor:[],active:null,confusions:[],family:{},writing:{},life:{},decorPos:{}};}
function getDay(state,day=today()){return state.days[day]||{newChars:[],reviewChars:[],written:[],points:0};}
function dueWords(state,words,day=today()){return words.filter(w=>state.records[w.char]?.due<=day&&state.records[w.char]?.lastDay!==day).sort((a,b)=>state.records[a.char].due.localeCompare(state.records[b.char].due)||state.records[b.char].mistakes-state.records[a.char].mistakes);}
function tierFor(state){return state.settings.level==='g1'?Math.min(state.tier,2):state.settings.level==='g2'?3:state.tier;}
function createPlan(state,words,day=today()){
 const d=getDay(state,day), count=Math.max(0,(d.target??state.settings.target)-d.newChars.length), tier=tierFor(state);
 let available=words.filter(w=>!state.records[w.char]);
 if(state.settings.level==='g1')available=available.filter(w=>w.grade===1);
 if(state.settings.level==='g2')available=available.filter(w=>w.grade===2);
 available.sort((a,b)=>Math.abs(a.tier-tier)-Math.abs(b.tier-tier)||a.unit-b.unit);
 // Look-alike characters interfere with each other when met on the same day; keep them apart.
 const fresh=[];for(const w of available){if(fresh.length>=count)break;if(fresh.some(f=>lookAlike(f.char,w.char)))continue;fresh.push(w);}
 // Strong readers still check one earlier, untested foundation character each day.
 if(state.settings.level==='auto'&&tier===3&&fresh.length>1){const foundation=available.find(w=>w.grade===1&&!fresh.includes(w));if(foundation)fresh[fresh.length-1]=foundation;}
 const reviews=dueWords(state,words,day).slice(0,5);
 const writingLeft=Math.max(0,(d.writeTarget??state.settings.writeTarget)-d.written.length);
 // Writing runs on its own track: characters left unfinished on an earlier day come back first.
 const writeChars=Object.values(state.writing||{}).filter(r=>r.pending&&r.lastDay!==day&&state.records[r.char]).sort((a,b)=>a.lastDay.localeCompare(b.lastDay)).slice(0,writingLeft).map(r=>r.char);
 // Writing is easier on a character she has already recognised on an earlier day, so those come before today's new ones.
 const known=reviews.filter(w=>state.records[w.char].cleanDays.length>0),rest=reviews.filter(w=>!known.includes(w));
 for(const w of [...known,...fresh,...rest]){if(writeChars.length>=writingLeft)break;if(!writeChars.includes(w.char))writeChars.push(w.char);}
 return {day,newChars:fresh.map(w=>w.char),reviewChars:reviews.map(w=>w.char),writeChars};
}
function placementTier(correct,total){return correct/total>=.8?3:correct/total>=.5?2:1;}
function placementPick(words,tier,used,random=Math.random){return shuffle(words.filter(w=>w.tier===tier&&!used.includes(w.char)),random)[0]?.char;}
function placementResult(answers){const ok=t=>answers.filter(a=>a.tier===t&&a.correct).length;return ok(3)>=2?3:ok(2)>=2||ok(3)>=1?2:1;}
// A character recognised during placement skips the first lesson but must be confirmed by a review tomorrow.
function recordDiagnosed(state,char,day=today()){if(state.records[char])return false;state.records[char]={char,firstDay:day,cleanDays:[],strength:1,writeCount:0,mistakes:0,lastDay:day,due:addDays(day,1),diagnosed:true};return true;}
function recordRecognition(state,char,{clean,mistakes=0,wasNew=false},day=today()){
 let r=state.records[char]||{char,firstDay:day,cleanDays:[],strength:0,writeCount:0,mistakes:0,lastDay:null,due:day};
 if(r.lastDay===day)return false;
 r.mistakes+=mistakes;r.lastDay=day;
 if(clean){if(!r.cleanDays.includes(day))r.cleanDays.push(day);r.strength=Math.min(r.strength+1,5);}else{r.strength=0;}
 r.due=addDays(day,clean?INTERVALS[Math.max(0,r.strength-1)]:1);state.records[char]=r;
 state.days[day]??={newChars:[],reviewChars:[],written:[],points:0};
 const list=wasNew?state.days[day].newChars:state.days[day].reviewChars;if(!list.includes(char))list.push(char);return true;
}
const WRITE_LEVELS=['blind','trace','guided','watch'];
function recordWriting(state,char,{level='trace',completed=false,strokeErrors={},ms=0,assigned=false,downshift=false},day=today()){
 state.writing??={};const r=state.writing[char]||{char,attempts:0,traceDays:[],blindDays:[],strokeErrors:{},ms:0,downshifts:0,pending:false,lastDay:day};
 r.attempts++;r.lastDay=day;r.ms=Math.min(r.ms+Math.max(0,Number(ms)||0),36e6);if(downshift)r.downshifts++;
 for(const [k,v] of Object.entries(strokeErrors)){const i=Number(k);if(Number.isInteger(i)&&i>=0&&i<64)r.strokeErrors[i]=(r.strokeErrors[i]||0)+Math.max(0,Number(v)||0);}
 const solid=completed&&(level==='trace'||level==='blind');
 if(solid){const list=level==='blind'?r.blindDays:r.traceDays;if(!list.includes(day))list.push(day);r.pending=false;}else if(assigned)r.pending=true;
 state.writing[char]=r;return r;
}
// Tracing on one day, then writing without the outline on a later day, separates copying from remembering.
function writeModeFor(state,char,day=today()){return state.writing?.[char]?.traceDays.some(d=>d<day)?'blind':'trace';}
function writeStageOf(r){return !r?'未练写':r.blindDays.length>=2?'写得牢':r.blindDays.length?'能独立写':r.traceDays.length?'描红完成':'练习中';}
function stageOf(r){return !r?'未探索':r.strength>=3&&r.cleanDays.length>=3?'记得牢':r.strength>=2&&r.cleanDays.length>=2?'在长大':'小芽';}
function completeSession(state,session,day=today()){
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
function shuffle(a,random=Math.random){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
const SIMILAR={人:'入八大',口:'日目回',手:'毛于牛',足:'走是定',耳:'目自日',目:'日自白',心:'必少小',头:'大买太',日:'目白田',月:'用目日',水:'木永小',火:'人灭大',山:'出凶仙',石:'右后古',田:'由甲申',土:'士干王',一:'二三十',二:'三一工',三:'王二丰',四:'西回田',五:'互王工',六:'穴八大',七:'匕十九',八:'人入六',大:'太天犬',小:'少水木',多:'夕名各',少:'小步沙',上:'下止土',下:'上卜不',左:'右在工',右:'左石后',木:'本术禾',禾:'木米未',米:'来木禾',竹:'个节竿',花:'化草华',草:'早花苗',叶:'吐汁什',果:'里课棵',天:'夫大无',地:'他池也',风:'凤凡几',雨:'两而雪',云:'去运元',电:'申田由',星:'是早生',光:'先兴尖',妈:'吗码蚂',爸:'爬爷巴',家:'冢象安',爱:'受友爰',我:'找成钱',你:'他您作',他:'她地池',她:'他好妈',吃:'气乞汽',喝:'渴唱揭',走:'足起赶',跑:'抱泡炮',看:'着春目',听:'叶诉折',说:'悦脱税',笑:'笔笛笼',森:'林木焚',林:'森休材',杨:'扬场汤',柳:'迎卯抑',松:'公枫柏',晴:'清睛情',清:'晴睛请',睛:'晴清情',请:'清情晴',情:'晴清睛',暖:'缓援爱',冷:'铃玲领',雪:'雷雨寻',雾:'雪雷需',雷:'雪雾电',露:'路霜雾',冰:'水冷凉',季:'李秀香',温:'湿渴汤',凉:'惊京冷',秋:'伙和种',猫:'描苗锚',狗:'句拘钩',猪:'诸著堵',猴:'候喉侯',狐:'孤瓜弧',狸:'理里埋',狮:'师帅筛',狼:'狠良浪',蝶:'碟谍蝴',蛙:'娃洼挂',蚁:'议仪义',蜂:'锋峰逢',窗:'空穿穷',户:'尸卢声',教:'数放故',室:'宝定至',课:'棵颗果',桌:'卓掉棹',椅:'奇骑倚',铅:'沿船钒',笔:'毛笑笛',纸:'低底抵',操:'澡燥噪',场:'扬汤杨',饭:'板反返',饱:'抱跑泡',菜:'采彩茶',味:'未妹昧',甜:'甘舌恬',糖:'塘唐搪',蛋:'虫蚕旦',糕:'羔羚精',烧:'浇绕晓',洗:'先选冼',净:'静争挣',碗:'腕宛婉',愿:'原顾源',望:'忘旺王',喜:'吉善嘉',欢:'吹饮次',惊:'凉京景',忙:'芒忘亡',怕:'拍伯白',谢:'射榭躲',礼:'补扎孔',助:'组且姐',信:'言住位',湖:'糊胡蝴',海:'梅每悔',洋:'样羊祥',湾:'弯变恋',岛:'鸟乌鸣',桥:'乔侨娇',船:'沿铅般',岸:'岩崖炭',景:'京惊晾',游:'流旅族',路:'洛露各',旅:'族旋游',童:'重章量',话:'活括舌',故:'放做古',事:'吏史更',梦:'林禁楚',精:'睛晴请',灵:'寻录灭',宝:'实玉定',贝:'见页负',勇:'男甬涌',敢:'取散教',胜:'姓性生',眼:'很根银',观:'现欢规',察:'祭擦蔡',植:'值直置',物:'牧牺特',根:'很跟眼',芽:'牙呀穿',泉:'白水原',溪:'奚蹊鸡',认:'从队让',真:'直具填',读:'卖续实',写:'与马鸟',练:'炼拣栋',习:'刁羽刃',思:'恩想息',考:'老孝者',记:'纪己计',忘:'忙亡妄',坚:'竖紧贤',持:'待诗特'};
function lookAlike(a,b){return !!(SIMILAR[a]?.includes(b)||SIMILAR[b]?.includes(a));}
function optionsFor(w,words,random=Math.random){const candidates=[...(SIMILAR[w.char]||''),...shuffle(words.filter(x=>x.radical===w.radical).map(x=>x.char),random),...words.map(x=>x.char)];return shuffle([w.char,...[...new Set(candidates)].filter(x=>x!==w.char).slice(0,3)],random);}
function validateBackup(raw,words){
 if(!raw||raw.version!==1||typeof raw.records!=='object'||Array.isArray(raw.records)||!raw.settings)throw Error('这不是有效的小岛进度文件。');
 const valid=new Set(words.map(w=>w.char));const s=freshState();
 s.settings.target=[2,3,4,5].includes(raw.settings.target)?raw.settings.target:3;s.settings.writeTarget=[1,2].includes(raw.settings.writeTarget)?raw.settings.writeTarget:1;s.settings.level=['auto','g1','g2'].includes(raw.settings.level)?raw.settings.level:'auto';
 s.placement=raw.placement&&typeof raw.placement==='object'?{complete:true}:null;s.tier=[1,2,3].includes(raw.tier)?raw.tier:1;
 const date=/^\d{4}-\d{2}-\d{2}$/,num=(v,max)=>Math.max(0,Math.min(max,Math.round(Number(v)||0))),days=a=>Array.isArray(a)?[...new Set(a.filter(x=>date.test(x)))].slice(-180):[];
 for(const [c,r] of Object.entries(raw.records)){if(!valid.has(c)||!r||!date.test(r.due)||!date.test(r.lastDay))continue;s.records[c]={char:c,firstDay:date.test(r.firstDay)?r.firstDay:r.lastDay,lastDay:r.lastDay,due:r.due,cleanDays:Array.isArray(r.cleanDays)?[...new Set(r.cleanDays.filter(x=>date.test(x)))].slice(-180):[],strength:Math.max(0,Math.min(5,Number(r.strength)||0)),writeCount:Math.max(0,Math.min(10000,Number(r.writeCount)||0)),mistakes:Math.max(0,Math.min(10000,Number(r.mistakes)||0)),...(r.diagnosed===true?{diagnosed:true}:{})};}
 if(raw.days&&typeof raw.days==='object')for(const [d,r] of Object.entries(raw.days)){if(date.test(d)&&r)s.days[d]={newChars:Array.isArray(r.newChars)?r.newChars.filter(x=>valid.has(x)):[],reviewChars:Array.isArray(r.reviewChars)?r.reviewChars.filter(x=>valid.has(x)):[],written:Array.isArray(r.written)?r.written.filter(x=>valid.has(x)):[],points:Math.max(0,Number(r.points)||0),...([2,3,4,5].includes(r.target)?{target:r.target}:{}),...([1,2].includes(r.writeTarget)?{writeTarget:r.writeTarget}:{})};}
 s.stars=Math.max(0,Math.min(100000,Number(raw.stars)||0));s.owned=Array.isArray(raw.owned)?raw.owned.filter(x=>['flower','bird','mushroom','butterfly','kite','boat','cat','rainbow','balloon','lighthouse'].includes(x)):[];s.decor=Array.isArray(raw.decor)?raw.decor.filter(x=>s.owned.includes(x)):[];
 if(raw.decorPos&&typeof raw.decorPos==='object')for(const [k,v] of Object.entries(raw.decorPos)){if(s.owned.includes(k)&&v&&Number.isFinite(v.x)&&Number.isFinite(v.y))s.decorPos[k]={x:Math.max(0,Math.min(100,Math.round(v.x))),y:Math.max(0,Math.min(100,Math.round(v.y)))};}
 if(Array.isArray(raw.sessions))s.sessions=raw.sessions.filter(r=>r&&typeof r.id==='string'&&date.test(r.day)&&Number.isFinite(r.score)&&Number.isFinite(r.total)&&Number.isFinite(r.earned)).slice(-180).map(r=>({id:r.id.slice(0,40),day:r.day,earned:num(r.earned,1000),score:num(r.score,100),independent:num(r.independent,100),total:num(r.total,100),written:num(r.written,100),help:num(r.help,100),chars:Array.isArray(r.chars)?r.chars.filter(c=>valid.has(c)):[]}));
 if(raw.family&&typeof raw.family==='object')for(const [k,v] of Object.entries(raw.family)){if(date.test(k))s.family[k]=!!v;}
 if(raw.writing&&typeof raw.writing==='object')for(const [c,r] of Object.entries(raw.writing)){if(!valid.has(c)||!r||!date.test(r.lastDay))continue;const strokeErrors={};if(r.strokeErrors&&typeof r.strokeErrors==='object')for(const [k,v] of Object.entries(r.strokeErrors)){const i=Number(k);if(Number.isInteger(i)&&i>=0&&i<64)strokeErrors[i]=num(v,10000);}s.writing[c]={char:c,attempts:num(r.attempts,10000),traceDays:days(r.traceDays),blindDays:days(r.blindDays),strokeErrors,ms:num(r.ms,36e6),downshifts:num(r.downshifts,10000),pending:r.pending===true,lastDay:r.lastDay};}
 if(raw.life&&typeof raw.life==='object')for(const [k,v] of Object.entries(raw.life)){if(date.test(k)&&v&&/^[a-z]{2,12}$/.test(v.id)&&valid.has(v.char))s.life[k]={id:v.id,char:v.char};}
 return s;
}


/* life.js */
// Life quests connect learned characters to places a child abroad actually visits.
// Each quest only uses characters she has already met; nothing here earns stars.
const SPOTS={门:'房门',窗:'窗户',书:'书架'};
const LIFE_QUESTS=[
{id:'market',place:'超市',icon:'🛒',chars:'米面菜鱼鸡蛋奶果',task:c=>`在超市的亚洲食品货架或家里的包装袋上，找一找「${c}」。找到了，指给家人看。`},
{id:'menu',place:'中餐馆',icon:'🥢',chars:'饭面鸡鱼菜',task:c=>`下次看中餐馆菜单或外卖单时，找找「${c}」，再把那道菜名读出来。`},
{id:'notes',place:'便利贴',icon:'📝',chars:'门窗书',task:c=>`把「${c}」写在便利贴上，贴到家里的${SPOTS[c]}上。过几天看看还认不认得。`},
{id:'park',place:'公园',icon:'🌳',chars:'花草木山日月',task:(c,w)=>`去公园或小区散步时，找一样能用“${w.word}”来说的东西，用它说一句话。`},
{id:'signs',place:'标识',icon:'🚪',chars:'出口开关上下左右男女大小中',task:c=>`在机场、唐人街或中文学校的中文标识上找「${c}」。没找到也没关系，画一个带「${c}」的小标识。`},
{id:'call',place:'视频',icon:'📱',chars:'爸妈爷奶家人',task:(c,w)=>`和爷爷奶奶视频时，用“${w.word}”说一句话，请他们猜猜你今天认识了哪个字。`},
{id:'festival',place:'节日',icon:'🏮',chars:'春月红',task:c=>`看看春联、红包或月饼盒，找找「${c}」藏在哪里。`},
{id:'road',place:'路上',icon:'🚗',chars:'车站东西南北',task:(c,w)=>`坐车时看看地图或路牌，用“${w.word}”说一说你们往哪里走。`}
];
function lifeQuest(state,words,day){
 const byChar=new Map(words.map(w=>[w.char,w])),fresh=state.days[day]?.newChars||[];
 const options=LIFE_QUESTS.flatMap(q=>[...q.chars].filter(c=>state.records[c]&&byChar.has(c)).map(c=>({q,c})));
 const preferred=options.filter(o=>fresh.includes(o.c)),pool=preferred.length?preferred:options;
 // The same quest stays on screen all day, so reloading cannot reroll an easier one.
 const seed=[...day].reduce((n,ch)=>(n*31+ch.charCodeAt(0))>>>0,7);
 if(pool.length){const {q,c}=pool[seed%pool.length];return {id:q.id,place:q.place,icon:q.icon,char:c,text:q.task(c,byChar.get(c))};}
 const w=byChar.get(fresh.at(-1)||Object.keys(state.records).at(-1));
 return w?{id:'story',place:'讲故事',icon:'🏠',char:w.char,text:`用“${w.word}”给家人讲一句今天的小故事。`}:{id:'story',place:'讲故事',icon:'🏠',char:'木',text:'在家里找一样木头做的东西，用“木”说一句话。'};
}


/* audio.js */
let context,master,fx,timer,enabled=false,step=0,volume=.12,speaking=false;
function ensureContext(){if(context)return true;const A=window.AudioContext||window.webkitAudioContext;if(!A)return false;context=new A();master=context.createGain();master.gain.value=0;master.connect(context.destination);fx=context.createGain();fx.gain.value=.5;fx.connect(context.destination);return true;}
const melody=[0,4,7,12,7,4,2,7,9,7,4,2,0,4,7,14,12,9,7,4,2,4,7,2];
function tone(midi,when,length,gain){const o=context.createOscillator(),g=context.createGain();o.type='sine';o.frequency.value=440*Math.pow(2,(midi-69)/12);g.gain.setValueAtTime(0,when);g.gain.linearRampToValueAtTime(gain,when+.08);g.gain.exponentialRampToValueAtTime(.0001,when+length);o.connect(g);g.connect(master);o.start(when);o.stop(when+length+.05);}
function tick(){if(!enabled||document.hidden||!context||context.state!=='running')return;const t=context.currentTime; tone(60+melody[step%melody.length],t,2.9,.18);if(step%4===0){tone(48+(step%8===0?0:5),t,4,.12);tone(55+(step%8===0?0:5),t+.12,3.6,.06);}step++;}
async function toggleMusic(){if(!ensureContext())throw Error('这个浏览器暂不支持背景音乐。');enabled=!enabled;if(enabled){await context.resume();master.gain.setTargetAtTime(volume,context.currentTime,.3);tick();timer=setInterval(tick,1400);}else{clearInterval(timer);master.gain.setTargetAtTime(0,context.currentTime,.2);}return enabled;}
function setVolume(v){volume=v;if(master)master.gain.setTargetAtTime(enabled?(speaking?v*.12:v):0,context.currentTime,.15);}
function musicOn(){return enabled;}
function speak(text,onUnavailable=()=>{}){
 if(!('speechSynthesis'in window)){onUnavailable();return;}
 window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='zh-CN';u.rate=.78;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.voiceURI===preferredVoice)||voices.find(v=>/^zh[-_]CN/i.test(v.lang))||voices.find(v=>/^zh/i.test(v.lang));if(voice)u.voice=voice;
 speaking=true;setVolume(volume);const restore=()=>{speaking=false;setVolume(volume);};u.onend=restore;u.onerror=e=>{restore();if(!['interrupted','canceled'].includes(e.error))onUnavailable();};window.speechSynthesis.speak(u);
}
function stopSpeech(){window.speechSynthesis?.cancel();speaking=false;setVolume(volume);}
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopSpeech();context?.suspend();}else if(enabled)context?.resume();});
let preferredVoice='';
function setVoice(uri){preferredVoice=uri;}
function chineseVoices(){return window.speechSynthesis?.getVoices().filter(v=>/^zh|^cmn/i.test(v.lang))||[];}
// Short effect sounds for a correct answer or a finished character; independent of the music switch.
function chime(kind='ok'){if(!ensureContext())return;context.resume?.();const notes=kind==='done'?[67,72,76,79]:kind==='ok'?[72,79]:[69],t=context.currentTime;notes.forEach((n,i)=>{const o=context.createOscillator(),g=context.createGain();o.type='triangle';o.frequency.value=440*Math.pow(2,(n-69)/12);g.gain.setValueAtTime(0,t+i*.11);g.gain.linearRampToValueAtTime(.35,t+i*.11+.02);g.gain.exponentialRampToValueAtTime(.001,t+i*.11+.35);o.connect(g);g.connect(fx);o.start(t+i*.11);o.stop(t+i*.11+.4);});}


/* scenes.js */
// Learning-only visual cues. Every picture has an explicit semantic description.
// Unmapped/abstract words get a narrated language context, never a random placeholder picture.
const PICTURE_ROWS = `日|☀️|日：太阳
月|🌙|月：月亮
水|💧|水：一滴水
火|🔥|火：火焰
山|⛰️|山：高高的山
石|🪨|石：石头
手|🖐️|手：张开的手掌
足|🦶|足：脚
耳|👂|耳：耳朵
目|👁️|目：眼睛
心|❤️|心：心形示意
木|🪵|木：木头
禾|🌾|禾：谷类作物
米|🍚|米：煮好的米饭
竹|🎋|竹：竹子
花|🌷|花：一朵花
草|🌱|草：小草
叶|🍃|叶：叶子
果|🍎|果：苹果也是水果
风|🌬️|风：流动的空气示意
雨|🌧️|雨：雨滴从云中落下
云|☁️|云：空中的云朵
电|⚡|电：闪电
星|⭐|星：星星的示意
爱|❤️|爱：爱心的符号
松|🌲|松：针叶树的简化示意
枫|🍁|枫：枫叶
晴|☀️|晴：晴天能看见太阳
雪|❄️|雪：一片雪花
雷|⛈️|雷：雷雨天气
冰|🧊|冰：一块冰块
温|🌡️|温：用温度计观察温度
秋|🍁|秋：变红的秋叶
猫|🐈|猫：小猫
狗|🐕|狗：小狗
猪|🐖|猪：小猪
猴|🐒|猴：猴子
狐|🦊|狐：狐狸
狮|🦁|狮：狮子
狼|🐺|狼：灰狼
蝶|🦋|蝶：蝴蝶
蛙|🐸|蛙：青蛙
蚁|🐜|蚁：蚂蚁
蜂|🐝|蜂：蜜蜂
铅|✏️|铅：用在“铅笔”这个词里
笔|✒️|笔：写字的工具
纸|📄|纸：一张纸
饭|🍚|饭：米饭
菜|🥬|菜：青菜
糖|🍬|糖：糖果
蛋|🥚|蛋：鸡蛋
糕|🍰|糕：一块蛋糕
碗|🥣|碗：盛食物的碗
礼|🎁|礼：礼物
信|✉️|信：装在信封里的信
船|⛵|船：水上的帆船
岛|🏝️|岛：被水包围的陆地
宝|💎|宝：宝石
贝|🐚|贝：贝壳
睛|👁️|睛：眼睛
眼|👀|眼：眼睛
芽|🌱|芽：刚刚长出的小芽
书|📖|书：打开的书本
包|🎒|包：书包
歌|🎵|歌：用音符表示歌声
音|🎵|音：音符是记录声音的符号
钟|⏰|钟：时钟
门|🚪|门：房门
房|🏠|房：房屋
屋|🏠|屋：房屋
车|🚗|车：汽车
汽|🚗|汽：用在“汽车”这个词里
灯|💡|灯：电灯
伞|☂️|伞：雨伞
衣|👕|衣：衣服
鞋|👟|鞋：一只鞋
帽|🧢|帽：帽子
巾|🧣|巾：围巾
裙|👗|裙：裙子
裤|👖|裤：裤子
床|🛏️|床：睡觉用的床
钱|💰|钱：装钱的袋子示意
票|🎫|票：入场用的票
奶|🥛|奶：一杯牛奶
面|🍜|面：一碗面条
牙|🦷|牙：牙齿
鼻|👃|鼻：鼻子
嘴|👄|嘴：嘴巴
口|👄|口：嘴巴
脚|🦶|脚：脚掌
鸟|🐦|鸟：小鸟
鸡|🐔|鸡：母鸡
鸭|🦆|鸭：鸭子
牛|🐄|牛：奶牛
羊|🐑|羊：绵羊
马|🐎|马：一匹马
兔|🐇|兔：小兔
鼠|🐁|鼠：老鼠
虎|🐅|虎：老虎
熊|🐻|熊：熊的头部
鹿|🦌|鹿：鹿
象|🐘|象：大象
鱼|🐟|鱼：一条鱼
蚂|🐜|蚂：用在“蚂蚁”这个词里
蝴|🦋|蝴：用在“蝴蝶”这个词里
蚊|🦟|蚊：蚊子
蛇|🐍|蛇：一条蛇
龟|🐢|龟：乌龟
虾|🦐|虾：小虾
蟹|🦀|蟹：螃蟹
龙|🐉|龙：传说中的龙
雀|🦚|雀：用在“孔雀”这个词里
羽|🪶|羽：一根羽毛
桃|🍑|桃：桃子
梨|🍐|梨：梨子
苹|🍎|苹：用在“苹果”这个词里
蕉|🍌|蕉：用在“香蕉”这个词里
橙|🍊|橙：橙子
茶|🍵|茶：一杯茶
瓜|🍉|瓜：西瓜
豆|🫘|豆：豆子
春|🌸|春：春天开放的花
冬|❄️|冬：冬天的雪花
夏|☀️|夏：夏日的太阳
阳|☀️|阳：太阳
笑|😊|笑：微笑的表情
喜|😄|喜：喜悦的表情
惊|😲|惊：吃惊的表情
怕|😨|怕：害怕的表情`;
const PICTURES=Object.fromEntries(PICTURE_ROWS.split('\n').map(r=>{const [char,glyph,caption]=r.split('|');return [char,{glyph,caption}];}));
function glyphFilename(glyph){return Array.from(glyph).filter(c=>c.codePointAt(0)!==0xfe0f).map(c=>c.codePointAt(0).toString(16)).join('-')+'.svg';}
const sEsc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const person=(x,y,scale=1,color='#7797c5')=>`<g transform="translate(${x} ${y}) scale(${scale})"><circle cy="-28" r="14" fill="#f0c9a4"/><path d="M-14-29q1-25 27-5" fill="#5b5662"/><path d="M-22 28v-27q22-15 44 0v27" fill="${color}"/><path d="M-11 28v23m22-23v23" stroke="#617185" stroke-width="9" stroke-linecap="round"/><path d="M-22 3l-11 22m55-22 11 22" stroke="#edc4a0" stroke-width="8" stroke-linecap="round"/></g>`;
const tree=(x,y,scale=1)=>`<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0 20v-65" stroke="#ad8869" stroke-width="9"/><circle cy="-68" r="35" fill="#91b79a"/><circle cx="-24" cy="-48" r="23" fill="#85aa8c"/><circle cx="24" cy="-47" r="26" fill="#96bc96"/></g>`;
const river=`<path d="M0 132q90-38 160 0t140-4v62H0" fill="#b4dbe3"/><path d="M34 148q28-9 57 0m47 15q28-9 57 0m25-19q25-8 52 0" stroke="#e9f8fc" stroke-width="4" fill="none" stroke-linecap="round"/>`;
const DRAWINGS={
 人:{caption:'人：家人站在一起',svg:person(103,96,.8)+person(151,117,.58,'#e4bd7e')+person(198,96,.8,'#9ebc92')},
 森:{caption:'森：许多树组成森林',svg:tree(95,119,.8)+tree(201,120,.85)+tree(151,146,1)},
 林:{caption:'林：两棵树组成树林的字形线索',svg:tree(115,137,.85)+tree(191,137,.85)},
 树:{caption:'树：有树干、树枝和树叶',svg:tree(151,135,1.05)},
 柳:{caption:'柳：细长下垂的柳枝',svg:'<path d="M151 160V70m0 22-25-18m25 27 28-31" stroke="#aa8967" stroke-width="8" fill="none"/><path d="M151 65Q91 33 80 141m71-75q-37-34-41 96m41-96q22-37 43 83m-43-83q58-22 74 75" stroke="#87b58d" stroke-width="7" fill="none" stroke-linecap="round"/>'},
 棉:{caption:'棉：枝上的棉花，不是云朵',svg:'<path d="M151 163V82m0 45-37-20m37 4 39-34" stroke="#a48365" stroke-width="5" fill="none"/><g stroke="#d4cec2" stroke-width="2" fill="#fffdf6"><path d="M114 111q-33-7-23-27-6-22 15-22 12-19 26-2 26 0 21 22 3 27-39 29"/><path d="M183 86q-25-6-16-23-4-19 12-20 11-17 24-3 23 2 18 20 1 26-38 26"/></g><path d="m108 110 11 8 9-10m49-23 10 9 10-12" fill="#b3a17b"/>'},
 桌:{caption:'桌：桌面下面有桌腿',svg:'<path d="M83 103v61m134-61v61" stroke="#ad8d70" stroke-width="11"/><rect x="67" y="88" width="166" height="20" rx="7" fill="#d7b78f"/><path d="M114 87V72h57v15" fill="#8ca7c5"/><rect x="177" y="64" width="22" height="24" rx="3" fill="#b3c9a5"/>'},
 椅:{caption:'椅：有靠背和座位的椅子',svg:'<rect x="112" y="46" width="77" height="63" rx="8" fill="#d9b68b"/><path d="M114 108v59m73-59v59" stroke="#b28e6d" stroke-width="10"/><rect x="105" y="104" width="90" height="17" rx="5" fill="#cda578"/>'},
 窗:{caption:'窗：可以透光、打开的窗户',svg:'<rect x="91" y="36" width="118" height="119" rx="4" fill="#b8d7e9" stroke="#b39d83" stroke-width="8"/><path d="M150 39v114M95 96h110" stroke="#fffcf3" stroke-width="7"/><path d="m105 61 21-15m42 38 22-17" stroke="white" stroke-width="5" stroke-linecap="round"/>'},
 田:{caption:'田：分成几块的田地',svg:'<path d="m62 93 85-39 93 41-89 67z" fill="#b3c87d" stroke="#8eaa6f" stroke-width="3"/><path d="m106 74 90 41m-92 25 89-65" stroke="#eee3bd" stroke-width="7"/><path d="m98 101 5-9m62 44 4-10m-8-47 6-9m29 21 5-9" stroke="#779565" stroke-width="4"/>'},
 土:{caption:'土：种子下面的泥土',svg:'<path d="M61 123q37-16 84-5t94-4v50H61" fill="#b99a78"/><path d="M149 125V85m0 21q-31-22-22-35 29 5 22 35m2-10q25-29 36-16-3 19-36 16" fill="#93b485" stroke="#7d9b72" stroke-width="3"/><g fill="#8f745b"><circle cx="94" cy="140" r="4"/><circle cx="186" cy="148" r="3"/><circle cx="210" cy="134" r="4"/></g>'},
 河:{caption:'河：弯弯的河流',svg:'<path d="M178 45C82 73 224 89 127 118S183 151 131 190" stroke="#8cc6d7" stroke-width="30" fill="none"/><path d="M179 45C83 73 225 89 128 118" stroke="#d1eef4" stroke-width="4" fill="none"/>'},
 湖:{caption:'湖：陆地围着的一片水',svg:'<ellipse cx="152" cy="127" rx="99" ry="38" fill="#9ccdd9"/><path d="M90 119h37m18 20h42m-29-28h36" stroke="#dff3f7" stroke-width="4" stroke-linecap="round"/>'+tree(63,89,.45)+tree(233,89,.4)},
 海:{caption:'海：广阔的海面和波浪',svg:river+'<path d="M0 109q25-20 50 0t50 0 50 0 50 0 50 0 50 0v44H0" fill="#91c5d9"/><path d="M0 113q25-20 50 0t50 0 50 0 50 0 50 0 50 0" stroke="#dceff5" stroke-width="4" fill="none"/>'},
 桥:{caption:'桥：跨过河流的桥',svg:river+'<path d="M58 146q92-94 184 0" fill="none" stroke="#c8ae8d" stroke-width="18"/><path d="M58 131q92-94 184 0m-150-25v25m37-45v25m44-25v25m37-5v25" fill="none" stroke="#a78b71" stroke-width="5"/>'},
 露:{caption:'露：清晨叶片上的露珠',svg:'<path d="M85 149Q66 52 216 47q5 107-131 102" fill="#9dbb88"/><path d="m89 144 111-81" stroke="#c7d7ac" stroke-width="4"/><path d="M151 76q-25 30 0 35 25-5 0-35" fill="#97cee1" stroke="#d0eaf0" stroke-width="3"/>'},
 多:{caption:'多和少：同样的苹果，左边多',svg:''},少:{caption:'少和多：同样的苹果，右边少',svg:''},
 大:{caption:'大和小：同样的圆，左边大',svg:'<circle cx="109" cy="109" r="42" fill="#91b3cb"/><circle cx="211" cy="124" r="24" fill="#91b3cb"/>'},
 小:{caption:'小和大：同样的圆，右边小',svg:'<circle cx="109" cy="109" r="42" fill="#91b3cb"/><circle cx="211" cy="124" r="24" fill="#91b3cb"/>'},
 走:{caption:'走：两脚交替向前',svg:'<circle cx="153" cy="49" r="15" fill="#edc5a2"/><path d="m151 69-6 43" stroke="#7899bb" stroke-width="25"/><path d="m144 78-26 23m33-21 29 11m-35 22-27 39m29-38 31 38" stroke="#6b8096" stroke-width="9" fill="none" stroke-linecap="round"/>'},
 跑:{caption:'跑：向前跑动，双臂摆动',svg:'<circle cx="173" cy="48" r="14" fill="#edc5a2"/><path d="m162 68-25 35" stroke="#7899bb" stroke-width="23"/><path d="m160 74 25 15 17-11m-45-9-27-1-12 15m22 21 29 19-16 25m-19-44-21 30-27-6" stroke="#6b8096" stroke-width="8" fill="none" stroke-linecap="round"/>'}
};
const NUMBERS={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1000,万:10000,零:0};
const COLORS={红:'#dd827d',黄:'#edcb69',蓝:'#82a9d7',绿:'#88b28d',白:'#fffdf6',黑:'#3e4a54',紫:'#ad96c4'};
// These words use a different sense from the available icon (e.g. 奶奶 vs 牛奶),
// or the icon depicts another animal/object. Show the example sentence instead.
const CONTEXT_ONLY=new Set(['口','电','米','宝','贝','奶','面','鼠','龙','雀']);
const MOTIONS={雨:'rain',雪:'rain',柳:'sway',叶:'sway',风:'sway',云:'float',船:'float',蝶:'float',蜂:'float',走:'run',跑:'run',芽:'grow',星:'glow',晴:'glow'};
function visualPlan(w){if(DRAWINGS[w.char])return {kind:'diagram',caption:DRAWINGS[w.char].caption};if(!CONTEXT_ONLY.has(w.char)&&PICTURES[w.char])return {kind:'picture',caption:PICTURES[w.char].caption};if(Object.hasOwn(NUMBERS,w.char))return {kind:'number',caption:`${w.char}：数字 ${NUMBERS[w.char]}`};if(COLORS[w.char])return {kind:'color',caption:`${w.char}：${w.char}色`};return {kind:'context',caption:`用“${w.other}”读懂小情境`};}
const backdrop='<rect width="300" height="190" rx="22" fill="#eef4f6"/><ellipse cx="150" cy="165" rx="110" ry="13" fill="#dce8d9"/>';
function scene(w){const plan=visualPlan(w),motion=MOTIONS[w.char]||'';let inner='';
 if(plan.kind==='picture'){const p=PICTURES[w.char];inner=`<div class="scene-stage"><img class="scene-symbol ${motion?'motion-'+motion:''}" src="assets/illustrations/${glyphFilename(p.glyph)}" alt="${sEsc(p.caption)}" width="104" height="104"></div>`;}
 else if(plan.kind==='context'){inner=`<div class="context-scene"><span class="context-label">小兔讲情境</span><div class="context-bubble">${sEsc(w.sentence).replaceAll(sEsc(w.other),`<strong>${sEsc(w.other)}</strong>`)}</div><svg viewBox="0 0 120 82" aria-hidden="true"><ellipse cx="60" cy="76" rx="33" ry="5" fill="#dce5e0"/><ellipse cx="46" cy="23" rx="8" ry="20" fill="#fffdf5" stroke="#d3dcd7"/><ellipse cx="73" cy="23" rx="8" ry="20" fill="#fffdf5" stroke="#d3dcd7"/><rect x="30" y="28" width="61" height="45" rx="23" fill="#fffdf5" stroke="#d3dcd7"/><circle cx="48" cy="48" r="2.5" fill="#556774"/><circle cx="72" cy="48" r="2.5" fill="#556774"/><path d="M55 57q5 6 10 0" stroke="#657781" stroke-width="2" fill="none"/></svg></div>`;}
 else {let drawing=DRAWINGS[w.char]?.svg||'';if(plan.kind==='number')drawing=`<text x="150" y="127" text-anchor="middle" font-family="sans-serif" font-size="${NUMBERS[w.char]>999?52:78}" fill="#6f8eae">${NUMBERS[w.char]}</text>`;if(plan.kind==='color')drawing=`<rect x="101" y="52" width="100" height="100" rx="23" fill="${COLORS[w.char]}" stroke="#bdc9d0" stroke-width="2"/>`;if(['多','少'].includes(w.char))drawing=[75,105,135,215].map((x,i)=>`<g transform="translate(${x} ${i<3?105:116})"><circle r="16" fill="#d8847c"/><path d="M0-15v-8m0 6q9-14 15-6" stroke="#8fa26a" stroke-width="4" fill="none"/></g>`).join('');inner=`<svg viewBox="0 0 300 190" role="img" aria-label="${sEsc(plan.caption)}">${backdrop}<g class="scene-symbol ${motion?'motion-'+motion:''}">${drawing}</g></svg>`;}
 return `<div class="scene-card" data-visual-kind="${plan.kind}" aria-label="${sEsc(plan.caption)}">${inner}<small>${sEsc(plan.caption)}</small>${motion?'<button class="text-button" data-act="animateScene">↻ 再看一次</button>':'<span class="visual-purpose">看懂意思，再记住字形</span>'}</div>`;
}


/* app.js */





const $=s=>document.querySelector(s), app=$('#app'),modal=$('#modal'),byChar=new Map(WORDS.map(w=>[w.char,w]));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state=freshState(),storageOK=true,writer=null,writerVersion=0,route='home',filter='all',themeIndex=null,practiceChar=null,placement=null,game=null,feedbackTimer=null,practiceMode='trace',writeTry=null;
try{const raw=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(raw){state=validateBackup(raw,WORDS);state.settings.voice=typeof raw.settings?.voice==='string'?raw.settings.voice:'';state.settings.musicVolume=Number.isFinite(raw.settings?.musicVolume)?Math.min(.25,Math.max(.01,raw.settings.musicVolume)):.12;state.confusions=Array.isArray(raw.confusions)?raw.confusions.filter(x=>x&&byChar.has(x.char)&&typeof x.chosen==='string').slice(-80):[];if(raw.active&&Array.isArray(raw.active.tasks)&&raw.active.tasks.length<70&&raw.active.tasks.every(x=>byChar.has(x.char)&&['learn','quiz','write','transfer'].includes(x.kind))&&raw.active.results&&raw.active.plan&&Number.isInteger(raw.active.index)&&raw.active.index>=0&&raw.active.index<raw.active.tasks.length)state.active=raw.active;}}catch{storageOK=false;}
setVolume(state.settings.musicVolume);setVoice(state.settings.voice||'');
const icons={home:'<path d="m3 10 9-7 9 7v10H4V10m5 10v-7h6v7"/>',map:'<path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5m6-2v16m6-14v16"/>',book:'<path d="M12 5v16M3 3q6-1 9 2 3-3 9-2v16q-6-1-9 2-3-3-9-2V3"/>',cup:'<path d="M7 3h10v6a5 5 0 0 1-10 0V3m0 2H3v3q0 4 5 4m9-7h4v3q0 4-5 4m-4 2v6m-4 0h8"/>',garden:'<path d="M12 21V10m0 4C3 15 2 7 3 5c8-1 10 5 9 9m0-4C12 3 17 1 21 3c0 6-4 9-9 7M5 21h14"/>',sound:'<path d="M11 4 6 8H3v8h3l5 4V4m4 4q4 4 0 8m3-11q7 7 0 14"/>',write:'<path d="m4 17 12-12 4 4L8 21H4v-4m10-10 4 4M16 5l2-2 4 4-2 2"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',check:'<path d="m5 12 4 4L20 5"/>',refresh:'<path d="M20 8a8 8 0 1 0 0 8M20 3v5h-5"/>',star:'<path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/>'};
const icon=n=>`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n]||icons.star}</svg>`;
// Platform emoji differ between iPad, Android and desktop; the bundled Twemoji SVGs look the same everywhere.
const pic=(glyph,label='')=>`<img class="emoji" src="assets/illustrations/${glyphFilename(glyph)}" alt="${esc(label)}" draggable="false">`;
const btn=(text,act,style='',extra='')=>`<button class="button ${style}" data-act="${act}" ${extra}>${text}</button>`;
const audioBtn=(text,label='听一听')=>`<button class="text-button" data-act="say" data-text="${esc(text)}">${icon('sound')} ${label}</button>`;
const wordSpeech=w=>`${w.word}的${w.char}。${w.word}。`;
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));storageOK=true;}catch{storageOK=false;toast('浏览器暂时无法保存。请到家长页导出备份。');}}
let toastTimer;function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3400);}
function say(text){speak(text,()=>toast('未能播放中文语音。请在家长设置中试听，或在平板系统中安装中文语音。'));}
function showModal(html){$('#modal-body').innerHTML=html;if(!modal.open)modal.showModal();}
function closeModal(){modal.close();}
function stopWriter(){writerVersion++;writer?.cancelQuiz();writer?.pauseAnimation();writer=null;}
function navigate(page){closeModal();stopSpeech();stopWriter();clearTimeout(feedbackTimer);route=page;location.hash=page;render();window.scrollTo({top:0,behavior:'instant'});}
function nav(){const focus=['study','placement','complete','practice'].includes(route);document.body.classList.toggle('focus',focus);const current=['story','game','map','book','rank'].includes(route)?'garden':route;$('#nav').innerHTML=focus?'':[['home','home','今天'],['garden','garden','我的小岛']].map(([i,p,l])=>`<a class="nav-item ${current===p?'active':''}" href="#${p}" data-nav="${p}" ${current===p?'aria-current="page"':''}>${icon(i)}${l}</a>`).join('');}
function head(title,desc,side=''){return `<div class="page-head"><div><h1>${title}</h1><p>${desc}</p></div>${side}</div>`;}
function dailyDone(){const d=getDay(state);return d.newChars.length>0&&d.newChars.length>=(d.target??state.settings.target);}
// One screen, one action: the child sees a greeting, today's real plan and a single button.
function home(){const d=getDay(state),plan=createPlan(state,WORDS),done=dailyDone()&&!state.active,hour=new Date().getHours(),greet=hour<11?'早上好':hour<18?'下午好':'晚上好';
 const summary=state.active?'上次的探险还没做完，接着来。':done?'今天完成啦。':!state.placement?'先认认看，小兔会找到适合你的起点。':`今天${plan.reviewChars.length?`再认 ${plan.reviewChars.length} 个旧字，`:''}认识 ${plan.newChars.length} 个新字${plan.writeChars.length?`，写 ${plan.writeChars.length} 个字`:''}。`;
 const quest=done?lifeQuest(state,WORDS,today()):null,theme=!state.active&&!done&&state.placement&&plan.newChars[0]?THEMES[byChar.get(plan.newChars[0]).unit]:null;
 app.innerHTML=`<div class="today"><p class="greet">Cindy，${greet}</p><div class="today-art"><img src="assets/island.svg" alt="小兔坐在安静的森林小岛上读书">${decorHTML('hero')}</div>${theme?`<p class="today-theme">${pic(theme.icon,theme.name)} ${esc(theme.desc)}</p>`:''}<p class="today-summary">${summary}</p>${btn(state.active?'继续':done?'看看小岛':'开始',done?'garden':'start','big')}${done?`<p class="small muted" style="margin-top:14px">${d.written.length?'':'今天的字还没写完，明天接着写。'}</p>`:''}</div>${quest?`<div class="card family-card"><div class="mentor"><i>${pic(quest.icon,quest.place)}</i><div><span class="tiny-label">把汉字带回生活 · ${quest.place}</span><strong style="color:var(--ink);display:block">${esc(quest.text)}</strong><p>做到了就点一下，护照会盖一枚印章。不用拍照。</p></div></div><div style="margin-top:15px">${btn(state.life[today()]?'今天的印章已经盖好 ✓':'我做到了','family','soft',`data-quest="${quest.id}" data-char="${quest.char}" ${state.life[today()]?'disabled':''}`)}</div></div>`:''}${!storageOK?'<div class="info-banner">当前浏览器无法保存进度，请使用普通浏览模式，或到家长页导出备份。</div>':''}`;
}
function mapPage(){app.innerHTML=head('每一个字，都通向新世界。',`一年级基础 → 二年级进阶 · ${WORDS.length} 个主题常用字`)+`<div class="info-banner">按主题编排的练习字库，不是某一版本教材的完整逐课字表。每天的探险会根据表现选字，地图可以自由预览。</div><div class="tabs"><button class="chip ${filter==='all'?'selected':''}" data-act="mapFilter" data-value="all">全部小岛</button><button class="chip ${filter==='1'?'selected':''}" data-act="mapFilter" data-value="1">一年级 · 打好基础</button><button class="chip ${filter==='2'?'selected':''}" data-act="mapFilter" data-value="2">二年级 · 继续探索</button></div><div class="grid">${THEMES.map((t,i)=>({t,i})).filter(({t})=>filter==='all'||String(t.grade)===filter).map(({t,i})=>{const ws=WORDS.filter(w=>w.unit===i),n=ws.filter(w=>state.records[w.char]).length;return `<button class="card theme-card" data-act="theme" data-unit="${i}"><span class="theme-icon">${pic(t.icon,t.name)}</span><span class="preview-chars">${ws.slice(0,3).map(w=>w.char).join(' ')}</span><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p><div class="progress"><span style="width:${n/ws.length*100}%;background:${t.grade===1?'#9cbba0':'#a4afe0'}"></span></div><p>${t.grade} 年级 · ${n}/${ws.length} 个已探索</p></button>`;}).join('')}</div>`;}
function bookPage(){const ws=WORDS.filter(w=>(themeIndex===null||w.unit===themeIndex)&&(filter==='all'||filter==='known'&&state.records[w.char]||filter==='due'&&state.records[w.char]?.due<=today()||filter==='written'&&state.records[w.char]?.writeCount>0));app.innerHTML=head(themeIndex!==null?THEMES[themeIndex].name:'我的汉字小花园',`每个字都能看拼音、听发音、读例句和练笔顺。`)+`<div class="tabs">${[['all','全部 '+(themeIndex===null?WORDS.length:WORDS.filter(w=>w.unit===themeIndex).length)],['known','探索过'],['due','需要复习'],['written','练过书写']].map(([v,l])=>`<button class="chip ${filter===v?'selected':''}" data-act="bookFilter" data-value="${v}">${l}</button>`).join('')}${themeIndex!==null?'<button class="chip" data-act="allWords">查看全部字库</button>':''}</div><div class="info-banner">小芽：刚学过（短期记忆） · 在长大：两个不同日期独立认对（巩固中） · 记得牢：至少三天独立认对（长期记忆）。描红只记“练过”；隔天不看描红写出来，才算“能独立写”。</div><div class="char-grid">${ws.map(w=>`<button class="char-card ${state.records[w.char]?'known':''}" data-act="word" data-char="${w.char}"><span class="hanzi">${w.char}</span><small>${w.pinyin}</small><span class="stage">${stageOf(state.records[w.char])}</span></button>`).join('')}</div>${!ws.length?'<div class="card empty"><b>这里还在等第一个小发现。</b>完成一次今日探险，学过的字就会住进来。</div>':''}`;}
function wordDetail(char){const w=byChar.get(char);if(!w)return;showModal(`<div style="text-align:center"><div class="eyebrow">汉字小档案 · ${w.grade} 年级</div><div class="pinyin">${w.pinyin}</div><div class="big-char">${w.char}</div>${audioBtn(wordSpeech(w),'读这个字')}<div class="words-line"><span class="word-tag">${w.word}</span><span class="word-tag">${w.other}</span></div><p class="small muted">部首：${w.radical} · 认字：${stageOf(state.records[char])} · 书写：${writeStageOf(state.writing[char])}</p><p class="sentence">${esc(w.sentence)}</p>${audioBtn(w.sentence,'读句子')}<div class="modal-actions" style="justify-content:center">${btn('看看情境','sceneWord','secondary',`data-char="${char}"`)}${btn('练一练笔顺','practiceWord','',`data-char="${char}"`)}</div></div>`);}
// Early items cost a day or two of stars so the island changes often; big ones stay as long goals.
const SHOP=[{id:'flower',name:'小花圃',icon:'🌷',cost:5,desc:'让认真长成一片花。',x:24,y:65},{id:'bird',name:'小鸟',icon:'🐦',cost:6,desc:'每天来听你读字。',x:60,y:18},{id:'mushroom',name:'小蘑菇',icon:'🍄',cost:8,desc:'雨后悄悄长出来。',x:40,y:72},{id:'butterfly',name:'蝴蝶',icon:'🦋',cost:10,desc:'停在你认对的字上。',x:82,y:40},{id:'kite',name:'风筝',icon:'🪁',cost:14,desc:'把小小的发现送上天空。',x:75,y:20},{id:'boat',name:'小船',icon:'⛵',cost:18,desc:'载着新字去远方。',x:12,y:80},{id:'cat',name:'读书小猫',icon:'🐈',cost:22,desc:'一位安静的阅读伙伴。',x:65,y:67},{id:'rainbow',name:'雨后彩虹',icon:'🌈',cost:30,desc:'每一次尝试都有自己的颜色。',x:28,y:22},{id:'balloon',name:'热气球',icon:'🎈',cost:40,desc:'带着汉字，看更远的风景。',x:15,y:25},{id:'lighthouse',name:'小灯塔',icon:'🗼',cost:55,desc:'给未来的自己留一盏灯。',x:76,y:53}];
// Positions she chose by dragging are kept in state.decorPos; the home and completion islands reuse them at a smaller scale.
function decorHTML(where){return SHOP.filter(x=>state.decor.includes(x.id)).map(x=>{const p=state.decorPos?.[x.id]||x;return `<span class="decoration" data-decor="${x.id}" aria-label="${x.name}" style="left:${where==='hero'?p.x:p.x}%;top:${p.y}%;${where==='hero'?'font-size:27px;':''}">${pic(x.icon,x.name)}</span>`;}).join('');}
let drag=null;
document.addEventListener('pointerdown',e=>{const el=e.target.closest('.garden .decoration');if(!el)return;const box=el.parentElement.getBoundingClientRect();drag={el,id:el.dataset.decor,box};el.setPointerCapture?.(e.pointerId);el.classList.add('dragging');e.preventDefault();});
document.addEventListener('pointermove',e=>{if(!drag)return;const x=Math.max(3,Math.min(92,(e.clientX-drag.box.left)/drag.box.width*100)),y=Math.max(3,Math.min(88,(e.clientY-drag.box.top)/drag.box.height*100));drag.el.style.left=x+'%';drag.el.style.top=y+'%';drag.pos={x:Math.round(x),y:Math.round(y)};});
document.addEventListener('pointerup',e=>{if(!drag)return;drag.el.classList.remove('dragging');if(drag.pos){state.decorPos??={};state.decorPos[drag.id]=drag.pos;save();}drag=null;});
function gardenPage(){app.innerHTML=head('我的小岛','星星来自认真认字、复习和书写。',`<span class="pill yellow">${icon('star')} ${state.stars} 颗星星</span>`)+`<div class="garden"><img src="assets/island.svg" alt="可以用星星兑换装饰的小岛">${decorHTML('garden')}</div>${growthHTML()}<div class="section-head"><h2>为小岛选一份礼物</h2><span class="small muted">摆上的装饰可以用手指拖到你喜欢的位置</span></div><div class="grid">${SHOP.map(x=>{const owned=state.owned.includes(x.id),on=state.decor.includes(x.id);return `<section class="card shop-item"><div class="item-art">${pic(x.icon,x.name)}</div><h3>${x.name}</h3><p>${x.desc}</p>${btn(owned?on?'已摆上 · 收起来':'摆上小岛':state.stars<x.cost?`还差 ${x.cost-state.stars} 颗星`:`${x.cost} 颗星星 · 换`,owned?'toggleDecor':'buy',owned?'soft':state.stars<x.cost?'secondary':'',`data-id="${x.id}" ${!owned&&state.stars<x.cost?'disabled':''}`)}</section>`;}).join('')}</div>${passportHTML()}<div class="section-head"><h2>自由探索</h2><span class="small muted">不算今天的任务，想玩就玩</span></div><div class="tasks"><button class="card task-card" data-act="book"><span class="round-icon" style="background:#eaf1e7;color:#799a72">${icon('book')}</span><h3>我的字库</h3><p>看拼音、听发音、自由练字</p><span class="arrow">↗</span></button><button class="card task-card" data-act="map"><span class="round-icon" style="background:#dce9fa;color:#5f7fc0">${icon('map')}</span><h3>学习地图</h3><p>28 个主题小岛</p><span class="arrow">↗</span></button><button class="card task-card" data-act="story"><span class="round-icon" style="background:#fbefdb;color:#b39b65">${icon('book')}</span><h3>故事里的汉字</h3><p>听一听，再自己读一小段</p><span class="arrow">↗</span></button><button class="card task-card" data-act="game"><span class="round-icon" style="background:#f3eaf8;color:#ae8cbf">${icon('map')}</span><h3>偏旁小侦探</h3><p>找线索，发现汉字里的秘密</p><span class="arrow">↗</span></button></div>`;}
// Growth cards say concrete things a child can understand; the full table stays one tap away for the parent.
function growthHTML(){const start=addDays(today(),-6),records=Object.values(state.records),week=records.filter(r=>r.cleanDays.filter(d=>d>=start).length>=1&&r.cleanDays.length>=2).length,secure=records.filter(r=>stageOf(r)==='记得牢').length,blind=Object.values(state.writing).filter(r=>r.blindDays.length).length,best=state.sessions.filter(s=>s.total>=3).sort((a,b)=>b.score-a.score||b.independent-a.independent)[0];
 const cards=[[records.length,'个字见过面'],[week,'个旧字这周还记得'],[secure,'个字过了几天，还记得'],[blind,'个字能凭记忆写']];
 return `<div class="section-head"><h2>我的成长</h2><button class="text-button" data-act="rank">看详细记录</button></div><div class="mini-stats growth">${cards.map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('')}</div>${best?`<p class="small muted">最认真的一次：${esc(best.day)}，${best.independent} 个字自己认出来。</p>`:''}`;}
function passportHTML(){const stamps=Object.values(state.life),count=id=>stamps.filter(x=>x.id===id).length,places=[...LIFE_QUESTS,{id:'story',place:'讲故事',icon:'🏠'}];return `<div class="section-head"><h2>小岛护照</h2><span class="small muted">把汉字带进生活，每天最多盖一枚印章</span></div><div class="passport">${places.map(q=>`<div class="stamp ${count(q.id)?'got':''} ${state.life[today()]?.id===q.id?'fresh':''}"><span>${pic(q.icon,q.place)}</span><b>${q.place}</b><small>${count(q.id)?count(q.id)+' 枚':'还没去过'}</small></div>`).join('')}</div><p class="small muted">最近找到：${stamps.slice(-8).map(x=>esc(x.char)).join('、')||'还没有，回首页看看今天的生活寻字。'}</p>`;}
function rankPage(){const start=addDays(today(),-6),list=state.sessions.filter(s=>s.total>0&&(filter!=='week'||s.day>=start)).sort((a,b)=>b.score-a.score||b.independent-a.independent||b.written-a.written).slice(0,20);app.innerHTML=`<div class="practice"><div class="practice-top"><button class="text-button" data-act="garden">← 我的小岛</button></div>`+head('详细记录','只和自己比。题量少的日子，比例会显得很高，看“自己认出”的数量更准。')+`<div class="tabs"><button class="chip ${filter==='week'?'selected':''}" data-act="rankFilter" data-value="week">最近 7 天</button><button class="chip ${filter!=='week'?'selected':''}" data-act="rankFilter" data-value="all">全部</button></div><section class="card"><table class="leaderboard"><thead><tr><th>日期</th><th>自己认出</th><th>借了提示</th><th>写了</th></tr></thead><tbody>${list.map(r=>`<tr><td>${esc(r.day)}</td><td><strong>${r.independent}</strong> / ${r.total} 个</td><td>${r.help||0} 次</td><td>${r.written||0} 个</td></tr>`).join('')}</tbody></table>${!list.length?'<div class="empty"><b>还没有记录。</b>完成一次今天的学习，就会留下第一条。</div>':''}</section><p class="small muted" style="margin-top:14px">“自己认出”指一个字在认字和换词再认里都不借提示、第一次就对。星星：自己认出 +3，借提示 +1，写完 +2；同一天不重复给。</p></div>`;}
function startIntro(){showModal(`<h2 class="modal-title">先认认看，你已经会哪些字？</h2><p class="muted">几道小题，从简单的开始。不确定就点“我还不确定”，不用猜，也不影响星星。</p>${audioBtn('你好，Cindy。欢迎来到汉字小岛。','先听听有没有声音')}<div class="modal-actions">${btn('从基础开始','placementSkip','secondary')}${btn('认认看','placementStart')}</div>`);}
function startDaily(reviewOnly=false){if(state.active){route='study';render();return;}if(!state.placement){startIntro();return;}const currentDay=today();state.days[currentDay]??={newChars:[],reviewChars:[],written:[],points:0};state.days[currentDay].target??=state.settings.target;state.days[currentDay].writeTarget??=state.settings.writeTarget;let plan=createPlan(state,WORDS);if(reviewOnly){plan.newChars=[];plan.writeChars=plan.writeChars.filter(c=>plan.reviewChars.includes(c));}if(!plan.newChars.length&&!plan.reviewChars.length){showModal(`<h2 class="modal-title">今天已经做得很好了。</h2><p class="muted">${Object.keys(state.records).length===WORDS.length?'字库都探索过了，接下来继续巩固。':'该休息啦。旧字到复习日会回来，不需要反复刷分。'}</p><div class="modal-actions">${btn('看看我的小岛','garden')}</div>`);return;}
 const tasks=[];for(const c of plan.reviewChars){if(state.records[c]?.strength===0)tasks.push({kind:'learn',char:c,review:true});tasks.push({kind:'quiz',char:c,review:true});if(plan.writeChars.includes(c))tasks.push({kind:'write',char:c});}for(const c of plan.newChars){tasks.push({kind:'learn',char:c},{kind:'quiz',char:c});if(plan.writeChars.includes(c))tasks.push({kind:'write',char:c});}for(const c of plan.writeChars)if(!plan.reviewChars.includes(c)&&!plan.newChars.includes(c))tasks.push({kind:'write',char:c});for(const c of shuffle([...plan.reviewChars,...plan.newChars]))tasks.push({kind:'transfer',char:c});
 const results=Object.fromEntries([...new Set([...plan.reviewChars,...plan.newChars,...plan.writeChars])].map(c=>[c,{mistakes:0,hinted:false,recognized:false,transfer:false,written:false,writingMistakes:0}]));state.active={id:`${Date.now()}-${Math.random().toString(36).slice(2,8)}`,plan,tasks,index:0,results,question:null};save();route='study';render();}
// The primary button names the next step instead of a generic "continue".
function nextLabel(){const s=state.active;if(!s)return '完成';const t=s.tasks[s.index+1];return !t?'完成 ✓':t.kind==='write'?'写一写 '+icon('arrow'):t.kind==='transfer'?'再认一次 '+icon('arrow'):t.kind==='learn'?'下一个字 '+icon('arrow'):'认一认 '+icon('arrow');}
function stageName(task){return !task?'':task.kind==='write'?'写一写':task.kind==='transfer'?'换个词再认':task.kind==='learn'?'认一认':task.review?'再认一认':'认一认';}
function studyShell(body,footer=''){const s=state.active,task=s?.tasks[s.index];return `<div class="practice"><div class="practice-top"><button class="text-button" data-act="pause">← 休息一下</button><span class="pill">${stageName(task)}</span></div><div class="progress" style="margin-bottom:20px"><span style="width:${s?(s.index/s.tasks.length*100):0}%;background:#93a7df"></span></div><section class="card study-card">${body}</section>${footer}</div>`;}
// Step 0 gives sound, shape and one word; step 1 adds the second word and the sentence in the same place.
function learnHTML(w,step){return `<div class="learn-layout"><div><div class="pinyin">${w.pinyin}</div><div class="big-char">${w.char}</div>${audioBtn(wordSpeech(w),'听一听')}</div>${scene(w)}</div><div class="words-line"><button class="word-tag" data-act="say" data-text="${w.word}" aria-label="朗读${w.word}">${w.word} ◖</button>${step?`<button class="word-tag" data-act="say" data-text="${w.other}" aria-label="朗读${w.other}">${w.other} ◖</button>`:''}</div>${step?`<p class="sentence">${esc(w.sentence).replaceAll(w.other,`<em>${w.other}</em>`)}</p>${audioBtn(w.sentence,'听句子')}`:''}`;}
function studyPage(){if(!state.active){navigate('home');return;}const s=state.active,task=s.tasks[s.index],w=byChar.get(task.char);if(task.kind==='learn'){const step=s.learnStep||0;if(s.spoken!==s.index+'-'+step){s.spoken=s.index+'-'+step;speak(step?w.sentence:wordSpeech(w),()=>{});}app.innerHTML=studyShell(learnHTML(w,step),`<div class="study-footer"><span class="small muted">${step?'下一步，图片和拼音会藏起来。':''}</span>${step?btn(nextLabel(),'next'):btn('听一句话 '+icon('arrow'),'learnMore')}</div>`);}else if(task.kind==='write'){renderWriting(w,true);}else renderQuestion(w,task.kind==='transfer');}
function questionInit(w,transfer){const s=state.active;if(!s.question||s.question.taskIndex!==s.index){s.question={taskIndex:s.index,choices:optionsFor(w,WORDS),answered:false,wrong:[],hint:false};save();}return s.question;}
// Fixed layout: instruction on top, choices in the middle, feedback and the one next step at the bottom.
function renderQuestion(w,transfer){const s=state.active,q=questionInit(w,transfer),p=s.results[w.char];if(!q.spoken){q.spoken=true;speak(transfer?w.sentence:wordSpeech(w),()=>{});}const content=transfer?`<h2>换个词，再认一次</h2><p class="sentence">${esc(w.sentence).replaceAll(w.other,q.answered?`<em class="filled ok">${w.other}</em>`:q.wrong.length?`<em class="filled no">${w.other.replaceAll(w.char,q.wrong.at(-1))}</em>`:'<em>（　　）</em>')}</p><button class="button soft" data-act="say" data-text="${esc(w.sentence)}">${icon('sound')} 听句子</button>`:`<h2>听一听，选一个字</h2><button class="button soft" style="margin-top:18px" data-act="quizAudio">${icon('sound')} 重听</button><button class="text-button" style="display:block;margin:4px auto 0" data-act="noAudio">听不到声音？</button>`;
 app.innerHTML=studyShell(`${content}<div class="choices">${q.choices.map(c=>`<button class="choice ${transfer?'word-choice':''} ${q.answered&&c===w.char?'correct':''} ${q.wrong.includes(c)?'wrong':''}" data-act="answer" data-char="${c}" ${q.answered||q.wrong.includes(c)?'disabled':''}>${transfer?w.other.replaceAll(w.char,c):c}</button>`).join('')}</div>${q.hint?`<div class="hint-box">${w.char}（${w.pinyin}）· ${w.word}<br>看一看，再去选。</div>`:''}<div class="feedback ${q.answered?'success':q.wrong.length?'hint':''}" aria-live="polite">${q.answered?`<span class="mark ok">✓</span>${p.hinted||p.mistakes?'找到了':'对了'}`:q.wrong.length?'<span class="mark no">?</span>再看看':''}</div><div class="study-footer">${q.answered?'<span></span>'+btn(nextLabel(),'next','','id="question-next"'):`<button class="text-button" data-act="hint">我还不确定</button>`}</div>`);
}
function answer(char){const s=state.active;if(!s)return;const task=s.tasks[s.index],w=byChar.get(task.char),q=s.question;if(!q||q.answered||q.wrong.includes(char))return;const p=s.results[w.char];if(char===w.char){q.answered=true;if(task.kind==='transfer')p.transfer=true;else p.recognized=true;chime('ok');navigator.vibrate?.(12);if(!p.hinted&&!p.mistakes){say(wordSpeech(w));clearTimeout(feedbackTimer);feedbackTimer=setTimeout(nextTask,1600);}}else{q.wrong.push(char);p.mistakes++;state.confusions.push({char:w.char,chosen:char,day:today()});state.confusions=state.confusions.slice(-80);if(q.wrong.length>=2){q.hint=true;p.hinted=true;}}save();renderQuestion(w,task.kind==='transfer');}
function nextTask(){clearTimeout(feedbackTimer);const s=state.active;if(!s)return;const task=s.tasks[s.index];if(['quiz','transfer'].includes(task.kind)&&!s.question?.answered)return;if(task.kind==='write'&&!['written','watched','writeSkipped'].some(k=>s.results[task.char][k]))return;stopWriter();stopSpeech();s.index++;s.question=null;s.learnStep=0;if(s.index>=s.tasks.length){const result=completeSession(state,s);save();route='complete';completionPage(result);nav();confetti();chime('done');return;}save();studyPage();window.scrollTo({top:0,behavior:'instant'});}
// Progress is saved after every step, so a rest needs no confirmation.
function pause(){navigate('home');toast('已经记住你做到哪里了。想继续时点“继续”。');}
const WRITE_MODES={blind:{name:'凭记忆写',tip:'不看描红，想一想再写。想不起来就点“看笔顺”。',again:'看笔顺'},trace:{name:'描红',tip:'沿着浅灰色的字，一笔一笔写。',again:'再看一次'},guided:{name:'跟着提示写',tip:'写错了，正确的那一笔会亮起来。',again:'再看一次'},watch:{name:'一笔一笔看',tip:'先看清每一笔从哪里起、往哪里走。',again:'看整个字'}};
function writeMode(c,inSession){return inSession?state.active.results[c].writeMode||=writeModeFor(state,c,today()):practiceMode;}
function renderWriting(w,inSession){stopWriter();const p=inSession?state.active.results[w.char]:null,mode=writeMode(w.char,inSession),m=WRITE_MODES[mode],lower=WRITE_LEVELS[WRITE_LEVELS.indexOf(mode)+1],already=inSession&&p.written,finished=inSession&&['written','watched','writeSkipped'].some(k=>p[k]);writeTry={char:w.char,mode,started:0,strokeErrors:{},mistakes:0,step:0,total:0};
 const body=`<h2>${mode==='blind'&&!already?`凭记忆写“${w.word.replaceAll(w.char,'○')}”的“○”`:`跟着写“${w.char}”`}</h2><p class="study-sub">${m.tip}</p><div class="stroke-dots" id="stroke-dots" aria-hidden="true"></div><div id="writer" class="writer-box" aria-label="${w.char}字${m.name}区域"><div id="stroke-feedback" class="grid-label" aria-live="polite">正在准备笔顺…</div></div><div class="write-actions">${mode==='watch'?btn('下一笔 →','strokeStep','soft','id="trace-button" disabled'):''}${mode==='blind'?btn('想不起来，看笔顺','downshift','soft','id="animate-button" disabled'):`<button class="text-button" data-act="animateWrite" id="animate-button" disabled>${m.again}</button>`}</div><div id="write-help" class="write-actions" ${finished||mode==='watch'?'':'hidden'}>${lower&&!finished&&mode!=='blind'?`<button class="text-button" data-act="downshift">帮帮我：换成「${WRITE_MODES[lower].name}」</button>`:''}${inSession&&!finished?'<button class="text-button" data-act="skipWrite">今天先写到这里</button>':''}</div><div class="study-footer"><span></span>${inSession?btn(nextLabel(),'next','',`id="writing-next" ${finished?'':'hidden'}`):btn('练习结束','book','secondary')}</div>`;
 app.innerHTML=inSession?studyShell(body):`<div class="practice"><div class="practice-top"><button class="text-button" data-act="book">← 返回字库</button><span class="pill">自由练字</span></div><section class="card study-card">${body}</section></div>`;
 const version=++writerVersion,box=$('#writer'),width=Math.floor(box.clientWidth);practiceChar=w.char;
 const fail=()=>{if(version!==writerVersion)return;$('#stroke-feedback').innerHTML='笔顺数据没有加载成功，请检查连接后重试。';$('#stroke-feedback').insertAdjacentHTML('beforeend','<button class="text-button" data-act="retryWriting">重新加载</button>');};
 if(!window.HanziWriter){fail();return;}
 writer=window.HanziWriter.create(box,w.char,{width,height:width,padding:22,showCharacter:!!already,showOutline:mode!=='blind'||!!already,strokeColor:'#526ed5',radicalColor:'#688e68',outlineColor:'#cfd7e3',drawingColor:'#536cbd',drawingWidth:16,strokeAnimationSpeed:.7,delayBetweenStrokes:330,highlightColor:'#87b38b',charDataLoader:(char,success,error)=>{if(window.CHARACTER_DATA?.[char]){success(window.CHARACTER_DATA[char]);return;}fetch(`assets/characters/${encodeURIComponent(char)}.json`).then(r=>{if(!r.ok)throw Error('data');return r.json();}).then(success).catch(error);},onLoadCharDataSuccess:data=>{if(version!==writerVersion)return;writeTry.total=data.strokes.length;$('#stroke-dots').innerHTML=data.strokes.map(()=>'<i></i>').join('');$('#animate-button').disabled=false;const tb=$('#trace-button');if(tb)tb.disabled=false;if(already){$('#stroke-feedback').textContent='这个字今天已经写过了。';return;}
  // The system leads: demonstrate, then invite the first stroke. No separate "start" button to find.
  if(mode==='watch')$('#stroke-feedback').textContent=`共 ${data.strokes.length} 笔。点“下一笔”，一笔一笔看。`;else if(mode==='blind')peekThenWrite();else animateWrite();},onLoadCharDataError:fail});
}
function finishWrite(completed,downshift=false){const t=writeTry,inSession=route==='study'&&!!state.active;if(!t)return;recordWriting(state,t.char,{level:t.mode,completed,strokeErrors:t.strokeErrors,ms:t.started?Date.now()-t.started:0,assigned:inSession,downshift});writeTry={...t,started:0,strokeErrors:{},mistakes:0};if(inSession){const p=state.active.results[t.char];if(completed&&t.mode==='watch')p.watched=true;else if(completed)p.written=true;}save();}
let helpTimer;
function showWriteHelp(){const h=$('#write-help');if(h)h.hidden=false;}
// Blind mode: show the character for a moment so she starts from a picture in her head, not from a blank.
async function peekThenWrite(){if(!writer)return;const current=writer,version=writerVersion;$('#stroke-feedback').textContent='先看一眼，记在心里。';current.showCharacter();await new Promise(r=>setTimeout(r,1800));if(version!==writerVersion)return;current.hideCharacter();await new Promise(r=>setTimeout(r,400));if(version!==writerVersion)return;quizWrite();}
function markStroke(i){const dot=document.querySelectorAll('#stroke-dots i')[i];if(dot)dot.classList.add('done');}
function writeDone(){document.querySelectorAll('#stroke-dots i').forEach(d=>d.classList.add('done'));clearTimeout(helpTimer);document.querySelectorAll('.write-actions').forEach(x=>x.replaceChildren());const next=$('#writing-next');if(next)next.hidden=false;}
async function animateWrite(){if(!writer)return;const current=writer,version=writerVersion;$('#stroke-feedback').textContent='先看一遍。';$('#animate-button').disabled=true;current.cancelQuiz();try{await current.animateCharacter();}catch{}if(version!==writerVersion)return;$('#animate-button').disabled=false;if(writeTry?.mode==='watch'){writeTry.step=0;current.hideCharacter();$('#stroke-feedback').textContent='再点“下一笔”，一笔一笔看。';return;}quizWrite();}
async function strokeStep(){if(!writer||!writeTry?.total)return;const current=writer,version=writerVersion,t=writeTry;if(t.step===0)current.hideCharacter();$('#trace-button').disabled=true;try{await current.animateStroke(t.step);}catch{}if(version!==writerVersion)return;markStroke(t.step);t.step++;if(t.step>=t.total){$('#stroke-feedback').textContent='每一笔都看清楚了。明天再试着自己写。';finishWrite(true);chime('done');$('#writer')?.classList.add('done');writeDone();if(!$('#writing-next'))toast('看完了，休息一下眼睛吧。');return;}$('#trace-button').disabled=false;$('#stroke-feedback').textContent=`第 ${t.step} 笔看好了 · 共 ${t.total} 笔`;}
function quizWrite(){if(!writer)return;const version=writerVersion,current=writer,c=practiceChar,t=writeTry,lower=WRITE_LEVELS[WRITE_LEVELS.indexOf(t.mode)+1];t.started=Date.now();t.strokeErrors={};t.mistakes=0;document.querySelectorAll('#stroke-dots i').forEach(d=>d.classList.remove('done'));clearTimeout(helpTimer);helpTimer=setTimeout(()=>{if(version===writerVersion)showWriteHelp();},45000);$('#stroke-feedback').textContent=t.mode==='blind'?'想一想第一笔在哪里，再落笔。':'轮到你了，从第一笔开始。';current.quiz({leniency:t.mode==='guided'?1.5:1,showHintAfterMisses:t.mode==='guided'?1:t.mode==='blind'?3:2,highlightOnComplete:true,onCorrectStroke:d=>{if(version!==writerVersion)return;markStroke(d.strokeNum);$('#stroke-feedback').textContent=`第 ${d.strokeNum+1} 笔，很稳。`;},onMistake:d=>{if(version!==writerVersion)return;t.mistakes++;t.strokeErrors[d.strokeNum]=(t.strokeErrors[d.strokeNum]||0)+1;if(t.mistakes>=(t.mode==='blind'?1:2))showWriteHelp();if(route==='study'&&state.active){state.active.results[c].writingMistakes++;save();}$('#stroke-feedback').textContent=t.mistakes>=5&&lower?`第 ${d.strokeNum+1} 笔有点难。可以换成「${WRITE_MODES[lower].name}」，不会少星星。`:'再试一次，看看从哪里起笔。';},onComplete:()=>{if(version!==writerVersion)return;finishWrite(true);chime('done');navigator.vibrate?.([15,40,15]);$('#writer')?.classList.add('done');$('#stroke-feedback').textContent=t.mode==='blind'?'你凭记忆写出来了。':'写完了，每一笔都在自己的位置上。';writeDone();if(!$('#writing-next'))toast('这次练习完成了。休息一下手指吧。');}});}
// Every line here is generated from today's real records; nothing claims more than what happened.
function completionPage(result){const r=result||{chars:[],earned:0,independent:0,written:0},s=state.sessions.at(-1),done=r.chars,written=state.days[today()]?.written||[],lines=[];
 const d=state.days[today()]||{reviewChars:[]},clean=done.filter(c=>state.records[c]?.cleanDays.includes(today())),helped=done.filter(c=>!clean.includes(c)),reviewed=clean.filter(c=>d.reviewChars.includes(c)),fresh=clean.filter(c=>!reviewed.includes(c));
 if(done.length)lines.push(`今天练习了：${done.join(' ')}`);if(fresh.length)lines.push(`${fresh.map(c=>`“${c}”`).join('')}换个词也认对了。`);if(reviewed.length)lines.push(`之前学的${reviewed.map(c=>`“${c}”`).join('')}，今天也认出来了。`);if(helped.length)lines.push(`${helped.map(c=>`“${c}”`).join('')}跟着提示找到了，过几天再认一次。`);if(written.length)lines.push(`${written.map(c=>`“${c}”`).join('')}按笔顺写出来了。`);
 const quest=lifeQuest(state,WORDS,today());const grew=r.earned>=8?'小岛上又多了一片新叶子。':r.earned>0?'小岛上冒出了一颗小芽。':'今天的练习已经记下来了。';
 app.innerHTML=`<div class="practice"><section class="card completion"><div class="today-art hero-island"><img src="assets/island.svg" alt="你的小岛">${decorHTML('hero')}</div><h1>今天完成啦！</h1><p class="muted">${grew}</p><div class="done-lines">${lines.map(l=>`<p>${esc(l)}</p>`).join('')||'<p>今天先到这里，明天再来。</p>'}</div><p class="pill yellow" style="margin:6px auto 18px">${icon('star')} +${r.earned} 颗星星</p><p class="small muted" style="margin-bottom:18px">${pic(quest.icon,quest.place)} 今天的生活寻字：${esc(quest.text)}</p>${btn('今天到这里','home','big')}<div style="margin-top:16px"><button class="text-button" data-act="garden">看看我的小岛</button></div></section></div>`;}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const el=document.createElement('div');el.className='sparkles';el.innerHTML=Array.from({length:13},(_,i)=>`<span style="left:${5+i*7}%;animation-delay:${Math.random()*.3}s;color:${['#a0b39a','#e6c57f','#9aaddc'][i%3]}">✧</span>`).join('');document.body.append(el);setTimeout(()=>el.remove(),2400);}
// Adaptive placement: start easy, step up after a correct answer, step down after "unsure"; stop after three misses in a row.
// Placement uses the same screen as a normal question: the clue plays by itself, one tap answers,
// the chosen tile is marked neutrally (no right/wrong) and the next clue follows on its own.
function placementPage(){if(!placement)placement={tier:1,answers:[],misses:0,answered:false};if(!placement.char){placement.char=placementPick(WORDS,placement.tier,placement.answers.map(a=>a.char))||placementPick(WORDS,2,placement.answers.map(a=>a.char));placement.choices=optionsFor(byChar.get(placement.char),WORDS);placement.spoken=false;}const w=byChar.get(placement.char);app.innerHTML=`<div class="practice"><div class="practice-top"><button class="text-button" data-act="placementSkip">← 从基础开始</button><span class="pill">认认看 · 第 ${placement.answers.length+1} 题</span></div><section class="card study-card"><h2>听一听，选一个字</h2><button class="button soft" style="margin-top:18px" data-act="say" data-text="${esc(wordSpeech(w))}">${icon('sound')} 重听</button><div class="choices">${placement.choices.map(c=>`<button class="choice ${placement.answered&&c===placement.picked?'selected':''}" data-act="placementAnswer" data-char="${c}" ${placement.answered?'disabled':''}>${c}</button>`).join('')}</div><div class="feedback ${placement.answered?'success':''}" aria-live="polite">${placement.answered?'<span class="mark ok">✓</span>收到':''}</div><div class="study-footer">${placement.answered?'':'<button class="text-button" data-act="placementAnswer" data-char="?">我还不确定</button>'}</div></section></div>`;if(!placement.spoken){placement.spoken=true;speak(wordSpeech(w),()=>{});}}
function placementAnswer(c){if(!placement||placement.answered)return;const correct=c===placement.char;placement.answered=true;placement.picked=c;placement.answers.push({char:placement.char,tier:placement.tier,correct});placement.misses=correct?0:placement.misses+1;placement.tier=correct?Math.min(3,placement.tier+1):Math.max(1,placement.tier-1);placementPage();feedbackTimer=setTimeout(placementNext,700);}
function placementNext(){if(!placement?.answered)return;if(placement.answers.length>=9||placement.misses>=3){const known=placement.answers.filter(a=>a.correct).map(a=>a.char);state.tier=placementResult(placement.answers);for(const c of known)recordDiagnosed(state,c,today());state.placement={complete:true,correct:known.length,total:placement.answers.length,day:today()};save();placement=null;navigate('home');showModal(`<h2 class="modal-title">小兔找到你的起点啦。</h2><p class="muted">${known.length?`你已经认识：<b>${known.join('、')}</b>。它们不用重新学，明天会回来和你确认一下。`:'我们从最基础、最有意思的字开始。'}</p><div class="modal-actions">${btn('好的','close')}</div>`);}else{placement.answered=false;placement.char=null;placement.picked=null;placementPage();}}
function parentPage(){const records=Object.values(state.records),secure=records.filter(r=>stageOf(r)==='记得牢'),d=getDay(state),conf=[...state.confusions].reverse().filter((x,i,a)=>a.findIndex(y=>y.char===x.char)===i).slice(0,5);app.innerHTML=head('家长','不用催快，先看她卡在哪里。')+`<div class="parent-grid"><section class="card"><h2>今天练了什么</h2><div class="mini-stats"><div><b>${d.newChars.length}</b><span>新字</span></div><div><b>${d.reviewChars.length}</b><span>复习字</span></div><div><b>${d.written.length}</b><span>写了</span></div></div><h3 style="margin-top:18px">哪些需要帮助</h3><ul class="report-list">${conf.length?conf.map(x=>`<li><b>${x.char} / ${esc(x.chosen)}</b> 曾经混淆，比较字形后再认。<br><span class="small muted">最近记录：${esc(x.day)} · ${byChar.get(x.char).word}</span></li>`).join(''):'<li>还没有混淆记录。完成练习后，这里会列出需要帮助的字。</li>'}</ul><div class="parent-note">累计见过 ${records.length} 个字，${secure.length} 个过了几天还记得。推荐鼓励：“你刚才注意到了两个字的不同，还愿意再试一次。”</div></section><section class="card"><h2>明天怎么陪</h2><p style="margin-top:10px;line-height:1.7">${tomorrowTip()}</p></section>${weekHTML()}${difficultyHTML()}<section class="card"><h2>学习量与难度</h2><div class="form-row"><label>每日新字<small>2 个适合刚开始或累的时候；今天的计划不变，明天起生效</small></label><div class="segmented" role="radiogroup">${state.settings.target===2?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="target" data-value="2">2</button>${state.settings.target===3?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="target" data-value="3">3</button>${state.settings.target===4?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="target" data-value="4">4</button>${state.settings.target===5?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="target" data-value="5">5</button></div></div><div class="form-row"><label>重点书写<small>认字、写字允许不同进度</small></label><div class="segmented" role="radiogroup">${state.settings.writeTarget===1?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="writeTarget" data-value="1">1 个</button>${state.settings.writeTarget===2?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="writeTarget" data-value="2">2 个</button></div></div><div class="form-row"><label>内容范围<small>自动模式会混合基础与进阶</small></label><div class="segmented" role="radiogroup">${state.settings.level==='auto'?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="level" data-value="auto">自动</button>${state.settings.level==='g1'?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="level" data-value="g1">一年级</button>${state.settings.level==='g2'?'<button class="on" aria-checked="true"':'<button aria-checked="false"'} role="radio" data-seg="level" data-value="g2">二年级</button></div></div><div class="parent-note">当前路线：${['','基础起步','基础拓展','进阶与查漏'][state.tier]}。连续两轮独立认字率 ≥85% 才提高难度；困难时回到较简单内容。它是练习分流，不是正式能力测评。</div><button class="text-button" data-act="retest">重新认认看起点</button></section><section class="card"><h2>声音与音乐</h2><p class="small muted" style="margin-top:10px">免费使用设备／浏览器中文语音，无 API 密钥。部分声音需要联网，音质由设备决定。</p><div class="form-row"><label for="voice-select">中文声音</label><select id="voice-select" data-setting="voice"></select></div><div class="form-row"><label for="volume">背景音乐音量<small>朗读时自动降低，离开页面会暂停</small></label><input id="volume" aria-label="背景音乐音量" type="range" min="1" max="25" value="${Math.round(state.settings.musicVolume*100)}" data-setting="musicVolume"></div>${btn('试听：你好，Cindy','voiceTest','soft')} ${btn(musicOn()?'♫ 关闭背景音乐':'♫ 开启背景音乐','music',musicOn()?'soft':'secondary')}<div class="parent-note" style="margin-top:18px">如果没有中文声音：到 Android 系统的“文字转语音／语音输出”中安装中文语音，或换用支持中文朗读的浏览器。安装后重新打开页面。系统菜单名称因设备而异。</div></section><section class="card"><h2>进度与备份</h2><p class="small muted" style="margin:12px 0 18px">进度保存在当前浏览器。不同设备不会自动同步；清理网站数据或无痕浏览可能丢失进度。可导出文件，再导入另一台设备。</p><div style="display:flex;gap:12px;flex-wrap:wrap">${btn('导出进度','export','secondary')}${btn('导入备份','import','secondary')}<input type="file" id="import-file" accept="application/json,.json" hidden></div><div class="parent-note" style="margin-top:18px">字库共 ${WORDS.length} 个去重主题字，每字配拼音、组词、例句和本地笔顺数据。按一年级至二年级难度组织，不代表完整教材字表。学习画面有示意插画；检验画面会去掉图片和拼音。</div><p class="small muted" style="margin-top:16px"><a href="licenses.html" style="color:var(--blue)">素材与许可</a></p><button class="text-button" style="color:#a66e65" data-act="reset">清空本机学习记录…</button></section></div>`;fillVoices();}
// One week at a glance for the parent, plus the characters she met this week so they can quiz her themselves.
function weekHTML(){const start=addDays(today(),-6),records=Object.values(state.records),activeDays=Array.from({length:7},(_,i)=>addDays(start,i)).filter(d=>{const x=state.days[d];return x&&(x.newChars.length+x.reviewChars.length)>0;}).length,fresh=records.filter(r=>r.firstDay>=start),met=records.filter(r=>r.lastDay>=start),kept=records.filter(r=>r.cleanDays.some(d=>d>=start)&&r.cleanDays.length>=2),written=Object.values(state.writing).filter(r=>r.traceDays.some(d=>d>=start)||r.blindDays.some(d=>d>=start)).length,list=met.sort((a,b)=>b.lastDay.localeCompare(a.lastDay)||a.firstDay.localeCompare(b.firstDay)).slice(0,24);
 return `<section class="card"><h2>这一周</h2><div class="mini-stats"><div><b>${activeDays}</b><span>天学习</span></div><div><b>${fresh.length}</b><span>个新字</span></div><div><b>${kept.length}</b><span>个过了几天还记得</span></div><div><b>${written}</b><span>个字写过</span></div></div><h3 style="margin-top:20px">请你考考她</h3><p class="small muted" style="margin:6px 0 12px">说出词语，让她指出或读出那个字；先别给她看。认对了不用加星星，说一句"你记住了"就够。</p>${list.length?`<div class="quiz-list">${list.map(r=>{const w=byChar.get(r.char);return `<div class="quiz-item"><span class="hanzi">${r.char}</span><small>${esc(w.word)}${r.firstDay>=start?'':' · 复习'}</small></div>`;}).join('')}</div>`:'<p class="small muted">这周还没有学过的字。</p>'}</section>`;}
function tomorrowTip(){const strokes=Object.values(state.writing).flatMap(r=>Object.entries(r.strokeErrors).map(([i,n])=>({char:r.char,stroke:Number(i)+1,n}))).filter(x=>x.n>=2).sort((a,b)=>b.n-a.n)[0],conf=state.confusions.at(-1),quest=lifeQuest(state,WORDS,today());if(strokes)return `睡前花 1 分钟，和她一起用手指在空中写“${strokes.char}”的第 ${strokes.stroke} 笔，先说起笔在哪里，再说往哪个方向走。`;if(conf&&byChar.get(conf.char))return `把“${conf.char}”和“${esc(conf.chosen)}”并排写大，让她说说哪里不一样，不用考她。`;return quest.text;}
function difficultyHTML(){const records=Object.values(state.records),layer=n=>records.filter(r=>stageOf(r)===n).length,writes=Object.values(state.writing),strokes=writes.flatMap(r=>Object.entries(r.strokeErrors).map(([i,n])=>({char:r.char,stroke:Number(i)+1,n}))).filter(x=>x.n>=2).sort((a,b)=>b.n-a.n).slice(0,5),pairs={};for(const x of state.confusions){const a=byChar.get(x.char),b=byChar.get(x.chosen);if(!a)continue;const key=b&&b.radical!==a.radical?`「${a.radical}」和「${b.radical}」`:`同为「${a.radical}」旁的字`;pairs[key]=(pairs[key]||0)+1;}const radicals=Object.entries(pairs).sort((a,b)=>b[1]-a[1]).slice(0,4),slow=writes.filter(r=>r.attempts&&r.ms/r.attempts>=6e4).map(r=>`${r.char} 约 ${Math.round(r.ms/r.attempts/1000)} 秒`).slice(0,3),pending=writes.filter(r=>r.pending).map(r=>r.char),down=writes.reduce((n,r)=>n+r.downshifts,0),help=state.sessions.slice(-7).reduce((n,s)=>n+(s.help||0),0);
 return `<section class="card"><h2>她真正卡在哪里</h2><div class="mini-stats"><div><b>${layer('小芽')}</b><span>刚学过 · 短期</span></div><div><b>${layer('在长大')}</b><span>正在巩固</span></div><div><b>${layer('记得牢')}</b><span>长期记住</span></div></div><h3 style="margin-top:20px">笔顺卡点</h3><ul class="report-list">${strokes.length?strokes.map(x=>`<li><b>${x.char} · 第 ${x.stroke} 笔</b> 累计写错 ${x.n} 次。可以一起空书这一笔：先说起笔在哪里，再说往哪个方向走。</li>`).join(''):'<li>还没有反复出错的笔画。</li>'}</ul><h3>容易混的偏旁</h3><ul class="report-list">${radicals.length?radicals.map(([k,n])=>`<li><b>${k}</b> 混淆 ${n} 次。把两个字并排写大，说说哪里不一样。</li>`).join(''):'<li>还没有混淆记录。</li>'}</ul><div class="parent-note">最近 7 次探险借提示 ${help} 次 · 书写主动换简单方式 ${down} 次 · 留到之后再写：${pending.join('、')||'无'}${slow.length?` · 单次书写偏久：${slow.join('、')}`:''}。这些是陪练线索，不是成绩。</div></section>`;}
function fillVoices(){const select=$('#voice-select');if(!select)return;const voices=chineseVoices();select.innerHTML='<option value="">自动选择普通话声音</option>'+voices.map(v=>`<option value="${esc(v.voiceURI)}" ${state.settings.voice===v.voiceURI?'selected':''}>${esc(v.name)}${v.localService?' · 本地':' · 可能需联网'}</option>`).join('');if(!voices.length)select.insertAdjacentHTML('afterend','<span class="small muted voice-note">暂未发现中文声音</span>');}
function storyPage(){const idx=Number(today().slice(-2))%STORIES.length,story=STORIES[idx];app.innerHTML=`<div class="practice">${head('故事里的汉字','先读一读，再说说你发现了什么。')}<section class="card"><div class="card-header"><h2>${story.title}</h2>${audioBtn(story.text,'听故事')}</div><div class="story-text">${esc(story.text)}</div><h3 style="margin-top:25px">${story.question}</h3><div class="choices">${shuffle(story.choices.map((text,i)=>({text,i}))).map(x=>`<button class="choice word-choice" data-act="storyAnswer" data-answer="${x.i}" data-correct="${story.answer}">${x.text}</button>`).join('')}</div><div id="story-feedback" class="feedback" aria-live="polite">答案就在故事里，再读一遍也很好。</div>${btn('读完啦，回小岛','home','secondary')}</section></div>`;}
const GAME_ROUNDS=[{sets:[['清','氵'],['晴','日'],['情','忄']],clue:'这三个字都有“青”，看看它们的左边。',result:'“氵”常与水有关，“日”常与太阳有关，“忄”常与心情有关。'},{sets:[['妈','女'],['河','氵'],['林','木']],clue:'看看字的左边，它能告诉你一个意思线索。',result:'“女”在“妈”里，“氵”在“河”里，“木”在“林”里。'},{sets:[['跑','足'],['猫','犭'],['花','艹']],clue:'想想跑步的脚、动物和植物。',result:'“足”与脚有关，“犭”常见于动物字，“艹”常见于植物字。'},{sets:[['请','讠'],['雪','雨'],['椅','木']],clue:'想想说话、天气和木头。',result:'“讠”与说话有关，“雨”与天气有关，“木”常见于木制物品。'}];
function gamePage(){if(!game){const round=GAME_ROUNDS[Number(today().slice(-2))%GAME_ROUNDS.length];game={selected:null,matched:[],round,cards:shuffle(round.sets.flatMap(([c,r],i)=>[{text:c,id:i,type:'char'},{text:r,id:i,type:'radical'}])),wrong:0};}app.innerHTML=`<div class="practice">${head('偏旁小侦探','找到字和它的部首。先点一个字，再点它的部首。')}<section class="card study-card"><div class="label" style="justify-content:center">找线索，不拼手速</div><h2>谁和谁是一对好朋友？</h2><div class="matching">${game.cards.map((c,i)=>`<button class="${game.matched.includes(c.id)?'matched':''} ${game.selected===i?'selected':''}" data-act="match" data-index="${i}" ${game.matched.includes(c.id)?'disabled':''}>${c.text}${game.matched.includes(c.id)?' ✓':''}</button>`).join('')}</div><div class="feedback" id="game-feedback" aria-live="polite">${game.matched.length===3?'全部找到了！'+game.round.result:game.wrong?'观察字的左边，再试一次。':game.round.clue}</div><p class="small muted">这是观察游戏，帮助你理解字形，不作为独立识字成绩。</p><div style="margin-top:25px">${btn('回到小岛','home','secondary')}</div></section></div>`;}
function handleMatch(index){if(!game||game.matched.includes(game.cards[index].id))return;if(game.selected===null){game.selected=index;gamePage();return;}const a=game.cards[game.selected],b=game.cards[index];if(index===game.selected){game.selected=null;}else if(a.id===b.id&&a.type!==b.type){game.matched.push(a.id);game.selected=null;}else{game.wrong++;game.selected=index;}gamePage();if(game.matched.length===3)confetti();}
function render(){nav();if(route!=='study'&&route!=='practice')stopWriter();const pages={home,map:mapPage,book:bookPage,garden:gardenPage,rank:rankPage,study:studyPage,placement:placementPage,parent:parentPage,story:storyPage,game:gamePage,practice:()=>renderWriting(byChar.get(practiceChar)||WORDS[0],false)};(pages[route]||home)();}
function openPage(page){if(page==='book'){filter='all';themeIndex=null;}if(page==='rank')filter='week';if(page==='map')filter='all';if(page==='game')game=null;navigate(page);}
const actions={home:()=>openPage('home'),map:()=>openPage('map'),rank:()=>openPage('rank'),book:()=>openPage('book'),garden:()=>openPage('garden'),start:()=>startDaily(),review:()=>startDaily(true),writing:()=>{const plan=createPlan(state,WORDS);practiceChar=plan.writeChars[0]||getDay(state).written[0]||WORDS[0].char;practiceMode='trace';navigate('practice');},say:e=>say(e.dataset.text),close:closeModal,animateScene:e=>{const svg=e.closest('.scene-card')?.querySelector('.scene-symbol');if(svg){const old=svg.style.animation;svg.style.animation='none';void svg.getBoundingClientRect();svg.style.animation=old||'';}},sceneWord:e=>{const w=byChar.get(e.dataset.char);if(w)showModal(`<h2 class="modal-title">${w.word}，放进生活里。</h2>${scene(w)}<p class="sentence">${esc(w.sentence)}</p>${audioBtn(w.sentence,'听这个小情境')}<p class="small muted">这是学习示意图。认字检验时不会出现。</p>`);},theme:e=>{themeIndex=Number(e.dataset.unit);filter='all';navigate('book');},word:e=>wordDetail(e.dataset.char),practiceWord:e=>{practiceChar=e.dataset.char;practiceMode='trace';navigate('practice');},mapFilter:e=>{filter=e.dataset.value;mapPage();},bookFilter:e=>{filter=e.dataset.value;bookPage();},allWords:()=>{themeIndex=null;filter='all';bookPage();},rankFilter:e=>{filter=e.dataset.value;rankPage();},next:nextTask,learnMore:()=>{const s=state.active;if(!s)return;s.learnStep=1;save();studyPage();},pause,animateWrite,quizWrite,strokeStep,downshift:()=>{const inSession=route==='study'&&!!state.active,c=practiceChar,current=writeMode(c,inSession),lower=WRITE_LEVELS[WRITE_LEVELS.indexOf(current)+1];if(!lower)return;finishWrite(false,true);if(inSession)state.active.results[c].writeMode=lower;else practiceMode=lower;save();renderWriting(byChar.get(c),inSession);toast('换一种方式，一样是认真。');},skipWrite:()=>{const s=state.active;if(!s||route!=='study')return;finishWrite(false);s.results[practiceChar].writeSkipped=true;save();toast('好的，这个字之后再来写。今天认的字照样算数。');nextTask();},retryWriting:()=>renderWriting(byChar.get(practiceChar),route==='study'),answer:e=>answer(e.dataset.char),hint:()=>{const s=state.active;if(!s||s.question?.answered)return;s.results[s.tasks[s.index].char].hinted=true;s.question.hint=true;save();studyPage();},quizAudio:()=>{const t=state.active?.tasks[state.active.index];if(t)say(wordSpeech(byChar.get(t.char)));},noAudio:()=>{const s=state.active;if(!s)return;const w=byChar.get(s.tasks[s.index].char);s.results[w.char].hinted=true;s.question.hint=true;save();studyPage();toast('已显示文字线索，本次记为借提示完成。家长页可以设置中文语音。');},placementStart:()=>{placement=null;navigate('placement');},placementSkip:()=>{state.placement={complete:true,skipped:true,day:today()};state.tier=1;save();navigate('home');toast('从基础出发，后面会自动调整。');},placementAnswer:e=>placementAnswer(e.dataset.char),placementNext,retest:()=>showModal(`<h2 class="modal-title">重新寻找合适的起点？</h2><p class="muted">已有字库和奖励会保留。新的起点会影响后续选字，正在进行的探险不受影响。</p><div class="modal-actions">${btn('取消','close','secondary')}${btn('开始小挑战','placementStart')}</div>`),family:e=>{if(state.life[today()])return;state.life[today()]={id:e.dataset.quest,char:e.dataset.char};state.family[today()]=true;save();home();toast('盖好一枚生活印章！你把汉字带进了真实的生活。');},buy:e=>{const item=SHOP.find(x=>x.id===e.dataset.id);if(!item||state.owned.includes(item.id)||state.stars<item.cost)return;state.stars-=item.cost;state.owned.push(item.id);state.decor.push(item.id);save();gardenPage();toast(`${item.name}已经住进你的小岛。`);},toggleDecor:e=>{const id=e.dataset.id;if(!state.owned.includes(id))return;state.decor=state.decor.includes(id)?state.decor.filter(x=>x!==id):[...state.decor,id];save();gardenPage();},music:async()=>{try{const on=await toggleMusic();parentPage();toast(on?'轻音乐已开启，朗读时会自动降低音量。':'背景音乐已关闭。');}catch{toast('这个浏览器暂时无法播放背景音乐。');}},voiceTest:()=>say('你好，Cindy。今天阳光明媚，我们一起读书，慢慢写字。'),story:()=>openPage('story'),storyAnswer:e=>{if(e.parentElement.dataset.done)return;if(e.dataset.answer===e.dataset.correct){e.classList.add('correct');e.parentElement.dataset.done='yes';e.parentElement.querySelectorAll('button').forEach(b=>b.disabled=true);$('#story-feedback').textContent='你从故事里找到了答案。也试着用自己的话讲一讲吧。';}else{e.classList.add('wrong');e.disabled=true;$('#story-feedback').textContent='回到故事里找找线索，慢慢读，不用猜。';}},game:()=>openPage('game'),match:e=>handleMatch(Number(e.dataset.index)),export:()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`cindy-hanzi-${today()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},import:()=>$('#import-file')?.click(),reset:()=>showModal(`<h2 class="modal-title">清空这台设备的学习记录？</h2><p class="muted">将删除学习进度、星星、装饰和挑战榜。建议先到家长页导出备份。</p><div class="modal-actions">${btn('保留记录','close','secondary')}${btn('确认清空','resetConfirm')}</div>`),resetConfirm:()=>{state=freshState();save();navigate('home');toast('记录已清空，可以重新开始。');}};
document.addEventListener('click',e=>{const seg=e.target.closest('[data-seg]');if(seg){applySetting(seg.dataset.seg,seg.dataset.value);parentPage();return;}const navLink=e.target.closest('[data-nav]');if(navLink){e.preventDefault();openPage(navLink.dataset.nav);return;}const b=e.target.closest('[data-act]');if(b&&!b.disabled){try{actions[b.dataset.act]?.(b);}catch(err){console.error(err);toast('刚才这一步没有完成，请再试一次。');}}});
$('#parent').addEventListener('click',()=>openPage('parent'));$('.modal-close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});

function applySetting(key,value){const existingDay=state.days[today()];if(existingDay&&(existingDay.newChars.length||existingDay.reviewChars.length||state.active)){if(key==='target')existingDay.target??=state.settings.target;if(key==='writeTarget')existingDay.writeTarget??=state.settings.writeTarget;}state.settings[key]=['target','writeTarget'].includes(key)?Number(value):key==='musicVolume'?Number(value)/100:value;if(key==='voice')setVoice(value);if(key==='musicVolume')setVolume(state.settings.musicVolume);save();toast('设置已保存。');}
document.addEventListener('change',async e=>{const input=e.target;if(input.dataset.setting){applySetting(input.dataset.setting,input.value);}if(input.id==='import-file'&&input.files?.[0]){try{if(input.files[0].size>3e6)throw Error('文件过大，请选择小岛导出的 JSON 进度文件。');const next=validateBackup(JSON.parse(await input.files[0].text()),WORDS);showModal(`<h2 class="modal-title">导入这份学习进度？</h2><p class="muted">备份包含 ${Object.keys(next.records).length} 个已探索字和 ${next.stars} 颗星星，将替换本机进度。</p><div class="modal-actions">${btn('取消','close','secondary')}${btn('确认导入','confirmImport')}</div>`);actions.confirmImport=()=>{state=next;save();navigate('parent');toast('备份已导入。');};}catch(err){toast(err.message||'无法读取这份备份。');}input.value='';}});
window.speechSynthesis?.addEventListener('voiceschanged',()=>{document.querySelectorAll('.voice-note').forEach(x=>x.remove());fillVoices();});
window.addEventListener('hashchange',()=>{const target=location.hash.slice(1);if(['home','map','book','garden','rank','parent'].includes(target)&&target!==route){route=target;if(target==='map'||target==='book')filter='all';render();}});
let resizeTimer;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);if(writer)resizeTimer=setTimeout(()=>{if(writer){const box=$('#writer');if(box)writer.updateDimensions({width:box.clientWidth,height:box.clientWidth});}},160);});
route=['home','map','book','garden','rank','parent'].includes(location.hash.slice(1))?location.hash.slice(1):'home';if(route==='rank')filter='week';render();


})();

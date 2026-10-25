# Cindy 的汉字小岛

给 8 岁、中文口语流利但认字和写字需要巩固的 Cindy 做的平板网页。内容按一年级基础到二年级进阶组织，首版有 500 个去重汉字、28 个主题，每字有拼音、两个词、例句和本地笔顺数据。它是家庭练习课程，不声称与某一版小学教材的课次完全一致。

## 本机和同一 Wi-Fi 的平板

需要 Node.js 18 或更新版本。项目没有需要安装的 npm 依赖。

```bash
cd /Users/neilxiang/Documents/Typing
npm run dev
```

电脑打开 `http://localhost:4173`。Android 平板或 iPad 与电脑在同一 Wi-Fi 时，打开 `http://电脑的局域网IP:4173`；电脑防火墙需要允许 Node.js 接受局域网连接。日常使用可在平板直接打开已部署的 [Cloudflare 网页](https://typing.neilxiang.workers.dev/)，无需让电脑一直开机。

也提供 `public/offline.html`：运行 `npm run build` 后，保持整个 `public` 文件夹的目录结构，将其复制到设备上并尝试用浏览器打开 `offline.html`。页面代码、插画和 500 字笔顺数据都在本地。某些移动浏览器会限制 `file://` 页面的本地存储或脚本；因此 Android/iPad 日常使用更推荐网页网址。浏览器朗读取决于系统安装的中文语音；部分声音需要联网。背景音乐由浏览器即时合成，不需要网络或 API 密钥。

## 学习规则

- 每天 2–5 个新字，由家长设置（默认 3 个）；另复习到期的旧字，最多 5 个。隔天没学不累计新字任务。形近字（如森/林、晴/清）不会在同一天一起作为新字出现。
- 每个字有一个难度分（笔画数 + 形近字数量），同一主题里先学简单的字；重点书写优先安排前几天已经认对过、而且难度低的字，没有时才写当天的新字。孩子的页面上不出现年级，"一年级 / 二年级"只是家长页里内容范围的参照。
- 每天重点描红 1–2 个字；描红只记作练过，不等于已经能默写。
- 学习时有插画、拼音、词语和例句。独立认字时隐藏插画与拼音，先听词找字，再用词句复认。答错或看过提示后，本轮不计独立掌握。
- 同一个字在三个不同日期独立认对，才进入“记得牢”。星星和个人挑战榜按完成质量记录，不按速度，也不虚构别的孩子的排名。
- 写字单独排进度：没写完的字会在之后的日子优先回来。写字可以逐级降低难度（凭记忆写 → 描红 → 跟着提示写 → 一笔一笔看），也可以"今天先写到这里"，都不扣星星。描红之后的另一天凭记忆写出来，才算"能独立写"。
- 第一次使用会做最多 9 题的自适应摸底：从简单的开始，连续三次不确定就提前结束。已经认识的字跳过新学，第二天复习确认。
- 首页的"生活寻字"只用已学过的字，场景包括超市、中餐馆、标识、视频通话、节日等。做到后在"小岛护照"盖一枚印章，每天一枚，不加星星。
- 页面只有"今天 / 我的小岛 / 家长"三个去处。首页只有一个"开始"按钮，复习、新字、写字、换词再认自动排成一条线；学习时收起导航。故事、偏旁配对、学习地图和字库放在"我的小岛 → 自由探索"，随时可以休息并继续。

家长页可以调整新字量、书写量、起点范围和语音，查看混淆字，导出或导入 JSON 备份。"她真正卡在哪里"面板显示记忆分层（短期/巩固/长期）、哪个字的第几笔常写错、哪类偏旁容易混、借提示和降级次数。完整的设计说明见 [docs/PRODUCT_DESIGN.md](docs/PRODUCT_DESIGN.md)。进度保存在**当前设备的当前浏览器**；不同网址、设备或浏览器不会自动同步。建议定期导出备份。导入备份会替换当前浏览器的进度。

## 验证和构建

```bash
npm test
npm run build
```

`npm test` 检查学习排程、复习、独立掌握、积分和备份规则。`npm run build` 检查课程、插画文件、笔顺文件与脚本，并生成离线入口。网页主页位于 `public/index.html`，无需服务端数据库。

## Cloudflare 部署

此文件夹已关联 [NEILXIANG/Typing](https://github.com/NEILXIANG/Typing)。后续修改如要用命令行上传，在本文件夹运行：

```bash
git add .
git commit -m "Update Cindy's Hanzi island"
git push
```

当前使用 **Cloudflare Workers 静态资源**，正式地址为 https://typing.neilxiang.workers.dev/ 。`wrangler.jsonc` 指向 `./public`。推送 GitHub 不会自动更新这个网址；每次修改后运行：

```bash
npm run build
npx wrangler deploy
```

首次在新电脑运行需通过 Wrangler 登录同一个 Cloudflare 账户。官方参考：[Workers 静态资源](https://developers.cloudflare.com/workers/static-assets/binding/)；若以后希望 GitHub 推送后自动发布，可在 Cloudflare 控制台另行配置构建与部署。

## 素材和许可

- 汉字笔顺：`hanzi-writer-data` 2.0.1，源自 Make Me a Hanzi／Arphic 字形数据，按 [Arphic Public License](public/assets/licenses/Arphic-Public-License.txt) 分发。这里按字拆分保存，笔画内容未修改。
- 楷体字形：`LXGW WenKai`（霞鹜文楷）1.530，按 [SIL Open Font License 1.1](public/assets/licenses/LXGW-WenKai-OFL.txt) 使用；这里只截取了 500 个学习字做成网页字体（约 110 KB），用于大字和字库卡片，让 Android 平板也能看到楷体。
- 描红引擎：`hanzi-writer` 3.7.3，[MIT License](public/assets/licenses/hanzi-writer-MIT.txt)。
- 小型事物图标：Twemoji 16.0.1，图形按 [CC BY 4.0](public/assets/licenses/twemoji-graphics.txt) 许可；版权及归属 [Twemoji 项目](https://github.com/jdecked/twemoji)。应用只用于学习场景，自绘图解和页面样式为本项目内容。

设计参考和插画审核原则见 [竞品对照](docs/COMPETITIVE_REVIEW.md)。

# Cindy 的汉字小岛

给 8 岁、中文口语流利但认字和写字需要巩固的 Cindy 做的平板网页。内容按一年级基础到二年级进阶组织，首版有 500 个去重汉字、28 个主题，每字有拼音、两个词、例句和本地笔顺数据。它是家庭练习课程，不声称与某一版小学教材的课次完全一致。

## 本机和同一 Wi-Fi 的平板

需要 Node.js 18 或更新版本。项目没有需要安装的 npm 依赖。

```bash
cd /Users/neilxiang/Documents/Typing
npm run dev
```

电脑打开 `http://localhost:4173`。Android 平板或 iPad 与电脑在同一 Wi-Fi 时，打开 `http://电脑的局域网IP:4173`；电脑防火墙需要允许 Node.js 接受局域网连接。正式部署后，平板直接打开 Cloudflare 的 HTTPS 网址即可。

也提供 `public/offline.html`：运行 `npm run build` 后，保持整个 `public` 文件夹的目录结构，将其复制到设备上并尝试用浏览器打开 `offline.html`。页面代码、插画和 500 字笔顺数据都在本地。某些移动浏览器会限制 `file://` 页面的本地存储或脚本；因此 Android/iPad 日常使用更推荐网页网址。浏览器朗读取决于系统安装的中文语音；部分声音需要联网。背景音乐由浏览器即时合成，不需要网络或 API 密钥。

## 学习规则

- 每天 3–5 个新字，由家长设置；另复习到期的旧字，最多 5 个。隔天没学不累计新字任务。
- 每天重点描红 1–2 个字；描红只记作练过，不等于已经能默写。
- 学习时有插画、拼音、词语和例句。独立认字时隐藏插画与拼音，先听词找字，再用词句复认。答错或看过提示后，本轮不计独立掌握。
- 同一个字在三个不同日期独立认对，才进入“记得牢”。星星和个人挑战榜按完成质量记录，不按速度，也不虚构别的孩子的排名。
- 可以随时休息并继续。故事、偏旁配对、装扮小岛和家庭找字任务提供不同的参与方式。

家长页可以调整新字量、书写量、起点范围和语音，查看混淆字，导出或导入 JSON 备份。进度保存在**当前设备的当前浏览器**；不同网址、设备或浏览器不会自动同步。建议定期导出备份。导入备份会替换当前浏览器的进度。

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

在 **Cloudflare Pages** 中连接该 Git 仓库：框架选择 None，项目根目录留默认，构建命令填 `npm run build`，输出目录填 `public`。构建环境需 Node.js 18 或更新版本。`public/_headers` 供 Pages 使用。

如果使用 **Workers 静态资源**，项目已有 `wrangler.jsonc`，其中资源目录为 `./public`。构建后可按 Cloudflare 官方流程运行 Wrangler 部署。为避免 Pages 与 Workers 设置混淆，建议首次使用 Pages 的 Git 自动部署。

官方参考：[Pages 构建配置](https://developers.cloudflare.com/pages/configuration/build-configuration/) · [Workers 静态资源](https://developers.cloudflare.com/workers/static-assets/binding/)。

## 素材和许可

- 汉字笔顺：`hanzi-writer-data` 2.0.1，源自 Make Me a Hanzi／Arphic 字形数据，按 [Arphic Public License](public/assets/licenses/Arphic-Public-License.txt) 分发。这里按字拆分保存，笔画内容未修改。
- 描红引擎：`hanzi-writer` 3.7.3，[MIT License](public/assets/licenses/hanzi-writer-MIT.txt)。
- 小型事物图标：Twemoji 16.0.1，图形按 [CC BY 4.0](public/assets/licenses/twemoji-graphics.txt) 许可；版权及归属 [Twemoji 项目](https://github.com/jdecked/twemoji)。应用只用于学习场景，自绘图解和页面样式为本项目内容。

设计参考和插画审核原则见 [竞品对照](docs/COMPETITIVE_REVIEW.md)。

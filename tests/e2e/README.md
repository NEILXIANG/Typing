# 浏览器端到端测试

这些脚本用 Chrome DevTools Protocol 真实驱动浏览器走完整流程，**不是读代码推测**。
它们能抓到构建期断言抓不到的问题（元素重叠、横向溢出、装饰飘到岛外、真实 JS 报错）。

## 前置条件

1. 启动 Chrome（沙盒内需要 `--no-sandbox --in-process-gpu`）：
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
     --headless=new --no-sandbox --in-process-gpu --disable-gpu \
     --remote-debugging-port=9222 --user-data-dir=/tmp/hanzi-cdp about:blank
   ```
2. 启动本地服务：`npm run dev`（默认 <http://localhost:4173>）

## 运行

```bash
npm run e2e                 # 全部脚本，针对本地
APP_URL=https://typing.neilxiang.workers.dev/ npm run e2e   # 针对线上
SHOT_DIR=/tmp/shots npm run e2e                # 换截图目录
```

| 脚本 | 覆盖 |
|---|---|
| `journey-a.mjs` | 引导 → 首页 → 认字 → 写字 → 迁移 → 偏旁配对 → 结算页 |
| `journey-b.mjs` | 字库（分组/搜索/空结果）→ 连续天数 → 我的小岛 → 故事 → 偏旁游戏 3 轮 → 家长门禁 |
| `mobile.mjs` | 390px 视口下 4 个页面无横向溢出、字库网格列数、航线轨长度 |
| `island-magic.mjs` | 「字的魔法」在首页与我的小岛都出现，图与字牌都在岛上、无破图 |
| `island-drag.mjs` | 装饰拖拽后仍落在小岛图内（`decorPos` 落点正确） |

## 已知未覆盖

- **真实笔顺输入没有被端到端驱动**。Hanzi Writer 3.7.3 只监听 `mousedown`/`mousemove`/`mouseup`（`mouseup` 绑在 `document` 上）与触摸事件，
  用合成事件驱动它的笔画匹配没有成功，因此「孩子写完一个字 → 小岛发生变化」这条链目前只有**渲染侧**被验证，
  **输入侧**（`state.days[].written` 被真实书写写入）仍靠代码路径推断。这是当前最大的验证缺口。
- 「小兔主动伸手」面板的两个触发条件里，只验证了**卡住 45 秒**这条超时路径；**写错笔画**这条路径未能用合成事件触发（原因同上）。

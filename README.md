# LycoHana Discord Web

LycoHana 彼岸花社群的 Discord 入口頁。

這不是一個很大的產品，也不是要把 Discord 社群包成正式品牌官網。它比較像一張可以公開給人看的門牌：讓第一次路過的人知道這裡大概聊什麼、適不適合進來、要從哪裡加入。

## 專案定位

- 一頁式靜態網站，介紹 LycoHana 彼岸花 Discord 社群。
- 內容重點是 ACG、日常、推坑、社群節奏、週年紀錄和加入前的常見問題。
- 文案可以有一點個人感，不要被整理成太企業、太像 SaaS landing page 的東西。
- 如果只是改社群資訊、推坑類別、FAQ 或時間線，通常改 `src/config/` 或 `src/data/` 就夠了，不需要碰版面。

## 技術棧

- [Astro](https://astro.build/)：頁面與靜態建置。
- React：只用在少量互動元件，例如主題切換、FAQ accordion、精選推坑互動。
- Tailwind CSS v4：透過 `@tailwindcss/vite` 接進 Astro。
- Cloudflare Workers/Assets：`wrangler.jsonc` 指向 `./dist`。

## 環境需求

```sh
npm install
```

`package.json` 目前要求 Node.js `>=22.12.0`。如果本機版本太舊，先切 Node 再安裝依賴，不然 Astro / TypeScript 版本可能會先吵。

## 常用指令

```sh
npm run dev
npm run check
npm run build
npm run preview
npm run format
```

- `npm run dev`：啟動本機開發伺服器。
- `npm run check`：跑 Astro 型別與專案檢查。
- `npm run build`：輸出靜態站到 `dist/`。
- `npm run preview`：預覽 build 後的結果。
- `npm run format`：用 Prettier 格式化整個 repo。這會改檔案，執行前先確認工作樹狀態。

## 專案結構

```txt
src/
  components/
    interactive/  React 互動元件
    sections/     首頁各段落
  config/         站點名稱、描述、Discord 邀請連結
  data/           FAQ、推坑類型、社群特色、時間線
  layouts/        HTML metadata、導覽、全站 shell
  pages/          Astro page entry
  styles/         全站 CSS token 與共用 class
skills/           給代理維護這個 repo 用的技能說明
```

## 內容維護

最常改的地方：

- Discord 邀請、站名、描述、建立日期：`src/config/site.ts`
- 首頁段落順序：`src/pages/index.astro`
- 社群特色：`src/data/features.ts`
- 推坑類型：`src/data/picks.ts`
- FAQ：`src/data/faq.ts`
- 社群時間線：`src/data/timeline.ts`
- 色彩、間距、共用 class：`src/styles/global.css`

改文案時先看附近原本的句子。這個站的語氣比較像「社群主人在跟路人講這裡是什麼地方」，不是公告稿，也不是品牌手冊。可以白話，可以有一點吐槽，但不要把每段都寫成漂亮總結。

## UI 維護方向

- 保留暖色底、彼岸花紅、繁中襯線標題和輕量線條感。
- 版面已經是單頁介紹，不要為了一個小內容更新新增複雜路由、CMS 或大型狀態管理。
- React 只放真的需要 client-side interaction 的部分；純展示段落優先用 Astro。
- 如果要做大幅視覺調整，先確認這是 redesign，不要在小修裡順手換掉整個氣質。
- 文字在手機版不能擠出按鈕或卡片。改長文案後至少看一下窄螢幕。

## 部署

目前 `wrangler.jsonc` 設定：

```jsonc
{
  "name": "lycohana-discord-web",
  "compatibility_date": "2026-06-17",
  "assets": {
    "directory": "./dist",
  },
}
```

部署前先跑：

```sh
npm run check
npm run build
```

如果要改 `wrangler.jsonc`、網域、Cloudflare 專案名稱或 Discord 邀請連結，先確認這不是誤改。這些東西看起來很小，實際上壞掉會直接影響入口頁。

## 給 AI 代理

這個 repo 有根目錄 `AGENTS.md` 和 `CLAUDE.md`。進來改東西前先讀它們。

如果任務是維護這個站，可以參考：

```txt
skills/lycohana-site-maintenance/SKILL.md
```

它只記這個站的維護邏輯：哪裡能改、哪裡不要擴張、文案要怎麼維持現在的口氣。不要因為有 skill 就把簡單修改變成一套儀式。

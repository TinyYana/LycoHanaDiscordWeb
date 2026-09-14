# Claude 專案補充

先遵守 `AGENTS.md`。這個 repo 是彼岸花社群（LycoHana）的公開 Discord 入口頁，使用 Astro 靜態建置。

讀 `README.md` 找到內容位置，再按本次範圍修改。話題與相處方式在 `src/data/community.ts`，FAQ 在 `src/data/faq.ts`，完整歷史在 `src/data/timeline.ts`。目前只有主題切換需要 React，加入須知直接呈現答案。

品牌名稱層級、訪客閱讀順序、真實資料、文案、視覺與工程邊界都由 `AGENTS.md` 維護，不在這裡另立一套色票或版面規則。改版授權依使用者當次要求；日常小修保持局部。

繁中長文與社群 copy 使用 `tinyyana-speaking-style`。較大的方向問題按需讀 `ui-art-direction`、`information-design`，不要把所有 UI skills 當固定流程。

執行並回報 `npm run check`、`npm run build`；UI 修改的實際瀏覽器檢查與重查條件見 `AGENTS.md`。本機通過不代表正式環境已部署或使用者已驗收。

重複性維護可使用 `skills/lycohana-site-maintenance/SKILL.md` 的定位地圖。

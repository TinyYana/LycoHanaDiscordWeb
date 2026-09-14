# 圖案與分享素材

新版以文字、空間與分組作為主要構圖，只使用一個局部彼岸花 SVG 圖案。沒有使用生成的人物、場景或完整主視覺圖片，也不引用舊頭像作視覺識別。

- `public/images/lycoris.svg`：可直接編輯的向量花瓣、花蕊與花莖，只作裝飾圖案，不代表成員、活動或新角色設定。
- `public/favicon.svg`：取中文品牌「彼」字的識別。PNG、ICO 與 Apple touch icon 由此輸出，沒有新增處理依賴。
- `public/images/social-cover.png`：1200 × 630 分享圖，由本機 Chrome 渲染 `docs/social-cover.html` 輸出。可編輯來源與網頁使用相同品牌字樣及局部花卉圖案，沒有使用生成的人物圖。

更新圖案後檢查正常尺寸的輪廓；更新分享圖時，以 1200 × 630 viewport 開啟 `docs/social-cover.html`，等字體與圖案載入再輸出 `public/images/social-cover.png`。完成後同步 `src/config/site.ts` 的路徑、尺寸與替代文字，以及 `BaseLayout.astro` 的 Twitter card 類型。

圖案只是局部素材，不要在日常維護時自行加回整張 AI 人物或場景圖。未來的視覺方向依使用者當次目標決定，不以這次 SVG 或構圖作為固定模板。

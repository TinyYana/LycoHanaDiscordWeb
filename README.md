# 彼岸花社群 Discord 入口頁

彼岸花社群（LycoHana）的公開門牌。讓第一次路過的人知道平常聊什麼、交流步調如何，以及要從哪裡加入。真正的聊天、頻道與規則都在 Discord 裡。

## 這頁怎麼讀

先認識社群，再從社群日常找到共同興趣：動畫漫畫、遊戲音樂、圖片日常與創作技術以同級話題卡片呈現。交流節奏與聊天壓力放在同一閱讀區，方便一起判斷。推薦、Bot、身分組和活動紀錄提供長期經營的證據。最後把潛水、自介、接話與交流界線直接說清楚，再前往 Discord。

文案取自社群原有資訊，沒有把示意句包成成員對話，也沒有即時成員數或活躍度。2022 年的推薦篇數是當年一週年的紀錄。

## 開發

使用 Node.js `>=22.12.0`。

```sh
npm install
npm run dev
```

- `npm run check`：Astro 型別與專案檢查。
- `npm run build`：產生 `dist/` 靜態站。
- `npm run preview`：預覽建置結果。
- `npm run format`：格式化整個 repo，執行前先確認工作樹範圍。

Astro 負責靜態內容，Tailwind CSS v4 接在 Vite 上。React 目前只用於主題切換；加入須知直接呈現四組答案，不需要展開元件或額外互動套件。沒有後端或 Discord API。

## 內容位置

| 要改什麼                                   | 檔案                           |
| ------------------------------------------ | ------------------------------ |
| 站名、metadata、邀請、canonical 與建立日期 | `src/config/site.ts`           |
| 社群話題與相處方式                         | `src/data/community.ts`        |
| 加入前須知                                 | `src/data/faq.ts`              |
| 完整歷史資料                               | `src/data/timeline.ts`         |
| 首頁閱讀順序                               | `src/pages/index.astro`        |
| 各段內容與閱讀分組                         | `src/components/sections/`     |
| 導覽、SEO、OG 與 structured data           | `src/layouts/BaseLayout.astro` |
| 字體、版面、明暗主題與 responsive          | `src/styles/global.css`        |
| 局部向量圖案與分享圖                       | `public/images/`               |

`community.ts` 合併原本 features、picks 與受眾介紹的重複材料，也保存首頁的歷史摘要。`timeline.ts` 完整保留；`CommunityArchive.astro` 呈現少數有助理解社群差異的紀錄，並標示年代。

## 維護時保留的判斷

正式名稱是「彼岸花社群」，LycoHana 是英文識別。頁首、第一屏、metadata 都先讓人認識中文名稱。

內容應幫陌生訪客判斷要不要加入。新增一段前，先看它是否真的補了新資訊；不要讓同一件事在話題、特色、推坑與 FAQ 各講一次。標題直接命名內容，刪除沒有資訊作用的英文小標與補文。

畫面的層級靠真實內容、圖像、尺度與分組形成。不要把目前色票、圖文位置或區塊排列當成下一次修改必須套用的模板。保留可讀的繁中、清楚的名稱層級、明暗主題、手機重排與能直接找到的加入操作。

新版沒有沿用舊頭像或完整 AI 插畫，只用局部彼岸花圖案搭配中文品牌。圖案與分享圖的來源見 [docs/artwork.md](docs/artwork.md)。

## 驗證與部署

```sh
npm run check
npm run build
```

版面或長文案改變後，用實際瀏覽器看完整桌面與窄版手機頁面，涵蓋明暗主題、中文換行、導覽錨點、加入須知、主題切換與加入連結。已通過的檢查只在相關修改或新問題出現時補跑。

Cloudflare 仍由 `wrangler.jsonc` 提供設定，assets 目錄為 `./dist`。Discord 邀請、canonical、Cloudflare 設定都屬於入口本身，修改前應確認有對應授權；本機建置不代表已部署。

代理入口在 `AGENTS.md`，Claude 補充在 `CLAUDE.md`。日常維護可按需讀 `skills/lycohana-site-maintenance/SKILL.md`。

---
name: lycohana-site-maintenance
description: 維護彼岸花社群的 Astro Discord 入口頁，定位社群內容、版面、歷史摘選、SEO 與加入互動；依當次授權控制修改範圍。
---

# 彼岸花社群入口頁維護

先讀 repo 的 `README.md`、`AGENTS.md`、`CLAUDE.md`，再看涉及的現有檔案。設計必要條件、授權與驗證規則集中在 `AGENTS.md`；這份 skill 只提供定位，不另設 house style。

## 定位

| 工作                             | 位置                                                                      |
| -------------------------------- | ------------------------------------------------------------------------- |
| 社群話題、相處方式               | `src/data/community.ts`                                                   |
| 加入前須知                       | `src/data/faq.ts`，與 structured data 共用                                |
| 完整歷史                         | `src/data/timeline.ts`，摘選在 `community.ts` 與 `CommunityArchive.astro` |
| 品牌、metadata、邀請與 canonical | `src/config/site.ts`                                                      |
| 閱讀順序                         | `src/pages/index.astro`                                                   |
| 各段 layout/copy                 | `src/components/sections/`                                                |
| 導覽、SEO、主題初始化            | `src/layouts/BaseLayout.astro`                                            |
| 主題切換 state                   | `src/components/interactive/ThemeToggle.tsx`                              |
| 明暗主題與手機重排               | `src/styles/global.css`                                                   |
| 局部圖案與分享素材               | `public/images/`，來源見 `docs/artwork.md`                                |

## 維護判斷

正式名稱先是「彼岸花社群」，LycoHana 是次要英文識別。先判斷新內容是否協助訪客決定加入，再決定放在哪裡。不要重新長出互相重述的 features、picks、受眾區與節奏區。

文案重寫用 `tinyyana-speaking-style`。保留真實事實與有用語氣，不必保留舊文案結構。歷史摘選要標示年代，不能把當時數字當成目前狀態。完整歷史不因 landing page 篇幅而刪除。

小修只修受影響關係；明確授權的整體改版可重設 IA 與構圖。色票、serif、卡片、時間軸、section 排列都不是預設必須保留的規則。

完成時按 `AGENTS.md` 跑相關 check/build 與實際 browser review。有效結果沿用，不自動追加完整測試或全 repo 格式化。報告實際完成與未驗證的部分。

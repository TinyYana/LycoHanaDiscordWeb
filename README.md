# LycoHana Discord Web

LycoHana 彼岸花社群的 Discord landing page。

這個專案使用 Astro 建置靜態頁面，React 只用於少量互動元件，TailwindCSS 負責樣式系統。

## Commands

```sh
npm install
npm run dev
npm run format
npm run check
npm run build
npm run preview
```

## Project Structure

```txt
src/
  components/
    interactive/
    sections/
  config/
  data/
  layouts/
  pages/
  styles/
```

Discord invite、site metadata 與建立日期集中在 `src/config/site.ts`。

# 常石工程科技官網

繁體中文公司官網，使用 Next.js App Router、React 與 Tailwind CSS。正式網址：https://changstone.vercel.app/

## 開發與驗證

使用 Node.js 20.9 以上版本（正式部署使用 Node.js 24）。

```sh
npm ci
npm run dev
npm run lint
npm run build
npm start
```

main 分支經 GitHub 連接 Vercel，自動部署至既有的 changstone 專案。更新前執行檢查，部署後核對首頁、服務頁、全部案例、/sitemap.xml 和 /robots.txt。回復時使用 Vercel 先前的正式部署或撤銷該次 Git 提交。

## 內容維護

- app/cases/projects.ts：案例名稱、區域、摘要和照片。維持同一版型，每案以 4–5 張照片為原則；不加入未確認的案場資料。
- app/cases/[slug]/page.tsx：共用案例版型，附直接詢價入口。
- app/lib/site.ts：公司聯絡資訊、正式網址、社群分享設定與 Organization 結構化資料。修改正式網域時一併更新此處。
- app/components/：共用導覽、手機選單、詢價區塊、頁尾和手機固定聯絡列。
- app/sitemap.ts：由案例資料自動建立網站地圖，新增案例不需另維護網址清單。
- app/gypsum/page.tsx：材料性能說明。聲學資料依 2026 年 7 月既有正式材料簡報，引用屏科大綠建材技術服務中心聲學實驗室 A-2604-02 報告，Rw(C;Ctr)=40(-1;-5) dB。數值限於對應試件，不等同每個現場的保證值。未公開客戶提案或原始附件。
- scripts/generate-brand-assets.py：重建「常」字圖示、手機圖示及社群分享封面；需要 Pillow 與 Noto Sans CJK 字型。

主要照片使用 Next.js Image，依螢幕寬度提供壓縮圖片；案例原圖連結仍保留。

## 分析與安全維護

保留既有 GTM、Google Ads 和 GA4 設定。LINE 點擊事件由 GTM 提供，避免在頁面重複送出相同事件。網站部署成功不代表 Ads 轉換已正確歸因，需在對應帳戶驗證。

Next.js、React 和 eslint-config-next 採明確版本並提交 lockfile。升級時參考官方安全公告，執行依賴安全檢查與正式建置；不要只修改 package.json 而漏更新 lockfile。

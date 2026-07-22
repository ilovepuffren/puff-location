# 我愛泡芙人

純 HTML、CSS 與 JavaScript 的單頁活動地點查詢網站；所有程式都在 `index.html`，不需要 React、Vue 或任何建置工具。網站品牌 Logo 使用同一資料夾中的 `logo-02.png`。

## GitHub Pages 部署

1. 將 `index.html` 與 `README.md` 推送到 GitHub repository 的預設分支。
2. 在 repository 的 **Settings → Pages**，將 **Build and deployment** 設為 **Deploy from a branch**。
3. 選擇預設分支與 `/ (root)` 資料夾，然後按 **Save**。
4. GitHub 完成部署後，從同一頁面開啟網站網址。

## 資料

網站開啟時會從指定的 Google Apps Script API 讀取 JSON 陣列，並依資料動態產生縣市、行政區與活動卡片。每筆資料需要包含：

```json
[
  { "city": "", "district": "", "date": "", "week": "", "address": "" }
]
```

地址連結會在新分頁開啟 Google Maps 搜尋。

為加快再次開啟的速度，成功取得的資料會儲存在瀏覽器的 `localStorage`。下次造訪時會先呈現快取內容，再在背景更新為 API 的最新資料。

> 若 GitHub Pages 上出現載入失敗，請確認 Google Apps Script 網頁應用程式的存取權設定為允許匿名使用者存取，並有正確回傳 JSON 與 CORS 標頭。

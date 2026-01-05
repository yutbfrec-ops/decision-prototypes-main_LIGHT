# 品牌形象官網一頁式 Demo（B 模板）
📄 非工程人員操作指南（可直接丟給客戶/團隊）

這是一套「品牌形象」一頁式 Demo，用途是展示 **品牌定位與調性**（不是購物、不是銷售頁）。  
✅ 你只要放素材 + 改 `photos.json`，不需要改 HTML/CSS。

---

## 1) 你要準備哪些素材？

### A. Hero 影片（可選，但效果最好）
放到：
- `assets/video/hero.mp4`
- `assets/video/hero.webm`

建議：
- 解析度：**1920×1080（16:9）**
- 長度：3–6 秒循環（慢節奏）
- 檔案大小：8–15MB（每個格式）

> 只放 mp4 也可以，但 mp4+webm 相容性最好

---

### B. Hero 圖片（一定要準備一張）
影片讀不到時，會自動用圖片備援。

建議尺寸（很重要）：
- ✅ 建議：**1920×1080（16:9）**
- ✅ 最低：1600×900
- ❌ 不建議：640×640（桌機會糊、裁切嚴重）

格式建議：
- `.webp`（優先）或 `.jpg`

放到（檔名可自訂）：
- 例如：`assets/img/hero.jpg`

---

### C. 視覺圖庫（6 張情境圖）
建議你準備：
- 情境照（氛圍）
- 材質細節（近拍）
- 工藝/製程片段（可少量）
- 空間/使用場景（留白）

建議尺寸：
- ✅ 建議：**1600×1200（4:3）** 或 **1920×1080（16:9）**
- ✅ 最低：寬度 1200px 以上

放到：
- `assets/img/`

---

## 2) 你只需要改一個檔案：photos.json

路徑：
- `assets/img/photos.json`

你會看到：
- 品牌名稱、Hero 文案
- Why we exist 一句話
- 理念段落（2–3 段）
- 圖庫圖片與 caption
- 聯絡 email

你要做的事（最常用）：
1. 把 `brand.name` 改成品牌名  
2. 把 `hero.image` 指向你的 hero 圖片（例如 `assets/img/hero.jpg`）  
3. 把 `gallery.items[*].src` 改成你的圖庫檔名（例如 `assets/img/01.jpg`）

---

## 3) hero-placeholder.svg 是什麼？（不用做）
- `assets/img/hero-placeholder.svg` 是占位圖（有「Hero Placeholder」字樣）
- ✅ 你不需要製作它
- ✅ 只要把 `photos.json` 的 `hero.image` 指到你自己的圖片，它就不會出現

---

## 4) 怎麼測試（避免 JSON 讀不到）
✅ 推薦：
- VS Code + Live Server 開啟 `index.html`
- 或部署到 GitHub Pages

⚠️ 不建議：
- 直接雙擊 `index.html`（某些瀏覽器會擋 JSON 讀取）

---

## 5) 10 分鐘快速上線流程
1. 放 hero 圖片（必備），影片（可選）
2. 放 6 張情境圖
3. 修改 `assets/img/photos.json`
4. Live Server 打開確認
5. 完成，可丟給客戶看

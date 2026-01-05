# OEM / 製造工廠一頁式形象站 Demo（A 模板）
📄 非工程人員操作指南（可直接丟給工廠/業務）

這是一套「可操作 Demo」，用途是讓潛在客戶快速理解工廠能力並做 **go / no-go** 判斷。  
✅ 不需要購物功能、無後端、可部署 GitHub Pages。  
✅ 你只需要「放素材」與「改 photos.json」，不用改 HTML / CSS。

---

## 1) 你要準備哪些素材？

### A. Hero 背景影片（建議）
請準備工廠/產線/設備/材質特寫影片（節奏慢、3–6 秒循環）

放到：
- `assets/video/hero.mp4`
- `assets/video/hero.webm`

**影片建議**
- 解析度：1920×1080（16:9）
- 長度：3–6 秒
- 檔案大小：8–15MB（每個格式）

> 只放 mp4 也可，但建議 mp4+webm 都放（相容性最好）

---

### B. Hero 背景圖片（一定要準備一張）
影片讀不到時會自動用圖片備援。

建議尺寸（非常重要）：
- ✅ 建議：**1920×1080（16:9）**
- ✅ 最低：1600×900
- ❌ 不建議：640×640（桌機會糊、裁切嚴重）

格式建議：
- `.webp`（優先）
- `.jpg`（可）

放到（可自訂檔名，於 photos.json 指定）：
- 例如：`assets/img/hero.jpg`

---

### C. 圖庫照片（6 張）
用於展示：設備 / 產線 / QC / 包裝 / 倉儲 / 產品細節

建議尺寸：
- ✅ 建議：**1200×1200（1:1）** 或 **1600×1200（4:3）**
- ✅ 最低：寬度 1000px 以上
- ❌ 不建議：640×640（手機勉強、桌機會糊）

放到：
- `assets/img/`

---

## 2) 你只需要改一個檔案：photos.json

路徑：
- `assets/img/photos.json`

你會看到類似這段：

```json
{
  "brand": { "name": "【工廠名稱】", "tagline": "用可靠的製程，做出一致的產品。" },
  "hero": {
    "image": "assets/img/hero-placeholder.svg",
    "video_mp4": "assets/video/hero.mp4",
    "video_webm": "assets/video/hero.webm"
  },
  "gallery": [
    { "src": "assets/img/01.svg", "caption": "產線設備 / 工序展示" }
  ]
}
```

你要做的事：
1. 把 `brand.name` 改成工廠名
2. 把 `hero.image` 指向你的 hero 圖片（例如 `assets/img/hero.jpg`）
3. 把 `gallery` 的 `src` 改成你放的圖片檔名（例如 `assets/img/01.jpg`）

---

## 3) hero-placeholder.svg 是什麼？（不用做）
- `assets/img/hero-placeholder.svg` 是**占位圖**
- 上面可能會看到「Hero Placeholder」字樣
- ✅ 你不需要製作它
- ✅ 只要把 `photos.json` 的 hero.image 指到你自己的圖片，它就不會出現

---

## 4) 怎麼測試（避免圖片/JSON 讀不到）

✅ 推薦方式：
- VS Code 安裝 Live Server，右鍵 `index.html` → Open with Live Server  
- 或部署到 GitHub Pages

⚠️ 不建議：
- 直接雙擊 `index.html` 開啟（某些瀏覽器會擋 JSON 讀取）

---

## 5) 30 分鐘完成流程
1. 準備 hero 影片（可選）與 hero 圖片（必備）
2. 準備 6 張工廠/產品照片
3. 把檔案放到 `assets/video/` 與 `assets/img/`
4. 修改 `assets/img/photos.json`
5. 用 Live Server 開啟確認
6. 完成，可丟給客戶看

---

## 6) 你不需要做的事
❌ 不用改 HTML  
❌ 不用改 CSS  
❌ 不用學前端  
❌ 不用裝一堆工具  

只要放素材 + 改 photos.json 就能用。

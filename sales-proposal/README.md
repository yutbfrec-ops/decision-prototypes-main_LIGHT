# 業務提案用一頁式 Demo（C 模板）
📄 非工程人員操作指南（Demo 用：go / no-go 快速溝通）

這是一套「業務提案」一頁式 Demo，敘事是：**問題 → 解法 → 能力 → 是否合作**。  
✅ 不做 SEO、不做購物功能、不依賴後端；純前端可直接丟 GitHub Pages。

---

## 1) 你要準備哪些素材？

### A. Hero 圖（必備 1 張）
建議尺寸（很重要）：
- ✅ 建議：**1920×1080（16:9）**
- ✅ 最低：1600×900
- ❌ 不建議：640×640（桌機會糊、裁切嚴重）

放到：
- `assets/img/`（檔名可自訂，例如 `hero.jpg`）

---

### B. Proof 圖（建議 4 張）
用途：用「可信證據」加速決策。建議放：
- 成果截圖（前後對比、數據）
- 實拍照片（現場/產品）
- 文件片段（流程、規範）
- 客戶回饋或 KPI（若能公開）

建議尺寸：
- ✅ 建議：1600×1200（4:3）或 1920×1080（16:9）
- ✅ 最低：寬度 1200px 以上

放到：
- `assets/img/`

---

## 2) 你只需要改一個檔案：photos.json
路徑：
- `assets/img/photos.json`

你最常改的地方：
1. `proposal.name`（公司/方案名稱）
2. `proposal.hero_line`（一句話價值）
3. `problems.items`（3–6 個痛點）
4. `approach.steps`（流程 3–6 步）
5. `approach.capabilities`（能力清單）
6. `proof.items[*].src`（proof 圖檔路徑）
7. `next.contact_email`（聯絡信箱）

---

## 3) 替換圖片要注意什麼？
- 你不用改 HTML
- 只要：
  1) 把圖片放進 `assets/img/`  
  2) 再把 `photos.json` 裡的路徑指到新圖片

例如：
```json
"hero": { "image": "assets/img/hero.jpg" }
```

---

## 4) 怎麼測試（避免 JSON 讀不到）
✅ 推薦：
- VS Code + Live Server 開啟 `index.html`
- 或部署到 GitHub Pages

⚠️ 不建議：
- 直接雙擊 `index.html`（某些瀏覽器會擋 JSON 讀取）

---

## 5) 10 分鐘快速上線流程
1. 放 Hero 圖（必備）
2. 放 4 張 proof 圖（建議）
3. 修改 `assets/img/photos.json`
4. Live Server 打開確認
5. 丟 GitHub Pages 給客戶看

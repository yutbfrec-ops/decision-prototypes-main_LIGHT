# 產品概念 / MVP 驗證 Demo（D 模板）
📄 非工程人員操作指南（快速、可丟棄重做）

這是一頁式「MVP 概念頁」，只用來測試市場反應：  
**這是什麼 → 為誰 → 有什麼價值**  
✅ 不做 SEO、不做後端、不追求完美；看到反應再決定下一版。

---

## 1) 你要準備哪些素材？

### A. 主視覺（必備 1 張）
建議尺寸（很重要）：
- ✅ 建議：**1920×1080（16:9）**
- ✅ 最低：1600×900
- ❌ 不建議：640×640（容易糊、裁切）

放到：
- `assets/img/`（檔名可自訂，例如 `hero.jpg`）

---

### B. 示意圖（建議 3 張）
建議放：
1. 主流程 / 介面概念
2. 使用情境
3. 輸出結果（報表/畫面）

建議尺寸：
- ✅ 建議：1600×1200（4:3）或 1920×1080（16:9）
- ✅ 最低：寬度 1200px 以上

放到：
- `assets/img/`

---

## 2) 你只需要改一個檔案：photos.json
路徑：
- `assets/img/photos.json`

常改欄位：
- `mvp.name`：產品/概念名稱
- `mvp.one_liner`：一句話說清楚
- `mvp.for_who`：為誰
- `value.bullets`：3 個價值點
- `gallery.items[*].src`：3 張示意圖路徑
- `next.contact_email`：聯絡信箱

---

## 3) 替換圖片怎麼做？
你不用改 HTML，只要：
1) 把圖片放進 `assets/img/`  
2) 在 `photos.json` 改路徑

例如：
```json
"hero": { "image": "assets/img/hero.jpg" }
```

---

## 4) 怎麼測試（避免 JSON 讀不到）
✅ 推薦：VS Code + Live Server 開啟 `index.html`  
⚠️ 不建議：直接雙擊 `index.html`（部分瀏覽器會擋 JSON 讀取）

---

## 5) 5 分鐘快速改完清單
1. 放 hero 圖
2. 放 3 張示意圖
3. 改 `photos.json` 的文案與圖片路徑
4. Live Server 預覽
5. 丟 GitHub Pages 給客戶

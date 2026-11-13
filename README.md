<div align="center">

# 🍰 HolidayDessert Vue（假日甜點前台）

假日甜點的 Vue 3 前台網站，負責商品展示、會員登入註冊與即時客服聊天，所有資料皆透過 API 向 Spring Boot 後端取得。

[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue%20Router-4-4FC08D?logo=vuedotjs&logoColor=white)](https://router.vuejs.org/)
[![Vuex](https://img.shields.io/badge/Vuex-4-4FC08D?logo=vuedotjs&logoColor=white)](https://vuex.vuejs.org/)
[![Vue CLI](https://img.shields.io/badge/Vue%20CLI-5-4FC08D?logo=vuedotjs&logoColor=white)](https://cli.vuejs.org/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)](https://sass-lang.com/)

🔗 後端專案：[holidayDessert](https://github.com/AnthonyFuFu/holidayDessert)

</div>

---

## 📑 目錄

- 📖 專案簡介
- 🛠 技術棧
- 🧩 功能模組
- 📂 專案結構
- ✅ 環境需求
- ⚙️ 設定
- 🚀 啟動方式
- 📦 打包發布
- 🔗 測試網址
- 📚 參考資料

---

## 📖 專案簡介

HolidayDessert Vue 是 [holidayDessert](https://github.com/AnthonyFuFu/holidayDessert) 前台的 Vue 3 單頁應用版本（SPA），與後端分開部署：

- 🖥️ **前端**：本專案，開發伺服器跑在 `8081` 埠
- ⚙️ **後端**：Spring Boot，跑在 `8080` 埠，提供 REST API、Google OAuth2 登入與 WebSocket 聊天室

兩者跨網域溝通，後端已將 `http://localhost:8081` 加入 CORS 與 WebSocket 允許來源，axios 也設定 `withCredentials` 以攜帶 Session Cookie。

---

## 🛠 技術棧

| 分類 | 技術 |
| --- | --- |
| 🧑‍💻 框架 | Vue 3、Vue Router 4（History 模式）、Vuex 4 |
| 🧰 建置工具 | Vue CLI 5、Babel、Sass |
| 🌐 HTTP | Axios（`withCredentials` 攜帶 Session Cookie） |
| 💬 即時通訊 | SockJS + STOMP（連線後端 `/ws-chat`） |
| 🎨 UI | jQuery、SweetAlert、Material Icons、vue3-carousel、Owl Carousel |

> SockJS、STOMP、jQuery、Axios 由 [public/index.html](public/index.html) 以 CDN 載入，於全域使用。

---

## 🧩 功能模組

### 🏠 首頁（`views/IndexView.vue`）
- 🍰 主打商品（`MainProduct`）
- 🔥 熱門商品（`Popular`）
- 🆕 新品上市（`NewArrival`）
- 💬 顧客評論（`Comment`）
- 📮 聯絡我們表單（`Form`）
- 🎧 即時客服聊天室（`ChatRoom`）

### 👤 會員（`views/member`）
- 🔑 登入（帳號密碼 / Google 第三方登入）
- 📝 註冊（帳號、Email 重複檢查）
- ✉️ Email 驗證與重新寄送驗證信

### 🎧 即時客服聊天室（`components/ChatRoom.vue`）
- 登入後點擊右下角按鈕開啟；每位會員固定一間聊天室，第一次開啟時由後端建立
- 送出至 `/app/chat/{roomUrl}`，訂閱 `/topic/chat/{roomUrl}` 接收雙方訊息
- 訊息由後端存檔成功後才廣播顯示；發送失敗會透過 `/user/queue/errors` 跳出提示

---

## 📂 專案結構

```text
src/
├── App.vue
├── main.js              # 建立 App、註冊 router / store、axios 全域設定
├── components/          # 首頁區塊與共用元件（Header、Footer、ChatRoom...）
├── constants/
│   ├── Env.js           # 後端位址 BACKEND_URL 與所有 API 路徑
│   └── routes-url.js    # 前端路由路徑常數
├── css/                 # 各頁面樣式
├── layouts/             # MainLayout（前台）、MemberLayout（會員頁）
├── router/              # Vue Router 設定（base: /holidayDessert）
├── service/             # 依功能組合 API 網址（Index、Register、Verification、ChatRoom）
├── store/               # Vuex
├── utils/               # 通知（SweetAlert）、表單驗證、localStorage 工具
└── views/               # 頁面（首頁、會員登入／註冊／驗證）
```

---

## ✅ 環境需求

- Node.js 16 以上
- npm
- 已啟動的 [holidayDessert](https://github.com/AnthonyFuFu/holidayDessert) 後端（`http://localhost:8080`）

---

## ⚙️ 設定

| 設定 | 位置 | 預設值 |
| --- | --- | --- |
| 後端位址 | [src/constants/Env.js](src/constants/Env.js) 的 `BACKEND_URL` | `http://localhost:8080` |
| API 路徑 | [src/constants/Env.js](src/constants/Env.js) 的 `API_PATHS` | `/holidayDessert/...` |
| 開發伺服器埠號 | [vue.config.js](vue.config.js) 的 `devServer.port` | `8081` |
| 路由前綴 | [src/router/index.js](src/router/index.js) 的 `createWebHistory` | `/holidayDessert` |

> 若更換前端網域或埠號，後端 `AllowedOrigin` 也需加入新的來源，否則會被 CORS / WebSocket 擋下。

---

## 🚀 啟動方式

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器（http://localhost:8081，會自動開啟瀏覽器）
npm run serve
```

---

## 📦 打包發布

```bash
npm run build
```

打包結果輸出至 `dist/`，部署時需設定伺服器將 `/holidayDessert/*` 的請求導回 `index.html`（History 模式）。

---

## 🔗 測試網址

| 頁面 | 網址 |
| --- | --- |
| 🏠 首頁 | http://localhost:8081/holidayDessert/index |
| 🔑 會員登入 | http://localhost:8081/holidayDessert/member/login |
| 📝 會員註冊 | http://localhost:8081/holidayDessert/member/register |

---

## 📚 參考資料

- 📝 [參考網站（HackMD）](https://hackmd.io/@XchkZGnHT56qnXYLoFJM_A/H1KxBsilO)
- 📘 [Vue CLI 官方文件](https://cli.vuejs.org/)

<details>
<summary>🧰 Vue CLI 安裝與建立專案指令</summary>

```bash
# 安裝 Vue CLI
npm install -g @vue/cli

# 解除安裝 Vue CLI
npm uninstall -g @vue/cli

# 建立新專案
vue create holiday_dessert
```

</details>

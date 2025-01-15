# Twine-story

https://docs.google.com/forms/d/e/1FAIpQLSe0I0FfpM8Dm-u1UPBldcNd9lUf8egcqCziPInB68SmTH5j3g/formResponse

test 

# 為什麼需要訪問 https://cors-anywhere.herokuapp.com/corsdemo 點擊 "Request temporary access to the demo server"?
  這與瀏覽器的同源政策 (Same-Origin Policy) 和 CORS (跨來源資源共用, Cross-Origin Resource Sharing) 有關：

  同源政策問題：
  當你的網站 (例如 github.io) 試圖向 Google Forms (google.com) 發送請求時
  瀏覽器會因為安全考量阻止這個請求
  因為它們是不同的網域（域名不同）
  CORS-Anywhere 的作用：
  它是一個代理服務器
  幫助繞過瀏覽器的同源限制
  作為你的請求和 Google Forms 之間的中間人
  添加必要的 CORS 標頭
  工作流程：

  你的網站 → CORS-Anywhere 代理 → Google Forms

  為什麼需要點擊授權：

  防止濫用
  限制服務使用量
  確保使用者知道在做什麼
  替代方案：

  使用自己的後端服務器
  使用其他表單服務（如 Formspree）
  設置自己的代理服務器
  使用 Netlify Forms
  使用 Firebase

部署作業 ID
AKfycbzlg0R_jnESXVDcn7NqhRt-mlSKHdBqyiYgny6D_JY5TiLRrnZ22xqk54cXCl2imAoa

https://script.google.com/macros/s/AKfycbzlg0R_jnESXVDcn7NqhRt-mlSKHdBqyiYgny6D_JY5TiLRrnZ22xqk54cXCl2imAoa/exec

（淘汰）最簡單的方式：使用 JSON Server, 但是這個方法沒有辦法從github端訪問回來
# 1. 首先安裝 Node.js（如果還沒安裝的話）
# 從 https://nodejs.org 下載安裝

# 2. 安裝 JSON Server
npm install -g json-server

# 3. 創建一個 db.json 文件（在你的專案目錄下）
# db.json 內容：
{
  "users": []
}

# 4. 啟動 JSON Server
json-server --watch db.json
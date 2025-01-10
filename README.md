# Twine-story

https://docs.google.com/forms/d/e/1FAIpQLSe0I0FfpM8Dm-u1UPBldcNd9lUf8egcqCziPInB68SmTH5j3g/formResponse


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
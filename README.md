# MLTD-API

偶像大師百萬人演唱會(MLTD)資訊API，使用mongodb作為資料庫  
說明文檔使用react框架，並用webpack將前後端打包  
測試的部分使用jest及mongodb-memory-server  
目前仍在施工中

## 用法

使用前必須先設定環境變數：

1. `MONGO_URL`：MLTD資料庫的mongodb位址
2. `SESSION_SECRET`：express-session要用來加密的密碼，建議是128個字元的隨機字串
3. `PORT`(選用)：決定伺服器要跑在哪個port，預設是48763

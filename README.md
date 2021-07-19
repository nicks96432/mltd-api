# MLTD-API

偶像大師百萬人演唱會(MLTD)資訊API  
使用mongodb作為資料庫，express作為API本體  
另外還用了JOSE保護POST和DELETE，必須使用特定的帳號及密碼才可使用這兩個method(還在做)  
說明文檔使用react框架，並用webpack將前後端打包  
測試的部分使用jest及mongodb-memory-server  
目前仍在施工中

## 用法

使用前必須先設定環境變數，可參考`.env.example`：

1. `MONGO_URL`：MLTD資料庫的mongodb位址
2. `PUBLIC_KEY`：JWE加密訊息的公鑰
3. `PUBLIC_KEY`：JWE加密訊息的私鑰
4. `PORT`(選用)：決定伺服器要跑在哪個port，預設是48763

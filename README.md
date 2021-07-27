# MLTD-API

[![Test](https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml/badge.svg?branch=main)](https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml)
[![CodeQL Analysis](https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml/badge.svg)](https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml)
[![Dependencies Watch](https://status.david-dm.org/gh/nicks96432/mltd-api.svg)](https://david-dm.org/nicks96432/mltd-api)
[![Dependencies Watch](https://status.david-dm.org/gh/nicks96432/mltd-api.svg?type=dev)](https://david-dm.org/nicks96432/mltd-api?type=dev)  

偶像大師 百萬人演唱會(MLTD) 資訊API  
使用mongodb作為資料庫，fastify作為API本體  
說明文檔使用react框架，並使用nextJS做SSR  
測試的部分使用jest及mongodb-memory-server  
目前仍在施工中

## 用法

使用前必須先設定環境變數，可參考`.env.example`：

1. `MONGO_URL`：MLTD資料庫的mongodb位址
2. `PORT`(選用)：決定伺服器要跑在哪個port，預設是48763

<p align="center">
    <img src="https://github.com/nicks96432/mltd-api/blob/main/public/logo512.png?raw=true" height="384">
</p>

<p align="center">
    偶像大師 百萬人演唱會！ 劇場時光(MLTD) 遊戲資訊API
</p>

<p align="center">
    <a href="https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml">
        <img src="https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml/badge.svg">
    </a>
    <a href="https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml">
        <img src="https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml/badge.svg">
    </a>
    <a href="https://snyk.io/test/github/nicks96432/mltd-api">
        <img src="https://snyk.io/test/github/nicks96432/mltd-api/badge.svg">
    </a>
    <a href="https://david-dm.org/nicks96432/mltd-api">
        <img src="https://status.david-dm.org/gh/nicks96432/mltd-api.svg">
    </a>
    <a href="https://david-dm.org/nicks96432/mltd-api?type=dev">
        <img src="https://status.david-dm.org/gh/nicks96432/mltd-api.svg?type=dev">
    </a>
</p>

使用mongodb作為資料庫，fastify作為API本體  
說明文檔使用react框架，並使用Next.js做SSR  
測試的部分使用jest及mongodb-memory-server  

## 用法

使用前必須先設定環境變數：

1. `MONGO_URL`：MLTD資料庫的mongodb位址
2. `PORT`(選用)：決定伺服器要跑在哪個port，預設是48763

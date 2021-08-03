import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
    render = () => (
        <Html lang="zh-tw">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;

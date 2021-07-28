import type { NextPage } from "next";
import Head from "next/head";

const App: NextPage = () => (
    <>
        <Head>
            <title>MLTD API doc</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <main>
            <div className="app">API說明預定地</div>
        </main>
    </>
);

export default App;

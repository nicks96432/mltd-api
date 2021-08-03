import Head from "next/head";
import type { NextPage } from "next";
import App from "../components/App";
import MainPage from "../components/MainPage";

const IndexPage: NextPage = () => (
    <>
        <Head>
            <title>MLTD API doc</title>
        </Head>
        <App>
            <MainPage />
        </App>
    </>
);

export default IndexPage;

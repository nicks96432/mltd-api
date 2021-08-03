import Head from "next/head";
import type { NextPage } from "next";
import App from "../components/App";
import NotFoundPage from "../components/NotFoundPage";

const _404: NextPage = () => (
    <>
        <Head>
            <title>MLTD API | 404</title>
        </Head>
        <App>
            <NotFoundPage />
        </App>
    </>
);

export default _404;

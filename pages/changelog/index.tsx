import Head from "next/head";
import type { NextPage } from "next";
import App from "../../components/App";
import ChangeLogPage from "../../components/ChangelogPage";

const ChangeLog: NextPage = () => (
    <>
        <Head>
            <title>MLTD API doc | changlog</title>
        </Head>
        <App>
            <ChangeLogPage />
        </App>
    </>
);

export default ChangeLog;

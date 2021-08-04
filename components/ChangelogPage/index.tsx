import type { NextPage } from "next";
import Styles from "./ChangelogPage.module.scss";

const ChangeLogPage: NextPage = () => (
    <div className={`${Styles.changelog} container`}>
        <h1>Changelog</h1>
        <h2>0.1.0</h2>
        <ul>
            <li>偶像資訊API</li>
            <li>說明文檔</li>
            <li>changelog (2021/8/4新增)</li>
        </ul>
    </div>
);

export default ChangeLogPage;

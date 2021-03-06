import Link from "next/link";
import { request } from "@octokit/request";
import { useEffect, useState } from "react";
import GitHubIcon from "../icons/GitHubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Styles from "./Header.module.scss";

const Header = () => {
    const [version, setVersion] = useState("0.1.0");
    useEffect(() => {
        const getVersion = async () => {
            try {
                const result = await request(
                    "GET /repos/{owner}/{repo}/releases/latest",
                    {
                        owner: "nicks96432",
                        repo: "mltd-api"
                    }
                );
                setVersion(result.data.name);
            } catch (err) {
                if (process.env.NODE_ENV !== "production")
                    console.error("release version not found");
            }
        };
        getVersion();
    });

    return (
        <header className={Styles["app-header"]}>
            <nav className={`${Styles.navbar} container`}>
                <Link href="/">
                    <a className={Styles["app-title"]}>MLTD API</a>
                </Link>
                <div className={Styles["app-version"]}>{version}</div>
                <div className={Styles["app-header-links"]}>
                    <Link href="/changelog">
                        <a className={Styles["app-header-link"]}>changelog</a>
                    </Link>
                </div>
                <div className={Styles["app-header-blank"]}></div>
                <div className={Styles["app-header-icons"]}>
                    <Link href="https://github.com/nicks96432/mltd-api">
                        <a>
                            <GitHubIcon width={32} height={32} fill="white" />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/@nicks96432">
                        <a>
                            <TwitterIcon width={32} height={32} fill="white" />
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;

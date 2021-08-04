import Link from "next/link";
import Image from "next/image";
import { Badges } from "./Badges";
import OperationCard from "./OperaionCard";
import Styles from "./MainPage.module.scss";

const idolExample = {
    id: 14,
    CV: "山崎遙",
    type: "Princess",
    age: 14,
    name: "春日 未來",
    birthday: "0000-06-28T00:00:00.000Z",
    height: 156,
    weight: 42,
    measurements: {
        bust: 78,
        waist: 54,
        hips: 77
    },
    origin: "東京都",
    like: "演唱會",
    trick: "唱歌",
    hobby: "蒐集可愛的髮夾",
    leftHand: false,
    bloodtype: "O",
    color: "#ea5b76"
};

const NotFoundExample = {
    status: 404,
    message: "idol 48763 not found"
};

const MainPage = () => (
    <main className={`${Styles.mainpage} container`}>
        <div className={Styles["mainpage-title-container"]}>
            <div className={Styles["mainpage-logo"]}>
                <Image src="/logo512.png" alt="logo" width={512} height={512} />
            </div>
            <div className={Styles["mainpage-title"]}>
                偶像大師 百萬人演唱會！ 劇場時光(MLTD) API
            </div>
            <div className={Styles["mainpage-badges"]}>
                {Badges.map((badge, index) => (
                    <Link href={badge.href} key={`badge ${index}`}>
                        <a>
                            <Image
                                src={badge.src}
                                alt={badge.alt}
                                width={badge.width}
                                height={badge.height}
                            />
                        </a>
                    </Link>
                ))}
            </div>
            <hr />
        </div>
        <div className={Styles["mainpage-content"]}>
            <p>目前還是測試版，所有功能都有可能變更(雖然也只有一個功能@@)</p>
            <p>這個網站可能會很慢，因為免費沒有好東西嘛 ¯\_(ツ)_/¯</p>
            <h1>用法說明</h1>
            <div>
                base URL：<code>https://api.nicks96432.ml/mltd/v1/</code>
                <br />
            </div>
            <OperationCard
                parameters={[
                    {
                        name: "idolID",
                        type: "integer",
                        description: "偶像的ID"
                    }
                ]}
                responses={[
                    {
                        status: 200,
                        description: "OK",
                        example: idolExample
                    },
                    {
                        status: 404,
                        description: "找不到指定的偶像",
                        example: NotFoundExample
                    },
                    {
                        status: 500,
                        description: "伺服器有bug，請到GitHub發issue"
                    }
                ]}
                method="GET"
                path="/idols/{idolID}"
                description="取得偶像資料"
            />
        </div>
    </main>
);

export default MainPage;

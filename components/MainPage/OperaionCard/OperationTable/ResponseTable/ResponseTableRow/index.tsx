import dynamic from "next/dynamic";
import type { NextPage } from "next";
import type { Response } from "../../../../../types";
import Styles from "./ResponseTableRow.module.scss";

const ReactJson = dynamic(import("react-json-view"), { ssr: false });

const ResponseTableRow: NextPage<{ response: Response }> = props => {
    return (
        <tr className={Styles["response-table-row"]}>
            <td>
                <div className={Styles["response-status"]}>
                    {props.response.status}
                </div>
            </td>
            <td>
                <div className={Styles["response-description"]}>
                    {props.response.description}
                </div>
                {props.response.example ? (
                    <>
                        <div className={Styles["response-demo-selector"]}>
                            範例
                        </div>
                        <code className={Styles["response-example"]}>
                            <ReactJson
                                name={false}
                                enableClipboard={false}
                                src={props.response.example}
                                theme={{
                                    base00: "#eeeef2",
                                    base01: "#ea5b76",
                                    base02: "#ea5b7680",
                                    base03: "#ea5b76",
                                    base04: "#7e6ca8",
                                    base05: "#ea5b76",
                                    base06: "#ea5b76",
                                    base07: "#e85579",
                                    base08: "#ea5b76",
                                    base09: "#5abfb7",
                                    base0A: "#ea5b76",
                                    base0B: "#ea5b76",
                                    base0C: "#ea5b76",
                                    base0D: "#ea5b76",
                                    base0E: "#f5ad3b",
                                    base0F: "#6495cf"
                                }}
                            />
                        </code>
                    </>
                ) : undefined}
            </td>
        </tr>
    );
};

export default ResponseTableRow;

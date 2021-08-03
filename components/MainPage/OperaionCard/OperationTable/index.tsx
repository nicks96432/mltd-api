import type { NextPage } from "next";
import Styles from "./OperationTable.module.scss";

export const OperationTable: NextPage<{
    title?: string;
    type: "request" | "response";
}> = props => (
    <table className={Styles["operation-table"]}>
        {props.title ? (
            <caption className={Styles["operation-table-title"]}>
                {props.title}
            </caption>
        ) : undefined}
        <thead>
            <tr className={Styles["operation-table-head"]}>
                <th className={Styles["operation-table-head-name"]}>
                    {props.type === "request"
                        ? "參數"
                        : props.type === "response"
                        ? "狀態碼"
                        : undefined}
                </th>
                <th>說明</th>
            </tr>
        </thead>
        <tbody>{props.children}</tbody>
    </table>
);

export * from "./RequestTable";
export * from "./ResponseTable";

import type { NextPage } from "next";
import type { Parameter } from "../../../../../types";
import Styles from "./RequestTableRow.module.scss";

const RequestTableRow: NextPage<{ parameter: Parameter }> = props => (
    <tr className={Styles["parameter-table-row"]}>
        <td>
            <div className={Styles["parameter-name-wrapper"]}>
                <span className={Styles["parameter-name"]}>
                    {props.parameter.name}
                </span>
                {props.parameter.necessary ? (
                    <span className={Styles["required"]}>* required</span>
                ) : undefined}
            </div>
            <div>
                <code>{props.parameter.type}</code>
            </div>
        </td>
        <td>{props.parameter.description}</td>
    </tr>
);

export default RequestTableRow;

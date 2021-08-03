import { useState } from "react";
import LeftArrow from "../../icons/LeftArrow";
import type { OperationCard as IOperationCard } from "../../types";
import Styles from "./OperationCard.module.scss";
import { RequestTable, ResponseTable } from "./OperationTable";

const OperationCard: IOperationCard = props => {
    const [expand, setExpand] = useState(false);
    return (
        <div className={Styles["operation-card"]}>
            <button
                className={Styles["operation-card-title"]}
                onClick={() => setExpand(!expand)}
                style={{ borderBottom: expand ? "inherit" : 0, color: "" }}>
                <span className={Styles["operation-card-method"]}>
                    {props.method}
                </span>
                <span className={Styles["operation-card-path"]}>
                    {props.path}
                </span>
                <span className={Styles["operation-card-description"]}>
                    {props.description}
                </span>
                <LeftArrow
                    className={`${Styles["operation-card-title-arrow"]} ${
                        expand ? Styles["rotate-left"] : ""
                    }`}
                    width={16}
                    height={16}
                    fill="#888888"
                />
            </button>
            <div className={Styles["operation-card-body"]} hidden={!expand}>
                <div className={Styles["operation-card-table-container"]}>
                    <RequestTable
                        title="Request"
                        parameters={props.parameters}
                    />
                </div>
                <div className={Styles["operation-card-table-container"]}>
                    <ResponseTable
                        title="Response"
                        responses={props.responses}
                    />
                </div>
            </div>
        </div>
    );
};

export default OperationCard;

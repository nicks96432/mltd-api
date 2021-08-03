import type { NextPage } from "next";
import { OperationTable } from "..";
import type { Parameter } from "../../../../types";
import RequestTableRow from "./RequestTableRow";

export const RequestTable: NextPage<{
    parameters: Parameter[];
    title: string;
}> = ({ parameters, title }) => (
    <OperationTable type="request" title={title}>
        {parameters
            ? parameters.map((p, index) => (
                  <RequestTableRow parameter={p} key={`parameter ${index}`} />
              ))
            : undefined}
    </OperationTable>
);

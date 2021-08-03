import type { NextPage } from "next";
import type { Response } from "../../../../types";
import { OperationTable } from "..";
import ResponseTableRow from "./ResponseTableRow";

export const ResponseTable: NextPage<{
    responses: Response[];
    title: string;
}> = ({ responses, title }) => (
    <OperationTable type="response" title={title}>
        {responses.map((r, index) => (
            <ResponseTableRow response={r} key={`response ${index}`} />
        ))}
    </OperationTable>
);

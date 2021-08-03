import type { NextPage } from "next";
import type { HTTPMethods } from "fastify";
import type { Parameter } from "./Parameter";
import type { Response } from "./Response";

export interface OperationCardProps {
    method: HTTPMethods;
    path: string;
    description: string;
    parameters?: Parameter[];
    responses?: Response[];
}

export type OperationCard = NextPage<OperationCardProps>;

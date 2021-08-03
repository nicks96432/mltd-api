import { NextPage } from "next";

export interface IconProps {
    width: string | number;
    height: string | number;
    fill?: string;
    className?: string;
}

export type Icon = NextPage<IconProps>;

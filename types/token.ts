import { ReactElement } from "react";

export type Token = {
    symbol: string;
    name: string;
    address: string;
    decimals: number;
    tags: string[];
    logo: ReactElement;
};

export type TokenWithData = {
    liquidity: number;
    rate: number;
    rateType: "pos" | "nag";
};

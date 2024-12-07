import { ComponentProps } from "react";
import { Coin } from "../market-details/market-header";
import { Button } from "../ui/button";

export function TokenItem(token: Coin & ComponentProps<'button'>) {
    return <Button variant={"ghost"} size={"sm"} onClick={token.onClick}>
        <div className="h-5 w-5 bg-secondary rounded-full"></div>
        <p className="flex flex-col gap-y-1 text-sm">
            <span>{token.name}</span>
            <span className="text-xs">{token.symbol}</span>
        </p>
    </Button>
}

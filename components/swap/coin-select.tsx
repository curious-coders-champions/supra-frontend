import { DialogContent } from "@radix-ui/react-dialog";
import { Dialog, DialogHeader, DialogTrigger } from "../ui/dialog";
import { Coin } from "../market-details/market-header";
import { SetStateAction } from "react";
import { Button } from "../ui/button";
import { SearchBox } from "../search-box";
import {TOKENS} from "@/data/tokens"
import { TokenItem } from "./token";

export type TokenPair =  {
    coinX: Coin
    coinY: Coin
}

export function SelectCoin({pair, setTokenParid}: {pair: TokenPair, setTokenParid: (tokenxId: number, tokenYId: number) => void}) {
    return <Dialog>
        <DialogTrigger asChild>
        <Button variant="secondary" size={"lg"} className="rounded-full">
          <div className="w-10 h-10"></div> 
          {pair.coinX.name}
        </Button> 
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                    <SearchBox /> 
            </DialogHeader>
            {TOKENS.map((item) => {
                return <TokenItem onClick={() => setTokenParid(1,1)} symbol={item.symbol} name={item.name} key={item.name} chain={"SUPRA"} address={item.address} />
            })} 
        </DialogContent>

    </Dialog>
}

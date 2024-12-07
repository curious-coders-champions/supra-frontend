import { Dialog, DialogHeader, DialogTrigger, DialogContent } from "../ui/dialog";
import { Coin } from "../market-details/market-header";
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
        <Button variant="secondary" size={"sm"} className="rounded-full w-max">
          <div className="w-5 h-5 bg-primary rounded-full"></div> 
          {pair.coinX.name}
          APTOS
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

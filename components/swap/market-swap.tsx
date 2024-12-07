import { SelectCoin } from "./coin-select";

export function MarketSwap() {
    return <div className="flex">
        <SelectCoin setTokenParid={() => {}} pair={{coinX: {}, coinY: {}}} />
    </div>

}

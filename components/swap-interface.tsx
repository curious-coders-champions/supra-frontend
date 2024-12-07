"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Settings2, ArrowDownUp } from 'lucide-react'
import Image from "next/image"
import CurrencyInput, { Currency } from "./currency-input"
import Big from "big.js"
import usePrice from "@/hooks/usePrice"
import { currencies } from "./swap/swap-tabs"
import { useAccount } from "@/hooks/useConnectWallet"
import { SwapButton } from "./swap/swap-button"
import { ConnectWalletButton } from "./connect-wallet"

export default function SwapInterface() {
    const {isConnected} = useAccount()
    const [sellCurrency, setSellCurrency] = useState<Currency>(currencies[1]);
    const [buyCurrency, setBuyCurrency] = useState<Currency>(currencies[0]);
    const [sellValue, setSellValue] = useState<string>("");
    const [buyValue, setBuyValue] = useState<string>("");
    const { data: supraPrice } = usePrice();
    const buyCurrencies = useMemo(
        () => currencies.filter((currency) => currency.id !== sellCurrency.id),
        [sellCurrency]
    );
    const sellCurrencies = useMemo(
        () => currencies.filter((currency) => currency.id !== buyCurrency.id),
        [buyCurrency]
    );

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Swap</CardTitle>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Settings2 className="h-5 w-5" />
                    <span className="sr-only">Trade Settings</span>
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* First input field */}
                <CurrencyInput
                    title="Sell"
                    currencies={sellCurrencies}
                    onClick={setSellCurrency}
                    className="mt-5"
                    price={supraPrice ?? "0"}
                    value={sellValue}
                    setValue={(val) => {
                        setSellValue(val);
                        if (val) {
                            setBuyValue(
                                Big(val)
                                    .mul(supraPrice ?? "0")
                                    .toFixed(2)
                            );
                        } else {
                            setBuyValue("");
                        }
                    }}
                />

                {/* Swap direction button */}
                <div className="relative h-0">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="h-10 w-10 rounded-full shadow-md"
                            onClick={() => console.log('swap')}
                        >
                            <ArrowDownUp className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Second input field */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center px-3 mb-2">
                        <span className="text-sm text-muted-foreground">Receive</span>
                    </div>
                    <CurrencyInput
                        title="Buy"
                        currencies={buyCurrencies}
                        isDisabled={true}
                        onClick={setBuyCurrency}
                        className="mt-5"
                        price={supraPrice ?? "0"}
                        value={buyValue}
                        setValue={setBuyValue}
                    />
                    <div className="flex justify-between items-center px-3">
                        <span className="text-sm text-muted-foreground">$0.00</span>
                    </div>
                </div>

                {/* Connect Wallet or Swap button */}
                {isConnected? (
                   <SwapButton /> 
                ) : (
                   <ConnectWalletButton /> 
                )}
            </CardContent>
        </Card >
    )
}


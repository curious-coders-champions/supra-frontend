"use client"

import { useState } from "react"
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
import CurrencyInput from "./currency-input"
import Big from "big.js"

export default function SwapInterface() {
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
                        onClick={handleSwap}
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
                <div className="relative">
                    <Input
                        type="number"
                        value={toAmount}
                        onChange={handleToAmountChange}
                        placeholder="0.00"
                        className="text-2xl font-medium h-16 px-3 py-2 [appearance:textfield]"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <Select value={toToken} onValueChange={setToToken}>
                            <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0">
                                <SelectValue>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/placeholder.svg"
                                            alt={toToken}
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        {toToken}
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ETH">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="ETH"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        ETH
                                    </div>
                                </SelectItem>
                                <SelectItem value="DEGEN">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="DEGEN"
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                        DEGEN
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex justify-between items-center px-3">
                    <span className="text-sm text-muted-foreground">$0.00</span>
                </div>
            </div>

            {/* Connect Wallet or Swap button */}
            {isWalletConnected ? (
                <Button
                    className="w-full h-14 text-lg font-semibold"
                    disabled={isSwapDisabled}
                    onClick={() => {
                        // Implement swap logic here
                        console.log("Swap", fromAmount, fromToken, "to", toAmount, toToken)
                    }}
                >
                    Swap
                </Button>
            ) : (
                <Button
                    className="w-full h-14 text-lg font-semibold"
                    onClick={handleConnectWallet}
                >
                    Connect Wallet
                </Button>
            )}
        </CardContent>
    </Card >
  )
}


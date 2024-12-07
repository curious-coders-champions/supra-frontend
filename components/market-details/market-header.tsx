'use client'

import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "../ui/button"
import { CopyToClipboard } from "../copy-clipboard"

export type Coin = {
    name: string
    symbol: string
    chain: string
    address: string
}

type MarketHeaderProps = {
    coinX: { id: 1, coin: Coin }
    coinY: { id: 2, coin: Coin }
}

export function MarketHeader(props: MarketHeaderProps) {
    const [currentCoinId, setCurrentCoinId] = useState<number>(props.coinX.id)

    const currentCoin = currentCoinId === 1 ? props.coinX.coin : props.coinY.coin
    const nextCoin = currentCoinId === 1 ? props.coinY.coin : props.coinX.coin

    const handleSwitchCoin = () => {
        setCurrentCoinId(currentCoinId === 1 ? 2 : 1)
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-secondary rounded-full"></div>
                    <CardTitle className="flex flex-col">
                        <span className="text-lg font-bold">{currentCoin.name}</span>
                        <span className="text-sm text-muted-foreground">{currentCoin.symbol}</span>
                    </CardTitle>
                </div>
                <Button
                    variant="secondary"
                    onClick={handleSwitchCoin}
                >
                    Switch to {nextCoin.symbol}
                </Button>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-muted-foreground">Chain</p>
                        <p>{currentCoin.chain}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <div className="flex gap-1 items-center">
                            <p className="truncate">{currentCoin.address}</p>
                            <CopyToClipboard text={currentCoin.address} />
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

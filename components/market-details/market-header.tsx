'use client'

import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card"
import SocialLinks from "./scoal-links"
import { ICONS } from "../icons"

export type Coin = {
    name: string
    symbol: string
    chain: string
    address: string
}



export function MarketHeader() {
    return (
        <Card className="py-6 rounded-xl">
            <CardHeader className="flex">
                <ICONS.supra className="w-16 h-16"  />
                <div className="flex items-center space-x-4">
                    <CardTitle className="flex items-center text-3xl gap-3">
                        <span className="font-bold">SUPRA</span>
                        <span className="text-muted-foreground font-light">SUPRA</span>
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <SocialLinks />
            </CardContent>
        </Card>
    )
}

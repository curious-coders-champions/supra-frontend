'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CurrencyInput from "../currency-input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { MarketSwap } from "./market-swap"
export function MarketSwapTabs() {
    return <Tabs defaultValue="market" className="w-[400px]">
        <TabsList className="bg-transparent">
            <TabsTrigger value="market" asChild>
                <Button size={"sm"} variant={"link"}>Market</Button>
            </TabsTrigger>
            <TabsTrigger value="limit">Limit</TabsTrigger>
        </TabsList>
        <Separator className="w-[300px]" />
<<<<<<< HEAD
        <TabsContent value="market">
            <MarketSwap />
        .</TabsContent>
        <TabsContent value="limit">Limit</TabsContent>
=======
        <TabsContent value="market" className="w-[300px]">
            <CurrencyInput />
        </TabsContent>
        <TabsContent value="limit">
            <CurrencyInput />
        </TabsContent>
>>>>>>> b1dac4b (feat: 🎸 added swap input component)
    </Tabs>
}

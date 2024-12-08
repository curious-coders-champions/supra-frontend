'use client'

import { LineChart } from "@/components/charts/LineChart";
import { AboutMarket } from "@/components/market-details/about-market";
import { MarketHeader } from "@/components/market-details/market-header";
import { MarketStasts } from "@/components/market-details/market-stats";
import SwapInterface from "@/components/swap-interface";
import { Card } from "@/components/ui/card";

export default function MarketDetailsPage() {
    return <main className="grid grid-cols-7 gap-x-3 max-w-7xl mx-auto">
        <section className="flex w-full flex-col gap-y-6 col-span-5">
            <MarketHeader />
            <LineChart />
            <MarketStasts />
            <AboutMarket name="Wraped ETher" description="$SUPRA powers the Supra blockchain, enabling transactions, staking, and governance. It supports DeFi apps, cross-chain interoperability, and scalability, fostering innovation in the decentralized ecosystem." />
        </section>
        <Card className="col-span-2 bg-transparent h-fit shadow-none border-none -mt-6 pb-4">
            <SwapInterface />
        </Card>
    </main>
}

'use client'
import { LineChart } from "@/components/charts/LineChart";
import { AboutMarket } from "@/components/market-details/about-market";
import { MarketHeader } from "@/components/market-details/market-header";
import { MarketStasts } from "@/components/market-details/market-stats";
import MintInterface from "@/components/mint-interface";
import { Card } from "@/components/ui/card";
import usePrice from "@/hooks/usePrice";

export default function MarketDetailsPage() {
    const { data } = usePrice()
    console.log("data", data);
    return <main className="grid grid-cols-7 gap-x-3 max-w-7xl mx-auto">
        <section className="flex w-full flex-col gap-y-6 col-span-5">
            <MarketHeader coinY={{
                id: 2,
                coin: {
                    name: "Wrapped Eth",
                    chain: 'Supra',
                    symbol: "wETH",
                    address: "0x....0xx"
                }
            }} coinX={{
                id: 1,
                coin: {
                    name: "USDC",
                    chain: 'SUPRA',
                    symbol: "USD",
                    address: "0x....0xx"
                }

            }} />
            <LineChart />
            <MarketStasts />
            <AboutMarket name="Wraped ETher" description="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
        </section>
        <Card className="col-span-2 bg-transparent h-fit shadow-none border-none -mt-6 pb-4">
            <MintInterface />
        </Card>
    </main>
}

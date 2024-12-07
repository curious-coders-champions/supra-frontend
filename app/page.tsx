import { ICONS } from "@/components/icons"
import SwapInterface from "@/components/swap-interface"

export default function Home() {
    return <main className="h-screen md:h-[95%] w-full flex flex-col justify-center items-center">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-6">
                Swap Any Token,
                <br />
                <div className="flex mx-auto w-max items-center gap-6">
                    <span className="text-primary">On</span>
                    <ICONS.supraWithText />
                </div>
            </h1>
        </div>
        <div className="max-w-md w-full">
            <SwapInterface />
        </div>
    </main>
}

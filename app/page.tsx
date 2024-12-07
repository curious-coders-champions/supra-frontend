'use client'
import { ICONS } from "@/components/icons"
import MintInterface from "@/components/mint-interface"

export default function Home() {
    return <main className="h-screen md:h-[95%] w-full flex flex-col justify-center items-center">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-6">
                <div className="flex items-center justify-start">
                    Mint&nbsp;<ICONS.usdcRed />&nbsp;USDS&nbsp;Anytime
                </div>
                <div className="flex mx-auto w-max items-center mt-4 gap-6">
                    <span className="text-primary">On</span>
                    <ICONS.supraWithText />
                </div>
            </h1>
        </div>
        <div className="max-w-md w-full">
            <MintInterface />
        </div>
    </main>
}

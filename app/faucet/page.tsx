'use client'
import FaucetInterface from "@/components/facuet-interface"

export default function Home() {
    return <main className="h-screen md:h-[95%] w-full flex flex-col justify-center items-center">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-6">
                <div className="flex items-center justify-start">
                    Get Test Funds 🚰
                </div>
            </h1>
        </div>
        <div className="max-w-md w-full">
            <FaucetInterface />
        </div>
    </main>
}

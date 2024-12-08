'use client'

import { useAccount } from "@/hooks/useConnectWallet"
import Image from "next/image"
import Link from "next/link"
import { ConnectWalletButton } from "../connect-wallet"
import { HistoryModal } from "../history"
import UserProfileNav from "../user-profile"

const Navbar = () => {
    const { isConnected } = useAccount()
    return (
        <div className='h-[80px] w-full'>
            <div className="max-w-7xl flex items-center justify-between h-full mx-auto w-full">
                <Link href={"/"} className="flex items-center justify-start space-x-2">
                    <Image src={"/supraswap.png"} width={40} height={40} alt="uspra" />
                    <h1>SupraFi</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href={"/swap"}>Swap</Link>
                    <Link href={"/faucet"}>Faucet</Link>
                    {isConnected ?
                        <div className="flex ">
                            <HistoryModal />
                            <UserProfileNav />
                        </div>
                        : <ConnectWalletButton />}
                </div>
            </div>
        </div>
    )
}

export default Navbar

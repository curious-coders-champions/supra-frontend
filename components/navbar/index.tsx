'use client'

import Link from "next/link"
import { ConnectWalletButton } from "../connect-wallet"
import { useAccount } from "@/hooks/useConnectWallet"
import UserProfileNav from "../user-profile"

const Navbar = () => {
    const {isConnected} = useAccount()

    return (
        <div className='h-[80px] w-full mb-10'>
            <div className="max-w-[1400px]  flex items-center justify-between h-full mx-auto w-full">
                <Link href={"/"} className="flex items-center justify-start space-x-2"><div className="w-6 h-6 bg-black rounded-full"></div>
                    <h1>Supra</h1>
                </Link>
                {isConnected ? <UserProfileNav /> : <ConnectWalletButton />}
            </div>
        </div>
    )
}

export default Navbar

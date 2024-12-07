'use client'

import Link from "next/link"
import { ConnectWalletButton } from "../connect-wallet"

const Navbar = () => {
    return (
        <div className='h-[80px] w-full mb-10'>
            <div className="max-w-[1400px]  flex items-center justify-between h-full mx-auto w-full">
                <Link href={"/"} className="flex items-center justify-start space-x-2"><div className="w-6 h-6 bg-black rounded-full"></div>
                    <h1>Supra</h1>
                </Link>
                <ConnectWalletButton />
            </div>
        </div>
    )
}

export default Navbar
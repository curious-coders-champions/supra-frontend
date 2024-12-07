'use client'

import { STAR_KEY_INSTALL_PAGE } from "@/config"
import { useAccount, useConnectWallet, useIsStarKeyInstalled } from "@/hooks/useConnectWallet"
import { Button } from "./ui/button"

function truncateAddress(address: string | undefined) {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function ConnectWalletButton() {
    const { connect, connecting } = useConnectWallet()
    const isStarKeyInstalled = useIsStarKeyInstalled()
    const { address, isConnected } = useAccount()

    return !isStarKeyInstalled ? (
        <Button onClick={() => window.open(STAR_KEY_INSTALL_PAGE)}>
            Install Starkey
        </Button>
    ) : (
        <Button onClick={() => connect()} disabled={connecting}>
            {isConnected ? truncateAddress(address) : 'Connect Wallet'}
        </Button>
    )
}

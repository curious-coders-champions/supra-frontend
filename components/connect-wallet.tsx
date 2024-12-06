'use client'

import { STAR_KEY_INSTALL_PAGE } from "@/config"
import { useAccount, useConnectWallet, useIsStarKeyInstalled } from "@/hooks/useConnectWallet"

export function ConnectWalletButton() {
    const { connect, connecting, account } = useConnectWallet()
    const isStarKeyInstalled = useIsStarKeyInstalled()
    const {address, isConnected} = useAccount()
    
    return  !isStarKeyInstalled ?  <button onClick={() => window.open(STAR_KEY_INSTALL_PAGE)}>Install Starkey</button> :   <button onClick={() => connect()} disabled={connecting}> connect {address} {isConnected && 'connected'}</button>
}

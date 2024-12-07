"use client"

import { LogOut, Pen } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAccount, useDisconnect } from '@/hooks/useConnectWallet'
import { truncate } from "@/lib/utils"
import { CopyToClipboard } from './copy-clipboard'

export default function UserProfileNav() {
    const { address } = useAccount()
    const { disconnect, disconnecting } = useDisconnect()
    const balance = 0;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full max-w-[200px] rounded-full h-14 justify-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-transparent" />
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{truncate(address, 4)}</span>
                        <span className="text-xs text-muted-foreground">{balance}</span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start">
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 p-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-transparent" />
                        <div className="flex flex-col">
                            <span className="font-medium">{truncate(address, 5)} <CopyToClipboard text={address} /></span>
                            <span className="text-sm text-muted-foreground">{balance}</span>
                        </div>
                    </div>
                    <Separator />

                    <Button onClick={() => disconnect()} disabled={disconnecting} variant="ghost" className="justify-start gap-2 rounded-none p-4 text-base font-normal text-red-500 hover:text-red-500">
                        <LogOut className="h-4 w-4" />
                        Disconnect Wallet
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}



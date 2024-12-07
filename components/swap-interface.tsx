"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Settings2, ArrowDownUp } from 'lucide-react'
import Image from "next/image"

export default function SwapInterface() {
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("DEGEN")
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromAmount(e.target.value)
    // In a real app, you would calculate the toAmount based on exchange rates
    setToAmount(e.target.value)
  }

  const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToAmount(e.target.value)
    // In a real app, you would calculate the fromAmount based on exchange rates
    setFromAmount(e.target.value)
  }

  const handleSwap = () => {
    setFromToken(toToken)
    setToToken(fromToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleConnectWallet = () => {
    // In a real app, you would implement wallet connection logic here
    setIsWalletConnected(true)
  }

  const isSwapDisabled = !fromAmount || !toAmount || fromAmount === "0" || toAmount === "0" || !isWalletConnected

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Swap</CardTitle>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings2 className="h-5 w-5" />
          <span className="sr-only">Trade Settings</span>
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* First input field */}
        <div className="space-y-2">
          <div className="relative">
            <Input
              type="number"
              value={fromAmount}
              onChange={handleFromAmountChange}
              placeholder="0.00"
              className="text-2xl font-medium h-16 px-3 py-2 [appearance:textfield]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Select value={fromToken} onValueChange={setFromToken}>
                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt={fromToken}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      {fromToken}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ETH">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="ETH"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      ETH
                    </div>
                  </SelectItem>
                  <SelectItem value="DEGEN">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="DEGEN"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      DEGEN
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center px-3">
            <span className="text-sm text-muted-foreground">$0.00</span>
          </div>
        </div>

        {/* Swap direction button */}
        <div className="relative h-0">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full shadow-md"
              onClick={handleSwap}
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Second input field */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-3 mb-2">
            <span className="text-sm text-muted-foreground">Receive</span>
          </div>
          <div className="relative">
            <Input
              type="number"
              value={toAmount}
              onChange={handleToAmountChange}
              placeholder="0.00"
              className="text-2xl font-medium h-16 px-3 py-2 [appearance:textfield]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Select value={toToken} onValueChange={setToToken}>
                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt={toToken}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      {toToken}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ETH">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="ETH"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      ETH
                    </div>
                  </SelectItem>
                  <SelectItem value="DEGEN">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="DEGEN"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      DEGEN
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center px-3">
            <span className="text-sm text-muted-foreground">$0.00</span>
          </div>
        </div>

        {/* Connect Wallet or Swap button */}
        {isWalletConnected ? (
          <Button 
            className="w-full h-14 text-lg font-semibold" 
            disabled={isSwapDisabled}
            onClick={() => {
              // Implement swap logic here
              console.log("Swap", fromAmount, fromToken, "to", toAmount, toToken)
            }}
          >
            Swap
          </Button>
        ) : (
          <Button 
            className="w-full h-14 text-lg font-semibold"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
        )}
      </CardContent>
    </Card>
  )
}


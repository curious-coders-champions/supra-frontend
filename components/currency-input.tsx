"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from 'lucide-react'
import * as React from "react"

interface Currency {
  id: string
  name: string
  symbol: string
  icon: React.ReactNode
}

const currencies: Currency[] = [
  {
    id: "usdc",
    name: "USD Coin",
    symbol: "USDC",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "dai",
    name: "Dai",
    symbol: "DAI",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function CurrencyInput() {
  const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0])
  const [value, setValue] = React.useState("")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="w-full max-w-full space-y-6">
      <h2 className="text-2xl font-medium text-gray-900">Sell</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 hover:bg-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  {selectedCurrency.icon}
                </div>
                <span className="text-base font-medium">{selectedCurrency.symbol}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Select a currency</DialogTitle>
              </DialogHeader>
              <div className="grid gap-2 py-4">
                {currencies.map((currency) => (
                  <button
                    key={currency.id}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCurrency(currency)
                      setOpen(false)
                    }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                      {currency.icon}
                    </div>
                    <span className="flex-1 text-left text-base font-medium">{currency.name}</span>
                    <span className="text-sm text-gray-500">{currency.symbol}</span>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex gap-2">
            <button
              className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              onClick={() => setValue("50")}
            >
              50%
            </button>
            <button
              className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
              onClick={() => setValue("100")}
            >
              Max
            </button>
          </div>
        </div>
        <div className="relative">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block w-full border-0 bg-transparent p-0 text-6xl text-gray-400 placeholder:text-gray-400 focus:ring-0"
            placeholder="0.0"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xl text-gray-400">
            $0.00
          </div>
        </div>
      </div>
    </div>
  )
}


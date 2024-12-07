"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Big from "big.js"
import { ChevronDown } from 'lucide-react'
import * as React from "react"
export interface Currency {
  id: string
  name: string
  symbol: string
  address: string
  icon: React.ReactNode
}


export default function CurrencyInput({ title, currencies, value, onClick, setValue, className, price, inputClassName, isDisabled }: {
  title: string,
  className?: string,
  price?: string,
  currencies: Currency[],
  onClick: (currency: Currency) => void,
  inputClassName?: string,
  isDisabled?: boolean,
  value?: string,
  setValue?: (val: string) => void,
}) {
  const [selectedCurrency, setSelectedCurrency] = React.useState(currencies[0])
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn("w-full max-w-full px-4 space-y-6", className)}>
      <h1 className="text-xl font-medium text-gray-900">{title
      }</h1>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex w-full items-center gap-2 rounded-full bg-gray-50 px-4 py-2 hover:bg-gray-100">
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
                      onClick(currency)
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
          {!isDisabled ?

            <div className="flex gap-2">
              <button
                className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => setValue && setValue("50")}
              >
                50%
              </button>
              <button
                className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                onClick={() => setValue && setValue("100")}
              >
                Max
              </button>
            </div> : <div className="flex gap-2 w-full"></div>
          }
        </div>
        <div className="relative">
          <input
            type="number"
            value={value}
            disabled={isDisabled}
            onChange={(e) => {
              if (setValue) setValue(e.target.value)
            }}
            className="block w-full border-0 focus:outline-none p-0 text-3xl disabled:bg-transparent text-black placeholder:text-black focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="0.0"
          />
          <div className={cn("absolute right-0 top-1/2 -translate-y-1/2 text-xl text-black", inputClassName)}>
            {price && value !== "" && !isDisabled && value ? "$" + Big(value).mul(price).toFixed(2) : isDisabled ? "" : "-"}
          </div>
        </div>
      </div>
    </div>
  )
}


"use client"

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
import usePrice from "@/hooks/usePrice"
import Big from "big.js"
import { Settings2 } from 'lucide-react'
import { useMemo, useState } from "react"
import { Currency } from "./currency-input"
import { useMint } from "@/hooks/useMint"


export const currencies: Currency[] = [
    {
        id: "usds",
        name: "USDS Coin",
        symbol: "USDS",
        address: "0x0000000000000000000000000000000000000000",
        icon: (
            <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_3_5)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 0C15.5229 0 20 4.47714 20 10C20 15.5229 15.5229 20 10 20C4.47714 20 0 15.5229 0 10C0 4.47714 4.47714 0 10 0Z"
                        fill="#DD1438"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2849 2.95859C12.0594 2.88655 11.875 3.02039 11.875 3.25714V3.83937C11.875 3.99812 11.9947 4.17879 12.1437 4.23341C14.5372 5.11008 16.25 7.41071 16.25 10.1042C16.25 12.7977 14.5372 15.0982 12.1437 15.9749C11.9802 16.0348 11.875 16.1949 11.875 16.369V16.9512C11.875 17.1879 12.0594 17.3218 12.2849 17.2498C15.3097 16.2833 17.5 13.4496 17.5 10.1042C17.5 6.75883 15.3097 3.92502 12.2849 2.95859ZM8.12502 3.25714C8.12502 3.02039 7.94063 2.88655 7.71514 2.95859C4.69031 3.92502 2.5 6.75879 2.5 10.1042C2.5 13.4496 4.69031 16.2833 7.71514 17.2498C7.94063 17.3218 8.12502 17.1879 8.12502 16.9512V16.369C8.12502 16.2102 8.00537 16.0295 7.85631 15.9749C5.46282 15.0982 3.75 12.7976 3.75 10.1042C3.75 7.41075 5.46282 5.11008 7.85631 4.23341C8.00537 4.17878 8.12502 3.99812 8.12502 3.83937V3.25714ZM10.3125 5.1042H9.68753C9.51494 5.1042 9.37502 5.24408 9.37502 5.41667V6.38482C8.136 6.56098 7.33502 7.38553 7.33502 8.44333C7.33502 9.81255 8.16274 10.3438 9.90984 10.5789C11.0951 10.7731 11.4325 11.0284 11.4325 11.7029C11.4325 12.3772 10.86 12.8268 10.0531 12.8268C8.96192 12.8268 8.60286 12.3494 8.47043 11.7314C8.43906 11.585 8.31369 11.478 8.16396 11.478H7.4511C7.27153 11.478 7.13114 11.6397 7.162 11.8166C7.34353 12.8568 8.01157 13.62 9.37502 13.805V14.7917C9.37502 14.9643 9.51494 15.1042 9.68753 15.1042H10.3125C10.4851 15.1042 10.625 14.9643 10.625 14.7917V13.8045C11.9157 13.5994 12.7404 12.7009 12.7404 11.5904C12.7404 10.1293 11.8513 9.63878 10.1346 9.40388C8.86761 9.21992 8.62255 8.92353 8.62255 8.33086C8.62255 7.76902 9.05157 7.37035 9.87929 7.37035C10.628 7.37035 11.0585 7.63165 11.2364 8.23416C11.2761 8.36863 11.3964 8.46369 11.5366 8.46369H12.194C12.3773 8.46369 12.52 8.29522 12.4809 8.11608C12.2728 7.16392 11.6311 6.59255 10.625 6.41231V5.41667C10.625 5.24408 10.4851 5.1042 10.3125 5.1042Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_3_5">
                        <rect width={20} height={20} fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        id: "supra",
        name: "Supra",
        address: "0x0000000000000000000000000000000000000000",
        symbol: "SUPRA",
        icon: (
            <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 10C20 15.522 15.5222 20 10.0003 20C4.47775 20 0 15.522 0 10C0 4.478 4.47775 0 10.0003 0C15.5222 0 20 4.478 20 10Z"
                    fill="#DD1438"
                />
                <path
                    d="M15.7357 5.18901C15.496 4.57801 15.0937 4.04251 14.6446 3.59351C14.1709 3.15202 13.6195 2.80021 13.0179 2.55551C12.6284 2.39967 12.2197 2.29593 11.8026 2.24701C10.3112 2.03101 8.74 2.48901 7.60037 3.63101C6.2846 4.94701 5.82229 6.87351 6.4027 8.66701V8.6845C6.03815 8.91209 5.70422 9.1846 5.40894 9.4955C4.95117 9.9755 4.58021 10.5335 4.33997 11.1445C4.10456 11.7575 3.98647 12.4086 3.99172 13.0645C3.99172 13.731 4.13153 14.3645 4.39347 14.9535C4.63371 15.5645 5.03596 16.1 5.48464 16.549C5.95835 16.9905 6.50967 17.3423 7.11131 17.587C7.7003 17.827 8.33573 17.9355 8.97822 17.9355C8.88737 17.9355 8.79804 17.931 8.70921 17.927C9.40159 17.9643 10.0941 17.8554 10.7407 17.6075C11.3874 17.3595 11.9735 16.9783 12.4602 16.489C13.1065 15.8474 13.5614 15.0414 13.7747 14.1599C13.988 13.2784 13.9514 12.3557 13.669 11.4935C14.0576 11.2606 14.4121 10.9758 14.7223 10.647C15.1801 10.167 15.5515 9.60901 15.7913 8.99801C16.0269 8.38502 16.1454 7.73393 16.1405 7.07801C16.1411 6.42741 16.0041 5.78391 15.7383 5.18901M11.4245 5.54451C11.3897 5.38774 11.3733 5.22751 11.3756 5.06701C11.5558 5.09801 11.7269 5.15101 11.8979 5.22201C12.1382 5.32201 12.3471 5.48451 12.5091 5.67101C12.6646 5.86451 12.8024 6.07351 12.8801 6.31351C12.9649 6.55351 12.9891 6.79351 12.9891 7.03351C12.9622 7.48932 12.7686 7.91982 12.4445 8.24451L11.425 5.54701L11.4245 5.54451ZM12.5894 8.62701C12.6202 8.59801 12.6515 8.569 12.6782 8.5355C12.8867 8.318 13.0179 8.08701 13.1269 7.81551C13.2359 7.54451 13.2581 7.25101 13.2581 6.98701C13.2581 6.69351 13.1804 6.42901 13.0714 6.18901C12.9624 5.94901 12.7782 5.73101 12.5914 5.54701C12.4047 5.38451 12.1644 5.22201 11.9247 5.14451C11.7516 5.08251 11.5623 5.05551 11.3715 5.04251C11.379 4.73026 11.4588 4.42389 11.6047 4.14701C11.8222 4.18901 12.0312 4.25351 12.2336 4.34701C12.6045 4.50901 12.8998 4.74901 13.1622 5.01351C13.4025 5.30701 13.62 5.62451 13.7512 5.97351C13.8825 6.32251 13.938 6.68701 13.938 7.06451C13.938 7.44251 13.8602 7.81551 13.6982 8.13351C13.5652 8.46801 13.356 8.76761 13.087 9.00901C13.0002 9.08687 12.9081 9.15886 12.8115 9.2245L12.5869 8.629L12.5894 8.62701ZM12.9513 9.58451C13.0901 9.48173 13.2216 9.36963 13.3449 9.249C13.616 8.9555 13.8557 8.58251 13.9869 8.21101C14.1489 7.80901 14.2045 7.40701 14.2045 7.01101C14.2045 6.61601 14.1045 6.21351 13.9405 5.84251C13.7797 5.4791 13.5452 5.15234 13.2516 4.88251C12.9578 4.62001 12.6404 4.40251 12.2689 4.27101C12.0594 4.19882 11.8429 4.14822 11.6229 4.12001C11.7157 3.94901 11.8293 3.79101 11.9691 3.64901C12.0781 3.54001 12.1982 3.44701 12.3224 3.36701C12.4223 3.40201 12.5203 3.44201 12.6156 3.48701C13.0795 3.68245 13.4967 3.9724 13.8401 4.33801C14.1893 4.68701 14.4513 5.14251 14.638 5.59101C14.8247 6.07101 14.9025 6.57351 14.9025 7.05351C14.8813 7.5481 14.7737 8.03532 14.5845 8.49351C14.3978 8.92 14.105 9.31351 13.7558 9.66251C13.5764 9.84208 13.3775 10.0014 13.1627 10.1375L12.9513 9.58001V9.58451ZM7.74926 16.758C7.67086 16.7286 7.59374 16.6959 7.51811 16.66C7.05423 16.4646 6.63705 16.1746 6.29369 15.809C5.94443 15.46 5.68249 15.0045 5.49575 14.5535C5.31848 14.0861 5.22952 13.5903 5.2333 13.091C5.25344 12.5963 5.36106 12.1089 5.55126 11.651C5.73801 11.2245 6.03124 10.831 6.3805 10.4825C6.54594 10.316 6.72826 10.1669 6.92457 10.0375L7.14008 10.5975C7.01716 10.6905 6.90065 10.7916 6.79133 10.9C6.5203 11.1935 6.28006 11.567 6.14934 11.938C5.98683 12.34 5.93131 12.7425 5.93131 13.138C5.93131 13.533 6.03124 13.9355 6.19578 14.307C6.35658 14.6704 6.59108 14.9972 6.8847 15.267C7.17793 15.529 7.49539 15.747 7.86888 15.878C8.05814 15.9445 8.25599 15.991 8.45383 16.02C8.36244 16.1843 8.24866 16.3354 8.11568 16.469C8.00617 16.5785 7.88383 16.6747 7.75128 16.7555M7.90017 15.798C7.52921 15.6355 7.23396 15.3955 6.97151 15.131C6.73127 14.838 6.51576 14.52 6.38252 14.171C6.25465 13.8214 6.19139 13.4518 6.19578 13.08C6.19578 12.7025 6.2735 12.329 6.43602 12.011C6.56724 11.671 6.78426 11.376 7.04671 11.136C7.1204 11.069 7.19812 11.009 7.27787 10.951L7.50902 11.556C7.49136 11.5735 7.47369 11.589 7.45603 11.609C7.24708 11.8245 7.11585 12.058 7.00684 12.329C6.89782 12.6 6.87561 12.8935 6.87561 13.158C6.87561 13.453 6.95334 13.7155 7.06236 13.9555C7.17137 14.1955 7.35559 14.4135 7.54233 14.598C7.72907 14.76 7.96931 14.9225 8.20905 15C8.36904 15.0555 8.54014 15.085 8.71577 15.098C8.70171 15.4089 8.61737 15.7127 8.46897 15.987C8.27287 15.9452 8.08209 15.8818 7.90017 15.798ZM8.6759 14.591C8.70921 14.751 8.72032 14.911 8.71577 15.069C8.55265 15.0364 8.39334 14.9873 8.24034 14.9225C8.0001 14.8225 7.79115 14.66 7.62914 14.4735C7.47369 14.28 7.33591 14.071 7.25818 13.831C7.17339 13.591 7.14917 13.351 7.14917 13.111C7.17515 12.6731 7.35515 12.2581 7.65791 11.938L8.6759 14.591ZM5.60729 16.4645C5.14901 16.007 4.83357 15.48 4.59333 14.8935C4.38489 14.3355 4.27537 13.6935 4.27537 13.0825C4.30666 12.471 4.43788 11.86 4.67812 11.3025C4.91786 10.7375 5.28882 10.2335 5.7158 9.80901C5.97542 9.55184 6.26654 9.32793 6.58238 9.14251L6.74691 9.56901C6.49557 9.73351 6.2624 9.91801 6.05799 10.1425C5.68541 10.533 5.39601 10.9938 5.20706 11.4975C5.02031 12 4.94461 12.5355 4.94461 13.069C4.9759 13.5955 5.07583 14.129 5.29336 14.609C5.50963 15.089 5.81761 15.523 6.20032 15.887C6.57657 16.2426 7.01783 16.5238 7.50044 16.7155C7.56908 16.7425 7.63823 16.7645 7.70737 16.789C7.39156 16.9744 7.03355 17.0776 6.66667 17.089C6.53596 17.0914 6.40545 17.078 6.27804 17.049C6.0375 16.8766 5.81363 16.6824 5.60931 16.469M15.4627 8.84701C15.2224 9.41101 14.8515 9.91551 14.4245 10.34C14.1508 10.6122 13.8415 10.847 13.5049 11.038L13.3449 10.613C13.6174 10.4441 13.8661 10.2403 14.0848 10.007C14.4558 9.61101 14.7511 9.15551 14.9358 8.65101C15.1225 8.14901 15.1982 7.61351 15.1982 7.08001C15.1669 6.55351 15.067 6.02001 14.849 5.54001C14.418 4.58026 13.6265 3.82466 12.6424 3.43351C12.5522 3.39854 12.4602 3.36817 12.3668 3.34251C12.8165 3.07501 13.3529 2.98908 13.8648 3.10251C14.107 3.27551 14.3311 3.47101 14.531 3.68251C14.9893 4.14001 15.3047 4.66451 15.5445 5.25351C15.7534 5.81101 15.8624 6.45351 15.8624 7.06451C15.8316 7.67551 15.7004 8.289 15.4602 8.8445"
                    fill="white"
                />
            </svg>
        ),
    },
];

export default function MintInterface() {
    const { data } = usePrice()
    const supraPrice = data?.usd
    const sellCurrency = currencies[0]
    const [buyCurrency, setBuyCurrency] = useState<Currency>(currencies[1]);
    const [sellValue, setSellValue] = useState<string>("");
    const [buyValue, setBuyValue] = useState<string>("");
    const {mint, isPending} = useMint(Number(buyValue))
    const buyCurrencies = useMemo(
        () => currencies.filter((currency) => currency.id !== sellCurrency.id),
        [sellCurrency]
    );
    const sellCurrencies = useMemo(
        () => currencies.filter((currency) => currency.id !== buyCurrency.id),
        [buyCurrency]
    );

    const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (supraPrice && e.target.value !== "") {
            if (buyCurrency.id === currencies[0].id) {
                const val = Big(e.target.value).mul(Big(1).div(supraPrice)).toString()
                setBuyValue(val)
            } else {
                const val = Big(e.target.value).mul(supraPrice).toString()
                setBuyValue(val)
            }
        } else {
            setBuyValue("")
        }
        setSellValue(e.target.value)
    }

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBuyValue(e.target.value)
        if (supraPrice && e.target.value !== "") {
            if (buyCurrency.id === currencies[0].id) {
                const val = Big(e.target.value).mul(supraPrice).toString()
                setSellValue(val)
            } else {
                const val = Big(e.target.value).div(supraPrice).toString()
                setSellValue(val)
            }
        } else {
            setSellValue("")
        }
    }

    return (
        <Card className="w-full max-w-md mt-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Mint</CardTitle>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Settings2 className="h-5 w-5" />
                    <span className="sr-only">Trade Settings</span>
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground font-bold">Sell</span>
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Input
                            type="number"
                            value={sellValue}
                            onChange={handleFromAmountChange}
                            placeholder="0.00"
                            className="text-2xl font-medium h-16 px-3 py-2 [appearance:textfield]"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <Select value={buyCurrency.id} onValueChange={(value) => {
                                const currency = currencies.find((currency) => currency.id === value)
                                if (currency) {
                                    setBuyCurrency(currency)
                                }
                            }}>
                                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0">
                                    <SelectValue>
                                        <div className="flex items-center gap-2">
                                            {buyCurrency.icon}
                                            <span className="font-bold text-lg">{buyCurrency.name}</span>
                                        </div>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectContent>
                                        {sellCurrencies.map((currency, index) => <SelectItem key={index} value={currency.id}>
                                            <div className="flex items-center gap-2">
                                                {currency.icon}
                                                {currency.name}
                                            </div>
                                        </SelectItem>)}
                                    </SelectContent>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-3">
                        <span className="text-sm text-muted-foreground">
                            {sellValue !== "" ? buyCurrency.id === currencies[1].id ? "$" + Big(sellValue).mul(supraPrice).toFixed(4) : "$" + Big(sellValue).toFixed(4) : ""}
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center mt-6 mb-2">
                        <span className="text-sm text-muted-foreground font-bold">Buy</span>
                    </div>
                    <div className="relative">
                        <Input
                            type="number"
                            value={buyValue}
                            onChange={handleToAmountChange}
                            placeholder="0.00"
                            className="text-2xl font-medium h-16 px-3 py-2 [appearance:textfield]"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <Select value={buyCurrency.id} onValueChange={(value) => {
                                const currency = currencies.find((currency) => currency.id === value)
                                if (currency) {
                                    setBuyCurrency(currency)
                                }
                            }}>
                                <SelectTrigger className="h-full border-0 bg-transparent focus:ring-0">
                                    <SelectValue>
                                        <div className="flex items-center gap-2">
                                            {sellCurrency.icon}
                                            <span className="font-bold text-lg">{sellCurrency.name}</span>
                                        </div>
                                    </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {buyCurrencies.map((currency, index) => <SelectItem key={index} value={currency.id}>
                                        <div className="flex items-center gap-2">
                                            {currency.icon}
                                            {currency.name}
                                        </div>
                                    </SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-3">
                        <span className="text-sm text-muted-foreground">
                            {buyValue !== "" ? buyCurrency.id === currencies[0].id ? "$" + Big(buyValue).mul(supraPrice).toFixed(4) : "$" + Big(buyValue).toFixed(4) : ""}
                        </span>
                    </div>
                </div>
                <Button
                    className="w-full h-14 text-lg font-semibold"
                    disabled={isPending}
                    onClick={async() => {
                        await mint()
                    }}
                >
                    Mint
                </Button>
            </CardContent>
        </Card>
    )
}

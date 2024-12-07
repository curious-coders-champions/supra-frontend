import { Transaction } from "@/types/tx";

export const transactionHistory: Transaction[] = [
    {
        id: 1,
        type: "Swap",
        from: { symbol: "ETH", amount: "0.5" },
        to: { symbol: "USDC", amount: "1,623.45" },
        time: "2 mins ago",
        status: "completed",
    },
    {
        id: 2,
        type: "Swap",
        from: { symbol: "USDC", amount: "500" },
        to: { symbol: "SOL", amount: "4.88" },
        time: "5 mins ago",
        status: "completed",
    },
];

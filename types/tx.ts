export type Transaction = {
    id: number;
    type: string;
    from: { symbol: string; amount: string };
    to: { symbol: string; amount: string };
    time: string;
    status: string;
};

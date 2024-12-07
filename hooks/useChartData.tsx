import { useQuery } from '@tanstack/react-query';

const useChartData = () => {
    return useQuery({
        queryKey: ['chartData'],
        queryFn: async () => {
            const url = 'https://pro-api.coingecko.com/api/v3/coins/supra/market_chart?vs_currency=usd&days=max&interval=daily&precision=4';
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', 'x-cg-pro-api-key': process.env.NEXT_PUBLIC_COINGECKO_API_KEY ?? '' }
            };
            const response = await fetch(url, options)
            const data = await response.json()
            return { prices: data.prices }
        }
    })
}

export default useChartData
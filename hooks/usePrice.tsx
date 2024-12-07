import { useQuery } from '@tanstack/react-query'

const usePrice = () => {
    return useQuery({
        queryKey: ['price'],
        queryFn: async () => {
            const response = await fetch(`https://pro-api.coingecko.com/api/v3/simple/price?ids=supra&vs_currencies=usd&include_24hr_change=true&x_cg_pro_api_key=${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}`)
            const data = await response.json()
            return { usd: data.supra.usd, change: data?.supra.usd_24h_change}
        }
    })
}

export default usePrice

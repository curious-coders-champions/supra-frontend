"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { format } from "date-fns"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import useChartData from "@/hooks/useChartData"


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function LineChart() {
    const { data } = useChartData()

    const chartData = data?.prices.map((price: [number, number]) => ({
        date: format(new Date(price[0]), 'MMM d, yyyy'),
        price: price[1]
    }))

    return (
        <Card>
            <CardHeader>
            <CardTitle className="font-medium text-2xl">$ {chartData && chartData[chartData?.length - 1]?.price} USD</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.split(',')[0]}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent
                                indicator="line"
                                formatter={(value, name, props) => {
                                    const formattedDate = format(new Date(props.payload.date), 'MMM d, yyyy')
                                    return (
                                        <div className="space-y-1">
                                            <div className="text-sm text-black">
                                                Date: {formattedDate}
                                            </div>
                                            <div className="text-sm text-black">Price : ${value}</div>
                                        </div>
                                    )
                                }}
                            />}
                        />
                        <Area
                            dataKey="price"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

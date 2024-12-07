import { cn } from "@/lib/utils";
import { List } from "../list";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const marketStatsData = [
    { label: "Market Cap", value: "1B" },
    { label: "24 Volume", value: "100M" },
    { label: "Circulating Supply", value: "200K" }]



export function MarketStasts() {
    return <Card className="rounded-3xl">
        <CardHeader>
            <CardTitle className="text-2xl font-medium">Market Stats</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
            <List data={marketStatsData} renderItem={(item, index) => <MarketStatItem className={cn(index == 1 && 'border-x-2 border-x-secondary flex-1')}key={item.label} {...item} />} />

        </CardContent>
    </Card>
}


export function MarketStatItem({ label, value, className }: { label: string, value: string,className: string }) {
    return <div className={cn("flex flex-col gap-y-1 flex-1 px-5", className)}>
        <p className="text-base font-extralight text-secondary-foreground">{label}</p>
        <p className="font-semibold text-2xl">{value}</p>
    </div>
}

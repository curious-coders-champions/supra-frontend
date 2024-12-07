import { List } from "../list";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const marketStatsData = [
    { label: "Market Cap", value: "1B" },
    { label: "24 Volume", value: "100M" },
    { label: "Circulating Supply", value: "200K" }]



export function MarketStasts() {
    return <Card className="rounded-xl">
        <CardHeader>
            <CardTitle>Market Stats</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
            <List data={marketStatsData} renderItem={(item) => <MarketStatItem key={item.label} {...item} />} />
        </CardContent>
    </Card>
}


export function MarketStatItem({ label, value }: { label: string, value: string }) {
    return <div className="flex flex-col gap-y-1">
        <p className="text-xs font-extralight text-secondary-foreground">{label}</p>
        <p className="font-extrabold text-lg">{value}</p>
    </div>
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
export function MarketSwapTabs() {
    return <Tabs defaultValue="market" className="w-[400px]">
        <TabsList className="bg-transparent">
            <TabsTrigger value="market" asChild>
                <Button size={"sm"} variant={"link"}>Market</Button>
            </TabsTrigger>
            <TabsTrigger value="limit">Limit</TabsTrigger>
        </TabsList>
        <Separator className="w-[300px]" />
        <TabsContent value="market">Market.</TabsContent>
        <TabsContent value="limit">Limit</TabsContent>
    </Tabs>
}

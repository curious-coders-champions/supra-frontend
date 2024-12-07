import { ReactNode } from "react";
import { Description } from "../description";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { SocialLink } from "../social-link";


type AboutMarketProps = {
    description: string
    name: string
    aditionalInfo?: {
        links: {
            label: string
            href: string
            logo: ReactNode
        }[]
    }
}

export function AboutMarket(props: AboutMarketProps) {
    return <Card>
        <CardHeader>
            <CardTitle className="font-medium text-2xl">About SUPRA</CardTitle>
        </CardHeader>
        <CardContent>
            <Description description={props.description} />
        </CardContent>
        {props.aditionalInfo && <>
        <Separator />
        <CardFooter className="flex flex-col gap-y-1">
            <h3 className="text-sm font-light">Additional Links</h3>
            <div className="flex gap-x-2 items-center">
                {props.aditionalInfo.links.map((link) => {
                    return <SocialLink key={link.label} {...link} />
                })}
            </div>
        </CardFooter>
        </>
        }
    </Card>
}

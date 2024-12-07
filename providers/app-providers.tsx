import { PropsWithChildren } from "react";
import { AppQueryClientProvider } from "./query-client-provider";

export function AppProviders(props: PropsWithChildren) {
    return <AppQueryClientProvider>
        {props.children}</AppQueryClientProvider>
}

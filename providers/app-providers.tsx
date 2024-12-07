import { PropsWithChildren } from "react";
import { AppQueryClientProvider } from "./query-client-provider";
import toast, { Toaster } from 'react-hot-toast';

export function AppProviders(props: PropsWithChildren) {
    return <AppQueryClientProvider>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
        {props.children}</AppQueryClientProvider>
}

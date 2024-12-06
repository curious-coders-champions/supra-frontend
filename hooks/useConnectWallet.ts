"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const getProvider = () => {
    if ("starkey" in window) {
        const provider = window.starkey?.supra;

        if (provider) {
            return provider;
        }
        return null;
    }
};

export function useIsStarKeyInstalled() {
    const [isInstalled, setISInstalled] = useState(false);

    useEffect(() => {
        const isStarkeyInstalled = window?.starkey;
        if (isStarkeyInstalled) {
            setISInstalled(true);
        }
    }, [window?.starkey]);

    return isInstalled;
}

export function useConnectWallet() {
    const {
        mutate: connect,
        isPending: connecting,
        isError: isConnectionError,
        error: connectionError,
        ...rest
    } = useMutation({
        mutationFn: async () => {
            const provider = getProvider();
            if (!provider) {
                throw new Error("No Wallet found");
            }
            const accounts = await provider.connect();

            return accounts;
        },
        onSuccess(address: string) {
            console.log(`connected to ${address}`);
        },
        onError(e) {
            console.log("Error", e);
        },
    });
    return {
        connect,
        connecting,
        isConnectionError,
        connectionError,
        ...rest,
    };
}

export function useAccount() {
    const { data: address, isLoading: connecting } = useQuery({
        async queryFn() {
            const provider = getProvider();
            const accounts = await provider.account();
            if (accounts?.length) {
                return accounts[0];
            }
            return null;
        },
        queryKey: ["SUPRA_CONNECT_WALLET"],
    });
    return {
        address,
        connecting,
        isConnected: address ? true : false,
    };
}

export function useDisconnect() {
    const {
        mutate: disconnect,
        isPending: disconnecting,
        isError: disconnectError,
        ...rest
    } = useMutation({
        async mutationFn() {
            const provider = getProvider();
            if (!provider) {
                throw new Error("No Provider Found");
            }
            await provider.disconnect();
        },
        onSuccess() {
            console.log("Disconnected Successfully");
        },
        onError(e) {
            console.log("Disonnect Error", e);
        },
    });

    return {
        disconnect,
        disconnecting,
        disconnectError,
        ...rest,
    };
}

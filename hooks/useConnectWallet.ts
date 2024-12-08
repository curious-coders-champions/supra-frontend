"use client";
declare global {
  interface Window {
    starkey?: {
      supra: any; // Replace 'any' with proper provider type if available
    };
  }
}

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const getProvider = () => {
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
  const [balance, setBalance] = useState(0);
  const { data: address, isLoading: connecting } = useQuery({
    async queryFn() {
      const provider = getProvider();
      const accounts = await provider.account();
      if (accounts?.length) {
        const balance = await provider?.balance();
        const formatted =
          balance?.balance == 0 ? 0 : balance?.balance / 100000000;
        setBalance(formatted);
        return accounts[0];
      }
      return null;
    },
    queryKey: ["SUPRA_CONNECT_WALLET"],
  });

  return {
    address,
    balance,
    connecting,
    isConnected: address ? true : false,
  };
}

export function useDisconnect() {
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries({
        queryKey: ["SUPRA_CONNECT_WALLET"],
      });
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

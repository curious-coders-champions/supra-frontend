'use client'

import { MODULE_ADDRESS } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { BCS, TxnBuilderTypes } from "supra-l1-sdk";
import { getProvider, useAccount } from "./useConnectWallet";

export enum COINS {
    USDT = "USDT",
    BTC = "BTC",
    USDC = "USDC",
    ETH = "ETH",
    APT = "APT",
    THL = "THL",
    SUPRA = "SUPRA"
}
export function useFaucet() {
    const { address } = useAccount()

    const { data: txhash, mutateAsync: swap, isPending } = useMutation({
        mutationFn: async (coin: COINS) => {
            try {
                const supraProvider = getProvider()
                const txExpiryTime = (Math.ceil(Date.now() / 1000) + 30) //30 seconds

                const optionalTransactionPayloadArgs = {
                    txExpiryTime
                }

                const rawTxPayload = [
                    address, // sender address
                    0,
                    MODULE_ADDRESS,  //  module addres
                    "coins", // contract
                    "mint_coin", // func
                    [
                        MODULE_ADDRESS + "::" + "coins" + "::" + coin
                    ],
                    [
                        BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(address)),
                        BCS.bcsSerializeUint64(100),
                    ],
                    optionalTransactionPayloadArgs
                ];
                debugger
                const data = await supraProvider.createRawTransactionData(rawTxPayload);
                if (!data) {
                    throw new Error('Not able to create data')
                }
                const networkData = await supraProvider.getChainId()

                const params = {
                    data: data,
                    from: address,
                    to: MODULE_ADDRESS,
                    chainId: networkData.chainId,
                    value: "",
                };
                const txHash = await supraProvider.sendTransaction(params);
                console.log("txHash :: ", txHash);
                return txHash
            } catch (error) {
                throw error
            }
        }
    })

    return {
        txhash,
        swap,
        isPending
    }
}


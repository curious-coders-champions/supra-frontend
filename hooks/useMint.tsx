'use client'

import { MODULE_ADDRESS } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { BCS, TxnBuilderTypes } from "supra-l1-sdk";
import { getProvider, useAccount } from "./useConnectWallet";
import Big from "big.js";

export enum COINS {
    USDT = "USDT",
    BTC = "BTC",
    USDC = "USDC",
    ETH = "ETH",
    APT = "APT",
    THL = "THL",
    SUPRA = "SUPRA"
}
export function useMint(amount: number) {
    const { address } = useAccount()
    console.log(
        MODULE_ADDRESS + "::" + "coins" + "::" + COINS.USDT
    )

    const { data: txhash, mutateAsync: mint, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const supraProvider = getProvider()
                const txExpiryTime = (Math.ceil(Date.now() / 1000) + 30) //30 seconds

                const optionalTransactionPayloadArgs = {
                    txExpiryTime
                }

                const rawTxPayload = [
                    address, // sender address
                    0,
                    '0x2b0f67c4e38106cb2eed8c55d99d75c233d539f6ed5f961489c059d99aad4f7c',  //  module addres
                    "coins", // contract
                    "mint_coin", // func
                    [
                        '0x2b0f67c4e38106cb2eed8c55d99d75c233d539f6ed5f961489c059d99aad4f7c::coins::USDT'],
                    [
                        BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(address)),
                        BCS.bcsSerializeUint64(Number(Big(amount).toFixed(0,0)))
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
                    to: '0x2b0f67c4e38106cb2eed8c55d99d75c233d539f6ed5f961489c059d99aad4f7c',
                    chainId: networkData.chainId,
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
        mint,
        isPending
    }
}


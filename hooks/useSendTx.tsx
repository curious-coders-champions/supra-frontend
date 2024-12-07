'use client'

import { useMutation } from "@tanstack/react-query"
import { BCS, HexString, TxnBuilderTypes } from "supra-l1-sdk";
import { getProvider, useAccount } from "./useConnectWallet";
import { Hexagon } from "lucide-react";

export function useSendTx({ amount }: { amount: string }) {
    const { address } = useAccount()

    const txExpiryTime = (Math.ceil(Date.now() / 1000) + 30) //30 seconds

    const optionalTransactionPayloadArgs = {
        txExpiryTime
    }


    const rawTxPayload = [
        address, // sender address
        0,
        "22f24d5f896c189498c4e41ac8b7bc1821d33e462f11cb4a3f4e72e24d290f99",  //  module addres
        "transfer", // contract
        "two_by_two", // func
        [],
        [
            BCS.bcsSerializeUint64(9),
            BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex('6c11503d6f063d9328ba101345b0d53dd2b0c4413e233f6302a19bc22b3b9038')),
            BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex('6c11503d6f063d9328ba101345b0d53dd2b0c4413e233f6302a19bc22b3b9038')),
        ],
        optionalTransactionPayloadArgs
    ];


    const { data: txhash, mutate: swap, isPending } = useMutation({
        mutationFn: async () => {
            const supraProvider = getProvider()
            const data = await supraProvider.createRawTransactionData(rawTxPayload);
            console.log('data')
            if (!data) {
                throw new Error('Not able to create data')
            }
            const networkData = await supraProvider.getChainId()

            const params = {
                data: data,
                from: address,
                to: "0xd25f78655f32e2534dfc26fc45391c5e3b3ccd82ce7f3992b76ef7d01b474a55",
                chainId: networkData.chainId,
                value: "",
            };
            const txHash = await supraProvider.sendTransaction(params);
            console.log("txHash :: ", txHash);
            return txHash
        }
    })

    return {
        txhash,
        swap,
        isPending
    }
}


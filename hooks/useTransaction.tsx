'use client'

import {
    UseMutationOptions,
    useMutation
} from "@tanstack/react-query";
import { SupraClient, SupraAccount } from "supra-l1-sdk";

import { BaseTransactionParams, TransactionOptions, TransactionPayload, TransactionResult, TransactionSimulationOptions } from "@/types/supra";
import { executeTransaction, simulateTransaction } from "@/lib/utils";

export const useTransaction = (
    client: SupraClient,
    options?: UseMutationOptions<TransactionResult, Error, BaseTransactionParams>
) => {
    const mutation = useMutation<TransactionResult, Error, BaseTransactionParams>({
        ...options,
        mutationFn: async ({ sender, payload, txOptions }) => {
            return executeTransaction(client, sender, payload, txOptions);
        },
    });

    const sendTransaction = (
        sender: SupraAccount,
        payload: TransactionPayload,
        txOptions?: TransactionOptions
    ) => {
        return mutation.mutate({ sender, payload, txOptions });
    };

    const simulateTx = async (
        sender: SupraAccount,
        payload: TransactionPayload,
        simulationOptions?: TransactionSimulationOptions
    ) => {
        return simulateTransaction(client, sender, payload, simulationOptions);
    };

    return {
        ...mutation,
        sendTransaction,
        simulateTransaction: simulateTx,
    };
};

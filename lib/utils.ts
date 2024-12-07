import { SUPRA_CLIENT_RPC } from "@/config";
import {
    TransactionOptions,
    TransactionPayload,
    TransactionResult,
    TransactionSimulationOptions,
} from "@/types/supra";
import { clsx, type ClassValue } from "clsx";
import { SupraAccount, SupraClient } from "supra-l1-sdk";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function getSupraClient() {
    return await SupraClient.init(SUPRA_CLIENT_RPC);
}

export const validatePayload = (payload: TransactionPayload): void => {
    if (!payload.moduleAddress || !payload.moduleName || !payload.functionName) {
        throw new Error("Invalid transaction payload: Missing required fields");
    }
};

export const formatError = (err: unknown): string => {
    return err instanceof Error ? err.message : String(err);
};

export const executeTransaction = async (
    client: SupraClient,
    sender: SupraAccount,
    payload: TransactionPayload,
    options: TransactionOptions = {},
): Promise<TransactionResult> => {
    try {
        validatePayload(payload);

        const accountInfo = await client.getAccountInfo(sender.address());

        const rawTransaction = await client.createRawTxObject(
            sender.address(),
            accountInfo.sequence_number,
            payload.moduleAddress,
            payload.moduleName,
            payload.functionName,
            [],
            payload.args || [],
        );

        const txResult = await client.sendTxUsingSerializedRawTransaction(
            sender,
            rawTransaction,
            {
                enableWaitForTransaction: options.enableWaitForTransaction ?? true,
                enableTransactionSimulation:
                    options.enableTransactionSimulation ?? true,
                timeout: options.timeout ?? 30000,
            },
        );

        return {
            hash: txResult.txHash,
            success: true,
            data: txResult,
            timestamp: Date.now(),
        };
    } catch (err) {
        const errorMessage = formatError(err);
        console.error("Transaction failed:", errorMessage);

        return {
            hash: "",
            success: false,
            error: errorMessage,
            timestamp: Date.now(),
        };
    }
};

export const simulateTransaction = async (
    client: SupraClient,
    sender: SupraAccount,
    payload: TransactionPayload,
    simulationOptions: TransactionSimulationOptions = {},
): Promise<TransactionResult> => {
    try {
        validatePayload(payload);

        const accountInfo = await client.getAccountInfo(sender.address());

        const serializedRawTransaction = await client.createSerializedRawTxObject(
            sender.address(),
            accountInfo.sequence_number,
            payload.moduleAddress,
            payload.moduleName,
            payload.functionName,
            [],
            payload.args || [],
        );

        const simulationResult =
            await client.simulateTxUsingSerializedRawTransaction(
                sender.address(),
                {
                    Ed25519: {
                        public_key: sender.pubKey().toString(),
                        signature: simulationOptions.skipSignatureCheck
                            ? "0x" + "0".repeat(128)
                            : undefined,
                    },
                },
                serializedRawTransaction,
            );

        return {
            hash: "",
            success: true,
            data: simulationResult,
            timestamp: Date.now(),
        };
    } catch (err) {
        const errorMessage = formatError(err);
        console.error("Transaction simulation failed:", errorMessage);

        return {
            hash: "",
            success: false,
            error: errorMessage,
            timestamp: Date.now(),
        };
    }
};

export const truncate = (
    str: string | null | undefined = "",
    num: number,
): string => {
    if (str == null) return "";
    const strValue = String(str);
    if (strValue.length <= num) {
        return strValue;
    }
    return strValue.slice(0, num) + "..." + strValue.slice(-num);
};

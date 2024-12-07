import { SupraAccount } from "supra-l1-sdk";

export interface TransactionPayload {
    moduleAddress: string;
    moduleName: string;
    functionName: string;
    args?: unknown[];
}

export interface TransactionOptions {
    enableWaitForTransaction?: boolean;
    enableTransactionSimulation?: boolean;
    timeout?: number;
}

export interface TransactionResult<T = unknown> {
    hash: string;
    success: boolean;
    data?: T;
    error?: string;
    timestamp?: number;
}

export interface TransactionSimulationOptions {
    skipSignatureCheck?: boolean;
    estimateGasOnly?: boolean;
}

export interface BaseTransactionParams {
    sender: SupraAccount;
    payload: TransactionPayload;
    txOptions?: TransactionOptions;
}

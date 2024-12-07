import { useMutation } from "@tanstack/react-query";
import { useAccount } from "@/hooks/useConnectWallet";
import { useTransaction } from "@/hooks/useTransaction";
import { SUPRA_CLIENT_RPC } from "@/config";
import { Button } from "../ui/button";
import { TransactionOptions, TransactionPayload } from "@/types/supra";
import { SupraClient } from "supra-l1-sdk";

const supraClient = new SupraClient(SUPRA_CLIENT_RPC);

export function SwapButton() {
  const { address } = useAccount();
  
  const swapPayload: TransactionPayload = {
    moduleAddress: '0x5678...',
    moduleName: 'ExampleModule',
    functionName: 'exampleFunction',
    args: [
      'arg1',
      42,
      { someObject: 'value' }
    ]
  };

  const txOptions: TransactionOptions = {
    enableWaitForTransaction: true,
    enableTransactionSimulation: true,
    timeout: 30000 // 30 seconds
  };

  const {
    sendTransaction,
    simulateTransaction,
  } = useTransaction(supraClient, {
    onSuccess: (result) => {
      console.log('Transaction successful:', result);
    },
    onError: (error) => {
      console.error('Transaction failed:', error);
    }
  });

  // Mutation for transaction flow
  const transactionMutation = useMutation({
    mutationFn: async () => {
      if (!address) throw new Error('No wallet connected');
      
      // First, simulate the transaction
      await simulateTransaction(
        address, 
        swapPayload, 
        { 
          skipSignatureCheck: true, 
          estimateGasOnly: false 
        }
      );
      
      // If simulation passes, send the transaction
      return sendTransaction(address, swapPayload, txOptions);
    },
    onSuccess: (result) => {
      console.log('Full transaction flow successful:', result);
    },
    onError: (error) => {
      console.error('Transaction flow failed:', error);
    }
  });

  return (
    <Button 
      onClick={() => transactionMutation.mutate()}
      disabled={transactionMutation.isPending || !address}
      className="w-full mt-10"
    >
      {transactionMutation.isPending ? 'Processing...' : 'Swap'}
    </Button>
  );
}

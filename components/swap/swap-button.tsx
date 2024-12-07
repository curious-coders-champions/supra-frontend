import { Button } from "../ui/button";
import { useSendTx } from "@/hooks/useSendTx";


export function SwapButton() {
    const {swap, isPending} = useSendTx({amount: '0'})
    return (
    <Button 
      onClick={() => swap()}
      disabled={isPending}
      className="w-full mt-10 h-14"
    >
      {isPending ? 'Processing...' : 'Swap'}
    </Button>
  );
}

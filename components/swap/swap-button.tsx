import { useMint } from "@/hooks/useMint";
import { Button } from "../ui/button";
import { useSendTx } from "@/hooks/useSendTx";


export function SwapButton({amount}:{amount: number}) {
    const {mint, isPending} = useMint(amount)
    return (
    <Button 
      onClick={() => mint()}
      disabled={isPending}
      className="w-full mt-10 h-14"
    >
      {isPending ? 'Processing...' : 'Swap'}
    </Button>
  );
}

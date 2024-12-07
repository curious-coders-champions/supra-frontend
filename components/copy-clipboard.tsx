'use client'
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Copy, Check } from "lucide-react"

export function CopyToClipboard({ text }: { text: string }) {
    const [copied, setCopied] = useState<boolean>(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        
        if (copied) {
            timeoutId = setTimeout(() => {
                setCopied(false)
            }, 2000)
        }

        // Cleanup function to clear the timeout if component unmounts
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [copied])

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(text)
            setCopied(true)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleCopy}
            aria-label="Copy to clipboard"
        >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
    )
}

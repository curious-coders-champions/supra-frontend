import React from "react"

import { Button } from "@/components/ui/button"
import { CircleDot, Contrast, Copyright, DiscIcon as Discord, Globe, MessageCircle, Twitter } from 'lucide-react'
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: React.ReactElement
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-6"
      asChild
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {React.cloneElement(icon, {
          className: "w-5 h-5",
          "aria-hidden": "true"
        } as React.SVGProps<SVGSVGElement>)}
      </Link>
    </Button>
  )
}

export default function SocialLinks() {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-3">
        <section className="flex flex-col gap-y-2">
          <h2 className="text-xs font-semibold">Official links</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://testnet.suprascan.io/address/0x2b0f67c4e38106cb2eed8c55d99d75c233d539f6ed5f961489c059d99aad4f7c" icon={<Contrast />} label="Analytics" />
            <SocialLink href="https://supra.com/" icon={<Globe />} label="Website" />
            <SocialLink href="https://x.com/SUPRA_Labs" icon={<Twitter />} label="Twitter" />
            <SocialLink href="https://t.me/SupraOracles" icon={<MessageCircle />} label="Telegram" />
            <SocialLink href="https://discord.com/invite/supralabs" icon={<Discord />} label="Discord" />
          </div>
        </section>

        <section className="flex flex-col gap-y-2">
          <h2 className="text-xs font-semibold ">Trackers</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://www.coingecko.com/en/coins/supra" icon={<CircleDot />} label="Coingeko " />
          </div>
        </section>

        <section className="flex flex-col gap-y-2">
          <h2 className="text-xs font-semibold">Exchange</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://www.kucoin.com/trade/SUPRA-USDT" icon={<Copyright />} label="Exchange 1" />

          </div>
        </section>
      </div>
    </div>
  )
}



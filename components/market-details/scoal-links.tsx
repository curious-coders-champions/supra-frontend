import React from "react"

import { Button } from "@/components/ui/button"
import { BarChart3, Globe, Twitter, MessageCircle, DiscIcon as Discord, CircleDot, AtSign, Copyright, Binary } from 'lucide-react'
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
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
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-5 h-5",
          "aria-hidden": "true"
        })}
      </Link>
    </Button>
  )
}

export default function SocialLinks() {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-3">
        <section>
          <h2 className="text-xs font-semibold">Official links</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://analytics.example.com" icon={<BarChart3 />} label="Analytics" />
            <SocialLink href="https://example.com" icon={<Globe />} label="Website" />
            <SocialLink href="https://twitter.com/example" icon={<Twitter />} label="Twitter" />
            <SocialLink href="https://t.me/example" icon={<MessageCircle />} label="Telegram" />
            <SocialLink href="https://discord.gg/example" icon={<Discord />} label="Discord" />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold ">Trackers</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://tracker1.example.com" icon={<CircleDot />} label="Tracker 1" />
            <SocialLink href="https://tracker2.example.com" icon={<AtSign />} label="Tracker 2" />
          </div>
        </section>

        <section>
          <h2 className="text-xs font-semibold">Exchange</h2>
          <div className="flex flex-wrap gap-4">
            <SocialLink href="https://exchange1.example.com" icon={<Copyright />} label="Exchange 1" />
            <SocialLink href="https://exchange2.example.com" icon={<Binary />} label="Exchange 2" />
          </div>
        </section>
      </div>
    </div>
  )
}


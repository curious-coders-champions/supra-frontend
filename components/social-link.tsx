import { ReactNode } from "react"

interface SocialLinkProps {
  href: string
  label: string
  logo: ReactNode
  className?: string
}

export function SocialLink({ href, label, logo, className = "" }: SocialLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {logo}
      <span>{label}</span>
    </a>
  )
}



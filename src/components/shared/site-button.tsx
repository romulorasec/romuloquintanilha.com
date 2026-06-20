"use client"

import { ArrowRight } from "lucide-react"

interface SiteButtonProps {
  variant: "primary" | "secondary"
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  "aria-label"?: string
}

export function SiteButton({
  variant,
  children,
  href,
  onClick,
  className,
  "aria-label": ariaLabel,
}: SiteButtonProps) {
  const cls = `button button-${variant}${className ? ` ${className}` : ""}`

  const inner = (
    <>
      {children}
      {variant === "secondary" ? (
        <span className="button-icon">
          <span className="button-arrow">
            <ArrowRight />
          </span>
        </span>
      ) : (
        <span className="button-arrow">
          <ArrowRight />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}

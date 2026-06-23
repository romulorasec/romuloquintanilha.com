"use client"

import { ChevronRight } from "lucide-react"

interface SiteButtonProps {
  variant: "primary" | "primary-inverse" | "primary-icon" | "secondary" | "secondary-inverse" | "ghost-icon"
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
      {variant === "secondary" || variant === "primary-icon" || variant === "ghost-icon" ? (
        <span className="button-icon">
          <span className="button-arrow">
            <ChevronRight />
          </span>
        </span>
      ) : (
        <span className="button-arrow">
          <ChevronRight />
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

"use client"

import { useState, useTransition } from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  "pt-BR": "PT",
  "pt-PT": "PT",
  es: "ES",
}

function FlagUS() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ display: "block", borderRadius: "1px", flexShrink: 0 }}>
      <rect width="20" height="14" fill="#B22234" />
      <rect y="1.08" width="20" height="1.08" fill="white" />
      <rect y="3.23" width="20" height="1.08" fill="white" />
      <rect y="5.38" width="20" height="1.08" fill="white" />
      <rect y="7.54" width="20" height="1.08" fill="white" />
      <rect y="9.69" width="20" height="1.08" fill="white" />
      <rect y="11.85" width="20" height="1.08" fill="white" />
      <rect width="8" height="7.54" fill="#3C3B6E" />
      <circle cx="1.5" cy="1.2" r="0.7" fill="white" />
      <circle cx="3.5" cy="1.2" r="0.7" fill="white" />
      <circle cx="5.5" cy="1.2" r="0.7" fill="white" />
      <circle cx="2.5" cy="2.7" r="0.7" fill="white" />
      <circle cx="4.5" cy="2.7" r="0.7" fill="white" />
      <circle cx="6.5" cy="2.7" r="0.7" fill="white" />
      <circle cx="1.5" cy="4.2" r="0.7" fill="white" />
      <circle cx="3.5" cy="4.2" r="0.7" fill="white" />
      <circle cx="5.5" cy="4.2" r="0.7" fill="white" />
      <circle cx="2.5" cy="5.7" r="0.7" fill="white" />
      <circle cx="4.5" cy="5.7" r="0.7" fill="white" />
      <circle cx="6.5" cy="5.7" r="0.7" fill="white" />
    </svg>
  )
}

function FlagBR() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ display: "block", borderRadius: "1px", flexShrink: 0 }}>
      <rect width="20" height="14" fill="#009B3A" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FEDF00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      <path d="M6.9,5.7 Q10,4.2 13.1,5.7" stroke="white" strokeWidth="0.6" fill="none" />
    </svg>
  )
}

function FlagPT() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ display: "block", borderRadius: "1px", flexShrink: 0 }}>
      <rect width="20" height="14" fill="#FF0000" />
      <rect width="7" height="14" fill="#006600" />
      <circle cx="7" cy="7" r="2.8" fill="#FEDF00" stroke="#002776" strokeWidth="0.5" />
      <circle cx="7" cy="7" r="1.8" fill="#002776" />
      <rect x="5.4" y="5.8" width="3.2" height="2.4" fill="none" stroke="white" strokeWidth="0.5" />
    </svg>
  )
}

function FlagES() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ display: "block", borderRadius: "1px", flexShrink: 0 }}>
      <rect width="20" height="14" fill="#AA151B" />
      <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    </svg>
  )
}

const FLAG_MAP: Record<string, React.ReactNode> = {
  en: <FlagUS />,
  "pt-BR": <FlagBR />,
  "pt-PT": <FlagPT />,
  es: <FlagES />,
}

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const handleChange = (newLocale: string) => {
    setOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setTimeout(() => setOpen(false), 100)
        }
      }}
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        disabled={isPending}
        aria-label="Select language"
        aria-expanded={open}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 8px",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-sm)",
          background: "transparent",
          cursor: isPending ? "not-allowed" : "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: "var(--color-text)",
          opacity: isPending ? 0.5 : 1,
          transition: "opacity var(--transition-fast)",
          outline: "none",
        }}
      >
        {FLAG_MAP[locale]}
        <span>{LOCALE_LABELS[locale] ?? locale.toUpperCase()}</span>
        <span style={{ fontSize: "9px", color: "var(--color-text-muted)", lineHeight: 1 }}>▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            right: 0,
            backgroundColor: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--shadow-card)",
            zIndex: 200,
            minWidth: "88px",
            padding: "4px 0",
          }}
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleChange(loc)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 12px",
                width: "100%",
                background: loc === locale ? "var(--color-surface)" : "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                fontWeight: loc === locale ? 600 : 400,
                color: "var(--color-text)",
                textAlign: "left",
              }}
            >
              {FLAG_MAP[loc]}
              <span>{LOCALE_LABELS[loc] ?? loc.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

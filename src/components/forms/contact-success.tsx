"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface ContactSuccessProps {
  /** Called when the success state should dismiss — immediately on Close click,
   *  and automatically after `autoDismissMs` (default 2500ms) if provided. */
  onDismiss?: () => void
  autoDismissMs?: number
}

export function ContactSuccess({ onDismiss, autoDismissMs = 2500 }: ContactSuccessProps) {
  useEffect(() => {
    if (!onDismiss) return
    const timer = setTimeout(onDismiss, autoDismissMs)
    return () => clearTimeout(timer)
  }, [onDismiss, autoDismissMs])

  return (
    <motion.div
      key="contact-success"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "24px",
        padding: "clamp(40px, 8svh, 72px) 0",
        width: "100%",
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <CheckCircle
          size={56}
          strokeWidth={1.25}
          style={{ color: "var(--color-text)" }}
        />
      </motion.div>

      <div style={{ maxWidth: "280px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(20px, 5vw, 24px)",
            color: "var(--color-text)",
            lineHeight: 1.2,
            marginBottom: "10px",
          }}
        >
          Message received!
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "14px",
            color: "var(--color-text-muted)",
            lineHeight: 1.65,
          }}
        >
          I&apos;ll review your project and get back to you within 1 business day.
        </p>
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "var(--button-height)",
            padding: "0 clamp(20px, 3vw, 28px)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--button-font-size)",
            fontWeight: "var(--button-font-weight)" as React.CSSProperties["fontWeight"],
            letterSpacing: "var(--button-letter-spacing)",
            lineHeight: "var(--button-line-height)",
            color: "var(--button-secondary-text)",
            backgroundColor: "var(--button-secondary-bg)",
            border: "var(--button-border-width) solid var(--button-secondary-border)",
            borderRadius: "var(--button-radius)",
            cursor: "pointer",
            transition: "background-color var(--button-transition-duration) var(--button-transition-ease), color var(--button-transition-duration) var(--button-transition-ease)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--button-secondary-hover-bg)"
            e.currentTarget.style.color = "var(--button-secondary-hover-text)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--button-secondary-bg)"
            e.currentTarget.style.color = "var(--button-secondary-text)"
          }}
        >
          Close
        </button>
      )}
    </motion.div>
  )
}

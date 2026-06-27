"use client"

import Link from "next/link"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/layout/navbar"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main
        style={{
          backgroundColor: "var(--color-bg)",
          fontFamily: "var(--font-sans)",
          minHeight: "100dvh",
          paddingTop: "clamp(100px, 12vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            marginInline: "auto",
            paddingInline: "clamp(24px, 6vw, 48px)",
          }}
        >
          {/* Back link */}
          <Link
            href="/"
            className="legal-back-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-text-muted)",
              textDecoration: "none",
              letterSpacing: "0.01em",
              marginBottom: "clamp(32px, 5vw, 48px)",
              transition: "color 150ms ease",
            }}
          >
            ← Back to site
          </Link>

          {/* Header */}
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: 0,
              marginBottom: "12px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 400,
              color: "var(--color-text-muted)",
              margin: 0,
              marginBottom: "clamp(40px, 6vw, 64px)",
            }}
          >
            Last updated: {lastUpdated}
          </p>

          {/* Separator */}
          <div
            style={{
              height: "1px",
              backgroundColor: "var(--color-border)",
              marginBottom: "clamp(40px, 6vw, 64px)",
            }}
          />

          {/* Content */}
          <div className="legal-content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

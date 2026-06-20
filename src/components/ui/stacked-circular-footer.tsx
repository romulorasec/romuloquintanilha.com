"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { MotionFade } from "@/components/animations/motion-fade"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.068zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

interface StackedCircularFooterProps {
  name?: string
  role?: string
  location?: string
  email?: string
  phone?: string
  twitter?: string
  instagram?: string
  facebook?: string
  navLinks?: { label: string; href: string }[]
  copyright?: string
}

function StackedCircularFooter({
  name = "Rômulo Quintanilha",
  role = "Web Designer",
  location,
  email,
  phone,
  twitter,
  instagram,
  facebook,
  navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "What I Do", href: "#services" },
    { label: "Portfolio", href: "#projects" },
    { label: "How I Work", href: "#how-i-work" },
    { label: "Client Words", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  copyright = `© 2026 ${name}. All rights reserved.`,
}: StackedCircularFooterProps) {
  const nameParts = name.split(" ")
  const firstName = nameParts[0]
  const lastName = nameParts.slice(1).join(" ")

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-dark)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Main content */}
      <div
        style={{
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "0",
          paddingInline: "clamp(24px, 6vw, 96px)",
        }}
      >
        <div className="footer-grid">
          {/* Left column — identity */}
          <MotionFade delay={0} y={20}>
            <div>
              <h2
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(48px, 8vw, 100px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: "var(--color-text-inverse)",
                  margin: 0,
                }}
              >
                {firstName}
                <br />
                {lastName}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "clamp(20px, 3vw, 32px)",
                }}
              >
                {role && (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "var(--color-text-inverse-muted)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {role}
                  </span>
                )}
                {role && location && (
                  <span
                    aria-hidden
                    style={{ color: "color-mix(in srgb, var(--color-text-inverse) 22%, transparent)", fontSize: "13px" }}
                  >
                    ·
                  </span>
                )}
                {location && (
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "var(--color-text-inverse-muted)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {location}
                  </span>
                )}
              </div>

              {/* Social icons */}
              {(instagram || facebook || twitter) && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "clamp(28px, 3.5vw, 40px)",
                  }}
                >
                  {twitter && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (Twitter)"
                      style={{
                        color: "var(--color-text-inverse-muted)",
                        transition: "color 150ms ease",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse-muted)")}
                    >
                      <XIcon className="w-[17px] h-[17px]" />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      style={{
                        color: "var(--color-text-inverse-muted)",
                        transition: "color 150ms ease",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse-muted)")}
                    >
                      <InstagramIcon className="w-[17px] h-[17px]" />
                    </a>
                  )}
                  {facebook && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={{
                        color: "var(--color-text-inverse-muted)",
                        transition: "color 150ms ease",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse-muted)")}
                    >
                      <FacebookIcon className="w-[17px] h-[17px]" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </MotionFade>

          {/* Right column — action */}
          <MotionFade delay={0.1} y={20}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              {email && (
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-text-inverse-muted)",
                      marginBottom: "12px",
                    }}
                  >
                    Let&apos;s work together
                  </p>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "clamp(16px, 1.8vw, 22px)",
                      fontWeight: 400,
                      color: "var(--color-bg)",
                      textDecoration: "none",
                      transition: "color 150ms ease",
                      letterSpacing: "-0.01em",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "color-mix(in srgb, var(--color-text-inverse) 55%, transparent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                  >
                    {email}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      style={{ flexShrink: 0, marginTop: "1px" }}
                    />
                  </a>
                  {phone && (
                    <div style={{ marginTop: "8px" }}>
                      <a
                        href={`tel:${phone}`}
                        style={{
                          fontSize: "13px",
                          fontWeight: 400,
                          color: "var(--color-text-inverse-muted)",
                          textDecoration: "none",
                          transition: "color 150ms ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse-muted)")}
                      >
                        {phone}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </MotionFade>
        </div>

        {/* Separator */}
        <div
          style={{
            marginTop: "clamp(56px, 7vw, 88px)",
            height: "1px",
            backgroundColor: "var(--color-border-dark)",
          }}
        />

        {/* Bottom bar */}
        <MotionFade delay={0.18} y={12}>
          <div className="footer-bottom-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <a
                href="#hero"
                aria-label="Back to top"
                style={{ display: "flex", flexShrink: 0, transition: "opacity 150ms ease", opacity: 0.45 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
              >
                <Image
                  src="/images/logo.png"
                  alt="Rômulo Quintanilha"
                  width={22}
                  height={22}
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </a>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "color-mix(in srgb, var(--color-text-inverse) 28%, transparent)",
                  margin: 0,
                }}
              >
                {copyright}
              </p>
            </div>
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "var(--color-text-inverse-muted)",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-inverse)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-inverse-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </MotionFade>
      </div>

      {/* Bottom safe-area spacer */}
      <div style={{ height: "clamp(24px, 4vw, 40px)" }} />
    </footer>
  )
}

export { StackedCircularFooter }

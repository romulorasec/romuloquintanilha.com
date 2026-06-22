"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Drawer } from "vaul"
import { SiteButton } from "@/components/shared/site-button"
import { StartProjectModal } from "@/components/shared/start-project-modal"

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "What i do", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "How i work", href: "#how-i-work" },
  { label: "Client words", href: "#testimonials" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [projectModalOpen, setProjectModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
    {/* Dialog rendered outside the Drawer tree — isolated from Vaul's DOM lifecycle */}
    <StartProjectModal
      sourcePage="navbar"
      open={projectModalOpen}
      onOpenChange={setProjectModalOpen}
    />
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "clamp(25px, calc(5vw - 16px), 58px)",
        paddingRight: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: scrolled ? "var(--color-bg)" : "transparent",
        transition: "background-color var(--transition-base)",
      }}
    >
      {/* Left group: logo + nav links — nav aligned with content below at 168px */}
      <div className="flex items-center" style={{ gap: "clamp(55px, calc(8vw - 10px), 114px)" }}>
        <a href="#hero" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
            style={{ objectFit: "contain", display: "block" }}
          />
        </a>

        {/* Desktop nav links — full opacity by default, dim on hover */}
        <nav className="nav-landscape-flex" style={{ gap: "2rem", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "16px",
                color: "var(--color-text)",
                opacity: 1,
                textDecoration: "none",
                transition: "opacity var(--transition-fast)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.45")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Right: CTA + mobile hamburger */}
      <div className="flex items-center" style={{ gap: "1.5rem" }}>
        {/* Mobile hamburger */}
        <button
          className="nav-portrait"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text)",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Vaul drawer */}
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Portal>
          <Drawer.Overlay
            style={{
              position: "fixed",
              inset: 0,
              background: "color-mix(in srgb, var(--color-bg-dark) 40%, transparent)",
              zIndex: 99,
            }}
          />
          <Drawer.Content
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              backgroundColor: "var(--color-bg)",
              borderTopLeftRadius: "var(--radius-md)",
              borderTopRightRadius: "var(--radius-md)",
              padding: "32px 24px 48px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Drawer.Title className="sr-only">Navigation menu</Drawer.Title>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "32px" }}>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text)",
                  padding: 0,
                }}
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "var(--color-text)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div style={{ marginTop: "40px" }}>
              <SiteButton
                variant="primary"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => setProjectModalOpen(true), 320)
                }}
              >
                Start your project
              </SiteButton>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </header>
    </>
  )
}

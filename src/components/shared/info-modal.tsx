"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { X } from "lucide-react"
import { useLenis } from "lenis/react"
import { Dialog, DialogTrigger, DialogPortal } from "@/components/ui/dialog"

interface InfoModalProps {
  trigger: React.ReactNode
  title: string
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function InfoModal({ trigger, title, children, open: controlledOpen, onOpenChange: controlledOnOpenChange }: InfoModalProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const lenis = useLenis()

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen
  const setIsOpen = isControlled ? (controlledOnOpenChange ?? (() => {})) : setInternalOpen

  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen)
    if (nextOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {!isControlled && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogPortal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 duration-200"
        />
        <DialogPrimitive.Content
          className="fixed top-1/2 left-1/2 z-[201] -translate-x-1/2 -translate-y-1/2 w-full max-w-[min(720px,calc(100vw-2rem))] max-h-[85svh] flex flex-col outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 duration-200"
          style={{
            backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "clamp(16px, 2vw, 24px)",
            overflow: "hidden",
          }}
        >
          {/* Sticky header */}
          <div
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              paddingBottom: "clamp(16px, 2vw, 24px)",
              borderBottom: "1px solid var(--color-border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
              flexShrink: 0,
            }}
          >
            <DialogPrimitive.Title
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 22px)",
                color: "var(--color-text)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent",
                color: "var(--color-text-muted)",
                cursor: "pointer",
                transition: "color 200ms ease, border-color 200ms ease",
                marginTop: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)"
                e.currentTarget.style.borderColor = "var(--color-text)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)"
                e.currentTarget.style.borderColor = "var(--color-border)"
              }}
            >
              <X size={14} strokeWidth={1.5} />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>

          {/* Scrollable body — flex:1 + minHeight:0 is required for overflow:auto
              to work inside a flex column container */}
          <div
            data-lenis-prevent
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              padding: "clamp(20px, 3vw, 32px) clamp(24px, 4vw, 40px)",
            }}
          >
            {children}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}

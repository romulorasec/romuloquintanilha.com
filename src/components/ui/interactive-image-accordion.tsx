"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"

export interface AccordionStep {
  number: string
  title: string
  subtitle: string
  description: string
}

const COLLAPSED_W = 72
const GAP = 8
const ease = [0.22, 1, 0.36, 1] as const

// ── Animation variants ────────────────────────────────────────

const expandedContainerVariants = {
  hidden: { opacity: 0, transition: { duration: 0.15 } },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0.08, delayChildren: 0.22 },
  },
}

const expandedChildVariants = {
  hidden: { opacity: 0, y: 10, transition: { duration: 0.12 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const reducedContainerVariants = {
  hidden: { opacity: 0, transition: { duration: 0 } },
  visible: { opacity: 1, transition: { duration: 0 } },
}

const reducedChildVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
}

// ── Number badge ──────────────────────────────────────────────
// variant="light" → outlined for use on dark card backgrounds
// variant="dark"  → outlined for use on light mobile backgrounds

function NumberBadge({
  number,
  size = 32,
  variant = "light",
}: {
  number: string
  size?: number
  variant?: "light" | "dark"
}) {
  const borderColor =
    variant === "light"
      ? "color-mix(in srgb, var(--color-text-inverse) 32%, transparent)"
      : "var(--color-border)"
  const textColor =
    variant === "light" ? "var(--color-text-inverse)" : "var(--color-text-muted)"

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "transparent",
        border: `1.5px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: textColor,
          fontFamily: "var(--font-sans)",
          fontSize: `${Math.round(size * 0.375)}px`,
          fontWeight: 600,
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  )
}

// ── Desktop accordion panel ───────────────────────────────────

interface AccordionItemProps {
  step: AccordionStep
  isActive: boolean
  isReduced: boolean
  isLast: boolean
  width: number
  index: number
  onMouseEnter: () => void
  onClick: () => void
}

function AccordionItem({
  step,
  isActive,
  isReduced,
  isLast,
  width,
  index,
  onMouseEnter,
  onClick,
}: AccordionItemProps) {
  const containerV = isReduced ? reducedContainerVariants : expandedContainerVariants
  const childV = isReduced ? reducedChildVariants : expandedChildVariants

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={isReduced ? { duration: 0 } : { duration: 0.5, delay: index * 0.06, ease }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      style={{
        position: "relative",
        height: "clamp(400px, 52vh, 540px)",
        width: isReduced ? "20%" : width,
        flexShrink: 0,
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        transition: isReduced
          ? "none"
          : "width 600ms cubic-bezier(0.22, 1, 0.36, 1), background 400ms ease",
        background: isActive ? "var(--color-bg-dark-soft)" : "var(--color-bg-dark)",
      }}
    >
      {/* ── Collapsed layer: badge top-center + rotated title ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: isActive ? 0 : 1,
          transition: isReduced ? "none" : "opacity 180ms ease",
          pointerEvents: "none",
        }}
      >
        <div style={{ marginTop: "18px" }}>
          <NumberBadge number={step.number} size={32} variant="light" />
        </div>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
            color: "var(--color-text-inverse)",
            fontFamily: "var(--font-sans)",
            fontSize: "15px",
            fontWeight: 600,
            whiteSpace: "nowrap",
            letterSpacing: "0.06em",
          }}
        >
          {step.title}
        </span>
      </div>

      {/* ── Expanded layer: staggered content ── */}
      <motion.div
        variants={containerV}
        animate={isActive ? "visible" : "hidden"}
        initial="hidden"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "22px 28px clamp(36px, 7%, 56px)",
          pointerEvents: "none",
        }}
      >
        {/* Badge + line on the same horizontal row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <NumberBadge number={step.number} size={36} variant="light" />
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flex: 1 }}>
            <div style={{ flex: 1, height: "1px", background: "color-mix(in srgb, var(--color-text-inverse) 32%, transparent)" }} />
            {!isLast && (
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true"
                style={{ color: "color-mix(in srgb, var(--color-text-inverse) 32%, transparent)" }}>
                <path
                  d="M1 1L5 5L1 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Equal spacers center the content block vertically */}
        <div style={{ flex: 1 }} />

        {/* Content block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Title */}
          <motion.div variants={childV}>
            <span
              style={{
                color: "var(--color-text-inverse)",
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(24px, 2.8vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              {step.title}
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={childV}
            style={{
              color: "var(--color-text-inverse-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: 1.4,
              margin: "8px 0 0",
              letterSpacing: "0.02em",
            }}
          >
            {step.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={childV}
            style={{
              color: "color-mix(in srgb, var(--color-text-inverse) 70%, transparent)",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.75,
              margin: "14px 0 0",
              maxWidth: "300px",
            }}
          >
            {step.description}
          </motion.p>
        </div>

        {/* Bottom spacer — mirrors top spacer to center content block */}
        <div style={{ flex: 1 }} />
      </motion.div>
    </motion.div>
  )
}

// ── Mobile accordion panel ────────────────────────────────────

interface MobileAccordionItemProps {
  step: AccordionStep
  isActive: boolean
  index: number
  onClick: () => void
}

function MobileAccordionItem({ step, isActive, index, onClick }: MobileAccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease }}
      onClick={onClick}
      style={{
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid var(--color-border-dark)",
        background: "var(--color-bg-dark)",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          background: "transparent",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <NumberBadge number={step.number} size={28} variant="light" />
          <span
            style={{
              color: "var(--color-text-inverse)",
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            {step.title}
          </span>
        </div>
        <span
          style={{
            color: "var(--color-text-inverse-muted)",
            fontSize: "20px",
            lineHeight: 1,
            transition: "transform 300ms ease",
            transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>

      {/* Expandable panel: subtitle + description */}
      <div
        style={{
          maxHeight: isActive ? "180px" : "0px",
          overflow: "hidden",
          transition: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          style={{
            padding: "14px 20px 20px",
            background: "var(--color-bg)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fontWeight: 500,
              lineHeight: 1.4,
              margin: "0 0 10px",
              letterSpacing: "0.02em",
            }}
          >
            {step.subtitle}
          </p>
          <p
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main export ───────────────────────────────────────────────

interface InteractiveImageAccordionProps {
  steps: AccordionStep[]
}

export function InteractiveImageAccordion({ steps }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 899px)").matches
      : false
  )
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isReduced = useReducedMotion() ?? false

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)")
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const collapsedCount = steps.length - 1
  const expandedWidth =
    containerWidth > 0
      ? containerWidth - collapsedCount * COLLAPSED_W - (steps.length - 1) * GAP
      : 400

  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {steps.map((step, index) => (
          <MobileAccordionItem
            key={step.number}
            step={step}
            index={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: `${GAP}px`,
        width: "100%",
        overflow: "hidden",
      }}
    >
      {steps.map((step, index) => (
        <AccordionItem
          key={step.number}
          step={step}
          index={index}
          isActive={index === activeIndex}
          isReduced={isReduced}
          isLast={index === steps.length - 1}
          width={index === activeIndex ? expandedWidth : COLLAPSED_W}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  )
}

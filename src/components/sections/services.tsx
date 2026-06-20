"use client"

import { motion } from "framer-motion"
import { Code2, Award, TrendingUp, Share2, ArrowRight } from "lucide-react"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  charcoal: boolean
  rotated: boolean
  delay: number
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "General code",
    description: "Lean, performant websites and web apps built with clean code and modern frameworks.",
    charcoal: true,
    rotated: true,
    delay: 0.08,
  },
  {
    icon: Award,
    title: "Brand Identity",
    description: "Visual systems that communicate trust, personality and positioning at every touchpoint.",
    charcoal: false,
    rotated: false,
    delay: 0.16,
  },
  {
    icon: TrendingUp,
    title: "Paid traffic",
    description: "Strategic ad campaigns that attract the right audience and convert attention into revenue.",
    charcoal: false,
    rotated: false,
    delay: 0.24,
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content and presence strategies that grow your brand and keep your audience engaged.",
    charcoal: false,
    rotated: false,
    delay: 0.32,
  },
]

export function Services() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
      }}
    >
      <div className="services-grid">
        {/* Left: intro */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(16px, 2vw, 28px)",
          }}
          className="services-left"
        >
          <div className="services-title-group" style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1vw, 18px)" }}>
            <MotionFade delay={0} y={20}>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "clamp(50px, 5.5vw, 64px)",
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                What i do
              </div>
            </MotionFade>

            <MotionFade delay={0.12} y={16}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.4vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                A mix of brand strategy, visual design.
              </p>
            </MotionFade>
          </div>

          <div className="services-btn">
            <SiteButton variant="secondary" href="#contact">
              Learn More
            </SiteButton>
          </div>
        </div>

        {/* Right: 2×2 card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(12px, 1.5vw, 18px)",
          }}
          className="services-cards"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, description, charcoal, rotated, delay } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: rotated ? -5 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotated ? -5 : 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        rotated
          ? { y: -4, scale: 1.02, rotate: -2 }
          : { y: -4, scale: 1.02 }
      }
      style={{
        background: charcoal ? "var(--color-bg-dark-soft)" : "var(--color-bg-dark)",
        borderRadius: "clamp(16px, 2vw, 24px)",
        padding: "clamp(20px, 2.5vw, 32px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "clamp(220px, 22vw, 300px)",
        cursor: "default",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Icon + Title row */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 1.2vw, 14px)", marginBottom: "clamp(16px, 2vw, 24px)" }}>
        <Icon size={22} strokeWidth={1.75} />
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 24px)",
            margin: 0,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(12px, 1.1vw, 14px)",
            color: "var(--color-text-inverse-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Learn More */}
      <motion.div
        whileHover="arrowHover"
        style={{
          marginTop: "clamp(20px, 2.5vw, 32px)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.01em",
          }}
        >
          Learn More
        </span>
        <motion.span
          variants={{ arrowHover: { x: 3 } }}
          transition={{ duration: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid color-mix(in srgb, var(--color-text-inverse) 30%, transparent)",
            flexShrink: 0,
          }}
        >
          <ArrowRight size={10} />
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

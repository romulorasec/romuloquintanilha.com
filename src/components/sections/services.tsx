"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code2, Award, TrendingUp, Share2 } from "lucide-react"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { InfoModal } from "@/components/shared/info-modal"
import { StartProjectModal } from "@/components/shared/start-project-modal"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  cardKey: "web" | "brand" | "traffic" | "social"
  charcoal: boolean
  rotated: boolean
  delay: number
  modalPCount: number
}

const bodyBase: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(15px, 1.3vw, 16px)",
  color: "var(--color-text-muted)",
  lineHeight: 1.75,
  margin: 0,
}

const bodyFirst: React.CSSProperties = {
  ...bodyBase,
  fontWeight: 500,
  color: "var(--color-text)",
}

const SERVICE_META: Service[] = [
  { icon: Code2, cardKey: "web", charcoal: true, rotated: true, delay: 0.08, modalPCount: 7 },
  { icon: Award, cardKey: "brand", charcoal: false, rotated: false, delay: 0.16, modalPCount: 7 },
  { icon: TrendingUp, cardKey: "traffic", charcoal: false, rotated: false, delay: 0.24, modalPCount: 6 },
  { icon: Share2, cardKey: "social", charcoal: false, rotated: false, delay: 0.32, modalPCount: 6 },
]

export function Services() {
  const t = useTranslations("services")

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
                {t("heading")}
              </div>
            </MotionFade>

            <MotionFade delay={0.12} y={16}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.4vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {t("description")}
              </p>
            </MotionFade>
          </div>

          <div className="services-btn">
            <StartProjectModal
              sourcePage="services"
              trigger={
                <SiteButton variant="primary">
                  {t("cta")}
                </SiteButton>
              }
            />
          </div>
        </div>

        {/* Right: 2×2 card grid */}
        <div
          style={{
            gap: "clamp(12px, 1.5vw, 18px)",
          }}
          className="services-cards"
        >
          {SERVICE_META.map((meta) => (
            <ServiceCard key={meta.cardKey} meta={meta} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  meta,
  t,
}: {
  meta: Service
  t: ReturnType<typeof useTranslations<"services">>
}) {
  const { icon: Icon, cardKey, charcoal, rotated, delay, modalPCount } = meta
  const prefix = `cards.${cardKey}` as const

  const modalParagraphs = Array.from({ length: modalPCount }, (_, i) =>
    t(`${prefix}.modalP${i + 1}` as Parameters<typeof t>[0])
  )

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
          {t(`${prefix}.title` as Parameters<typeof t>[0])}
        </h3>
      </div>

      {/* Description */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(15px, 1.3vw, 16px)",
            color: "var(--color-text-inverse-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {t(`${prefix}.description` as Parameters<typeof t>[0])}
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: "clamp(20px, 2.5vw, 32px)" }}>
        <InfoModal
          title={
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon size={20} strokeWidth={1.75} aria-hidden />
              {t(`${prefix}.title` as Parameters<typeof t>[0])}
            </span>
          }
          trigger={<SiteButton variant="ghost-icon">{t(`${prefix}.cta` as Parameters<typeof t>[0])}</SiteButton>}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 28px)" }}>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                color: "var(--color-text)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {t(`${prefix}.modalTitle` as Parameters<typeof t>[0])}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
              {modalParagraphs.map((para, i) => (
                <p key={i} style={i === 0 ? bodyFirst : bodyBase}>{para}</p>
              ))}
            </div>
          </div>
        </InfoModal>
      </div>
    </motion.div>
  )
}

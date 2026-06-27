"use client"

import { useTranslations } from "next-intl"
import { MotionFade } from "@/components/animations/motion-fade"
import { InteractiveImageAccordion, type AccordionStep } from "@/components/ui/interactive-image-accordion"
import { SiteButton } from "@/components/shared/site-button"
import { StartProjectModal } from "@/components/shared/start-project-modal"

export function HowIWork() {
  const t = useTranslations("howIWork")
  const steps = t.raw("steps") as AccordionStep[]

  return (
    <section
      id="how-i-work"
      style={{
        background: "var(--color-bg)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="how-i-work-layout"
      >
        {/* Left: heading + description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(8px, 1vw, 24px)",
          }}
          className="how-i-work-left"
        >
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

          <MotionFade delay={0.2} y={12}>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "clamp(14px, 1.4vw, 16px)",
                fontWeight: 400,
                lineHeight: 1.5,
                margin: 0,
                fontFamily: "var(--font-sans)",
              }}
            >
              {t("description")}
            </p>
          </MotionFade>
        </div>

        {/* Right: interactive accordion */}
        <div style={{ minWidth: 0 }} className="how-i-work-right">
          <MotionFade delay={0.08}>
            <InteractiveImageAccordion steps={steps} />
          </MotionFade>
        </div>

        {/* Button: last on mobile portrait, below description on desktop */}
        <div className="how-i-work-btn">
          <MotionFade delay={0.35} y={10}>
            <StartProjectModal
              sourcePage="how-i-work"
              trigger={<SiteButton variant="primary">{t("cta")}</SiteButton>}
            />
          </MotionFade>
        </div>
      </div>
    </section>
  )
}

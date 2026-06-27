"use client"

import { useTranslations } from "next-intl"
import { MotionFade } from "@/components/animations/motion-fade"

export function Promise() {
  const t = useTranslations("promise")
  const items = t.raw("items") as Array<{ number: string; headline: string; body: string }>

  return (
    <section
      style={{
        background: "var(--color-bg-dark)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="promise-layout">
        <div className="promise-title-col">
          <div className="promise-layout-title">
            <MotionFade delay={0} y={20}>
              <h2
                style={{
                  display: "inline-block",
                  margin: 0,
                  fontWeight: 700,
                  fontSize: "clamp(50px, 5.5vw, 64px)",
                  color: "var(--color-text-inverse)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("heading")}
              </h2>
            </MotionFade>
          </div>
        </div>

        <div role="list">
          {items.map((item, index) => (
            <MotionFade key={item.number} delay={0.08 + index * 0.05} y={16}>
              <div
                role="listitem"
                style={{
                  borderTop: "1.5px solid var(--color-border-dark)",
                  paddingTop: "clamp(28px, 3.5vw, 44px)",
                  paddingBottom: "clamp(28px, 3.5vw, 44px)",
                  display: "grid",
                  gridTemplateColumns: "clamp(56px, 6vw, 72px) 1fr",
                  gap: "clamp(20px, 2.5vw, 32px)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(36px, 4vw, 48px)",
                    color: "var(--color-text-inverse-muted)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    opacity: 0.5,
                  }}
                >
                  {item.number}
                </span>

                <div className="promise-item-content">
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "clamp(22px, 2.8vw, 32px)",
                      color: "var(--color-text-inverse)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.02em",
                      margin: "0 0 clamp(8px, 1vw, 12px)",
                    }}
                  >
                    {item.headline}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: "clamp(15px, 1.3vw, 16px)",
                      color: "var(--color-text-inverse-muted)",
                      lineHeight: 1.65,
                      margin: 0,
                      maxWidth: "560px",
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  )
}

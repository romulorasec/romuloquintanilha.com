"use client"

import { MotionFade } from "@/components/animations/motion-fade"

export function Positioning() {
  return (
    <section
      id="positioning"
      style={{
        background: "var(--color-bg-dark)",
        paddingTop: "clamp(56px, 12vw, 250px)",
        paddingBottom: "clamp(56px, 12vw, 250px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          aria-label="I help brands transform visual presence into trust, clarity and business value."
          style={{ margin: 0 }}
        >
          <MotionFade delay={0} y={28}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 4rem)",
                lineHeight: 1.15,
                color: "var(--color-text-inverse)",
                letterSpacing: "-0.02em",
              }}
            >
              I help businesses turn their websites into real client acquisition tools.
            </span>
          </MotionFade>
        </h2>
        <MotionFade delay={0.22} y={12} scale={0.97}>
          <div
            style={{
              marginTop: "clamp(2rem, 4vw, 3.5rem)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "var(--color-bg)",
                color: "var(--color-text)",
                borderRadius: "999px",
                padding: "clamp(9px, 1.5vw, 11px) clamp(20px, 3vw, 28px)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: 1.5,
                letterSpacing: "0.01em",
              }}
            >
              Website design, branding and growth strategy.
            </span>
          </div>
        </MotionFade>
      </div>
    </section>
  )
}

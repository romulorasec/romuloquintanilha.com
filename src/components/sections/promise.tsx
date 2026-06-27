"use client"

import { MotionFade } from "@/components/animations/motion-fade"

interface PromiseItem {
  number: string
  headline: string
  body: string
}

const PROMISES: PromiseItem[] = [
  {
    number: "01",
    headline: "Live in 3 weeks.",
    body: "Most designers need three months. My process runs in parallel — so your site goes live in 21 days, not 90.",
  },
  {
    number: "02",
    headline: "You own everything.",
    body: "Files, domain, code. When we're done, none of it stays with me.",
  },
  {
    number: "03",
    headline: "Every decision has a reason.",
    body: "Before anything gets built, you'll understand why. No taste-based arguments. No \"trust me, it looks better.\"",
  },
  {
    number: "04",
    headline: "You'll know what your investment is producing.",
    body: "Analytics configured before launch. From the first week, you can see what's working.",
  },
  {
    number: "05",
    headline: "I don't take every project.",
    body: "If I can't help you, I'll say so in the first ten minutes. No pitch, no proposal, no wasted time.",
  },
]

export function Promise() {
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              marginBottom: "clamp(32px, 5vw, 64px)",
            }}
          >
            The Promise
          </h2>
        </MotionFade>

        <div role="list">
          {PROMISES.map((item, index) => (
            <MotionFade key={item.number} delay={0.08 + index * 0.05} y={16}>
              <div
                role="listitem"
                style={{
                  borderTop: "1px solid var(--color-border-dark)",
                  paddingTop: "clamp(24px, 3vw, 40px)",
                  paddingBottom: "clamp(24px, 3vw, 40px)",
                  display: "grid",
                  gridTemplateColumns: "2.5rem 1fr",
                  gap: "clamp(16px, 2vw, 24px)",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1vw, 14px)",
                    color: "var(--color-text-inverse-muted)",
                    lineHeight: 1,
                    paddingTop: "5px",
                  }}
                >
                  {item.number}
                </span>

                <div className="promise-item-content">
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "clamp(20px, 2vw, 28px)",
                      color: "var(--color-text-inverse)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
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

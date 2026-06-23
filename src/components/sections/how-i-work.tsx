"use client"

import { MotionFade } from "@/components/animations/motion-fade"
import { InteractiveImageAccordion, type AccordionStep } from "@/components/ui/interactive-image-accordion"
import { SiteButton } from "@/components/shared/site-button"
import { StartProjectModal } from "@/components/shared/start-project-modal"

const HOW_I_WORK_STEPS: AccordionStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Before a pixel moves, I learn what moves your customer",
    description:
      "I study your market, your competitors, and the people who actually buy from you. By the end you'll have a clear picture of what your audience needs to see, believe, and feel before they move.",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Every section earns its place or gets cut",
    description:
      "I map out what gets said, in what order, and where trust gets built. Nothing decorative makes it in. Every headline, every layout choice, every scroll depth exists to move people closer to the action you need.",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Visual precision that builds trust in seconds",
    description:
      "The interface reflects your positioning. Premium where it matters, clear everywhere else. Type, spacing, color, and motion all point in one direction: making the right visitor feel confident enough to act.",
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Fast, responsive, and built to perform under real traffic",
    description:
      "Clean code. Sub-second load times. Solid behavior across every device and browser. The finished product doesn't just look right. It works right, from the first click to the last conversion.",
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "You go live knowing exactly what to expect",
    description:
      "Final QA, analytics setup, and a documented handoff so nothing falls through. You launch with tracking in place, a clear baseline, and the numbers to know what your investment is producing from day one.",
  },
]

export function HowIWork() {
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
              How I Work
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
              A clear process that turns your goals into a digital asset
              built to convert, not just look the part.
            </p>
          </MotionFade>
        </div>

        {/* Right: interactive accordion */}
        <div style={{ minWidth: 0 }} className="how-i-work-right">
          <MotionFade delay={0.08}>
            <InteractiveImageAccordion steps={HOW_I_WORK_STEPS} />
          </MotionFade>
        </div>

        {/* Button: last on mobile portrait, below description on desktop */}
        <div className="how-i-work-btn">
          <MotionFade delay={0.35} y={10}>
            <StartProjectModal
              sourcePage="how-i-work"
              trigger={<SiteButton variant="primary">Start your project</SiteButton>}
            />
          </MotionFade>
        </div>
      </div>
    </section>
  )
}

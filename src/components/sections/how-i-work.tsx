"use client"

import { MotionFade } from "@/components/animations/motion-fade"
import { InteractiveImageAccordion, type AccordionStep } from "@/components/ui/interactive-image-accordion"
import { SiteButton } from "@/components/shared/site-button"
import { StartProjectModal } from "@/components/shared/start-project-modal"

const HOW_I_WORK_STEPS: AccordionStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding the foundation of the project",
    description:
      "Deep dive into your business, audience, goals and competitors to define the right strategic direction from the start.",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Turning insights into a clear direction",
    description:
      "Organize the message, structure and visual path so every design decision supports clarity, trust and business value.",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Creating the visual experience",
    description:
      "Transform the strategy into a clean, intentional and premium interface that reflects the brand and guides the user.",
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Bringing the experience to life",
    description:
      "Develop the approved direction into a functional, responsive and polished digital experience ready for real use.",
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Preparing everything to go live",
    description:
      "Review, refine and optimize the final details so the project is ready to launch with confidence and clarity.",
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
              I don&rsquo;t just design websites. I build assets that work for
              your business.
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

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
      "I map your market, your competitors, and the people who actually buy from you. By the end, we both know exactly what needs to be built and why. No guesswork from this point forward.",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Every section earns its place or gets cut",
    description:
      "I map out what gets said, in what order, and where trust gets built. Nothing decorative makes it in. Every headline, every layout choice, every scroll depth exists to move people closer to the decision you need. Color, type, layout logic — all decided here, before a single screen gets designed.",
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Your visitor decides in three seconds. Design shapes what they decide.",
    description:
      "By the time design starts, the direction is already set. Every visual decision follows from what was agreed. No guessing on either side. Premium where it matters, clean everywhere else.",
  },
  {
    number: "04",
    title: "Build",
    subtitle: "The site that works as well as it looks.",
    description:
      "Tested across every device and browser before you see it. Loads fast. Works on every phone. Behaves the same way whether ten people visit or ten thousand. The finished product doesn't just look right. It works right.",
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "You go live knowing exactly what to expect",
    description:
      "Hosting, domain, configurations — all handled. You don't go live and wonder what's missing. Tracking is set up, the site is indexed, and you know from week one what the investment is producing.",
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
              Five steps. No surprises. A site that performs from the day it goes live.
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

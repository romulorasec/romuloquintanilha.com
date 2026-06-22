"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { InfoModal } from "@/components/shared/info-modal"

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  color: "var(--color-text)",
  lineHeight: 1.8,
  margin: 0,
}

const strongStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(14px, 1.1vw, 16px)",
  color: "var(--color-text)",
  lineHeight: 1.8,
  margin: 0,
}

// Between conceptual blocks
const blockGap = "clamp(28px, 3.5vw, 44px)"
// Between related sentences within a block
const lineGap = "clamp(6px, 0.8vw, 10px)"

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: lineGap }}>
      {children}
    </div>
  )
}

function AboutModalCopy() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: blockGap }}>

      {/* 1 — Opening hook: two-sentence diagnosis */}
      <Block>
        <p style={bodyStyle}>Most websites do not fail because they look bad.</p>
        <p style={bodyStyle}>
          They fail because they make people think too hard, trust too slowly, and leave too easily.
        </p>
      </Block>

      {/* 2 — The display window metaphor */}
      <p style={bodyStyle}>
        A lot of websites are built like display windows. They show the business, look polished,
        and wait for someone to care. But waiting is expensive. Every visitor who lands, hesitates,
        and disappears is a silent lost opportunity.
      </p>

      {/* 3 — The distinction + bridge to the invisible logic */}
      <Block>
        <p style={bodyStyle}>Good design can make a business look professional.</p>
        <p style={strongStyle}>Strategic architecture makes that business feel safe to choose.</p>
        <p style={bodyStyle}>
          That is the part most people never see, but it is the part that decides whether a visitor
          stays, trusts, clicks, books, buys, or leaves for someone else.
        </p>
        <p style={bodyStyle}>It is the logic underneath the surface.</p>
      </Block>

      {/* 4 — What lives under the surface */}
      <div
        style={{
          borderLeft: "2px solid var(--color-border)",
          paddingLeft: "clamp(16px, 2vw, 24px)",
          display: "flex",
          flexDirection: "column",
          gap: lineGap,
        }}
      >
        {[
          "Where the eye lands first.",
          "What the first ten seconds prove.",
          "Where doubt gets removed.",
          "Where trust is built.",
          "Where the next step becomes obvious.",
          "Where the page stops acting like a brochure and starts behaving like a closer.",
        ].map((line) => (
          <p key={line} style={{ ...strongStyle, fontWeight: 500 }}>{line}</p>
        ))}
      </div>

      {/* 5 — What the market sells + quoted requests */}
      <Block>
        <p style={bodyStyle}>
          The market sells the surface because the surface is easy to ask for.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            padding: "clamp(12px, 2vw, 20px)",
            marginTop: "4px",
            backgroundColor: "var(--color-surface)",
            borderRadius: "8px",
          }}
        >
          {['"Make it modern."', '"Make it clean."', '"Make it look like that competitor."'].map((line) => (
            <p key={line} style={{ ...bodyStyle, fontStyle: "italic", color: "var(--color-text)", margin: 0 }}>{line}</p>
          ))}
        </div>
        <p style={bodyStyle}>Those requests make sense, but they are not the real job.</p>
      </Block>

      {/* 6 — The real job + what a page that works looks like */}
      <Block>
        <p style={strongStyle}>
          The real job is to take the most visited piece of your business and turn it into one of
          your strongest points of sale.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: lineGap, marginTop: "4px" }}>
          {[
            "A page that works when you are busy.",
            "A page that works when your team is offline.",
            "A page that works before someone ever talks to you.",
            "A page that does not just look credible, but helps people feel confident enough to act.",
          ].map((line) => (
            <p key={line} style={{ ...strongStyle, fontWeight: 500 }}>{line}</p>
          ))}
        </div>
      </Block>

      {/* 7 — Where it actually starts + harder questions */}
      <Block>
        <p style={bodyStyle}>That does not start with colors, fonts, or layout.</p>
        <p style={strongStyle}>It starts with harder questions.</p>
        <div
          style={{
            borderLeft: "2px solid var(--color-border)",
            paddingLeft: "clamp(16px, 2vw, 24px)",
            display: "flex",
            flexDirection: "column",
            gap: lineGap,
            marginTop: "4px",
          }}
        >
          {[
            "Who is landing here?",
            "What are they afraid of?",
            "What are they comparing you against?",
            "What do they need to believe before they move forward?",
            "Where does friction help the decision, and where is it quietly costing you the deal?",
          ].map((line) => (
            <p key={line} style={bodyStyle}>{line}</p>
          ))}
        </div>
      </Block>

      {/* 8 — Pivot: the numbers + the approach */}
      <Block>
        <p style={bodyStyle}>Those questions do not show up on a moodboard.</p>
        <p style={bodyStyle}>They show up later, in the numbers.</p>
        <p style={{ ...strongStyle, marginTop: "4px" }}>I build websites with that order in mind:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "4px" }}>
          {["Strategy first.", "Architecture second.", "Design on top."].map((line) => (
            <p
              key={line}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(18px, 2vw, 24px)",
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </Block>

      {/* 9 — Resolution: beauty is not the finish line */}
      <Block>
        <p style={bodyStyle}>Not the other way around.</p>
        <p style={bodyStyle}>The website still has to look beautiful. That part is non-negotiable.</p>
        <p style={bodyStyle}>I just do not believe beauty is the finish line.</p>
      </Block>

      {/* 10 — The money on the table */}
      <p style={bodyStyle}>
        Because a beautiful website that does not build trust, remove doubt, or move people toward
        action is still leaving money on the table.
      </p>

      {/* 11 — The closer: punchy, isolated */}
      <Block>
        <p style={bodyStyle}>
          So if you have ever paid for a website that looked great when it launched, but then just
          sat there doing nothing, you already know what was missing.
        </p>
        <p style={bodyStyle}>It was not more decoration.</p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 24px)",
            color: "var(--color-text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          It was architecture.
        </p>
        <p style={{ ...bodyStyle, paddingBottom: "8px" }}>
          The invisible structure that turns attention into trust, and trust into action.
        </p>
      </Block>

    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as const

const skills = [
  { label: "UI&UX Design", position: 87, delay: 0.28 },
  { label: "Website Design", position: 96, delay: 0.38 },
  { label: "App Design", position: 82, delay: 0.48 },
  { label: "Graphic Design", position: 78, delay: 0.58 },
]

export function About() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="about"
      style={{ paddingBottom: "clamp(56px, 8.33vw, 100px)", backgroundColor: "var(--color-bg)" }}
    >
      {/* Card entrance — subtle scale + fade + rise */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.7, ease }}
        style={{
          border: "1px solid var(--color-text)",
          borderRadius: "clamp(24px, 3vw, 40px)",
          backgroundColor: "var(--color-bg)",
          margin: "0 clamp(0px, 3vw, 48px)",
          padding: "clamp(40px, 6vw, 96px)",
        }}
      >
        <div className="about-grid">
          {/* Left column */}
          <div className="about-left" style={{ display: "flex", flexDirection: "column" }}>
            <MotionFade delay={0} y={24}>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "clamp(48px, 7vw, 56px)",
                  color: "var(--color-text)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                About me
              </h2>
            </MotionFade>

            <MotionFade delay={0.12} y={16}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  maxWidth: "340px",
                  marginTop: "clamp(24px, 3vw, 40px)",
                }}
              >
                I don't design websites to impress. I design them to sell.
                A website isn't a digital business card, it's a salesperson
                who never clocks out, never stops closing, and works every
                hour your doors are shut. I build the version that earns its keep.
              </p>
            </MotionFade>
          </div>

          {/* Right column */}
          <div className="about-right">
            <MotionFade delay={0.10} y={16}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.2vw, 18px)",
                  color: "var(--color-text)",
                  lineHeight: 1.5,
                  maxWidth: "480px",
                  margin: 0,
                }}
              >
                Driven UI/UX Designer with an Innovative Approach to Creating
                Intuitive and Engaging User Experiences
              </p>
            </MotionFade>

            <div
              style={{
                marginTop: "clamp(32px, 4vw, 56px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(24px, 3vw, 40px)",
              }}
            >
              {skills.map((skill) => (
                <div key={skill.label}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={
                      prefersReduced
                        ? { duration: 0 }
                        : { duration: 0.4, delay: skill.delay, ease }
                    }
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 400,
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--color-text-muted)",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {skill.label}
                  </motion.span>

                  <div
                    style={{
                      position: "relative",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Line draws from left */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { duration: 0.6, delay: skill.delay, ease }
                      }
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: "3px",
                        backgroundColor: "var(--color-text)",
                        transformOrigin: "left",
                      }}
                    />

                    {/* Handle sweeps from left to position */}
                    <motion.div
                      initial={{ left: "0%" }}
                      whileInView={{ left: `${skill.position}%` }}
                      viewport={{ once: true }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { duration: 0.7, delay: skill.delay + 0.1, ease }
                      }
                      style={{
                        position: "absolute",
                        transform: "translateX(-50%)",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "2px solid var(--color-text)",
                        backgroundColor: "var(--color-bg)",
                        zIndex: 1,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Single button — CSS grid-area places it below paragraph on desktop, after skills on mobile */}
          <div className="about-btn">
            <InfoModal
              trigger={<SiteButton variant="secondary">Learn More</SiteButton>}
              title="Design gets you noticed. Architecture gets you paid."
            >
              <AboutModalCopy />
            </InfoModal>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

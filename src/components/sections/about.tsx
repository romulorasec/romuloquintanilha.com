"use client"

import { motion, useReducedMotion } from "framer-motion"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"

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
            <SiteButton variant="secondary" href="#contact">
              Learn More
            </SiteButton>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

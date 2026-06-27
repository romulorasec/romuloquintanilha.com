"use client"

import { useTranslations } from "next-intl"
import { motion, useReducedMotion } from "framer-motion"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { InfoModal } from "@/components/shared/info-modal"

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(16px, 1.1vw, 17px)",
  color: "var(--color-text)",
  lineHeight: 1.8,
  margin: 0,
}

const strongStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(16px, 1.1vw, 17px)",
  color: "var(--color-text)",
  lineHeight: 1.8,
  margin: 0,
}

const blockGap = "clamp(28px, 3.5vw, 44px)"
const lineGap = "clamp(6px, 0.8vw, 10px)"

function Block({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: lineGap }}>
      {children}
    </div>
  )
}

function AboutModalCopy() {
  const t = useTranslations("about")
  const eyeList = t.raw("modal.eyeList") as string[]
  const quotes = t.raw("modal.quotes") as string[]
  const resultList = t.raw("modal.resultList") as string[]
  const questionsList = t.raw("modal.questionsList") as string[]
  const approachList = t.raw("modal.approachList") as string[]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: blockGap }}>

      <Block>
        <p style={bodyStyle}>{t("modal.diagnosisP1")}</p>
        <p style={bodyStyle}>{t("modal.diagnosisP2")}</p>
      </Block>

      <p style={bodyStyle}>{t("modal.displayWindow")}</p>

      <Block>
        <p style={bodyStyle}>{t("modal.distinctionP1")}</p>
        <p style={bodyStyle}>{t("modal.distinctionP2")}</p>
        <p style={bodyStyle}>{t("modal.distinctionP3")}</p>
      </Block>

      <div
        style={{
          borderLeft: "2px solid var(--color-border)",
          paddingLeft: "clamp(16px, 2vw, 24px)",
          display: "flex",
          flexDirection: "column",
          gap: lineGap,
        }}
      >
        {eyeList.map((line) => (
          <p key={line} style={{ ...strongStyle, fontWeight: 500 }}>{line}</p>
        ))}
      </div>

      <Block>
        <p style={bodyStyle}>{t("modal.marketSells")}</p>
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
          {quotes.map((line) => (
            <p key={line} style={{ ...bodyStyle, fontStyle: "italic", color: "var(--color-text)", margin: 0 }}>{line}</p>
          ))}
        </div>
        <p style={bodyStyle}>{t("modal.quotesFooter")}</p>
      </Block>

      <Block>
        <p style={strongStyle}>{t("modal.realJob")}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: lineGap, marginTop: "4px" }}>
          {resultList.map((line) => (
            <p key={line} style={{ ...strongStyle, fontWeight: 500 }}>{line}</p>
          ))}
        </div>
      </Block>

      <Block>
        <p style={bodyStyle}>{t("modal.harderP1")}</p>
        <p style={strongStyle}>{t("modal.harderP2")}</p>
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
          {questionsList.map((line) => (
            <p key={line} style={bodyStyle}>{line}</p>
          ))}
        </div>
      </Block>

      <Block>
        <p style={bodyStyle}>{t("modal.numbersP1")}</p>
        <p style={bodyStyle}>{t("modal.numbersP2")}</p>
        <p style={{ ...strongStyle, marginTop: "4px" }}>{t("modal.approachIntro")}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "4px" }}>
          {approachList.map((line) => (
            <p
              key={line}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(20px, 2vw, 24px)",
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

      <Block>
        <p style={bodyStyle}>{t("modal.resolutionP1")}</p>
        <p style={bodyStyle}>{t("modal.resolutionP2")}</p>
        <p style={bodyStyle}>{t("modal.resolutionP3")}</p>
      </Block>

      <p style={bodyStyle}>{t("modal.moneyTable")}</p>

      <Block>
        <p style={bodyStyle}>{t("modal.closerP1")}</p>
        <p style={bodyStyle}>{t("modal.closerP2")}</p>
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
          {t("modal.architecture")}
        </p>
        <p style={{ ...bodyStyle, paddingBottom: "8px" }}>{t("modal.invisible")}</p>
      </Block>

    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as const

const skillPositions = [87, 96, 82, 78]
const skillDelays = [0.28, 0.38, 0.48, 0.58]
const skillKeys = ["uiux", "website", "app", "graphic"] as const

export function About() {
  const t = useTranslations("about")
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="about"
      style={{ paddingBottom: "clamp(56px, 8.33vw, 100px)", backgroundColor: "var(--color-bg)" }}
    >
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
                {t("heading")}
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
                  marginTop: "clamp(24px, 3vw, 40px)",
                }}
              >
                {t("intro")}
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
                {t("subheading")}
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
              {skillKeys.map((key, i) => (
                <div key={key}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={
                      prefersReduced
                        ? { duration: 0 }
                        : { duration: 0.4, delay: skillDelays[i], ease }
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
                    {t(`skills.${key}`)}
                  </motion.span>

                  <div
                    style={{
                      position: "relative",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { duration: 0.6, delay: skillDelays[i], ease }
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

                    <motion.div
                      initial={{ left: "0%" }}
                      whileInView={{ left: `${skillPositions[i]}%` }}
                      viewport={{ once: true }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { duration: 0.7, delay: skillDelays[i] + 0.1, ease }
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

          {/* Single button */}
          <div className="about-btn">
            <InfoModal
              trigger={<SiteButton variant="primary">{t("cta")}</SiteButton>}
              title={t("modalTitle")}
            >
              <AboutModalCopy />
            </InfoModal>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { useTranslations } from "next-intl"
import { motion, useScroll, useTransform } from "framer-motion"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { StartProjectModal } from "@/components/shared/start-project-modal"

export function Hero() {
  const t = useTranslations("hero")
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const seeHowOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "var(--color-bg)" }}
    >
      {/* ===== DESKTOP ===== */}

      {/* Left decorative strip — absolute, full section height, no border */}
      <div
        className="hero-landscape-flex flex-col items-center"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "clamp(58px, 10vw, 148px)",
          zIndex: 2,
        }}
      >
        {/* "Web Designer" — near top, below navbar */}
        <span
          style={{
            marginTop: "88px",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "var(--color-text-muted)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            userSelect: "none",
          }}
        >
          Web Designer
        </span>

        {/* Thin centered line — between text labels only */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            flex: 1,
            width: "1px",
            backgroundColor: "var(--color-border)",
            marginTop: "14px",
            marginBottom: "14px",
            transformOrigin: "top",
          }}
        />

        {/* "2026" — bottom */}
        <span
          style={{
            marginBottom: "48px",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "var(--color-text-muted)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            userSelect: "none",
          }}
        >
          2026
        </span>
      </div>

      {/* See how — fades out as user scrolls */}
      <motion.div
        className="hero-landscape-iflex"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "168px",
          zIndex: 3,
          alignItems: "center",
          opacity: seeHowOpacity,
          pointerEvents: "auto",
        }}
      >
        <a
          href="#about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "18px",
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "opacity var(--transition-fast)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.55")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
        >
          {t("scrollLabel")}{" "}
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            ↓
          </motion.span>
        </a>
      </motion.div>

      {/* Photo — absolute right column, art-directed via <picture> */}
      <motion.div
        className="hero-image-col hero-landscape"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, overflow: "hidden", y: parallaxY }}
      >
        <picture>
          {/* Desktop: 1200px+ */}
          <source media="(min-width: 1200px)" srcSet="/images/profile-hero-desktop-1600x1800.png" />
          {/* Tablet fallback: 768–1199px */}
          <img
            className="hero-image-inner"
            src="/images/profile-hero-tablet-1200x1600.png"
            alt={t("photoAlt")}
            fetchPriority="high"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "100%",
              width: "auto",
              maxWidth: "none",
              display: "block",
              filter: "grayscale(100%)",
            }}
          />
        </picture>
      </motion.div>

      {/* Text content — left column, shrinks as viewport grows */}
      <div
        className="hero-text-col hero-landscape-flex flex-col"
        style={{ minHeight: "100dvh", paddingLeft: "clamp(110px, 13vw, 200px)", paddingRight: "48px" }}
      >
        {/* Headline + tagline + CTA — vertically centered */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="hero-hello-block" style={{ transform: "translateY(-40px)" }}>
            <MotionFade delay={0.18}>
              <h1
                className="hero-headline"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(50px, 10vw, 160px)",
                  color: "var(--color-text)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                {t("headline")}
              </h1>
            </MotionFade>

            <MotionFade delay={0.28}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  color: "var(--color-text)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  marginTop: "24px",
                }}
              >
                {t("subheading")}
              </p>
            </MotionFade>

            <MotionFade delay={0.38}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(14px, 1.1vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.65,
                  marginTop: "20px",
                  maxWidth: "340px",
                }}
              >
                {t("tagline")}
              </p>
            </MotionFade>

            <MotionFade delay={0.48}>
              <div style={{ marginTop: "32px" }}>
                <StartProjectModal
                  sourcePage="hero-desktop"
                  trigger={<SiteButton variant="primary">{t("cta")}</SiteButton>}
                />
              </div>
            </MotionFade>
          </div>
        </div>
      </div>

      {/* ===== PORTRAIT — unified for phones + portrait tablets ===== */}
      <div
        className="relative hero-portrait"
        style={{ height: "100svh", overflow: "hidden" }}
      >
        {/* Full-bleed cover image — art-directed via <picture> */}
        <picture>
          {/* Portrait tablet: 768px+ in portrait orientation */}
          <source
            media="(min-width: 768px) and (orientation: portrait)"
            srcSet="/images/profile-hero-tablet-1200x1600.png"
          />
          {/* Tall phones: < 768px wide, very tall screen */}
          <source
            media="(max-width: 767px) and (min-height: 850px)"
            srcSet="/images/profile-hero-mobile-large-1290x1920.png"
          />
          <img
            src="/images/profile-hero-mobile-1080x1600.png"
            alt={t("photoAlt")}
            fetchPriority="high"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              filter: "grayscale(100%)",
              display: "block",
            }}
          />
        </picture>

        {/* Bottom gradient — cinematic, starts early for atmosphere */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 15%, color-mix(in srgb, var(--color-bg-dark) 28%, transparent) 40%, color-mix(in srgb, var(--color-bg-dark) 78%, transparent) 65%, color-mix(in srgb, var(--color-bg-dark) 96%, transparent) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Bottom overlay — headline + tagline + CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "flex-end",
            paddingLeft: "clamp(40px, 8vw, 64px)",
            paddingRight: "clamp(40px, 8vw, 64px)",
            paddingBottom: "max(clamp(36px, 7svh, 52px), calc(env(safe-area-inset-bottom) + 24px))",
          }}
        >
          {/* Left: headline + tagline + CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              flex: "1 1 auto",
              minWidth: 0,
              zIndex: 3,
              position: "relative",
            }}
          >
            {/* Headline block */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "clamp(50px, 14vw, 72px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-inverse)",
                  whiteSpace: "nowrap",
                }}
              >
                {t("headline")}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(24px, 6.5vw, 36px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  color: "var(--color-text-inverse)",
                  marginTop: "8px",
                  whiteSpace: "normal",
                }}
              >
                {t("subheading")}
              </div>
            </div>

            {/* Tagline — single paragraph */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(13px, 3.5vw, 15px)",
                lineHeight: 1.25,
                color: "var(--color-text-inverse)",
                margin: 0,
                marginTop: "clamp(20px, 4.5vw, 28px)",
                whiteSpace: "normal",
              }}
            >
              {t("tagline")}
            </p>

            <div style={{ marginTop: "clamp(40px, 8vw, 56px)" }}>
              <StartProjectModal
                sourcePage="hero-mobile"
                trigger={<SiteButton variant="primary-inverse">{t("cta")}</SiteButton>}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

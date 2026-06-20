"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MotionFade } from "@/components/animations/motion-fade"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", backgroundColor: "var(--color-bg)" }}
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

      {/* Scroll down — absolute, aligned with "2026" at bottom */}
      <a
        href="#problem"
        className="hero-landscape-iflex"
        style={{
          position: "absolute",
          bottom: "48px",
          left: "168px",
          zIndex: 3,
          alignItems: "center",
          gap: "3px",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "16px",
          color: "var(--color-text)",
          textDecoration: "none",
          letterSpacing: "0.01em",
          transition: "opacity var(--transition-fast)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.55")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
      >
        Scroll down ↓
      </a>

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
            alt="Rômulo Quintanilha"
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
        {/* Stats */}
        <div className="hero-stats-row" style={{ paddingTop: "180px", display: "flex", gap: "48px" }}>
          <MotionFade delay={0.08}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  color: "var(--color-text)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                +37
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  whiteSpace: "nowrap",
                  color: "var(--color-text-muted)",
                  marginTop: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Projects completed
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.16}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(32px, 5vw, 56px)",
                  color: "var(--color-text)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  whiteSpace: "nowrap",
                  color: "var(--color-text-muted)",
                  marginTop: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Satisfaction Guaranteed
              </div>
            </div>
          </MotionFade>
        </div>

        {/* Hello + subtitle + scroll down — vertically centered */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="hero-hello-block" style={{ transform: "translateY(-80px)" }}>
            <MotionFade delay={0.28}>
              <h1
                className="hero-headline"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "clamp(50px, 12vw, 200px)",
                  color: "var(--color-text)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Hello
              </h1>
            </MotionFade>

            <MotionFade delay={0.42}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.65,
                  marginTop: "20px",
                  maxWidth: "320px",
                }}
              >
                — It&apos;s Rômulo, a conversion-focused web designer
              </p>
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
            alt="Rômulo Quintanilha"
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

        {/* Bottom gradient — expands to cover stats + descriptor + CTA */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 45%, color-mix(in srgb, var(--color-bg-dark) 72%, transparent) 62%, color-mix(in srgb, var(--color-bg-dark) 88%, transparent) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Bottom overlay — left: stats + descriptor, right: CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "clamp(12px, 2vw, 20px)",
            padding: "0 clamp(24px, 5vw, 56px)",
            paddingBottom: "max(40px, calc(env(safe-area-inset-bottom) + 32px))",
          }}
        >
          {/* Left: stats + descriptor */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              flex: "1 1 auto",
              minWidth: 0,
            }}
          >
            {/* Stats — stacked vertically */}
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vw, 24px)" }}>
              <div>
                <div className="portrait-stats-number">+37</div>
                <div className="portrait-stats-label">Projects completed</div>
              </div>
              <div>
                <div className="portrait-stats-number">100%</div>
                <div className="portrait-stats-label">Satisfaction Guaranteed</div>
              </div>
            </div>

            {/* Professional info */}
            <div className="portrait-professional-info" style={{ marginTop: "clamp(64px, 12vw, 112px)" }}>
              <span className="portrait-professional-info-line">Freelancer</span>
              <span className="portrait-professional-info-line">Designer &amp; Developer</span>
            </div>
          </div>

          {/* Right: CTA */}
          <div style={{ display: "flex", alignItems: "flex-end", flexShrink: 0 }}>
            <a href="#contact" className="portrait-cta-button">
              Start your project ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

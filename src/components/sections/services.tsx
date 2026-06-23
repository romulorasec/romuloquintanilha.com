"use client"

import { motion } from "framer-motion"
import { Code2, Award, TrendingUp, Share2 } from "lucide-react"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { InfoModal } from "@/components/shared/info-modal"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  charcoal: boolean
  rotated: boolean
  delay: number
  modalContent: React.ReactNode
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "There are websites that represent a business. And websites that grow one. You've seen the first kind your whole life. Most people never find out the second kind exists.",
    charcoal: true,
    rotated: true,
    delay: 0.08,
    modalContent: (
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 28px)" }}>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.5vw, 30px)",
            color: "var(--color-text)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Almost no site was built to do that. Including, most likely, yours.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
          {[
            "Every business has a website. Few have one that works.",
            "And “works” doesn’t mean fast load times and a clean layout. It means moving people — from stranger to curious, from curious to convinced, from convinced to paying. Almost no site was built to do that. Including, most likely, yours.",
            "Most sites answer one question: are you a real business? They confirm you exist, show what you offer, list how to reach you. Done. That's the standard the entire market settled on. Even the expensive ones, even the ones someone spent months on.",
            "A site built to grow answers something harder: what does this specific visitor need to see, in what order, to decide right now? That question shapes everything. Where the eye lands first, what gets proved in the first ten seconds, where the page earns trust and where it loses it. Not aesthetic choices. Decisions with consequences.",
            "The gap between those two sites isn't budget or talent. It's intent. Knowing before a single page exists what this thing needs to produce, and building everything around that answer.",
            "That's what I build. Websites, web apps, and landing pages where the architecture serves one outcome: turning the people who find you into the people who hire you.",
            "Your most visited asset is probably your most underused one.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: i === 0 ? 500 : 400,
                fontSize: "clamp(14px, 1.3vw, 16px)",
                color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Award,
    title: "Brand Identity",
    description: "Before anyone reads a word, they decide what you're worth. Most businesses spend years on the product and ten minutes on that decision.",
    charcoal: false,
    rotated: false,
    delay: 0.16,
    modalContent: (
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 28px)" }}>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.5vw, 30px)",
            color: "var(--color-text)",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Before anyone reads your price, they&rsquo;ve already decided if you&rsquo;re worth it.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
          {[
            "Most businesses never think about that moment. They spend months building the product, years refining the service, and about ten minutes on the thing that determines whether any of it gets taken seriously on sight.",
            "Here's what actually happens. Someone lands on your website, walks past your storefront, or opens your deck. In under three seconds, before a single word registers, their brain has already placed you somewhere. Premium or cheap. Trustworthy or risky. Worth the price or worth a discount. That read happens whether you designed for it or not.",
            "Most brands don't design for it. They get something that looks decent, feels consistent enough, and call it done. What they don't realize is that “decent” has a price ceiling. It signals a business that's good enough and people pay good enough prices for good enough businesses.",
            "Pricing power lives in perception. The brands that charge more aren't always better. They're clearer. Their identity communicates authority, specificity, and confidence before the conversation starts, which means the conversation starts from a different place entirely.",
            "That's what a real identity system does. Not just a logo that looks good, but a visual language that tells the right person, before they read a word, that you're exactly what they're looking for.",
            "I build that system. Logo, type, color, layout logic, every decision made around what your business needs to prove and to whom.",
            "The brands that win before they speak don't get lucky. They get deliberate.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: i === 0 ? 500 : 400,
                fontSize: "clamp(14px, 1.3vw, 16px)",
                color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: "Paid traffic",
    description: "Strategic ad campaigns that attract the right audience and convert attention into revenue.",
    charcoal: false,
    rotated: false,
    delay: 0.24,
    modalContent: <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>Content coming soon.</p>,
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content and presence strategies that grow your brand and keep your audience engaged.",
    charcoal: false,
    rotated: false,
    delay: 0.32,
    modalContent: <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>Content coming soon.</p>,
  },
]

export function Services() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
      }}
    >
      <div className="services-grid">
        {/* Left: intro */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(16px, 2vw, 28px)",
          }}
          className="services-left"
        >
          <div className="services-title-group" style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1vw, 18px)" }}>
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
                What i do
              </div>
            </MotionFade>

            <MotionFade delay={0.12} y={16}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.4vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                A mix of brand strategy, visual design.
              </p>
            </MotionFade>
          </div>

          <div className="services-btn">
            <SiteButton variant="primary" href="#contact">
              Learn More
            </SiteButton>
          </div>
        </div>

        {/* Right: 2×2 card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(12px, 1.5vw, 18px)",
          }}
          className="services-cards"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, description, charcoal, rotated, delay, modalContent } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: rotated ? -5 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotated ? -5 : 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        rotated
          ? { y: -4, scale: 1.02, rotate: -2 }
          : { y: -4, scale: 1.02 }
      }
      style={{
        background: charcoal ? "var(--color-bg-dark-soft)" : "var(--color-bg-dark)",
        borderRadius: "clamp(16px, 2vw, 24px)",
        padding: "clamp(20px, 2.5vw, 32px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "clamp(220px, 22vw, 300px)",
        cursor: "default",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Icon + Title row */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(10px, 1.2vw, 14px)", marginBottom: "clamp(16px, 2vw, 24px)" }}>
        <Icon size={22} strokeWidth={1.75} />
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 24px)",
            margin: 0,
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.3vw, 15px)",
            color: "var(--color-text-inverse-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Learn More */}
      <div style={{ marginTop: "clamp(20px, 2.5vw, 32px)" }}>
        <InfoModal
          title={title}
          trigger={<SiteButton variant="ghost-icon">Learn More</SiteButton>}
        >
          {modalContent}
        </InfoModal>
      </div>
    </motion.div>
  )
}

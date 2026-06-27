"use client"

import { motion } from "framer-motion"
import { Code2, Award, TrendingUp, Share2 } from "lucide-react"
import { MotionFade } from "@/components/animations/motion-fade"
import { SiteButton } from "@/components/shared/site-button"
import { InfoModal } from "@/components/shared/info-modal"
import { StartProjectModal } from "@/components/shared/start-project-modal"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  cta: string
  charcoal: boolean
  rotated: boolean
  delay: number
  modalContent: React.ReactNode
}

const bodyBase: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "clamp(15px, 1.3vw, 16px)",
  color: "var(--color-text-muted)",
  lineHeight: 1.75,
  margin: 0,
}

const bodyFirst: React.CSSProperties = {
  ...bodyBase,
  fontWeight: 500,
  color: "var(--color-text)",
}

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "There are websites that represent a business. And websites that grow one. You've seen the first kind your whole life. Most people never find out the second kind exists. Most never find out the difference until it costs them.",
    cta: "See what changes",
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
          Almost no site was built to do that. Including yours.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
          <p style={bodyFirst}>
            Every business has a website. Few have one that works.
          </p>
          <p style={bodyBase}>
            And &ldquo;works&rdquo; doesn&apos;t mean fast load times and a clean layout. It means moving people:{" "}
            <strong style={{ fontWeight: 600, color: "var(--color-text)" }}>
              from stranger to curious, from curious to convinced, from convinced to paying.
            </strong>{" "}
            Almost no site was built to do that. Including, most likely, yours.
          </p>
          <p style={bodyBase}>
            Most sites answer one question: are you a real business? They confirm you exist, show what you offer, list how to reach you. Done. That&apos;s the standard the entire market settled on. Even the expensive ones, even the ones someone spent months on.
          </p>
          <p style={bodyBase}>
            A site built to grow answers something harder: what does this specific visitor need to see, in what order, to decide right now? That question shapes everything. Where the eye lands first, what gets proved in the first ten seconds, where the page earns trust and where it loses it. Not aesthetic choices. Decisions with consequences.
          </p>
          <p style={bodyBase}>
            The gap between those two sites isn&apos;t budget or talent. It&apos;s intent. Knowing before a single page exists what this thing needs to produce, and building everything around that answer.
          </p>
          <p style={bodyBase}>
            That&apos;s what I build. Websites, web apps, and landing pages where the architecture serves one outcome: turning the people who find you into the people who hire you.
          </p>
          <p style={bodyBase}>
            Your most visited asset is probably your most underused one.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Award,
    title: "Brand Identity",
    description:
      "Before anyone reads a word, they decide what you're worth. Most businesses spend years on the product and ten minutes on that decision. Most brands say: we're good enough. The ones that charge more say something else.",
    cta: "See what yours says",
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
          <p style={bodyFirst}>
            Most businesses never think about that moment. They spend months building the product, years refining the service, and about ten minutes on the thing that determines whether any of it gets taken seriously on sight.
          </p>
          <p style={bodyBase}>
            Here&apos;s what actually happens. Someone lands on your website, walks past your storefront, or opens your deck. In under three seconds, before a single word registers, their brain has already placed you somewhere. Premium or cheap. Trustworthy or risky. Worth the price or worth a discount. That read happens whether you designed for it or not.
          </p>
          <p style={bodyBase}>
            Most brands don&apos;t design for it. They get something that looks decent, feels consistent enough, and call it done. What they don&apos;t realize is that &ldquo;decent&rdquo; has a price ceiling. It signals a business that&apos;s good enough and people pay good enough prices for good enough businesses.
          </p>
          <p style={bodyBase}>
            <strong style={{ fontWeight: 600, color: "var(--color-text)" }}>Pricing power lives in perception.</strong> The brands that charge more aren&apos;t always better. They&apos;re clearer. Their identity communicates authority, specificity, and confidence before the conversation starts, which means the conversation starts from a different place entirely.
          </p>
          <p style={bodyBase}>
            That&apos;s what a real identity system does. Not just a logo that looks good, but a visual language that tells the right person, before they read a word, that you&apos;re exactly what they&apos;re looking for.
          </p>
          <p style={bodyBase}>
            I build that system. Logo, type, color, layout logic, every decision made around what your business needs to prove and to whom.
          </p>
          <p style={bodyBase}>
            The brands that win before they speak don&apos;t get lucky. They get deliberate.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: "Paid traffic",
    description:
      "Right now, you're waiting for customers to find you. There's a way to find them first, exactly when they're ready to buy. There's a switch. Most businesses never know it exists.",
    cta: "See how it works",
    charcoal: false,
    rotated: false,
    delay: 0.24,
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
          You built a business and hoped people would find it. There&apos;s a better way than hope.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
          <p style={bodyFirst}>
            Most businesses are built on hope. Someone hears the name, stumbles across the site, drives past the door. A few show up. You call that marketing. It isn&apos;t.
          </p>
          <p style={bodyBase}>
            Paid traffic is the opposite. You decide who sees you, when they see you, and how often. The right person, at the moment they&apos;re looking for what you sell. Not by accident. By design.
          </p>
          <p style={bodyBase}>
            That&apos;s what paid traffic actually is. Not a cost. Not a gamble for big companies with money to burn. It&apos;s the one channel where you stop being at the mercy of who happens to walk by.
          </p>
          <p style={bodyBase}>
            <strong style={{ fontWeight: 600, color: "var(--color-text)" }}>Done badly, it burns money. Done right, it&apos;s the closest thing to a growth switch a business has.</strong> You turn it up, more of the right people show up. You turn it down, it slows. For the first time, the flow of customers is something you control instead of something you wait for.
          </p>
          <p style={bodyBase}>
            I build that system on Meta and Google. The right people, the right moment, a path built to turn attention into customers. Measured every week, so every dollar gets sharper.
          </p>
          <p style={bodyBase}>
            The businesses that grow on purpose stopped waiting to be found. So can yours.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Likes feel good and pay nothing. The real win is being the name they already trust when they're ready to buy. Most businesses chase the first and never get the second.",
    cta: "See what that looks like",
    charcoal: false,
    rotated: false,
    delay: 0.32,
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
          You post. Almost no one sees it. That&apos;s not a flaw. That&apos;s the design.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.8vw, 20px)" }}>
          <p style={bodyFirst}>
            Most businesses treat social media like a chore. Post something, get a few likes, move on. What they don&apos;t know is that the average post now reaches around 3.5% of the people who follow you. The other 96% never see it.{" "}
            <strong style={{ fontWeight: 600, color: "var(--color-text)" }}>
              You&apos;re talking to an empty room and calling it presence.
            </strong>
          </p>
          <p style={bodyBase}>
            Posting more doesn&apos;t fix this. It just fills the empty room faster. The platforms decided years ago that being seen costs money or it costs something rarer: content people actually want.
          </p>
          <p style={bodyBase}>
            The algorithm only pushes what earns it. Posts people save, send to a friend, stop scrolling to watch. That&apos;s the whole game now. Not volume, not luck. Content good enough that the platform has a reason to show it and your audience has a reason to remember you.
          </p>
          <p style={bodyBase}>
            And remembering is the point. A business doesn&apos;t need to go viral. Viral brings strangers from everywhere who will never walk through your door. A business needs the right people, the ones who can actually buy, to know you and trust you before they ever need you. So when the moment comes, you&apos;re not a search result. You&apos;re the name they already had in mind.
          </p>
          <p style={bodyBase}>
            I build that system. A clear voice, the right audience, and content people choose to see instead of scroll past.
          </p>
          <p style={bodyBase}>
            Being on social media is not the same as being remembered. Only one of them is worth paying for.
          </p>
        </div>
      </div>
    ),
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
                  fontSize: "clamp(15px, 1.4vw, 16px)",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                }}
              >
                Four ways a business grows on purpose.
              </p>
            </MotionFade>
          </div>

          <div className="services-btn">
            <StartProjectModal
              sourcePage="services"
              trigger={
                <SiteButton variant="primary">
                  Start your project
                </SiteButton>
              }
            />
          </div>
        </div>

        {/* Right: 2×2 card grid */}
        <div
          style={{
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
  const { icon: Icon, title, description, cta, charcoal, rotated, delay, modalContent } = service

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
            fontSize: "clamp(15px, 1.3vw, 16px)",
            color: "var(--color-text-inverse-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: "clamp(20px, 2.5vw, 32px)" }}>
        <InfoModal
          title={
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon size={20} strokeWidth={1.75} aria-hidden />
              {title}
            </span>
          }
          trigger={<SiteButton variant="ghost-icon">{cta}</SiteButton>}
        >
          {modalContent}
        </InfoModal>
      </div>
    </motion.div>
  )
}

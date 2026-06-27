"use client"

import { useTranslations } from "next-intl"
import { MotionFade } from "@/components/animations/motion-fade"
import { TestimonialSlider } from "@/components/ui/testimonial-slider-1"

const testimonialData = [
  {
    id: 1,
    name: "Carlos Mendoza",
    affiliation: "Owner, La Mesa Cantina — San Jose, CA",
    quote:
      "Our online reservations went up 3x in the first month. Rômulo understood our customers better than we did.",
    imageSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Sandra Park",
    affiliation: "Owner, Bloom Skin Clinic — Fremont, CA",
    quote:
      "We were invisible online. Now we're fully booked two weeks out. The new site did in 30 days what SEO couldn't do in a year.",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Marcus Oliveira",
    affiliation: "Owner, The Frame Shop — Oakland, CA",
    quote:
      "Clean, professional and fast. Our bounce rate dropped by half and customers actually call us now instead of leaving.",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Priya Nair",
    affiliation: "Owner, Roots Hair Studio — Santa Clara, CA",
    quote:
      "He asked questions no designer had ever asked me about my clients. The result felt like it was built for them, not for a portfolio.",
    imageSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=120&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Derek Simmons",
    affiliation: "Real Estate Agent, Bay Area Properties — San Francisco, CA",
    quote:
      "I send every new lead to my site first. It closes deals before I even pick up the phone. Worth every dollar.",
    imageSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop&q=80",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80",
  },
]

export function Testimonials() {
  const t = useTranslations("testimonials")

  return (
    <section
      id="testimonials"
      style={{
        background: "var(--color-bg)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
        paddingLeft: "var(--spacing-container)",
        paddingRight: "var(--spacing-container)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section heading */}
        <MotionFade delay={0} y={20}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(50px, 5.5vw, 64px)",
              color: "var(--color-text)",
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
            }}
          >
            {t("heading")}
          </div>
        </MotionFade>

        <MotionFade delay={0.1} y={16}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "var(--color-text-muted)",
              lineHeight: 1.65,
              margin: "0 0 clamp(48px, 6vw, 80px)",
            }}
          >
            {t("description")}
          </p>
        </MotionFade>

        {/* Slider */}
        <MotionFade delay={0.12} y={24}>
          <TestimonialSlider
            reviews={testimonialData}
            className="!bg-transparent p-0 md:p-0"
          />
        </MotionFade>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { MotionFade } from "@/components/animations/motion-fade"

const projects = [
  {
    title: "Dentesao",
    category: "Brand & Website",
    description:
      "A refined brand and website experience designed to communicate trust, clarity and professionalism through a clean visual system and simple user journey.",
  },
  {
    title: "Dentesao",
    category: "Brand & Website",
    description:
      "A modern digital presence focused on making the brand feel more credible, memorable and easy to understand for the right audience.",
  },
  {
    title: "Dentesao",
    category: "Brand & Website",
    description:
      "A visual identity and website direction created to help the business present its value with more confidence, structure and clarity.",
  },
]

function DentalPlaceholder() {
  return (
    <svg
      viewBox="0 0 260 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block", color: "var(--color-text)" }}
      aria-hidden="true"
    >
      {/* D letterform with counter punched out via evenodd */}
      <path
        fillRule="evenodd"
        fill="currentColor"
        d={[
          // Outer D — clockwise
          "M 28,22 L 28,278 L 138,278",
          "C 218,278 248,215 248,150",
          "C 248,85 218,22 138,22 Z",
          // Inner counter — counter-clockwise (creates the bowl hole)
          "M 75,68 L 75,232 L 128,232",
          "C 192,232 196,188 196,150",
          "C 196,112 192,68 128,68 Z",
        ].join(" ")}
      />
      {/* Tooth/molar shape sitting inside the D's bowl */}
      <path
        fill="currentColor"
        d={[
          // Crown — two cusps at the top
          "M 91,122",
          "L 90,100",
          "Q 90,84 104,84",
          "Q 116,84 120,97",
          "Q 124,84 136,84",
          "Q 150,84 150,100",
          "L 149,122",
          // Neck — narrows
          "L 146,142",
          // Body
          "C 148,160 145,175 140,185",
          // Right root
          "Q 136,198 132,207",
          "Q 128,214 124,207",
          // Center valley between roots
          "Q 121,198 120,187",
          // Left root
          "Q 119,198 116,207",
          "Q 112,214 108,207",
          "Q 104,198 100,185",
          // Up left side
          "C 95,175 92,160 94,142",
          "L 91,122 Z",
        ].join(" ")}
      />
    </svg>
  )
}

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{
        background: "var(--color-bg-dark)",
        paddingTop: "clamp(56px, 8.33vw, 100px)",
        paddingBottom: "clamp(56px, 8.33vw, 100px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "var(--spacing-container)",
          paddingRight: "var(--spacing-container)",
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <MotionFade y={20}>
            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(50px, 5.5vw, 64px)",
                color: "var(--color-text-inverse)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "clamp(0.5rem, 1vw, 1.5rem)",
              }}
            >
              Portfolio
            </div>
          </MotionFade>

          <MotionFade y={16} delay={0.12}>
            <p
              style={{
                color: "var(--color-text-inverse-muted)",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              A selected collection of brand and website.
            </p>
          </MotionFade>
        </div>

        {/* Projects list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(4rem, 8vw, 7rem)",
          }}
        >
          {projects.map((project, i) => {
            const isHovered = hoveredIndex === i
            const isReverse = i % 2 !== 0

            return (
              <div
                key={i}
                className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
                style={{
                  alignItems: "center",
                  gap: "clamp(2rem, 4vw, 4rem)",
                }}
              >
                {/* Image card */}
                <MotionFade y={28} delay={0} className="w-full md:w-[48%] flex-shrink-0">
                  <div
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      background: "var(--color-bg)",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "box-shadow var(--transition-slow)",
                      boxShadow: isHovered
                        ? "0 16px 56px color-mix(in srgb, var(--color-bg-dark) 50%, transparent)"
                        : "0 4px 20px color-mix(in srgb, var(--color-bg-dark) 25%, transparent)",
                    }}
                  >
                    <div
                      style={{
                        width: "52%",
                        transition: "transform 400ms ease",
                        transform: isHovered ? "scale(1.06)" : "scale(1)",
                        willChange: "transform",
                      }}
                    >
                      <DentalPlaceholder />
                    </div>
                  </div>
                </MotionFade>

                {/* Text content */}
                <div
                  className="w-full md:w-[48%] flex-shrink-0"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                  }}
                >
                  <MotionFade y={18} delay={0.1}>
                    <h3
                      style={{
                        color: "var(--color-text-inverse)",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        margin: 0,
                        marginBottom: "1rem",
                      }}
                    >
                      {project.title}
                    </h3>
                  </MotionFade>

                  <MotionFade y={12} delay={0.18}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: "2rem",
                          height: "1px",
                          background: "color-mix(in srgb, var(--color-text-inverse) 35%, transparent)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: "var(--color-text-inverse-muted)",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 500,
                          fontSize: "0.8125rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </MotionFade>

                  <MotionFade y={12} delay={0.26}>
                    <p
                      style={{
                        color: "var(--color-text-inverse-muted)",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "clamp(0.9375rem, 1.3vw, 1rem)",
                        lineHeight: 1.8,
                        margin: 0,
                        maxWidth: "420px",
                      }}
                    >
                      {project.description}
                    </p>
                  </MotionFade>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

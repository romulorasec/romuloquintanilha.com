"use client"

import * as React from "react"
import { gsap, useGSAP } from "@/lib/animations/gsap"

type GsapRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function GsapReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: GsapRevealProps) {
  const scope = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        scope.current,
        {
          opacity: 0,
          y,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay,
          ease: "power3.out",
        }
      )
    },
    { scope }
  )

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  )
}

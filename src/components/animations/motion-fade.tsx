"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

type MotionFadeProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  scale?: number
}

export function MotionFade({
  children,
  className,
  delay = 0,
  y = 16,
  scale = 1,
}: MotionFadeProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: prefersReduced ? 0 : y, scale: prefersReduced ? 1 : scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  )
}

"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const imageVariants = {
    enter: (dir: "left" | "right") => ({
      y: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      y: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden p-8 md:p-12",
        className
      )}
      style={{ color: "var(--color-text)", fontFamily: "var(--font-sans)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* Left Column: Meta and Thumbnails */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            <span
              className="text-sm font-mono"
              style={{ color: "var(--color-text-muted)" }}
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            <h2
              className="text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block"
              style={{ color: "var(--color-text-muted)" }}
            >
              Reviews
            </h2>
          </div>

          <div className="flex space-x-2 mt-8 md:mt-0">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex(
                (r) => r.id === review.id
              );
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                  style={{
                    width: "4rem",
                    height: "5rem",
                    borderRadius: "var(--radius-sm)",
                    outlineOffset: "2px",
                  }}
                  aria-label={`View review from ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: Main Image */}
        <div className="md:col-span-4 relative h-80 min-h-[400px] md:min-h-[500px] order-1 md:order-2">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.imageSrc}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderRadius: "var(--radius-sm)" }}
            />
          </AnimatePresence>
        </div>

        {/* Right Column: Text and Navigation */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {activeReview.affiliation}
                </p>
                <h3
                  className="text-xl font-semibold mt-1"
                  style={{ color: "var(--color-text)" }}
                >
                  {activeReview.name}
                </h3>
                <blockquote
                  className="mt-6 text-2xl md:text-3xl font-medium leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center space-x-2 mt-8 md:mt-0">
            <motion.button
              onClick={handlePrev}
              aria-label="Previous review"
              whileHover={{ background: "var(--button-secondary-hover-bg)", color: "var(--button-secondary-hover-text)" }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center focus:outline-none"
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                background: "var(--button-secondary-bg)",
                color: "var(--button-secondary-text)",
                border: "1px solid var(--button-secondary-border)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowLeft size={20} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              aria-label="Next review"
              whileHover={{ background: "var(--button-secondary-hover-bg)", color: "var(--button-secondary-hover-text)" }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center focus:outline-none"
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "9999px",
                background: "var(--button-secondary-bg)",
                color: "var(--button-secondary-text)",
                border: "1px solid var(--button-secondary-border)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

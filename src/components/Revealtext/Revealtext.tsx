"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: "mount" | "scroll";
  emWords?: string[];
}

export default function RevealText({
  text,
  className,
  delay = 0,
  trigger = "scroll",
  emWords = [],
}: RevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.025,
        delayChildren: delay,
      },
    },
  };

  const char: Variants = {
    hidden: {
      y: "0.25em",
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.8,
    },
    show: {
      y: "0",
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "show" }
        : {
            whileInView: "show",
            viewport: {
              once: true,
              amount: 0.7,
            },
          })}
      style={{
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      {words.map((word, wordIndex) => {
        const highlight = emWords.includes(word.replace(/[.,!?]/g, ""));

        return (
          <span
            key={wordIndex}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {word.split("").map((letter, charIndex) => (
              <span
                key={charIndex}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={char}
                  style={{
                    display: "inline-block",
                    color: highlight ? "var(--cyan)" : "inherit",
                    willChange: "transform, opacity, filter",
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}

            {wordIndex !== words.length - 1 && (
              <span
                style={{
                  display: "inline-block",
                  width: "0.35em",
                }}
              />
            )}
          </span>
        );
      })}
    </motion.span>
  );
}

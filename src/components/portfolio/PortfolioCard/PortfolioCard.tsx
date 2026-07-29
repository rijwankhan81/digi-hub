"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioCard.module.scss";
import type { PortfolioItem } from "@/data/portfolio";

const CATEGORY_ACCENTS: Record<string, string> = {
  "Digital Marketing": "var(--cyan)",
  "Branding & Creative": "var(--amber)",
  "Content & Media": "var(--cyan)",
  "Business Consulting": "var(--amber)",
  "Website & App": "var(--cyan)",
  "AI Solutions": "var(--amber)",
  "Training & Workshops": "var(--cyan)",
};

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpen?: (item: PortfolioItem) => void;
  index?: number;
}

export default function PortfolioCard({
  item,
  onOpen,
  index = 0,
}: PortfolioCardProps) {
  const accent = CATEGORY_ACCENTS[item.category] ?? "var(--cyan)";

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={() => onOpen?.(item)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover="hover"
    >
      <div className={styles.media} style={{ ["--accent" as string]: accent }}>
        <motion.div
          className={styles.mediaGlow}
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.5 }}
        />
        <span className={styles.mediaIcon}>
          {item.type === "video" ? (
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M1 1L19 12L1 23V1Z" fill="var(--paper)" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                stroke="var(--paper)"
                strokeWidth="1.6"
              />
              <circle cx="8" cy="10" r="1.8" fill="var(--paper)" />
              <path
                d="M3 17L8.5 12.5L12 15.5L16 11L21 16"
                stroke="var(--paper)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span className={styles.mediaType}>{item.type}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.tag}>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </motion.button>
  );
}

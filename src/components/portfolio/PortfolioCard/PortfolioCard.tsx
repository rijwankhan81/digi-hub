"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Image as ImageIcon } from "lucide-react";

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

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  function handleMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setRotate({
      x: (0.5 - py) * 10,
      y: (px - 0.5) * 10,
    });
  }

  function resetTilt() {
    setRotate({
      x: 0,
      y: 0,
    });
  }

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={() => onOpen?.(item)}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
      }}
      style={
        {
          "--accent": accent,
          "--rx": `${rotate.x}deg`,
          "--ry": `${rotate.y}deg`,
        } as React.CSSProperties
      }
    >
      {/* Background */}

      <div className={styles.mesh}></div>

      <div className={styles.noise}></div>

      <div className={styles.shine}></div>

      {/* ========================================= */}

      <div className={styles.preview}>
        <motion.div
          className={styles.previewGlow}
          whileHover={{
            scale: 1.15,
          }}
          transition={{
            duration: 0.6,
          }}
        />

        <div className={styles.previewIcon}>
          {item.type === "video" ? (
            <Play size={34} fill="currentColor" />
          ) : (
            <ImageIcon size={34} />
          )}
        </div>

        <div className={styles.liveBadge}>
          <span></span>
          Live Preview
        </div>

        <div className={styles.projectNumber}>
          {(index + 1).toString().padStart(2, "0")}
        </div>
      </div>

      {/* ========================================= */}

      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.category}>{item.category}</span>

          <span className={styles.type}>{item.type}</span>
        </div>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className={styles.footer}>
          <span className={styles.link}>View Case Study</span>

          <motion.span
            whileHover={{
              x: 5,
              y: -5,
            }}
          >
            <ArrowUpRight size={20} />
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}

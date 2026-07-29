"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import styles from "./Lightbox.module.scss";
import type { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={styles.media}>
              {item.type === "video" ? (
                <div className={styles.playPlaceholder}>
                  <span className={styles.playIcon}>
                    <svg width="26" height="30" viewBox="0 0 22 26" fill="none">
                      <path d="M1 1L21 13L1 25V1Z" fill="var(--paper)" />
                    </svg>
                  </span>
                  <p>Project video goes here</p>
                </div>
              ) : (
                <div className={styles.imagePlaceholder}>
                  <p>Project imagery goes here</p>
                </div>
              )}
            </div>

            <div className={styles.body}>
              <span className={styles.tag}>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

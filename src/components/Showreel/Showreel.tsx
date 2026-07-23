"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./Showreel.module.scss";
import { useState } from "react";

export default function Showreel() {
  const REELS = ["/videos/reel-1.mp4", "/videos/reel-2.mp4"];
  const [current, setCurrent] = useState(0);
  return (
    <>
      <section className={styles.showreel} id="portfolio">
        <AnimatePresence mode="wait">
          <motion.video
            key={current}
            className={styles.bgVideo}
            src={REELS[current]}
            autoPlay
            muted
            playsInline
            onEnded={() => setCurrent((current + 1) % REELS.length)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className={styles.overlay} />
        <div className={styles.grain} />

        <div className={`wrap ${styles.content}`}>
          <motion.button
            className={styles.playBtn}
            aria-label="Play showreel"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "backOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
              <path d="M1 1L21 13L1 25V1Z" fill="var(--paper)" />
            </svg>
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work that moves — literally.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A reel of recent brand films, motion pieces and campaigns, running
            behind everything we ship.
          </motion.p>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.hero} id="about-hero">
      <div className="wrap">
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Digi Hub
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We&apos;re the hub, <em>not just another vendor.</em>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Most agencies hand you off between specialists and hope the story
          survives the relay. We built Digi Hub as one team that owns strategy,
          content, code and film together — so nothing gets lost in translation
          between briefs.
        </motion.p>
      </div>
    </section>
  );
}

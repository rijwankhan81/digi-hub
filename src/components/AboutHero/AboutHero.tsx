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
          DiGI Hub is a global One-Stop Business Solutions agency that empowers
          digital marketing, branding, website development, creative content,
          AI-powered solutions, and business consulting to build powerful
          brands, generate quality leads, and accelerate sustainable growth.
        </motion.p>
      </div>
    </section>
  );
}

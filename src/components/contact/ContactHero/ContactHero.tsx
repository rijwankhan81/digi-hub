"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s talk about <em>what you&apos;re building.</em>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Tell us a little about the project and which service you need — we
          typically reply within one business day.
        </motion.p>
      </div>
    </section>
  );
}

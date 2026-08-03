"use client";

import { motion } from "framer-motion";
import styles from "./BlogHero.module.scss";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The hub blog
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Notes on marketing, <em>brand and growth.</em>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Practical thinking from the team, drawn from real client work across
          strategy, content, code and film.
        </motion.p>
      </div>
    </section>
  );
}

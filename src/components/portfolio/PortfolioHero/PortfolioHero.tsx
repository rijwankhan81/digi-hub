"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioHero.module.scss";

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our portfolio
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Work across every <em>discipline in the hub.</em>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Filter by service to see the campaigns, brands, products and systems
          we&apos;ve shipped — video and imagery from the field, not stock
          photography.
        </motion.p>
      </div>
    </section>
  );
}

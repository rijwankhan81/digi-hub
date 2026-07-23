"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import HubDiagram from "../HubDiagram/HubDiagram";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`wrap ${styles.grid}`}>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.eyebrow}>
            Full-service digital &amp; marketing agency
          </motion.div>

          <motion.h1 variants={item} className={styles.heading}>
            One hub.
            <br />
            Every channel <em>your brand</em> needs.
          </motion.h1>

          <motion.p variants={item} className={styles.lead}>
            Strategy, content, code, film and sound — eight disciplines, wired
            into one team, moving in sync so nothing gets lost between
            hand-offs.
          </motion.p>

          <motion.div variants={item} className={styles.ctas}>
            <motion.a
              href="#contact"
              className={`${styles.btn} ${styles.btnPrimary}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a project →
            </motion.a>
            <motion.a
              href="#portfolio"
              className={`${styles.btn} ${styles.btnGhost}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              See our work
            </motion.a>
          </motion.div>
        </motion.div>

        <HubDiagram />
      </div>
    </section>
  );
}

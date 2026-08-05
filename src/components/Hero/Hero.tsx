"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import HubDiagram from "../HubDiagram/HubDiagram";
import RevealText from "../Revealtext/Revealtext";
import MagneticButton from "../MagneticButton/MagneticButton";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.75 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Global one-stop business solutions agency
          </motion.div>

          <h1 className={styles.heading}>
            <RevealText text="One hub for every" trigger="mount" delay={0.2} />

            <br />

            <RevealText
              text="solution your business needs."
              trigger="mount"
              delay={0.8}
              emWords={["business"]}
            />
          </h1>

          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className={styles.lead}>
              From digital marketing and branding to AI automation and business
              consulting — Digi Hub plugs every discipline into one team, so
              your growth never waits on a hand-off.
            </motion.p>

            <motion.div variants={item} className={styles.ctas}>
              <MagneticButton>
                <motion.a
                  href="/contact"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start a project →
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href="/portfolio"
                  className={`${styles.btn} ${styles.btnGhost}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See our work
                </motion.a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        <HubDiagram />
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import HubDiagram from "../HubDiagram/HubDiagram";
import RevealText from "../Revealtext/Revealtext";
import MagneticButton from "../MagneticButton/MagneticButton";
import { ArrowRight, Mouse } from "lucide-react";

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
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mx", `${x}px`);
    e.currentTarget.style.setProperty("--my", `${y}px`);
  };
  return (
    <section className={styles.hero} id="home" onMouseMove={handleMouseMove}>
      <div className={styles.gradientOne}></div>
      <div className={styles.gradientTwo}></div>
      <div className={styles.noise}></div>

      <div className={`wrap ${styles.grid}`}>
        {/* LEFT */}

        <div className={styles.content}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Global One-Stop Business Solutions Agency
          </motion.div>

          <h1 className={styles.heading}>
            <RevealText text="One Hub For Every" trigger="mount" />

            <RevealText
              text="Business Solution"
              trigger="mount"
              delay={0.45}
              emWords={["Business"]}
            />
          </h1>

          <motion.p
            variants={item}
            initial="hidden"
            animate="show"
            className={styles.lead}
          >
            We combine strategy, creativity, technology, AI and business
            consulting into one powerful team that helps ambitious brands grow
            faster.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={styles.ctas}
          >
            <MagneticButton>
              <motion.a
                href="/contact"
                className="btn btn-primary"
                whileHover={{ y: -3 }}
              >
                Start Project
                <ArrowRight size={18} />
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="/portfolio"
                className="btn btn-ghost"
                whileHover={{ y: -3 }}
              >
                View Portfolio
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* STATS */}

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div>
              <strong>350+</strong>

              <span>Projects</span>
            </div>

            <div>
              <strong>38</strong>

              <span>Countries</span>
            </div>

            <div>
              <strong>98%</strong>

              <span>Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}

        <div className={styles.visual}>
          <HubDiagram />
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        className={styles.scroll}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <Mouse size={16} />

        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

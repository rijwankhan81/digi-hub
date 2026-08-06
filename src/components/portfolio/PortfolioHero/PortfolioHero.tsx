"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioHero.module.scss";

const STATS = [
  {
    value: "350+",
    label: "Projects Delivered",
  },
  {
    value: "20+",
    label: "Industries",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function PortfolioHero() {
  return (
    <section className={styles.hero}>
      {/* Background */}

      <div className={styles.grid} />

      <div className={styles.glowLeft} />

      <div className={styles.glowRight} />

      <div className="wrap">
        <div className={styles.content}>
          {/* Badge */}

          <motion.div
            className={styles.badge}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className={styles.dot} />
            Selected Work
          </motion.div>

          {/* Heading */}

          <motion.h1
            className={styles.heading}
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Work that transforms
            <br />
            ideas into <span>digital experiences.</span>
          </motion.h1>

          {/* Description */}

          <motion.p
            className={styles.lead}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Explore branding, digital marketing, websites, AI products,
            campaigns and creative systems we've crafted for ambitious
            businesses around the world.
          </motion.p>

          {/* Stats */}

          <motion.div
            className={styles.stats}
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            {STATS.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>

                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}

      {Array.from({
        length: 18,
      }).map((_, index) => (
        <motion.span
          key={index}
          className={styles.particle}
          style={
            {
              "--i": index,
            } as React.CSSProperties
          }
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.2, 0.8],
            y: [0, -18, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index * 0.2,
          }}
        />
      ))}
    </section>
  );
}

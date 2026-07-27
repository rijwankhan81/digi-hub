"use client";

import { motion } from "framer-motion";
import styles from "./Industries.module.scss";

const INDUSTRIES = [
  "RMG & Apparel",
  "Manufacturing",
  "Real Estate",
  "Healthcare",
  "Education",
  "Restaurants & Cafés",
];

const INDUSTRIES_2 = [
  "E-commerce",
  "Travel & Tourism",
  "Finance",
  "NGOs",
  "Startups",
  "Technology Companies",
];

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className={styles.rowMask}>
      <motion.div
        className={styles.row}
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: reverse ? 32 : 26,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {track.map((name, i) => (
          <span className={styles.item} key={`${name}-${i}`}>
            {name}
            <span className={styles.dot} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Industries() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>Industries we serve</div>
          <h2>Built for your sector, not a template.</h2>
        </motion.div>
      </div>

      <div className={styles.marquee}>
        <Row items={INDUSTRIES} />
        <Row items={INDUSTRIES_2} reverse />
      </div>
    </section>
  );
}

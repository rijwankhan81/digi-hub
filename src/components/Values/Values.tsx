"use client";

import { motion } from "framer-motion";
import styles from "./Values.module.scss";

const VALUES = [
  {
    id: "01",
    title: "One brief",
    desc: "Every discipline works from the same source document, so strategy and execution never drift apart.",
  },
  {
    id: "02",
    title: "One team",
    desc: "No sub-contracted specialists parachuting in. The people who plan the work are the people who ship it.",
  },
  {
    id: "03",
    title: "One timeline",
    desc: "Content, code and film move in parallel instead of waiting on each other, so launches land faster.",
  },
  {
    id: "04",
    title: "One voice",
    desc: "Because it's one team end to end, your brand sounds and looks the same on a site, a reel or a feed.",
  },
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>How we work</div>
          <h2>The hub only works if it&apos;s actually one thing.</h2>
        </motion.div>

        <div className={styles.grid}>
          {VALUES.map((v, i) => (
            <motion.div
              className={styles.card}
              key={v.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.id}>{v.id}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

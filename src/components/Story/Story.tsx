"use client";

import { motion } from "framer-motion";
import styles from "./Story.module.scss";

export default function Story() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.eyebrow}>How we started</div>
          <h2>One brief, eight disciplines, zero hand-offs.</h2>
        </motion.div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            Digi Hub started with a simple frustration: brands kept hiring a
            strategy shop, then a content studio, then a dev agency, then a
            video crew — and paying the tax of re-explaining the brand to each
            one.
          </p>
          <p>
            So we built the opposite. One hub that plugs strategy, content, web,
            app, film, motion and audio into the same brief, the same team and
            the same timeline — so a campaign that starts as a deck can ship as
            a site, a film and a feed without losing its voice anywhere along
            the way.
          </p>
          <p className={styles.signature}>
            That&apos;s still how every engagement runs today, whether it&apos;s
            one service or all eight.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

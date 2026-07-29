"use client";

import { motion } from "framer-motion";
import styles from "./PortfolioCta.module.scss";

export default function PortfolioCta() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Want to see your business here?</h2>
          <p>
            Let&apos;s create results-driven campaigns, websites and automation
            for your business.
          </p>
          <motion.a
            href="#contact"
            className={styles.btn}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start your project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket, TrendingUp } from "lucide-react";

import type { Service } from "@/data/services";

import styles from "./ServiceProcess.module.scss";

interface Props {
  service: Service;
}

const ICONS = [Search, Target, Rocket, TrendingUp];

export default function ServiceProcess({ service }: Props) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.eyebrow}>Our Process</span>

          <h2>
            From idea to execution,
            <br />
            every step is intentional.
          </h2>

          <p>
            Every project follows a structured process focused on speed, quality
            and measurable business results.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {service.process.map((step, index) => {
            const Icon = ICONS[index] ?? TrendingUp;

            return (
              <motion.article
                key={step.title}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className={styles.step}>
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className={styles.icon}>
                  <Icon size={28} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import type { Service } from "@/data/services";

import styles from "./ServiceStats.module.scss";

interface Props {
  service: Service;
}

function getNumericValue(value: string) {
  const match = value.match(/[\d.]+/);

  return match ? Number(match[0]) : 0;
}

function getPrefix(value: string) {
  return value.startsWith("$") ? "$" : "";
}

function getSuffix(value: string) {
  return value.replace(/^[\d.]+/, "");
}

export default function ServiceStats({ service }: Props) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.header}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className={styles.eyebrow}>Results That Matter</span>

          <h2>
            Numbers backed by
            <br />
            real business growth.
          </h2>

          <p>
            Every project is measured through meaningful performance metrics
            that reflect real-world business impact.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {service.stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className={styles.card}
              initial={{
                opacity: 0,
                y: 50,
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
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className={styles.glow} />

              <h3>
                {getPrefix(stat.value)}

                <CountUp
                  end={getNumericValue(stat.value)}
                  duration={2.2}
                  decimals={stat.value.includes(".") ? 1 : 0}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {getSuffix(stat.value)}
              </h3>

              <span>{stat.label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

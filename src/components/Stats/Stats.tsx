"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Stats.module.scss";

const STATS = [
  { value: 8, suffix: "", label: "Disciplines under one roof" },
  { value: 300, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "+", label: "Brands partnered with" },
  { value: 10, suffix: "+", label: "Years of combined team experience" },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      ref={ref}
      className={styles.stat}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.number}>
        {count}
        {stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}

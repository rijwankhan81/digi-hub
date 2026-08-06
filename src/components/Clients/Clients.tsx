"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Clients.module.scss";

const CLIENTS = [
  "NORTHPEAK",
  "Verona & Co",
  "FIELDNOTE",
  "Halcyon",
  "GRIDWORKS",
  "Solace Foods",
  "ORBITAL",
  "Marrow Studio",
  "NovaCore",
  "Aether Labs",
  "Vertex Systems",
  "Blue Horizon",
];

const GRID_SIZE = 12;

export default function Clients() {
  const [items, setItems] = useState(
    Array.from({ length: GRID_SIZE }, (_, i) => CLIENTS[i % CLIENTS.length]),
  );
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const, // Smooth cubic-bezier
      },
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const copy = [...prev];

        const randomIndex = Math.floor(Math.random() * GRID_SIZE);

        const randomClient =
          CLIENTS[Math.floor(Math.random() * CLIENTS.length)];

        copy[randomIndex] = randomClient;

        return copy;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.clients}>
      <div className="wrap">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Trusted across industries</span>
          <h2>Our Clients</h2>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={item + index}
                  className={styles.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {item}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

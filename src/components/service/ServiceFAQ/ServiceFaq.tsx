"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import type { Service } from "@/data/services";

import styles from "./ServiceFaq.module.scss";

interface Props {
  service: Service;
}

export default function ServiceFaq({ service }: Props) {
  const [active, setActive] = useState(0);

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
          <span className={styles.eyebrow}>Frequently Asked Questions</span>

          <h2>
            Everything you need
            <br />
            to know.
          </h2>

          <p>
            Here are the most common questions our clients ask before starting a
            project.
          </p>
        </motion.div>

        <div className={styles.list}>
          {service.faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.article key={faq.question} className={styles.item} layout>
                <button
                  className={styles.question}
                  onClick={() => setActive(open ? -1 : index)}
                >
                  <span>{faq.question}</span>

                  <div className={styles.icon}>
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className={styles.answer}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

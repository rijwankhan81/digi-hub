"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

import styles from "./ServiceCTA.module.scss";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export default function ServiceCTA({
  title = "Ready to build something exceptional?",
  description = "Whether you're launching a new brand, scaling an existing business or exploring AI solutions, our team is ready to help turn your vision into measurable results.",
}: ServiceCTAProps) {
  return (
    <section className={styles.section}>
      {/* Background */}

      <div className={styles.grid} />

      <div className={styles.glowLeft} />

      <div className={styles.glowRight} />

      <div className="wrap">
        <motion.div
          className={styles.panel}
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
            duration: 0.7,
          }}
        >
          {/* Badge */}

          <div className={styles.badge}>
            <Sparkles size={16} />
            Let's Work Together
          </div>

          {/* Heading */}

          <h2>{title}</h2>

          {/* Description */}

          <p>{description}</p>

          {/* CTA */}

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <Link href="/contact" className="btn btn-ghost">
              <CalendarDays size={18} />
              Book Consultation
            </Link>
          </div>

          {/* Bottom Stats */}

          <div className={styles.meta}>
            <div>
              <strong>250+</strong>

              <span>Projects Delivered</span>
            </div>

            <div>
              <strong>98%</strong>

              <span>Client Satisfaction</span>
            </div>

            <div>
              <strong>24h</strong>

              <span>Average Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

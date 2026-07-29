"use client";

import { motion } from "framer-motion";
import styles from "./ContactInfo.module.scss";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "hello@digihub.agency",
    href: "mailto:hello@digihub.agency",
  },
  {
    label: "WhatsApp",
    value: "+880 1XXX-XXXXXX",
    href: "https://wa.me/8801XXXXXXXXX",
  },
];

const OFFICES = [
  { country: "Bangladesh", note: "Headquarters" },
  { country: "Dubai", note: "UAE" },
  { country: "Mexico", note: "LATAM" },
];

export default function ContactInfo() {
  return (
    <motion.div
      className={styles.info}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.block}>
        <h3>Reach us directly</h3>
        <ul className={styles.methods}>
          {CONTACT_METHODS.map((m) => (
            <li key={m.label}>
              <span className={styles.methodLabel}>{m.label}</span>
              <a href={m.href} target="_blank" rel="noopener noreferrer">
                {m.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3>Offices</h3>
        <ul className={styles.offices}>
          {OFFICES.map((o) => (
            <li key={o.country}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.officeCountry}>{o.country}</span>
              <span className={styles.officeNote}>{o.note}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3>Response time</h3>
        <p className={styles.note}>
          We reply to every enquiry within one business day — usually sooner.
        </p>
      </div>
    </motion.div>
  );
}

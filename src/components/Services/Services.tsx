"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Services.module.scss";

const SERVICES = [
  {
    id: "01",
    name: "Digital Marketing Strategy",
    desc: "Positioning, funnels and media plans built around where your buyers actually spend time.",
  },
  {
    id: "02",
    name: "Brand Content Production",
    desc: "Photography, copy and design systems that hold together across every touchpoint.",
  },
  {
    id: "03",
    name: "Social Media Content",
    desc: "Always-on content calendars, reels and community management that keep feeds alive.",
  },
  {
    id: "04",
    name: "Website Development",
    desc: "Fast, responsive sites built to convert visitors, not just to look good in a pitch deck.",
  },
  {
    id: "05",
    name: "App Development",
    desc: "iOS, Android and cross-platform apps, from first wireframe through to app-store launch.",
  },
  {
    id: "06",
    name: "Documentary & Film Making",
    desc: "Brand films and documentary-style stories shot to hold attention past the first three seconds.",
  },
  {
    id: "07",
    name: "Animation & Motion Graphics",
    desc: "2D/3D animation and motion design for explainers, ads and product stories.",
  },
  {
    id: "08",
    name: "Studio & Podcast",
    desc: "A full recording studio and production support for branded podcasts and audio series.",
  },
];

/**
 * Each row tracks its OWN scroll progress (as it travels from the bottom
 * of the viewport up to about the middle), and slides in from the side
 * across that window. Because the rows are stacked, this naturally
 * cascades: row 1 finishes sliding in a bit before row 2 starts, row 2
 * before row 3, and so on — all driven by how far you've actually
 * scrolled, not a fixed timer.
 */
function PortRow({ s }: { s: (typeof SERVICES)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.45"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [264, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className={styles.port}
      style={{ x, opacity }}
      whileHover="hover"
    >
      <div className={styles.portId}>
        <span className={styles.status} />
        PORT {s.id}
      </div>
      <div className={styles.portName}>{s.name}</div>
      <div className={styles.portDesc}>{s.desc}</div>
      <motion.div
        className={styles.portArrow}
        variants={{ hover: { x: 4, color: "var(--cyan)" } }}
      >
        ↗
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="wrap">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.eyebrow}>Eight ports, one hub</div>
          <h2>Everything under one roof.</h2>
          <p>
            Every service plugs into the same brief, the same team, the same
            timeline — so your brand sounds and looks like one thing everywhere
            it shows up.
          </p>
        </motion.div>

        <div className={styles.portList}>
          {SERVICES.map((s) => (
            <PortRow key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

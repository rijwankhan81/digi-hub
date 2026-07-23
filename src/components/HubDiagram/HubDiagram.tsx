"use client";

import { motion } from "framer-motion";
import styles from "./HubDiagram.module.scss";

interface HubNode {
  x: number;
  y: number;
  label: string;
  color: string;
  labelY: number;
  anchor: "start" | "middle" | "end";
  labelX?: number;
}

const NODES: HubNode[] = [
  { x: 230, y: 40, label: "STRATEGY", color: "var(--cyan)", labelY: 24, anchor: "middle" },
  { x: 380, y: 90, label: "BRAND", color: "var(--amber)", labelY: 74, anchor: "middle" },
  { x: 420, y: 230, label: "SOCIAL", color: "var(--cyan)", labelY: 222, anchor: "start", labelX: 392 },
  { x: 380, y: 370, label: "WEB", color: "var(--amber)", labelY: 396, anchor: "middle" },
  { x: 230, y: 420, label: "APP", color: "var(--cyan)", labelY: 440, anchor: "middle" },
  { x: 80, y: 370, label: "FILM", color: "var(--amber)", labelY: 396, anchor: "middle" },
  { x: 40, y: 230, label: "MOTION", color: "var(--cyan)", labelY: 222, anchor: "start", labelX: 66 },
  { x: 80, y: 90, label: "PODCAST", color: "var(--amber)", labelY: 74, anchor: "middle" },
];

const CENTER = { x: 230, y: 230 };

export default function HubDiagram() {
  return (
    <motion.div
      className={styles.diagram}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 460 460">
        <g stroke="rgba(255,255,255,0.14)" strokeWidth={1} fill="none">
          {NODES.map((n, i) => (
            <motion.line
              key={`line-${i}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.06 }}
            />
          ))}
        </g>

        <g stroke="var(--cyan)" strokeWidth={2} fill="none" strokeLinecap="round">
          {NODES.map((n, i) => (
            <motion.line
              key={`pulse-${i}`}
              className={styles.pulse}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              strokeDasharray="10 230"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>

        <g>
          {NODES.map((n, i) => (
            <motion.g
              key={`node-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.9 + i * 0.06,
                ease: "backOut",
              }}
            >
              <circle cx={n.x} cy={n.y} r={5} fill={n.color} />
              <text
                x={n.labelX ?? n.x}
                y={n.labelY}
                textAnchor={n.anchor}
                className={styles.label}
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </g>

        <motion.circle
          className={styles.corePulse}
          cx={CENTER.x}
          cy={CENTER.y}
          r={34}
          fill="none"
          stroke="var(--cyan)"
          strokeWidth={1}
        />
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={26}
          fill="var(--ink)"
          stroke="var(--cyan)"
          strokeWidth={1.5}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
        />
        <motion.text
          x={CENTER.x}
          y={CENTER.y + 4}
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontWeight={700}
          fontSize={11}
          fill="var(--paper)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          HUB
        </motion.text>
      </svg>
    </motion.div>
  );
}

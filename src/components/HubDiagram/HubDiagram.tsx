"use client";

import { motion } from "framer-motion";
import styles from "./HubDiagram.module.scss";

const SERVICE_LABELS = [
  "MARKETING",
  "BRANDING",
  "CONTENT",
  "CONSULTING",
  "WEB & APP",
  "AI",
  "TRAINING",
];

const CENTER = { x: 230, y: 230 };
const RADIUS = 190;

interface HubNode {
  x: number;
  y: number;
  label: string;
  color: string;
  anchor: "start" | "middle" | "end";
}

// Evenly distribute nodes around the circle, starting from straight up.
const NODES: HubNode[] = SERVICE_LABELS.map((label, i) => {
  const angle = (i / SERVICE_LABELS.length) * Math.PI * 2 - Math.PI / 2;
  const x = CENTER.x + RADIUS * Math.cos(angle);
  const y = CENTER.y + RADIUS * Math.sin(angle);

  // Anchor the label so it reads outward from the node rather than
  // overlapping the connecting line.
  const anchor: HubNode["anchor"] =
    Math.cos(angle) > 0.3 ? "start" : Math.cos(angle) < -0.3 ? "end" : "middle";

  return {
    x,
    y,
    label,
    color: i % 2 === 0 ? "var(--cyan)" : "var(--amber)",
    anchor,
  };
});

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

        <g
          stroke="var(--cyan)"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        >
          {NODES.map((n, i) => (
            <motion.line
              key={`pulse-${i}`}
              className={styles.pulse}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              strokeDasharray="10 230"
              style={{ animationDelay: `${i * 0.45}s` }}
            />
          ))}
        </g>

        <g>
          {NODES.map((n, i) => {
            const labelOffset = 16;
            const dx = n.x - CENTER.x;
            const dy = n.y - CENTER.y;
            const len = Math.hypot(dx, dy) || 1;
            const labelX = n.x + (dx / len) * labelOffset;
            const labelY = n.y + (dy / len) * labelOffset + 4;

            return (
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
                  x={labelX}
                  y={labelY}
                  textAnchor={n.anchor}
                  className={styles.label}
                >
                  {n.label}
                </text>
              </motion.g>
            );
          })}
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

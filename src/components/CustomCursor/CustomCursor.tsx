"use client";

import { useEffect, useRef, useState } from "react";
import { useGsap } from "@/lib/gsap";
import styles from "./CustomCursor.module.scss";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

/**
 * A dot + trailing ring that replace the native cursor on desktop
 * (fine-pointer) devices, with the ring growing over interactive
 * elements. Purely a polish layer — the site works identically without
 * it, so it no-ops on touch devices and prefers-reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const shouldEnable = hasFinePointer && !prefersReducedMotion;
    setEnabled(shouldEnable);

    // Injected directly (rather than relying on a global stylesheet edit
    // elsewhere) so this component is self-contained. Plain elements
    // often have their own explicit `cursor: pointer` (buttons, links),
    // which an inherited value can never override — only a wildcard
    // !important rule like this actually wins everywhere.
    let styleEl: HTMLStyleElement | null = null;
    if (shouldEnable) {
      styleEl = document.createElement("style");
      styleEl.setAttribute("data-custom-cursor", "");
      styleEl.textContent = "body, body * { cursor: none !important; }";
      document.head.appendChild(styleEl);
    }

    return () => {
      styleEl?.remove();
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(HOVER_SELECTOR)) {
        ring.classList.add(styles.ringHover);
        dot.classList.add(styles.dotHover);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(HOVER_SELECTOR)) {
        ring.classList.remove(styles.ringHover);
        dot.classList.remove(styles.dotHover);
      }
    };
    const onLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const onEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [enabled, gsap]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}

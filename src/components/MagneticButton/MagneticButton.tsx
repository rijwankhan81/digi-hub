"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";
import styles from "./MagneticButton.module.scss";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;

  /** Cursor follow strength (0–1). */
  strength?: number;

  /** Maximum movement in px. */
  maxDistance?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  maxDistance = 18,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { gsap } = useGsap();

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el) return;

      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!canHover || reduceMotion) return;

      const xTo = gsap.quickTo(el, "x", {
        duration: 0.28,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(el, "y", {
        duration: 0.28,
        ease: "power3.out",
      });

      let rect = el.getBoundingClientRect();

      const updateRect = () => {
        rect = el.getBoundingClientRect();
      };

      const onEnter = () => {
        updateRect();
      };

      const onMove = (e: PointerEvent) => {
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        const x = gsap.utils.clamp(-maxDistance, maxDistance, dx * strength);

        const y = gsap.utils.clamp(-maxDistance, maxDistance, dy * strength);

        xTo(x);
        yTo(y);
      };

      const onLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: "elastic.out(1,0.45)",
          overwrite: true,
        });
      };

      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      window.addEventListener("resize", updateRect);

      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);

        window.removeEventListener("resize", updateRect);
      };
    },
    {
      scope: wrapperRef,
      dependencies: [gsap, strength, maxDistance],
    },
  );

  return (
    <div
      ref={wrapperRef}
      className={[styles.magnetic, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

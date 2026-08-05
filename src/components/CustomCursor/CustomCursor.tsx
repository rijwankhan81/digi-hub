"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";
import styles from "./CustomCursor.module.scss";

const HOVER_SELECTOR = `
  a,
  button,
  input,
  textarea,
  select,
  label,
  [role="button"],
  [data-cursor-hover]
`;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const { gsap } = useGsap();

  useGSAP(
    () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const text = textRef.current;

      if (!dot || !ring || !text) return;

      const canHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!canHover || reduceMotion) return;

      document.documentElement.classList.add("cursor-none");

      gsap.set([dot, ring], {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
      });

      gsap.set(text, {
        opacity: 0,
        scale: 0.8,
      });

      const dotX = gsap.quickTo(dot, "x", {
        duration: 0.08,
        ease: "power3.out",
      });

      const dotY = gsap.quickTo(dot, "y", {
        duration: 0.08,
        ease: "power3.out",
      });

      const ringX = gsap.quickTo(ring, "x", {
        duration: 0.28,
        ease: "power3.out",
      });

      const ringY = gsap.quickTo(ring, "y", {
        duration: 0.28,
        ease: "power3.out",
      });

      let visible = false;

      const showCursor = () => {
        if (visible) return;

        visible = true;

        gsap.to([dot, ring], {
          opacity: 1,
          duration: 0.2,
          overwrite: true,
        });
      };

      const hideCursor = () => {
        visible = false;

        gsap.to([dot, ring], {
          opacity: 0,
          duration: 0.2,
          overwrite: true,
        });
      };

      const move = (e: PointerEvent) => {
        showCursor();

        dotX(e.clientX);
        dotY(e.clientY);

        ringX(e.clientX);
        ringY(e.clientY);
      };

      const pointerOver = (e: PointerEvent) => {
        const target = (e.target as HTMLElement)?.closest(
          HOVER_SELECTOR,
        ) as HTMLElement | null;

        if (!target) return;

        const scale = Number(target.dataset.cursorScale ?? "1.8");

        gsap.to(ring, {
          scale,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(dot, {
          scale: 0,
          duration: 0.18,
          overwrite: true,
        });

        const label = target.dataset.cursorText;

        if (label) {
          text.textContent = label;

          gsap.to(text, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            overwrite: true,
          });
        }
      };

      const pointerOut = (e: PointerEvent) => {
        const target = (e.target as HTMLElement)?.closest(
          HOVER_SELECTOR,
        ) as HTMLElement | null;

        if (!target) return;

        gsap.to(ring, {
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(dot, {
          scale: 1,
          duration: 0.2,
          overwrite: true,
        });

        gsap.to(text, {
          opacity: 0,
          scale: 0.8,
          duration: 0.15,
          overwrite: true,
        });
      };

      const leaveWindow = (e: MouseEvent) => {
        if (!e.relatedTarget) {
          hideCursor();
        }
      };

      const visibility = () => {
        if (document.hidden) {
          hideCursor();
        }
      };

      window.addEventListener("pointermove", move);

      document.addEventListener("pointerover", pointerOver);
      document.addEventListener("pointerout", pointerOut);

      window.addEventListener("mouseout", leaveWindow);

      document.addEventListener("visibilitychange", visibility);

      return () => {
        document.documentElement.classList.remove("cursor-none");

        window.removeEventListener("pointermove", move);

        document.removeEventListener("pointerover", pointerOver);
        document.removeEventListener("pointerout", pointerOut);

        window.removeEventListener("mouseout", leaveWindow);

        document.removeEventListener("visibilitychange", visibility);
      };
    },
    {
      dependencies: [gsap],
    },
  );

  return (
    <>
      <div ref={ringRef} className={styles.ring}>
        <span ref={textRef} className={styles.text} />
      </div>

      <div ref={dotRef} className={styles.dot} />
    </>
  );
}

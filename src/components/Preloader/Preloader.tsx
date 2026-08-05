"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useGsap } from "@/lib/gsap";
import styles from "./Preloader.module.scss";

/**
 * A brief branded intro that plays on first load (it lives in the root
 * layout, so client-side navigation between pages never remounts it —
 * only a fresh page load does). Purely decorative: if it's skipped
 * (reduced motion) the page is simply usable immediately.
 */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        setDone(true);
        return;
      }

      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = prevOverflow;
          setDone(true);
        },
      });

      tl.set(wordRef.current, { opacity: 0, y: 16 })
        .set(barRef.current, { scaleX: 0 })
        .to(wordRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.16,
          ease: "power3.out",
        })
        .to(
          barRef.current,
          { scaleX: 1, duration: 0.19, ease: "power2.inOut" },
          "-=0.1",
        )
        .to(
          wordRef.current,
          { opacity: 0, y: -12, duration: 0.14, ease: "power2.in" },
          "+=0.15",
        )
        .to(
          rootRef.current,
          { yPercent: -100, duration: 0.18, ease: "power4.inOut" },
          "-=0.1",
        );
    },
    { scope: rootRef },
  );

  if (done) return null;

  return (
    <div ref={rootRef} className={styles.preloader} aria-hidden="true">
      <div ref={wordRef} className={styles.word}>
        DIGI<span>HUB</span>
      </div>
      <div className={styles.barTrack}>
        <div ref={barRef} className={styles.bar} />
      </div>
    </div>
  );
}

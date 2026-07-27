"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useGsap } from "@/lib/gsap";

const HEADER_OFFSET = 88;

/**
 * Smooth scroll, built on the official `lenis/react` component (not a
 * hand-rolled scroll loop) wired to GSAP's ticker exactly the way Lenis's
 * own docs describe for GSAP/ScrollTrigger projects:
 * https://lenis.darkroom.engineering/ → "GSAP ScrollTrigger" recipe.
 *
 * `autoRaf: false` on the Lenis instance because GSAP's ticker drives the
 * raf loop instead — this is what keeps Lenis's scroll position and
 * ScrollTrigger's pin/scrub calculations perfectly in sync every frame.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const { gsap, ScrollTrigger } = useGsap();

  // Drive Lenis's raf loop from GSAP's ticker.
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, [gsap]);

  // Keep ScrollTrigger in sync with every Lenis scroll frame.
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [ScrollTrigger]);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.clearScrollMemory();
    };
  }, [ScrollTrigger]);

  // In-page anchor links (nav, buttons) scroll through Lenis too, instead
  // of jumping instantly.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      lenisRef.current?.lenis?.scrollTo(el as HTMLElement, {
        offset: -HEADER_OFFSET,
        duration: 1.3,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const refresh = () => lenisRef.current?.lenis?.resize();

    ScrollTrigger.addEventListener("refresh", refresh);

    return () => {
      ScrollTrigger.removeEventListener("refresh", refresh);
    };
  }, [ScrollTrigger]);

  // Next.js loads custom fonts async (font-display: swap), which can
  // reflow text after ScrollTrigger has already measured pin/scrub
  // distances (most visible on the Services horizontal-scroll section,
  // whose end point depends on exact rendered width). Refreshing once
  // everything has actually settled fixes that class of "GSAP scroll
  // stuff is broken/misaligned" bug. A resize listener covers the same
  // issue if the window is resized after load.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener("load", refresh);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refresh, 200);
    };
    window.addEventListener("resize", onResize);

    // Also catch up once on mount in case fonts/load already fired
    // before this effect ran (e.g. fast connections / cached fonts).
    const initialTimer = setTimeout(refresh, 300);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      clearTimeout(initialTimer);
    };
  }, [ScrollTrigger]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}

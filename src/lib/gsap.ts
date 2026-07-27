"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

/**
 * Registers GSAP plugins exactly once. Safe to call from every component
 * that needs gsap/ScrollTrigger — it's a no-op after the first call.
 */
export function useGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

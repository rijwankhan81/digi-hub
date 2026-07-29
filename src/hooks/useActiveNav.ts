"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// The homepage sections we scroll-spy on, in document order.
const SECTION_IDS = ["home", "services"];

type NavLinkLike =
  | { hash: string; page?: never }
  | { page: string; hash?: never };

/**
 * Shared active-nav logic for Header and Footer:
 * - "page" links (e.g. About us → /about) are active on an exact
 *   pathname match.
 * - "hash" links (Home/Services/Portfolio/Contact) are only ever active
 *   while on the homepage, and which one is active is decided by
 *   scroll-spying the sections with IntersectionObserver — whichever
 *   section is currently crossing the "active band" near the top of the
 *   viewport wins.
 */
export function useActiveNav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [activeHash, setActiveHash] = useState("home");

  useEffect(() => {
    if (!onHome) return;

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveHash(visible[0].target.id);
        }
      },
      {
        // Treat a horizontal band roughly a third of the way down the
        // viewport as "active" — feels right for a header that's fixed
        // near the top.
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.5, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (link: NavLinkLike) => {
    if (link.page) return pathname === link.page;
    if (!onHome || !link.hash) return false;
    return activeHash === link.hash.replace("#", "");
  };

  return { pathname, onHome, isActive };
}

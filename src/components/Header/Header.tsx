"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";
import logo from "../../../public/images/logo.jpg";
import { useActiveNav } from "@/hooks/useActiveNav";

// "page" links are real routes; "hash" links are sections on the homepage.
// When we're not already on the homepage, hash links get a "/" prefix so
// they navigate back there instead of doing nothing on the current page.
type NavLink =
  | { label: string; hash: string; page?: never }
  | { label: string; page: string; hash?: never };

const NAV_LINKS: NavLink[] = [
  { label: "Home", hash: "#home" },
  { label: "About us", page: "/about" },
  { label: "Services", hash: "#services" },
  { label: "Portfolio", hash: "#portfolio" },
  { label: "Contact Us", hash: "#contact" },
  { label: "Blog", hash: "#blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { onHome, isActive } = useActiveNav();

  const resolveHref = (link: NavLink) =>
    link.page ? link.page : onHome ? link.hash : `/${link.hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <a href={onHome ? "#home" : "/"} className={styles.logo}>
          <span className={styles.logoImg}>
            <Image src={logo} alt="Digi Hub" width={36} height={36} priority />
          </span>
          DIGI HUB
        </a>

        <nav className={styles.nav}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={resolveHref(link)}
                  className={isActive(link) ? styles.active : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? styles.barOpen1 : styles.bar} />
          <span className={open ? styles.barOpen2 : styles.bar} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={resolveHref(link)}
                    className={isActive(link) ? styles.active : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

import styles from "./Header.module.scss";

import logo from "../../../public/images/logo.jpg";

import { SERVICE_ICONS, SERVICES } from "@/data/services";
import { useActiveNav } from "@/hooks/useActiveNav";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  children?: typeof SERVICES;
};

export default function Header() {
  const { onHome } = useActiveNav();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_ITEMS: NavItem[] = useMemo(
    () => [
      {
        label: "Home",
        href: onHome ? "#home" : "/",
      },

      {
        label: "About",
        href: "/about",
      },

      {
        label: "Services",
        href: "/services",
        children: SERVICES,
      },

      {
        label: "Portfolio",
        href: "/portfolio",
      },

      {
        label: "Blog",
        href: "/blog",
      },

      {
        label: "Contact",
        href: "/contact",
      },
    ],
    [onHome],
  );

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className={styles.inner}>
        {/* ================================= */}

        <Link href="/" className={styles.logo}>
          <span className={styles.logoImg}>
            <Image src={logo} alt="Digi Hub" width={38} height={38} priority />
          </span>

          <span>DIGI HUB</span>
        </Link>

        {/* ================================= */}

        <nav className={styles.nav}>
          <ul>
            {NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <li
                    key={item.label}
                    className={styles.hasDropdown}
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className={styles.dropdownTrigger} type="button">
                      {item.label}

                      <ChevronDown
                        size={16}
                        className={
                          openMenu === item.label ? styles.chevronOpen : ""
                        }
                      />
                    </button>

                    <AnimatePresence>
                      {openMenu === item.label && (
                        <motion.div
                          className={styles.dropdown}
                          initial={{
                            opacity: 0,
                            y: 14,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                        >
                          <div className={styles.dropdownGrid}>
                            {item.children.map((service) => {
                              const Icon = SERVICE_ICONS[service.icon];

                              return (
                                <Link
                                  key={service.slug}
                                  // href={`/services/${service.slug}`}
                                  href={`/services/page`}
                                  className={styles.dropdownItem}
                                >
                                  <div
                                    className={styles.dropdownIcon}
                                    style={{
                                      color: service.accent,
                                    }}
                                  >
                                    <Icon size={22} />
                                  </div>

                                  <div className={styles.dropdownContent}>
                                    <h4>{service.title}</h4>

                                    <p>{service.short}</p>
                                  </div>

                                  <ArrowRight
                                    size={18}
                                    className={styles.dropdownArrow}
                                  />
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ================================= */}

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {/* =========================================
            MOBILE NAVIGATION
        ========================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <ul>
                {NAV_ITEMS.map((item) => {
                  if (item.children) {
                    const expanded = openAccordion === item.label;

                    return (
                      <li key={item.label} className={styles.mobileDropdown}>
                        <button
                          type="button"
                          className={styles.mobileDropdownTrigger}
                          onClick={() =>
                            setOpenAccordion(expanded ? null : item.label)
                          }
                        >
                          <span>{item.label}</span>

                          <ChevronDown
                            size={18}
                            className={expanded ? styles.chevronOpen : ""}
                          />
                        </button>

                        <AnimatePresence>
                          {expanded && (
                            <motion.div
                              className={styles.mobileDropdownMenu}
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                            >
                              {item.children.map((service) => {
                                const Icon = SERVICE_ICONS[service.icon];

                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className={styles.mobileService}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setOpenAccordion(null);
                                    }}
                                  >
                                    <Icon size={18} />

                                    <span>{service.title}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={active ? styles.active : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

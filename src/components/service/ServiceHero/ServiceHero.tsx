"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

import styles from "./ServiceHero.module.scss";
import { SERVICE_ICONS, type Service } from "@/data/services";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  // service.icon may not be typed as a key of SERVICE_ICONS in some cases;
  // cast to the keys of SERVICE_ICONS to satisfy TypeScript index typing.
  const Icon =
    SERVICE_ICONS[service.icon as unknown as keyof typeof SERVICE_ICONS];
  return (
    <section className={styles.hero}>
      {/* Background */}

      <div className={styles.grid} />

      <div
        className={styles.glow}
        style={
          {
            "--accent": service.accent,
          } as React.CSSProperties
        }
      />

      <div className={styles.noise} />

      <div className="wrap">
        {/* ========================================= */}

        <motion.nav
          className={styles.breadcrumb}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link href="/">Home</Link>

          <ChevronRight size={14} />

          <Link href="/services">Services</Link>

          <ChevronRight size={14} />

          <span>{service.title}</span>
        </motion.nav>

        {/* ========================================= */}

        <div className={styles.layout}>
          {/* ========================================= */}
          {/* LEFT */}
          {/* ========================================= */}

          <div className={styles.content}>
            <motion.div
              className={styles.badge}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <Sparkles size={16} />
              Premium Business Solution
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {service.title}
            </motion.h1>

            <motion.div
              className={styles.accentLine}
              initial={{
                width: 0,
              }}
              animate={{
                width: 120,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
            />

            <motion.p
              className={styles.description}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              {service.description}
            </motion.p>

            {/* ============================ */}

            <motion.div
              className={styles.actions}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Start Project
                <ArrowRight size={18} />
              </Link>

              <Link href="/portfolio" className="btn btn-ghost">
                View Portfolio
              </Link>
            </motion.div>

            {/* ============================ */}

            {service.stats.length > 0 && (
              <motion.div
                className={styles.stats}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                }}
              >
                {service.stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <h3>{stat.value}</h3>

                    <span>{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* ========================================= */}
          {/* RIGHT */}
          {/* ========================================= */}

          <motion.div
            className={styles.visual}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
            }}
          >
            <div className={styles.imageCard}>
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className={styles.image}
              />

              <div className={styles.overlay} />

              <div
                className={styles.imageGlow}
                style={
                  {
                    "--accent": service.accent,
                  } as React.CSSProperties
                }
              />

              <motion.div
                className={styles.floatingIcon}
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={44} />
              </motion.div>

              <div className={styles.serviceChip}>
                <Icon size={16} />

                {service.short}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

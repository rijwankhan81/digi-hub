"use client";
import { SERVICE_ICONS, SERVICES } from "@/data/services";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Clapperboard,
  BriefcaseBusiness,
  MonitorSmartphone,
  Bot,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Services.module.scss";
import { useGsap } from "@/lib/gsap";
import Link from "next/link";

// const SERVICES = [
//   {
//     id: "01",
//     title: "Digital Marketing",
//     subtitle: "Grow Faster With Performance",
//     color: "#00E5FF",
//     icon: Globe,
//     items: [
//       "Social Media Marketing",
//       "Google Ads",
//       "Lead Generation",
//       "Marketing Strategy",
//     ],
//   },

//   {
//     id: "02",
//     title: "Branding & Creative",
//     subtitle: "Create Brands That People Love",
//     color: "#FF9D00",
//     icon: Palette,
//     items: ["Brand Identity", "Corporate Profile Design", "Brand Strategy"],
//   },

//   {
//     id: "03",
//     title: "Content & Media Production ",
//     subtitle: "Stories That Inspire",
//     color: "#A855F7",
//     icon: Clapperboard,
//     items: [
//       "TVC & OVC Production",
//       "Live Streaming",
//       "Documentary & Film Production",
//       "Corporate & Product Photography",
//       "Videography",
//       "Podcast Production",
//       "Studio Rental",
//       "Motion & Graphics",
//       "Video Editing",
//       "Copywriting",
//     ],
//   },

//   {
//     id: "04",
//     title: "Business Consulting",
//     subtitle: "Ideas Into Business",
//     color: "#00D27A",
//     icon: BriefcaseBusiness,
//     items: [
//       "Business Strategy",
//       "Startup Consulting",
//       "Market Research",
//       "Sales Consulting ",
//       "Go-to-Market Strategy ",
//       "Digital Transformation ",
//     ],
//   },

//   {
//     id: "05",
//     title: "Website & App Development",
//     subtitle: "Beautiful Digital Products",
//     color: "#4F7CFF",
//     icon: MonitorSmartphone,
//     items: [
//       "Corporate Websites",
//       "E-commerce Websites",
//       "Custom Web Applications",
//       "UI/UX Design",
//       "SEO",
//       "Website Maintenance",
//     ],
//   },

//   {
//     id: "06",
//     title: "AI Solutions",
//     subtitle: "Automation That Works",
//     color: "#14F195",
//     icon: Bot,
//     items: [
//       "AI Chatbots",
//       "AI Customer Support ",
//       "AI Content Creation ",
//       "AI Marketing Automation ",
//       "Workflow Automation ",
//       "CRM Integration ",
//     ],
//   },

//   {
//     id: "07",
//     title: "Training & Workshops",
//     subtitle: "Empower Your Team",
//     color: "#F43F5E",
//     icon: GraduationCap,
//     items: [
//       "Corporate Training",
//       "AI for Business",
//       "Digital Marketing Training",
//     ],
//   },
// ];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { gsap } = useGsap();

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width:861px)", () => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top-=100 top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    const panels = gsap.utils.toArray<HTMLElement>(`.${styles.panel}`);

    panels.forEach((panel) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "left center",
        },
      });

      tl.from(panel.querySelector(`.${styles.bigNumber}`), {
        y: 100,
        opacity: 0,
        duration: 0.6,
      });

      tl.from(
        panel.querySelector(`.${styles.title}`),
        {
          y: 80,
          opacity: 0,
          duration: 0.6,
        },
        "-=.35",
      );

      tl.from(
        panel.querySelector(`.${styles.subtitle}`),
        {
          y: 40,
          opacity: 0,
        },
        "-=.3",
      );

      tl.from(
        panel.querySelectorAll(`.${styles.tag}`),
        {
          opacity: 0,
          y: 25,
          stagger: 0.05,
        },
        "-=.2",
      );

      tl.from(
        panel.querySelector(`.${styles.visual}`),
        {
          scale: 0.8,
          opacity: 0,
        },
        "-=.4",
      );
    });

    return () => mm.revert();
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLElement>, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
    e.currentTarget.style.setProperty("--accent", color);
  };

  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.wrap}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHAT WE DO</span>

          <h2>
            Seven Disciplines.
            <br />
            One Creative Partner.
          </h2>

          <p>
            We combine creativity, technology, marketing and AI to help
            ambitious brands grow faster.
          </p>
        </div>
      </div>
      <div id="services" ref={sectionRef}>
        <div className={styles.track} ref={trackRef}>
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];

            return (
              <section
                key={service.id}
                className={styles.panel}
                onMouseMove={(e) => handleMove(e, service.color)}
              >
                <div
                  className={styles.blob}
                  style={{
                    background: `radial-gradient(circle, ${service.color}55, transparent 70%)`,
                  }}
                />

                <div className={styles.bigNumber}>{service.id}</div>

                <div className={styles.left}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={styles.iconBox}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <span className={styles.small}>{service.subtitle}</span>

                  <h3 className={styles.title}>{service.title}</h3>

                  <p className={styles.subtitle}>
                    Premium digital experiences powered by strategy, innovation
                    and measurable results.
                  </p>

                  <div className={styles.tags}>
                    {service.features.map((item) => (
                      <motion.div
                        key={item}
                        className={styles.tag}
                        whileHover={{
                          y: -8,
                          scale: 1.06,
                          rotate: -2,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={styles.button}
                    whileHover={{
                      x: 8,
                    }}
                  >
                    {" "}
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      Explore Service
                    </Link>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </motion.button>
                </div>

                <div className={styles.right}>
                  <motion.div
                    className={styles.visual}
                    animate={{
                      y: [0, -18, 0],
                      rotate: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  >
                    <div className={styles.ring}></div>

                    <div
                      className={styles.core}
                      style={{
                        background: service.color,
                      }}
                    ></div>
                    <div className={styles.stats}>
                      {service.stats.map((item, index) => (
                        <div
                          key={item.label}
                          className={
                            index === 0
                              ? styles.card
                              : index === 1
                                ? styles.card2
                                : styles.card3
                          }
                        >
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className={styles.card4}>
                      <Icon size={40} />
                    </div>
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

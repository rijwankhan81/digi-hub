"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "./Services.module.scss";
import { useGsap } from "@/lib/gsap";

const SERVICES = [
  {
    id: "01",
    name: "Digital Marketing",
    items: [
      "Social Media Marketing",
      "Marketing Strategy",
      "Google Ads (PPC)",
      "SEO",
      "Lead Generation",
    ],
  },
  {
    id: "02",
    name: "Branding & Creative",
    items: ["Brand Strategy", "Brand Identity", "Corporate Profile Design"],
  },
  {
    id: "03",
    name: "Content & Media Production",
    items: [
      "TVC & OVC Production",
      "Live Streaming",
      "Documentary & Film Production",
      "Corporate & Product Photography",
      "Videography",
      "Podcast Production",
      "Studio Rental",
      "Video Editing",
      "Motion & Graphics",
      "Copywriting",
    ],
  },
  {
    id: "04",
    name: "Business Consulting",
    items: [
      "Business Strategy",
      "Startup Consulting",
      "Sales Consulting",
      "Market Research",
      "Go-to-Market Strategy",
      "Digital Transformation",
    ],
  },
  {
    id: "05",
    name: "Website & App Development",
    items: [
      "Corporate Websites",
      "E-commerce Websites",
      "Landing Page",
      "Custom Web Applications",
      "UI/UX Design",
      "SEO",
      "Website Maintenance",
    ],
  },
  {
    id: "06",
    name: "AI Solutions",
    items: [
      "AI Chatbots",
      "AI Customer Support",
      "AI Content Creation",
      "AI Marketing Automation",
      "Workflow Automation",
      "CRM Integration",
    ],
  },
  {
    id: "07",
    name: "Training & Workshops",
    items: [
      "Digital Marketing Training",
      "AI for Business",
      "Corporate Training",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGsap();

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 861px)", () => {
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

    return () => mm.revert();
  }, []);

  return (
    <section className={styles.section} id="services" ref={sectionRef}>
      <div className={styles.intro}>
        <div className="wrap">
          <div className={styles.eyebrow}>What we do</div>
          <h2>
            Seven disciplines.
            <br />
            One hub.
          </h2>
        </div>
      </div>
      <div className="wrap">
        <div className={styles.trackContainer}>
          <p className={styles.hint}>Scroll to explore →</p>
          <div className={styles.track} ref={trackRef}>
            {SERVICES.map((s) => (
              <div className={styles.panel} key={s.id}>
                <div className={styles.panelInner}>
                  <div className={styles.panelId}>{s.id}</div>
                  <h3>{s.name}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

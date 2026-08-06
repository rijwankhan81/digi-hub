"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Search,
  Target,
  Megaphone,
  Bot,
  PenTool,
  Palette,
  Camera,
  Film,
  BriefcaseBusiness,
  MonitorSmartphone,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";

import styles from "./ServiceFeatures.module.scss";

interface ServiceFeaturesProps {
  service: Service;
}

interface FeatureInfo {
  icon: LucideIcon;
  description: string;
}

const FEATURE_MAP: Record<string, FeatureInfo> = {
  "Social Media Marketing": {
    icon: Megaphone,
    description:
      "Build a strong online presence with engaging content, community management and performance-driven campaigns.",
  },

  "Marketing Strategy": {
    icon: Target,
    description:
      "Create data-backed strategies that align marketing efforts with your business objectives.",
  },

  "Google Ads": {
    icon: Search,
    description:
      "Launch high-converting PPC campaigns that maximize ROI while reducing acquisition costs.",
  },

  SEO: {
    icon: Search,
    description:
      "Increase search visibility, organic traffic and long-term business growth with modern SEO practices.",
  },

  "Lead Generation": {
    icon: Globe,
    description:
      "Generate qualified leads using multi-channel campaigns optimized for conversion.",
  },

  "Brand Strategy": {
    icon: Sparkles,
    description:
      "Define a unique market position that helps customers instantly recognize your brand.",
  },

  "Brand Identity": {
    icon: Palette,
    description:
      "Create memorable visual identities including logos, colors, typography and brand guidelines.",
  },

  "Corporate Profile Design": {
    icon: PenTool,
    description:
      "Professionally designed company profiles that communicate trust and credibility.",
  },

  "TVC & OVC Production": {
    icon: Film,
    description:
      "Produce cinematic advertising campaigns that inspire audiences across digital and television platforms.",
  },

  "Live Streaming": {
    icon: Camera,
    description:
      "Broadcast professional live events with reliable production and audience engagement.",
  },

  "Business Strategy": {
    icon: BriefcaseBusiness,
    description:
      "Build scalable business models and actionable growth roadmaps for sustainable success.",
  },

  "Startup Consulting": {
    icon: BriefcaseBusiness,
    description:
      "Transform innovative ideas into scalable businesses with expert startup guidance.",
  },

  "Website Maintenance": {
    icon: MonitorSmartphone,
    description:
      "Keep your website secure, optimized and updated for peak performance.",
  },

  "Corporate Websites": {
    icon: MonitorSmartphone,
    description:
      "Modern, responsive websites designed to strengthen your brand and convert visitors.",
  },

  "E-commerce Websites": {
    icon: MonitorSmartphone,
    description:
      "Powerful online stores optimized for performance, sales and seamless customer experiences.",
  },

  "Landing Page": {
    icon: MonitorSmartphone,
    description:
      "High-converting landing pages built specifically for campaigns and lead generation.",
  },

  "Custom Web Applications": {
    icon: MonitorSmartphone,
    description:
      "Tailor-made applications designed around your business workflows and operations.",
  },

  "UI/UX Design": {
    icon: PenTool,
    description:
      "User-centered experiences that balance aesthetics with usability and performance.",
  },

  "AI Chatbots": {
    icon: Bot,
    description:
      "Intelligent AI assistants that automate conversations and improve customer engagement.",
  },

  "AI Customer Support": {
    icon: Bot,
    description:
      "Reduce response times with AI-powered support available 24/7.",
  },

  "AI Content Creation": {
    icon: Bot,
    description:
      "Accelerate content production using generative AI while maintaining quality.",
  },

  "Workflow Automation": {
    icon: Bot,
    description:
      "Automate repetitive business processes to improve productivity and efficiency.",
  },

  "Corporate Training": {
    icon: GraduationCap,
    description:
      "Hands-on workshops designed to upskill teams with practical industry knowledge.",
  },

  "Digital Marketing Training": {
    icon: GraduationCap,
    description:
      "Learn modern digital marketing techniques from experienced professionals.",
  },

  "AI for Business": {
    icon: Bot,
    description:
      "Empower your organization with practical AI adoption strategies and real-world use cases.",
  },
};

const DEFAULT_FEATURE: FeatureInfo = {
  icon: CheckCircle2,
  description:
    "Delivered using proven workflows, experienced specialists and measurable business outcomes.",
};

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>What We Deliver</span>

          <h2>
            Solutions designed
            <br />
            to move your business forward.
          </h2>

          <p>
            Every service is carefully planned, executed and optimized to
            deliver measurable business growth.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {service.features.map((feature, index) => {
            const data = FEATURE_MAP[feature] ?? DEFAULT_FEATURE;

            const Icon = data.icon;

            return (
              <motion.article
                key={feature}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <span className={styles.number}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div className={styles.icon}>
                  <Icon size={26} />
                </div>

                <h3>{feature}</h3>

                <p>{data.description}</p>

                <div className={styles.footer}>
                  <span>Included in this service</span>

                  <ArrowUpRight size={18} />
                </div>

                <div className={styles.glow} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Globe,
  Palette,
  Clapperboard,
  BriefcaseBusiness,
  MonitorSmartphone,
  Bot,
  GraduationCap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const SERVICE_ICONS = {
  globe: Globe,
  palette: Palette,
  bot: Bot,
  monitorsmartphone: MonitorSmartphone,
  briefcasebusiness: BriefcaseBusiness,
  clapperboard: Clapperboard,
  graduationcap: GraduationCap,
} as const;

export interface Service {
  id: string;
  slug: string;

  title: string;
  subtitle: string;
  short: string;

  description: string;

  icon: keyof typeof SERVICE_ICONS;

  accent: string;

  heroImage: string;

  features: string[];

  stats: {
    value: string;
    label: string;
  }[];

  process: {
    title: string;
    description: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES: Service[] = [
  {
    id: "01",

    slug: "digital-marketing",

    title: "Digital Marketing",
    subtitle: "Grow Faster With Performance",
    short: "SEO • Ads • Social Media",

    description:
      "Grow your business with SEO, paid advertising, lead generation and data-driven digital campaigns that deliver measurable results.",

    icon: "globe",

    accent: "var(--cyan)",

    heroImage: "/images/services/digital-marketing.jpg",

    features: [
      "Social Media Marketing",
      "Google Ads",
      "Lead Generation",
      "Marketing Strategy",
    ],

    stats: [
      {
        value: "250+",
        label: "Campaigns",
      },
      {
        value: "40M+",
        label: "Reach",
      },
      {
        value: "4.8x",
        label: "Average ROI",
      },
    ],

    process: [
      {
        title: "Research",
        description: "Competitor analysis and audience research.",
      },
      {
        title: "Strategy",
        description: "Create a data-driven marketing roadmap.",
      },
      {
        title: "Execution",
        description: "Launch campaigns across multiple platforms.",
      },
      {
        title: "Optimization",
        description: "Improve performance using analytics.",
      },
    ],

    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "Most businesses start seeing measurable improvements within 3–6 months.",
      },
    ],
  },

  {
    id: "02",

    slug: "branding",

    title: "Branding & Creative",
    subtitle: "Create Brands That People Love",

    short: "Identity • Strategy • Design",

    description:
      "Build a memorable brand identity with strategy, storytelling and premium creative assets.",

    icon: "palette",

    accent: "var(--amber)",

    heroImage: "/images/services/branding.jpg",

    features: ["Brand Identity", "Corporate Profile Design", "Brand Strategy"],

    stats: [
      {
        value: "120+",
        label: "Brands",
      },
      {
        value: "15+",
        label: "Industries",
      },
      {
        value: "98%",
        label: "Client Satisfaction",
      },
    ],

    process: [
      {
        title: "Discovery",
        description:
          "Understand your business, audience and market positioning.",
      },
      {
        title: "Brand Strategy",
        description: "Define your brand voice, values and messaging.",
      },
      {
        title: "Creative Design",
        description:
          "Design visual identity including logo, colors and brand assets.",
      },
      {
        title: "Launch",
        description:
          "Deliver complete brand guidelines and marketing materials.",
      },
    ],

    faqs: [
      {
        question: "What is included in branding?",
        answer:
          "Branding includes strategy, logo design, visual identity, messaging and brand guidelines.",
      },
      {
        question: "Can you redesign an existing brand?",
        answer:
          "Yes. We modernize existing brands while maintaining their core identity and recognition.",
      },
    ],
  },

  {
    id: "03",

    slug: "content-media",

    title: "Content & Media Production",
    subtitle: "Stories That Inspire",
    short: "Video • Motion • Production",

    description:
      "Premium content production including TVC, OVC, photography, podcast and motion graphics.",

    icon: "bot",

    accent: "var(--cyan)",

    heroImage: "/images/services/content.jpg",

    features: [
      "TVC & OVC Production",
      "Live Streaming",
      "Documentary & Film Production",
      "Corporate & Product Photography",
      "Videography",
      "Podcast Production",
      "Studio Rental",
      "Motion & Graphics",
      "Video Editing",
      "Copywriting",
    ],

    stats: [
      {
        value: "500+",
        label: "Projects Delivered",
      },
      {
        value: "50+",
        label: "Brands Served",
      },
      {
        value: "15M+",
        label: "Content Views",
      },
    ],

    process: [
      {
        title: "Planning",
        description: "Develop concepts, scripts and production schedules.",
      },
      {
        title: "Production",
        description: "Capture high-quality video, photography and audio.",
      },
      {
        title: "Post Production",
        description:
          "Edit, color grade, animate and enhance the final content.",
      },
      {
        title: "Delivery",
        description:
          "Optimize content for TV, web, social media and advertising.",
      },
    ],

    faqs: [
      {
        question: "Do you provide complete video production?",
        answer:
          "Yes. We handle scripting, filming, editing, motion graphics and final delivery.",
      },
      {
        question: "Can you create content for social media?",
        answer:
          "Absolutely. We produce platform-optimized videos, reels, shorts and promotional content.",
      },
    ],
  },

  {
    id: "04",

    slug: "business-consulting",

    title: "Business Consulting",
    subtitle: "Ideas Into Business",
    short: "Growth • Strategy • Startup",

    description:
      "Helping startups and enterprises build scalable business strategies.",

    icon: "briefcasebusiness",

    accent: "var(--amber)",

    heroImage: "/images/services/consulting.jpg",

    features: [
      "Business Strategy",
      "Startup Consulting",
      "Market Research",
      "Sales Consulting ",
      "Go-to-Market Strategy ",
      "Digital Transformation ",
    ],

    stats: [
      {
        value: "200+",
        label: "Businesses Guided",
      },
      {
        value: "30+",
        label: "Industry Verticals",
      },
      {
        value: "95%",
        label: "Client Retention",
      },
    ],

    process: [
      {
        title: "Assessment",
        description: "Evaluate business challenges, opportunities and goals.",
      },
      {
        title: "Strategy",
        description: "Develop a practical growth and transformation roadmap.",
      },
      {
        title: "Implementation",
        description: "Support execution with actionable business frameworks.",
      },
      {
        title: "Performance Review",
        description:
          "Measure results and refine strategies for continuous growth.",
      },
    ],

    faqs: [
      {
        question: "Do you work with startups?",
        answer:
          "Yes. We help startups with business planning, market validation and scaling strategies.",
      },
      {
        question: "Can you help established businesses grow?",
        answer:
          "Absolutely. We optimize operations, improve sales strategies and support digital transformation.",
      },
    ],
  },

  {
    id: "05",

    slug: "website-development",

    title: "Website & App Development",
    subtitle: "Beautiful Digital Products",
    short: "Web • Mobile • UI/UX",

    description:
      "Modern websites and scalable applications built with cutting-edge technologies.",

    icon: "monitorsmartphone",

    accent: "var(--cyan)",

    heroImage: "/images/services/web.jpg",

    features: [
      "Corporate Websites",
      "E-commerce Websites",
      "Custom Web Applications",
      "UI/UX Design",
      "SEO",
      "Website Maintenance",
    ],

    stats: [
      {
        value: "300+",
        label: "Websites Built",
      },
      {
        value: "80+",
        label: "Applications Delivered",
      },
      {
        value: "99.9%",
        label: "Deployment Success",
      },
    ],

    process: [
      {
        title: "Discovery",
        description: "Gather business requirements and define project goals.",
      },
      {
        title: "Design",
        description: "Create intuitive UI/UX prototypes and user journeys.",
      },
      {
        title: "Development",
        description:
          "Build scalable, secure and high-performance applications.",
      },
      {
        title: "Launch & Support",
        description: "Deploy, monitor and continuously improve your platform.",
      },
    ],

    faqs: [
      {
        question: "Which technologies do you use?",
        answer:
          "We build using modern technologies such as React, Next.js, Node.js and cloud platforms.",
      },
      {
        question: "Do you provide maintenance after launch?",
        answer:
          "Yes. We offer ongoing maintenance, security updates and feature enhancements.",
      },
    ],
  },

  {
    id: "06",

    slug: "ai-solutions",

    title: "AI Solutions",
    subtitle: "Automation That Works",
    short: "Automation • AI • Chatbots",

    description:
      "Transform your business using AI automation, custom chatbots and intelligent workflows.",

    icon: "bot",

    accent: "var(--amber)",

    heroImage: "/images/services/ai.jpg",

    features: [
      "AI Chatbots",
      "AI Customer Support ",
      "AI Content Creation ",
      "AI Marketing Automation ",
      "Workflow Automation ",
      "CRM Integration ",
    ],

    stats: [
      {
        value: "100+",
        label: "AI Solutions",
      },
      {
        value: "60%",
        label: "Average Time Saved",
      },
      {
        value: "24/7",
        label: "Automation Support",
      },
    ],

    process: [
      {
        title: "AI Assessment",
        description: "Identify automation opportunities within your business.",
      },
      {
        title: "Solution Design",
        description: "Design AI workflows, chatbots and intelligent systems.",
      },
      {
        title: "Integration",
        description:
          "Integrate AI with your existing software and business processes.",
      },
      {
        title: "Optimization",
        description:
          "Continuously improve AI performance using real-world data.",
      },
    ],

    faqs: [
      {
        question: "Can AI integrate with our existing CRM?",
        answer:
          "Yes. We integrate AI solutions with CRM, ERP and third-party business platforms.",
      },
      {
        question: "Do AI chatbots support multiple languages?",
        answer:
          "Yes. Our AI assistants can communicate in multiple languages based on your business needs.",
      },
    ],
  },

  {
    id: "07",

    slug: "training",

    title: "Training & Workshops",
    subtitle: "Empower Your Team",
    short: "Corporate • AI • Marketing",

    description:
      "Upskill your team with practical workshops in AI, digital marketing and business growth.",

    icon: "graduationcap",

    accent: "var(--cyan)",

    heroImage: "/images/services/training.jpg",

    features: [
      "Corporate Training",
      "AI for Business",
      "Digital Marketing Training",
    ],

    stats: [
      {
        value: "5,000+",
        label: "Professionals Trained",
      },
      {
        value: "250+",
        label: "Workshops",
      },
      {
        value: "98%",
        label: "Positive Feedback",
      },
    ],

    process: [
      {
        title: "Needs Assessment",
        description: "Identify learning goals and skill gaps within your team.",
      },
      {
        title: "Curriculum Design",
        description: "Prepare customized, practical training modules.",
      },
      {
        title: "Interactive Training",
        description: "Deliver engaging workshops with real-world exercises.",
      },
      {
        title: "Evaluation",
        description:
          "Measure learning outcomes and provide post-training resources.",
      },
    ],

    faqs: [
      {
        question: "Are your workshops customized?",
        answer:
          "Yes. Every workshop can be tailored to your industry, team size and business objectives.",
      },
      {
        question: "Do you offer online and onsite training?",
        answer:
          "Yes. We provide both virtual and in-person training sessions for organizations worldwide.",
      },
    ],
  },
];

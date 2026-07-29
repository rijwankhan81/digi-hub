export type PortfolioCategory =
  | "Digital Marketing"
  | "Branding & Creative"
  | "Content & Media"
  | "Business Consulting"
  | "Website & App"
  | "AI Solutions"
  | "Training & Workshops";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  type: "image" | "video";
  description: string;
  featured?: boolean;
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Digital Marketing",
  "Branding & Creative",
  "Content & Media",
  "Business Consulting",
  "Website & App",
  "AI Solutions",
  "Training & Workshops",
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "northline-ecommerce",
    title: "Northline Apparel Group — E-commerce Relaunch & SEO",
    category: "Website & App",
    type: "image",
    description:
      "Rebuilt a slow legacy storefront into a fast, conversion-focused e-commerce site and rebuilt organic search visibility from scratch.",
    featured: true,
  },
  {
    id: "solace-brand",
    title: "Solace Health Clinics — Brand Identity & Corporate Profile",
    category: "Branding & Creative",
    type: "image",
    description:
      "A calmer, more trustworthy visual identity and a corporate profile deck used across every patient-facing touchpoint.",
  },
  {
    id: "marrow-film",
    title: "Marrow Studio — Brand Film & Social Campaign",
    category: "Content & Media",
    type: "video",
    description:
      "A documentary-style brand film paired with a cutdown social campaign that carried the same story across every feed.",
    featured: true,
  },
  {
    id: "gridworks-strategy",
    title: "GridWorks Manufacturing — Go-to-Market Strategy",
    category: "Business Consulting",
    type: "image",
    description:
      "Market research and a go-to-market roadmap that took a B2B manufacturer into two new export regions.",
  },
  {
    id: "orbital-ai",
    title: "Orbital Travel — AI Chatbot & Booking Automation",
    category: "AI Solutions",
    type: "video",
    description:
      "An AI customer-support chatbot wired into the booking flow, cutting response time from hours to seconds.",
    featured: true,
  },
  {
    id: "fieldnote-leadgen",
    title: "Fieldnote Real Estate — Paid Social & Lead Generation",
    category: "Digital Marketing",
    type: "image",
    description:
      "A always-on paid social engine that kept a steady pipeline of qualified buyer leads flowing to the sales team.",
  },
  {
    id: "halcyon-training",
    title: "Halcyon Restaurant Group — Digital Marketing Training",
    category: "Training & Workshops",
    type: "image",
    description:
      "An in-house training program that brought an entire marketing team up to speed on paid, organic and analytics.",
  },
  {
    id: "verona-rebrand",
    title: "Verona & Co — Full Rebrand & Website Relaunch",
    category: "Branding & Creative",
    type: "video",
    description:
      "A ground-up rebrand — identity, messaging and a new website — for a fashion label entering three new markets.",
  },
];

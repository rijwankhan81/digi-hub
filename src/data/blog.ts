export type BlogCategory =
  | "Digital Marketing"
  | "Branding & Creative"
  | "AI Solutions"
  | "Business Consulting"
  | "Web & App Development"
  | "Industry News";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  /** Path under /public. Swap for a real photo/graphic any time. */
  image: string;
  content: string[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Digital Marketing",
  "Branding & Creative",
  "AI Solutions",
  "Business Consulting",
  "Web & App Development",
  "Industry News",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-most-rebrands-fail-in-year-one",
    image: "/images/blog/branding.svg",
    title: "Why Most Rebrands Fail in Year One (and How to Avoid It)",
    excerpt:
      "A new logo isn't a rebrand. The projects that actually move the needle start somewhere else entirely.",
    category: "Branding & Creative",
    date: "2026-06-02",
    readTime: "6 min read",
    author: "Digi Hub Team",
    featured: true,
    content: [
      "Every year, thousands of businesses commission a rebrand, and within twelve months a surprising number quietly drift back toward their old identity — or worse, toward a confused mix of old and new. The logo changed. Nothing else did.",
      "The pattern is almost always the same: a brand refresh gets treated as a design exercise instead of a strategy exercise. A new mark, a new color palette, a new template deck — all delivered without ever answering the harder questions. Who exactly are we for? What do we do differently from the five competitors a buyer will also look at? What's the one thing we want to be known for in three years?",
      "Without those answers, a new visual identity is cosmetic. It looks different in the pitch deck, but the sales team still describes the company the old way, the website still leads with the old value proposition, and six months later someone quietly reverts the color on the homepage because 'it didn't feel like us.'",
      "The rebrands that stick start with positioning, not palettes. That means interviewing customers who chose you and customers who chose a competitor, mapping where the market is actually heading, and being willing to narrow the story rather than broaden it. A brand that tries to appeal to everyone ends up remembered by no one.",
      "Only once that positioning is locked does the creative work begin — and at that point, the visual identity has a job to do: make the positioning unmistakable, memorable and consistent everywhere the brand shows up. That's the difference between a rebrand that lasts and one that quietly reverts a year later.",
    ],
  },
  {
    slug: "ai-chatbots-that-dont-annoy-customers",
    image: "/images/blog/ai-solutions.svg",
    title: "AI Chatbots That Don't Annoy Your Customers",
    excerpt:
      "Most support bots fail for one simple reason: they're built to deflect, not to help. Here's what a better one looks like.",
    category: "AI Solutions",
    date: "2026-05-14",
    readTime: "5 min read",
    author: "Digi Hub Team",
    featured: true,
    content: [
      "There's a reason 'talk to a human' has become one of the most-typed phrases on the internet. Most AI chatbots were built to reduce support tickets, not to resolve them — which means the moment a customer's question gets even slightly specific, the bot loops back to a canned answer or a dead-end menu.",
      "A chatbot that actually helps starts from a different brief entirely: it should know enough about the business — order status, product specs, policies, account details — to resolve real questions, and it should know its own limits well enough to hand off cleanly the moment it's out of its depth.",
      "That second part matters more than most teams expect. A bot that confidently gives a wrong answer does more damage to trust than one that says 'let me get someone who can help with that' after thirty seconds. The handoff, done well, still saves the team time — the human agent picks up with full context instead of starting from zero.",
      "The technical shape of this is usually a retrieval layer over the business's actual documentation and systems (order data, FAQs, policies), a model tuned to stay within that scope, and clear escalation paths wired into whatever support tool the team already uses — not a chatbot bolted onto the website with no connection to anything real.",
      "Done right, this isn't about replacing a support team. It's about giving customers an instant answer to the 60% of questions that don't need a human, so the team's time goes to the 40% that genuinely do.",
    ],
  },
  {
    slug: "go-to-market-checklist-new-region",
    image: "/images/blog/consulting.svg",
    title: "The Go-to-Market Checklist for Entering a New Region",
    excerpt:
      "Expanding into a new market is rarely a marketing problem first. It's usually a positioning and logistics problem wearing a marketing costume.",
    category: "Business Consulting",
    date: "2026-04-28",
    readTime: "7 min read",
    author: "Digi Hub Team",
    featured: true,
    content: [
      "When a business decides to expand into a new country or region, the instinct is often to lead with a marketing push — a localized campaign, some paid ads, maybe a regional social account. That instinct usually gets the order of operations backwards.",
      "Before a single ad runs, the harder questions need answers: does the product or service actually fit this market's needs, price sensitivity and buying habits? Is there a regulatory or logistics reality (import duties, local certification, payment methods) that changes the offer itself? Who are the two or three competitors already serving this market, and what gap are we actually filling?",
      "Market research at this stage isn't a formality — it's the difference between a launch that lands and one that quietly fizzles six months in after the budget's spent. That research should produce a clear point of view: this is who we're for here, this is the price point, this is the channel where these buyers actually pay attention.",
      "Only with that in hand does the marketing plan make sense — because now it has a specific audience, a specific message and a specific channel to execute against, instead of a generic campaign hoping to find its footing.",
      "The businesses that expand successfully treat the first ninety days as a research-and-adjust period, not a victory lap. Budget, messaging and even the offer itself should be expected to shift once real market signal starts coming in.",
    ],
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    image: "/images/blog/digital-marketing.svg",
    title: "SEO in the Age of AI Search",
    excerpt:
      "Search is changing shape. Here's what still works, what doesn't, and what to actually do about it.",
    category: "Digital Marketing",
    date: "2026-04-09",
    readTime: "6 min read",
    author: "Digi Hub Team",
    content: [
      "AI-generated answers now sit above the traditional search results for a large share of queries, and that's understandably made a lot of businesses nervous about their SEO investment. The good news: the fundamentals haven't changed nearly as much as the panic suggests.",
      "AI answer engines are still drawing from indexed, crawlable content — which means the sites getting cited are, overwhelmingly, the ones that were already doing solid SEO: clear structure, genuine expertise, content that actually answers the question instead of circling it for 1,500 words before getting to the point.",
      "What has changed is which content earns visibility. Thin, keyword-stuffed pages built purely to rank are disappearing from view faster than ever, because there's no reason for an AI system to cite a page that adds nothing beyond restating the obvious. Original data, clear expertise and genuinely useful specificity are worth more now, not less.",
      "The practical shift for most businesses: fewer, better pages. Instead of a blog publishing three generic posts a week, one well-researched piece a month that actually says something specific — with real numbers, a real point of view, real experience behind it — tends to outperform on both traditional rankings and AI citations.",
      "SEO isn't dying. It's getting pickier about who it rewards.",
    ],
  },
  {
    slug: "corporate-website-mistakes",
    image: "/images/blog/web-app.svg",
    title: "Five Corporate Website Mistakes That Quietly Cost Leads",
    excerpt:
      "None of these are dramatic. All of them are common. All of them are fixable in an afternoon.",
    category: "Web & App Development",
    date: "2026-03-22",
    readTime: "5 min read",
    author: "Digi Hub Team",
    content: [
      "Most corporate websites don't lose leads to one big mistake — they lose them to a handful of small ones that compound quietly, page after page.",
      "The first is a contact form buried three clicks deep behind a generic 'Contact' nav item, when it should be one click away from anywhere on the site, especially the pricing or services pages where intent is highest.",
      "The second is unclear pricing or scope. Not every business can publish exact prices, but 'contact us for a quote' with zero context makes a visitor do the work of guessing whether they're even in the right ballpark — and most won't bother.",
      "The third is slow load times on mobile, still, in 2026 — often from unoptimized hero images or auto-playing video that nobody asked for. A visitor on a mobile connection who waits four seconds for a hero image has already half-decided to leave.",
      "The fourth is generic stock photography where a real photo of the team, the office or the product would build far more trust in half the space. And the fifth is a services page organized by internal department structure instead of the actual problems a visitor is trying to solve.",
      "None of these require a redesign. They require an afternoon of honest auditing — ideally by someone outside the company, since these mistakes are almost invisible to the team that's looked at the site every day for years.",
    ],
  },
  {
    slug: "in-house-vs-agency-marketing-team",
    image: "/images/blog/industry-news.svg",
    title: "In-House vs Agency: What Actually Determines the Right Call",
    excerpt:
      "It's rarely about cost. It's about which one your business is actually set up to manage well.",
    category: "Industry News",
    date: "2026-03-03",
    readTime: "6 min read",
    author: "Digi Hub Team",
    content: [
      "The in-house-versus-agency debate usually gets framed as a cost comparison, which misses the more important question: which model does this specific business have the management bandwidth to run well?",
      "An in-house team needs a leader who can actually direct marketing strategy — hire well, brief clearly, and evaluate whether the work is good. Without that, an in-house team either drifts without direction or gets managed by someone (often the founder) who's stretched too thin to give it real attention.",
      "An agency relationship needs something different: a clear brief, fast decision-making on the client side, and enough trust to let the agency's specialists actually specialize, rather than re-litigating every creative decision through committee.",
      "The businesses that get the most value from an agency are usually the ones who treat it as an extension of the team, with a single point of contact who can make calls quickly — not a vendor relationship managed by whoever has a free hour that week.",
      "In practice, a lot of the best-run marketing functions are a hybrid: a small in-house team handling always-on work and brand voice, with an agency brought in for the specialist work — production, paid media at scale, or a specific push like a rebrand or a market launch — where deep expertise matters more than day-to-day availability.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

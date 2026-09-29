import { WritingArticle } from "./types";

export const ARTICLES: WritingArticle[] = [
  {
    id: "1",
    slug: "scaling-design-systems-0-to-1",
    title: "Scaling Design Systems from 0 → 1: Balancing Velocity and Cohesion",
    subtitle:
      "A practical framework for setting up tokens, component governance, and engineering alignment without stalling product delivery.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Design Systems", "UI/UX", "Engineering"],
    status: "coming_soon",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "UI/UX Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "The Day-Zero Challenge: Chaos vs. Structure",
        paragraphs: [
          "In high-velocity startup environments, building a design system often gets framed as an all-or-nothing dilemma: either you spend months perfecting an atomic component library, or you ship fragmented screens that become technical and design debt down the line.",
          "Through scaling design systems across healthtech, ecommerce, and B2B platforms, I have learned that the key is incremental tokenization. You don't need 80 components on day one; you need unshakeable primitives—color semantics, typography scales, and spacing rhythms.",
        ],
        quote:
          "A design system is never a finished library. It is an evolving contract between designers, engineers, and product stakeholders.",
        image: {
          src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
          caption: "Figure 1.1: Establishing visual hierarchy and responsive token architecture across viewports.",
          alt: "Design system architecture illustration",
        },
      },
      {
        heading: "Tokenizing Intent, Not Just Hex Codes",
        paragraphs: [
          "One of the biggest mistakes design teams make is naming tokens by their literal values (e.g. `color-orange-500` or `font-size-16`). When the brand evolves or dark mode is introduced, these names break down instantly.",
          "Instead, semantic tokens map directly to functional intent: `color-surface-elevated`, `color-accent-interactive`, `font-display-hero`. When engineers adopt semantic tokens, design reviews switch from nitpicking pixel values to validating user experience flows.",
        ],
        bullets: [
          "Global Tokens: Raw values (e.g. `palette-orange-400: #FFA861`)",
          "Semantic Tokens: Functional intent (e.g. `color-brand-primary`)",
          "Component Tokens: Scoped overrides (e.g. `btn-primary-bg`)",
        ],
        callout: {
          type: "insight",
          text: "Start with semantic tokens for spacing (4px, 8px, 12px, 16px, 24px, 32px) and typography before writing a single line of component code. 80% of visual cohesion comes from consistent rhythm.",
        },
        image: {
          src: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
          caption: "Animation 1.2: Dynamic token switching demonstrated across dark and light themes (GIF preview).",
          alt: "Token switching animation demonstration",
          isGif: true,
        },
      },
      {
        heading: "Bridging the Figma-to-Code Gap",
        paragraphs: [
          "Alignment isn't achieved by tossing a Figma link over the wall. True velocity happens when components share identical naming, prop structures, and variant states across Figma and React.",
          "When developers inspect a component and see props that directly match their TypeScript interfaces, friction evaporates. Handoff stops being an event and becomes an ongoing dialogue.",
        ],
        video: {
          src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          caption: "Video 1.3: Real-time component inspection and keyboard accessibility walkthrough.",
          poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          controls: true,
          autoPlay: false,
          loop: true,
        },
      },
    ],
  },
  {
    id: "2",
    slug: "navigating-ambiguity-in-product-design",
    title: "Navigating Ambiguity: How to Shape Products When Requirements are Unclear",
    subtitle:
      "Turning vague stakeholder briefs into structured user journeys, low-fi prototypes, and measurable product outcomes.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["Product Strategy", "User Research", "0→1"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "UI/UX Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Embracing the Fog",
        paragraphs: [
          "The most critical moments in a product designer's career rarely start with a clear PRD. More often, they begin with a sentence like: 'We need to help users understand their health diagnostics better, but we don't know where to start.'",
          "Ambiguity is not a roadblock; it is an invitation to define the problem before anyone jumps into visual solutions.",
        ],
        quote:
          "If you cannot state the user problem in a single sentence without using jargon, you are not ready to design screens.",
      },
      {
        heading: "The Three-Step De-Risking Loop",
        paragraphs: [
          "To move from vagueness to execution, I use a fast de-risking loop that brings engineering and business into the room on day two:",
        ],
        bullets: [
          "1. Assumption Mapping: Categorizing assumptions by impact and certainty.",
          "2. Rapid Prototyping: Testing 2-3 radically different conceptual models within 48 hours.",
          "3. Stakeholder Alignment: Aligning on constraints before high-fidelity visual polish begins.",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "ux-metrics-that-matter-to-business",
    title: "UX Metrics That Actually Matter to Business Stakeholders",
    subtitle:
      "Moving past vanity metrics like 'delight' to communicate conversion velocity, time-to-task, and cognitive load in terms executives care about.",
    publishedAt: "Coming Soon",
    readTime: "6 min read",
    tags: ["Design Leadership", "Business Impact", "Analytics"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "UI/UX Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Speaking the Language of the Business",
        paragraphs: [
          "Designers often wonder why their recommendations get deprioritized in roadmap planning. The reality is simple: business leaders speak in revenue, churn, customer acquisition cost, and efficiency, while designers often speak in aesthetics and subjective satisfaction.",
          "When you bridge that linguistic gap by connecting visual hierarchy directly to task completion speed and drop-off reduction, design earns a permanent seat at the strategy table.",
        ],
        callout: {
          type: "takeaway",
          text: "Never present a redesign as 'cleaner' or 'more modern'. Present it as 'reducing drop-off at checkout by simplifying the decision architecture from 7 choices to 3.'",
        },
      },
    ],
  },
];

export function getAllArticles(): WritingArticle[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): WritingArticle | undefined {
  return ARTICLES.find(
    (article) => article.slug.toLowerCase() === slug.toLowerCase()
  );
}

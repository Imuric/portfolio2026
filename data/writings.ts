import { WritingArticle } from "./types";

export const ARTICLES: WritingArticle[] = [
  // ── Existing Articles ──
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
      role: "Product Designer",
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
      role: "Product Designer",
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
      role: "Product Designer",
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

  // ── 15 New Articles ──
  {
    id: "4",
    slug: "styles-are-dead-engineering-logic-behind-3-level-variables",
    title: "Styles are Dead: The Engineering Logic Behind 3-Level Variable Structures",
    subtitle:
      "Why static styles crumble at scale, and how organizing design tokens into Primitives → Semantics → Components creates an unbreakable contract between Figma and code.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Design Tokens", "Figma Variables", "Design Engineering"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "The Breakdown of Flat Styles",
        paragraphs: [
          "For years, design tools taught us to create flat color palettes and static text styles. But when applications scale to support dark mode, multi-brand white labeling, and multi-tenant platforms, static styles fail catastrophically.",
          "In modern design systems, variables are not just color swatches—they are typed data structures reflecting functional hierarchy.",
        ],
        callout: {
          type: "insight",
          text: "Level 1: Primitives (raw values like `blue-500`) → Level 2: Semantics (intent like `color-interactive-primary`) → Level 3: Components (scoped usage like `button-primary-bg`).",
        },
      },
    ],
  },
  {
    id: "5",
    slug: "atomic-design-2-organizing-components-for-code",
    title: "Atomic Design 2.0: Organizing Components for Code, Not Just Canvas",
    subtitle:
      "How aligning Figma component variants, slot architecture, and boolean toggles directly with React props eliminates handoff misunderstandings.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["Atomic Design", "Component Architecture", "React"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Props-First Component Architecture",
        paragraphs: [
          "Brad Frost's original Atomic Design gave the industry a shared language, but design tools frequently treat components as isolated visual states. True velocity happens when Figma components mirror their React counterparts.",
          "When developers see props in Figma that directly map to TypeScript interfaces, handoff friction drops to zero.",
        ],
        callout: {
          type: "takeaway",
          text: "If a component variant cannot be explained as a prop in code, it is probably a layout anomaly that needs reconsideration.",
        },
      },
    ],
  },
  {
    id: "6",
    slug: "the-math-of-responsive-design-rem-over-px",
    title: "The Math of Responsive Design: Why I Use rem over px",
    subtitle:
      "The engineering and accessibility rationale behind fluid type scales, browser root settings, and why hardcoded pixel units break user autonomy.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["Accessibility", "Responsive Design", "CSS"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Accessibility Is Not Optional",
        paragraphs: [
          "Hardcoding pixels (`px`) in digital interfaces strips control from users who rely on custom browser font sizes. Using `rem` respects the user's root configuration while enabling fluid, proportional typography scales.",
          "Understanding the math behind base-16 conversions and clamp functions allows designers to build interfaces that scale gracefully across every device without breaking.",
        ],
      },
    ],
  },
  {
    id: "7",
    slug: "why-i-hate-math-in-design-building-no-code-token-generator",
    title: "Why I Hate Math in Design: Building a 'No-Code' Token Generator",
    subtitle:
      "Behind the scenes of Relaysis.com and Token Forge—automating modular scales, contrast checks, and token transformations to free designers from manual calculations.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Design Tools", "Token Forge", "Side Projects"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Automating the Tedious",
        paragraphs: [
          "Designers should spend their creative energy solving user problems, not manually recalculating typographic scales or adjusting contrast ratios across 50 hex codes. That frustration led directly to building Token Forge on Relaysis.com.",
          "By automating semantic token generation and exporting type-safe JSON, the bridge between design canvas and code repository becomes automated.",
        ],
      },
    ],
  },
  {
    id: "8",
    slug: "why-sharing-a-figma-link-isnt-handoff",
    title: "The 40-Page Truth: Why Sharing a Figma Link Isn't 'Handoff'",
    subtitle:
      "A complete guide to documenting edge cases, empty states, error boundaries, network delays, and permission rules that turn designs into production-ready software.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Design Operations", "Handoff", "Documentation"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Beyond the Happy Path",
        paragraphs: [
          "Tossing a Figma link into a Jira ticket and marking it 'ready for dev' is not handoff. Software lives in edge cases: slow 3G network states, 0-item dashboards, truncated names, and server 500 errors.",
          "Thorough documentation is not bureaucracy—it is respect for the developer's time and a safeguard for user experience fidelity.",
        ],
      },
    ],
  },
  {
    id: "9",
    slug: "stop-saying-move-it-left-speak-developer-during-qa",
    title: "Stop Saying 'Move it Left': How to Speak 'Developer' During QA",
    subtitle:
      "Mastering the CSS Box Model, Flexbox alignment, and Z-index stacking to give actionable, respected feedback that gets resolved in minutes instead of sprint cycles.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["Design QA", "Frontend", "Collaboration"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Precision in Communication",
        paragraphs: [
          "Telling an engineer 'this looks slightly off' or 'move it a bit to the left' causes frustration. When you inspect the DOM, identify the offending padding or flex alignment property, and say 'the container needs `gap: 16px` instead of `margin-right`', the bug gets fixed instantly.",
          "Speaking the language of the browser is the single fastest way to build engineering trust.",
        ],
      },
    ],
  },
  {
    id: "10",
    slug: "beyond-figma-design-engineer-tech-stack",
    title: "Beyond Figma: The 'Design Engineer' Tech Stack",
    subtitle:
      "Why high-leverage product designers must navigate developer tools—integrating Linear, GitHub, DevTools, and Notion into daily product workflows.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Tech Stack", "Productivity", "Workflows"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Living Where the Software Lives",
        paragraphs: [
          "Figma is where ideas are visualised; GitHub and Linear are where software becomes real. Designers who understand pull requests, issue lifecycles, and branch workflows have outsized influence on what actually ships.",
        ],
      },
    ],
  },
  {
    id: "11",
    slug: "prompt-like-a-developer-optimization-for-designers",
    title: "Prompt Like a Developer: Optimization Techniques & Snippets for Product Designers",
    subtitle:
      "Structuring AI prompts with constraints, context framing, and typed schemas to generate realistic UX copy, synthesize research, and prototype UI logic.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["AI in Design", "Prompt Engineering", "UX Research"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Prompts as Design Specifications",
        paragraphs: [
          "Vague prompts produce generic, robotic results. By adopting software engineering techniques—defining system personas, specifying negative constraints, and requesting structured JSON outputs—AI becomes a powerful copilot for user research synthesis and realistic copywriting.",
        ],
      },
    ],
  },
  {
    id: "12",
    slug: "information-architecture-is-revenue-navigation-case-study",
    title: "Information Architecture IS Revenue: A Case Study on Navigation",
    subtitle:
      "How restructuring catalog taxonomy and deep navigation hierarchies directly drove sales velocity and checkout conversions, backed by real data from AdroApex.",
    publishedAt: "Coming Soon",
    readTime: "6 min read",
    tags: ["Information Architecture", "Case Study", "Analytics"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Wayfinding Drives Revenue",
        paragraphs: [
          "Users cannot purchase what they cannot navigate to. At AdroApex, analyzing drop-off funnels revealed that users were abandoning carts not due to pricing, but due to ambiguous category labels and fragmented filtering.",
          "Restructuring the information architecture directly increased transaction velocity and reduced customer support inquiries.",
        ],
      },
    ],
  },
  {
    id: "13",
    slug: "designing-for-control-architecting-multi-tenant-access",
    title: "Designing for Control: Architecting Multi-Tenant Access (Admins vs. Buyers)",
    subtitle:
      "Balancing complex role-based access control, tenant data isolation, and permission matrices with an intuitive, clutter-free user experience.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["B2B SaaS", "Multi-Tenant", "Enterprise UX"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "The Enterprise Permission Conundrum",
        paragraphs: [
          "Designing for enterprise B2B requires serving two conflicting personas: system administrators who demand granular security controls, and end users who just want to complete their tasks in two clicks.",
          "Using conditional viewports and scoped permission trees keeps complex configurations out of the buyer's way without stripping admin capabilities.",
        ],
      },
    ],
  },
  {
    id: "14",
    slug: "automating-empathy-tools-to-speed-up-ux-research",
    title: "Automating Empathy: Tools I Use to Speed Up UX Research Analysis",
    subtitle:
      "Leveraging automated transcription, sentiment clustering, and semantic synthesis to analyze dozens of customer discovery interviews in hours instead of weeks.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["UX Research", "Automation", "Workflows"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Accelerating Qualitative Discovery",
        paragraphs: [
          "User research often stalls because teams dread the manual overhead of transcribing recordings and coding qualitative snippets into spreadsheets. Modern semantic tooling allows designers to surface recurring pain points in real time.",
        ],
      },
    ],
  },
  {
    id: "15",
    slug: "product-designer-vs-ui-ux-designer-salary-and-scope",
    title: "Product Designer vs. UI/UX Designer: It’s Not Just a Salary Difference",
    subtitle:
      "Understanding the shift in scope from visual polish and screen patterns to business metrics, unit economics, feature trade-offs, and stakeholder alignment.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Career Growth", "Product Strategy", "Design Leadership"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "Moving from Execution to Strategy",
        paragraphs: [
          "The distinction between UI/UX Designer and Product Designer is not mere industry semantics. A UI/UX Designer focuses on how a given feature should look and behave; a Product Designer asks whether the feature should exist at all, how it impacts retention, and what technical trade-offs are required.",
        ],
      },
    ],
  },
  {
    id: "16",
    slug: "ui-is-the-skin-ux-is-the-organs-analogy",
    title: "UI is the Skin, UX is the Organs: The Simplest Way to Explain the Difference",
    subtitle:
      "A battle-tested mental model for cross-functional partners on why a beautiful interface fails if the underlying architecture, data flow, and feedback loops are broken.",
    publishedAt: "Coming Soon",
    readTime: "4 min read",
    tags: ["Mental Models", "Design Fundamentals", "Communication"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "The Body Analogy",
        paragraphs: [
          "When explaining design to founders and non-designers, abstract definitions fail. The human body analogy makes it instantly visceral: UI is the skin, hair, and aesthetic surface; UX is the cardiovascular system, nervous system, and organs.",
          "If the organs are failing, perfect skin will not save the patient.",
        ],
      },
    ],
  },
  {
    id: "17",
    slug: "no-bs-design-interview-5-questions-how-to-answer",
    title: "The No-BS Design Interview: 5 Questions They Will Actually Ask (And How to Answer)",
    subtitle:
      "A candid breakdown of tackling portfolio case study reviews, answering trade-off questions, handling cross-functional pushback, and walking through raw Figma files.",
    publishedAt: "Coming Soon",
    readTime: "6 min read",
    tags: ["Interview Guide", "Career Advice", "Portfolio"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "What Hiring Teams Look For Behind the Polish",
        paragraphs: [
          "Senior design interviews are not about presenting pixel-perfect mockups. Hiring managers want to see how you navigate ambiguity, how you defend user advocacy when engineering pushes back on scope, and how your decisions drive measurable business value.",
        ],
      },
    ],
  },
  {
    id: "18",
    slug: "from-cs-to-design-technical-literacy-superpower",
    title: "From CS to Design: Why Technical Literacy is a Product Designer's Superpower",
    subtitle:
      "My manifesto on bridging Computer Science (B.Tech) with Human-Computer Interaction (M.Des)—and why understanding code transforms designers into strategic product leaders.",
    publishedAt: "Coming Soon",
    readTime: "5 min read",
    tags: ["Manifesto", "Design Engineering", "Computer Science"],
    status: "coming_soon",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Prathamesh Patil",
      role: "Product Designer",
      avatar: "/assets/home/hero-portrait.png",
    },
    sections: [
      {
        heading: "The Critical Bridge",
        paragraphs: [
          "Coming from a Computer Science background into Human-Computer Interaction changed how I see digital products forever. Code is not a separate discipline—it is the material from which digital user experiences are carved.",
          "When a designer understands state machines, network latency, and database schemas, they design solutions that are not merely pretty, but inherently feasible, scalable, and impactful.",
        ],
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

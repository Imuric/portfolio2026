import { ProjectDetail } from "./types";

export const PROJECTS: ProjectDetail[] = [
  {
    id: "famli",
    slug: "famli",
    aliases: ["famli-app"],
    title: "Famli App",
    subtitle: "Making complex family finances feel approachable by turning data into clear, intuitive experiences.",
    desc: "Simplified a family wealth management app by turning complex financial data into clear, intuitive experiences.",
    img: "/assets/home/famli-app.png",
    thumbClass: "thumb-famli",
    tags: [
      { l: "B2C", c: "purple" },
      { l: "0→1", c: "" },
      { l: "Fintech", c: "" },
    ],
    outcomes: [
      { v: "28%↑", l: "Decisions Made" },
      { v: "User Trust", l: "& Clarity" },
      { v: "User Control", l: "& Guidance" },
    ],
    meta: [
      { label: "Team", value: "Product Design Lead, 2 Designers" },
      { label: "Role", value: "Strategy, UX/UI, Research" },
      { label: "Duration", value: "4 Months" },
    ],
    problem:
      "Families struggled to get a single, intuitive view of investments, insurance, and wealth planning across multiple advisors and products. The existing solutions were fragmented, leading to decision paralysis and a lack of trust in their financial future.",
    quote: {
      label: "User Insight",
      text: '"I have money in five different places, and I have no idea if we\'re actually on track for retirement or just saving blindly."',
    },
    featuresIntro: {
      title: "The Solution",
      desc: "We built a modular dashboard that layered clarity over complexity, focusing on progressive disclosure and plain-language framings.",
    },
    features: [
      {
        title: "One-View Money",
        desc: "A unified dashboard that aggregates all family assets into a single, high-level overview, with the ability to drill down into specific categories.",
        bullets: [
          "Automatic bank & investment sync",
          "Real-time asset allocation tracking",
          "Shared family access for transparency",
        ],
        img: "https://via.placeholder.com/720x500",
      },
      {
        title: "Goal-Based Planning",
        desc: "Moving away from complex spreadsheets to simple, goal-oriented buckets that help families save for what matters most.",
        bullets: [
          "Dynamic goal forecasting",
          "Risk-adjusted recommendations",
          "Automated monthly contributions",
        ],
        img: "https://via.placeholder.com/720x500",
        imgLeft: true,
      },
    ],
    impactOutcomes: {
      title: "Key Outcomes",
      intro: "The new experience significantly improved user engagement and trust in the platform.",
      items: [
        {
          icon: "✅",
          title: "28% Increase in Decision Velocity",
          desc: "Tested households were able to make financial decisions 28% faster thanks to the unified view.",
        },
        {
          icon: "✅",
          title: "7.6 Trust Score",
          desc: "User trust scores on 'I understand my money' rose from 4.2 to 7.6 in post-launch surveys.",
        },
        {
          icon: "✅",
          title: "Double Activation",
          desc: "Activation on goal-planning flows doubled within the first month of release.",
        },
      ],
    },
    long: {
      tagline: "Making complex family finances feel approachable.",
      problem:
        "Families struggled to get a single, intuitive view of investments, insurance, and wealth planning across multiple advisors and products.",
      approach:
        "I led research with 20+ high-income households, mapped the family wealth lifecycle, and built a modular dashboard that layered clarity over complexity — progressive disclosure, plain-language framings, and a shared 'family view' for decision-making.",
      outcomes: [
        "Improved decision-making velocity by 28% across tested households",
        "Raised user trust scores on 'I understand my money' from 4.2 → 7.6",
        "Activation on goal-planning flows doubled in month one",
      ],
    },
  },
  {
    id: "otc",
    slug: "otc-seller-portal",
    aliases: ["otc"],
    title: "OTC Marketplace Seller Portal",
    subtitle: "Empowering sellers to list products and process orders at scale through a self-serve platform.",
    desc: "Enable Sellers to List Products and Process Orders on the Platform at scale.",
    img: "/assets/home/otc-sp.png",
    thumbClass: "thumb-otc",
    tags: [
      { l: "B2B", c: "green" },
      { l: "Scale", c: "" },
      { l: "Marketplace", c: "" },
    ],
    outcomes: [
      { v: "10 → 236", l: "Scaled Sellers" },
      { v: "8,960", l: "Orders / day" },
      { v: "₹850", l: "Increased AOV" },
    ],
    meta: [
      { label: "Client", value: "OTC Marketplace" },
      { label: "Role", value: "Product Designer" },
      { label: "Impact", value: "20x Seller Growth" },
    ],
    problem:
      "Sellers had no self-serve path to list products, manage inventory, and process orders. Every single update had to be funneled through an internal operations team, creating massive bottlenecks as the marketplace tried to scale.",
    quote: {
      label: "Ops Bottleneck",
      text: '"Listing a new product takes 2 days because we have to wait for the support team to approve and upload our CSV."',
    },
    features: [
      {
        title: "Self-Serve Listings",
        desc: "A robust bulk-upload and manual entry system that gives sellers complete control over their catalog.",
        bullets: [
          "Real-time validation",
          "Bulk image processing",
          "Inventory sync",
        ],
        img: "https://via.placeholder.com/720x500",
      },
    ],
    impactOutcomes: {
      title: "Impact & Outcomes",
      metricsTable: [
        {
          metric: "Time-to-list",
          before: "48 Hours",
          after: "12 Minutes",
        },
        {
          metric: "Sellers Scaled",
          before: "10",
          after: "236",
        },
        {
          metric: "Support Tickets",
          before: "100% Manual",
          after: "64% Reduction",
        },
      ],
    },
    long: {
      tagline: "From 10 sellers to 236, and growing.",
      problem:
        "Sellers had no self-serve path to list, manage inventory, and process orders — every change funneled through ops, creating bottlenecks.",
      approach:
        "Designed a modular seller portal with bulk-upload, order-state machines, and a clarity-first dashboard. Ran weekly shadow sessions with sellers to refine workflows and kill dead clicks.",
      outcomes: [
        "Reduced time-to-list from 48h → 12 minutes",
        "Cut seller-ops support tickets by 64%",
        "Increased average order value by ₹850 through smarter cross-sell surfaces",
      ],
    },
  },
  {
    id: "phlebo",
    slug: "phlebotomist-app",
    aliases: ["phlebo"],
    title: "Phlebotomist App",
    subtitle: "Optimizing field operations for home diagnostics through a thumb-first native mobile experience.",
    desc: "Improving the efficiency of sample collection for Phlebotomists on home visits for Thyrocare customers.",
    img: "/assets/home/phlebo.png",
    thumbClass: "thumb-phlebo",
    tags: [
      { l: "B2B2C", c: "blue" },
      { l: "Native", c: "" },
      { l: "Ops", c: "" },
    ],
    outcomes: [
      { v: "45 → 25 min", l: "Avg TAT / visit" },
      { v: "₹1154 → ₹1732", l: "Revenue / user" },
      { v: "50% ↓", l: "Cancellations" },
    ],
    meta: [
      { label: "Client", value: "Thyrocare" },
      { label: "Role", value: "Lead Designer" },
      { label: "Platform", value: "Android Native" },
    ],
    problem:
      "Phlebotomists were struggling with a legacy app that was hard to use with one hand while managing medical kits. This led to long visit times, data entry errors, and high cancellation rates due to customer frustration.",
    quote: {
      label: "Field Reality",
      text: '"I have to use my phone while standing in a busy hallway. The buttons are too small and the app crashes when I lose signal."',
    },
    features: [
      {
        title: "Thumb-First Interface",
        desc: "Redesigned all core workflows to be accessible within the 'thumb zone' for easy one-handed use in the field.",
        bullets: [
          "Large touch targets",
          "Bottom-aligned actions",
          "High-contrast visuals",
        ],
        img: "https://via.placeholder.com/720x500",
      },
    ],
    impactOutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          icon: "⏱️",
          title: "45 → 25 min Visit Time",
          desc: "Drastically reduced the average turnaround time per home visit.",
        },
        {
          icon: "📉",
          title: "50% Lower Cancellations",
          desc: "Better state cues and customer script prompts improved the overall experience.",
        },
      ],
    },
    long: {
      tagline: "Designed for one hand, bright sunlight, and hurry.",
      problem:
        "Phlebotomists juggled paper forms, a clunky legacy app, and customer anxiety — leading to long turnarounds and high cancellations.",
      approach:
        "Shadowed 30+ field visits, redesigned the app around a single-thumb flow with offline-first sync, clear state cues, and script prompts for customer interaction.",
      outcomes: [
        "Average visit time down from 45 to 25 minutes",
        "Revenue per active user up 50% with better cross-test suggestions",
        "Cancellations halved",
      ],
    },
  },
  {
    id: "thyro",
    slug: "tc-diagnostics",
    aliases: ["thyro", "thyrocare-diagnostics"],
    title: "Thyrocare Diagnostics Portal",
    subtitle: "Modernizing a 15-year-old legacy system while preserving user muscle memory and trust.",
    desc: "B2B diagnostics revamp led to increased adoption, revenue and reduction in cost.",
    img: "/assets/home/tc-diag.png",
    thumbClass: "thumb-thyro",
    tags: [
      { l: "Revamp", c: "amber" },
      { l: "Web app", c: "" },
      { l: "Ops Efficiency", c: "" },
    ],
    outcomes: [
      { v: "10 → 236", l: "Scaled Sellers" },
      { v: "8,960", l: "Orders / day" },
      { v: "₹850", l: "Increased AOV" },
    ],
    meta: [
      { label: "Client", value: "Thyrocare" },
      { label: "Role", value: "Lead Designer" },
      { label: "Type", value: "B2B SaaS" },
    ],
    problem:
      'Franchisees were using a portal built over a decade ago. It was cluttered, slow, and non-responsive. Operators had developed "tribal workarounds" and resisted any change that threatened their existing habits.',
    quote: {
      label: "User Habit",
      text: '"I can navigate the old portal with my eyes closed. If you move the \'Print Report\' button, I won\'t be able to work."',
    },
    features: [
      {
        title: "Intelligent Information Architecture",
        desc: "Rebuilt the IA to group related tasks while keeping core actions exactly where users expected them to be.",
        bullets: [
          "Consolidated reporting",
          "Real-time order status",
          "Simplified financial reconciliation",
        ],
        img: "https://via.placeholder.com/720x500",
      },
    ],
    impactOutcomes: {
      title: "Impact & Outcomes",
      items: [
        {
          icon: "🚀",
          title: "86% Adoption in 6 Weeks",
          desc: "High user acceptance rate despite the drastic visual overhaul.",
        },
        {
          icon: "💰",
          title: "22% Lower Cost-per-report",
          desc: "Improved efficiencies in data entry and processing reduced operational costs.",
        },
      ],
    },
    long: {
      tagline: "A 15-year-old portal, made modern — without breaking habits.",
      problem:
        "A decade-old franchise portal was showing its age. Franchisees resisted new flows; operators leaned on printouts and tribal workarounds.",
      approach:
        "Co-designed with 12 franchisee partners across tiers. Preserved the muscle memory of core flows while rebuilding the IA, filters, and reporting.",
      outcomes: [
        "Adoption of new reporting workflow: 86% in 6 weeks",
        "Cost-per-report down by 22%",
        "Support tickets for 'where is X' questions reduced by 71%",
      ],
    },
  },
];

export function getAllProjects(): ProjectDetail[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return PROJECTS.find(
    (p) => p.slug === slug || (p.aliases && p.aliases.includes(slug))
  );
}


export interface ProjectTag {
  l: string;
  c?: string;
}

export interface ProjectOutcomeMetric {
  v: string;
  l: string;
}

export interface ProjectFeature {
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  imgLeft?: boolean;
}

export interface ProjectImpactItem {
  icon: string;
  title: string;
  desc: string;
}

export interface MetricTableRow {
  metric: string;
  before: string;
  after: string;
}

export interface ProjectDetail {
  slug: string;
  aliases?: string[];
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  thumbClass: string;
  tags: ProjectTag[];
  outcomes: ProjectOutcomeMetric[];
  meta: {
    label: string;
    value: string;
  }[];
  problem: string;
  quote: {
    label: string;
    text: string;
  };
  featuresIntro?: {
    title: string;
    desc: string;
  };
  features: ProjectFeature[];
  impactOutcomes?: {
    title: string;
    intro?: string;
    items?: ProjectImpactItem[];
    metricsTable?: MetricTableRow[];
  };
  long?: {
    tagline: string;
    problem: string;
    approach: string;
    outcomes: string[];
  };
}

export interface LeadershipItem {
  icon?: "alignment" | "process" | "mentorship" | "scale";
  img?: string;
  t: string;
  d: string;
}

export interface TestimonialItem {
  q: string;
  n: string;
  r: string;
  i: string;
  avatar?: string;
}

export interface ExperimentItem {
  title: string;
  desc: string;
  img: string;
  linkText: string;
  linkHref: string;
}

export interface VisualSketchItem {
  title: string;
  img: string;
}

export interface BrandLogo {
  name: string;
  src: string;
}

export interface SocialLink {
  name: string;
  href: string;
  platform: "linkedin" | "twitter" | "instagram";
  ariaLabel: string;
}

export interface ArticleMedia {
  src: string;
  caption?: string;
  alt?: string;
  isGif?: boolean;
}

export interface ArticleVideo {
  src: string;
  caption?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  isEmbed?: boolean;
}

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  quote?: string;
  bullets?: string[];
  image?: ArticleMedia;
  video?: ArticleVideo;
  callout?: {
    type?: "insight" | "tip" | "takeaway";
    text: string;
  };
}

export interface WritingArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  status: "published" | "coming_soon";
  featured?: boolean;
  coverImage?: string;
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  sections?: ArticleSection[];
}



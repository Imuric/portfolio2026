import type { Metadata } from "next";
import {
  Target,
  Scale,
  Sparkles,
  PenTool,
  Rocket,
  Brain,
  Layout,
  Users,
  Code2,
  Image as ImageIcon,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  BeyondSlider,
  SafeImage,
  LogosMarquee,
  SectionHead,
  InstagramIcon,
} from "@/components";
import { SOCIAL_LINKS, PROCESS_STEPS, TOOLKIT_CATEGORIES } from "@/data";

const PROCESS_ICONS = {
  target: Target,
  scale: Scale,
  sparkles: Sparkles,
  penTool: PenTool,
  rocket: Rocket,
} as const;

const TOOLKIT_ICONS = {
  brain: Brain,
  layout: Layout,
  users: Users,
  code: Code2,
  image: ImageIcon,
} as const;

export const metadata: Metadata = {
  title: "About — Prathamesh Patil",
  description:
    "Design leader at the intersection of strategy and craft. Learn more about my background, process, and interests.",
};

export default function AboutPage() {
  const instagramUrl =
    SOCIAL_LINKS.find((s) => s.platform === "instagram")?.href ??
    "https://www.instagram.com/";
  return (
    <>
      <section className="about-hero reveal-on-scroll">
        <div className="container">
          <div className="row about-row align-start">
            <div className="col-md-5">
              <div className="about-photo">
                <SafeImage
                  src="/assets/home/hero-portrait.png"
                  alt="Prathamesh Patil"
                  fallbackSrc="https://via.placeholder.com/400x533"
                />
              </div>
            </div>
            <div className="col-md-7">
              <p className="eyebrow">Pune, India</p>
              <h1 className="page-title">
                Strategic product designer{" "}
                <span className="accent-underline">bridging</span> strategy, UX, and technology.
              </h1>
              <div className="about-body">
                <p>
                  A Strategic Product Designer and systems thinker who architects scalable, developer-friendly design solutions. My unique background combining an <strong>M.Des in Human-Computer Interaction</strong> with a <strong>B.Tech in Computer Science and Engineering</strong> allows me to act as the critical bridge between executive-level strategy, user advocacy (UX), and developer experience (DX). I specialize in owning the design for complex, multi-tenant B2B and Fintech platforms, from foundational research to C-level stakeholder presentations.
                </p>
              </div>

              <div className="toolkit">
                <p className="tk-label">Core Expertise</p>
                <div className="tk-row">
                  <span className="tk">Interaction Design</span>
                  <span className="tk">Design Systems (Atomic Design)</span>
                  <span className="tk">Wireframing</span>
                  <span className="tk">Prototyping</span>
                  <span className="tk">Information Architecture</span>
                  <span className="tk">Agile Methodologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LOGOS (marquee) ───────── */}
      <LogosMarquee className="reveal-on-scroll" />

      {/* ───────── DESIGN PROCESS ───────── */}
      <section className="section process-section reveal-on-scroll">
        <div className="container">
          <SectionHead
            eyebrow="Methodology"
            title="Design Process"
            subtitle="A structured yet agile 5-step framework — moving from ambiguous problem spaces to validated, production-ready interfaces."
          />

          <div className="process-flow-grid">
            {PROCESS_STEPS.map((step) => {
              const IconComponent =
                PROCESS_ICONS[step.icon as keyof typeof PROCESS_ICONS] ?? Target;
              return (
                <div key={step.title} className="process-flow-card">
                  <div className="process-card-header">
                    <div className="process-card-icon-wrap" aria-hidden="true">
                      <IconComponent size={20} strokeWidth={2.2} />
                    </div>
                    <span className="process-card-step-num">{step.stepNumber}</span>
                  </div>

                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.description}</p>

                  {step.deliverables && (
                    <div className="process-card-deliverables">
                      {step.deliverables.map((item) => (
                        <span key={item} className="process-card-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── TOOLS I USE ───────── */}
      <section className="section toolkit-section reveal-on-scroll">
        <div className="container">
          <SectionHead
            eyebrow="Ecosystem & Stack"
            title="Tools I Use"
            subtitle="The daily drivers, prototyping environments, and design system frameworks I rely on to ship high-impact digital products."
          />

          <div className="tools-grid">
            {TOOLKIT_CATEGORIES.map((cat) => {
              const CatIcon =
                TOOLKIT_ICONS[cat.icon as keyof typeof TOOLKIT_ICONS] ?? Wrench;
              return (
                <div key={cat.category} className="tools-category-card">
                  <div className="tools-category-header">
                    <div className="tools-category-icon" aria-hidden="true">
                      <CatIcon size={18} strokeWidth={2} />
                    </div>
                    <div className="tools-category-info">
                      <h3 className="tools-category-title">{cat.category}</h3>
                      <span className="tools-category-count">
                        {cat.tools.length} {cat.tools.length === 1 ? "tool" : "tools"}
                      </span>
                    </div>
                  </div>

                  <div className="tools-pills-wrap">
                    {cat.tools.map((tool) => (
                      <span key={tool} className="tools-pill">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── BEYOND WORK ───────── */}
      <section className="beyond-section reveal-on-scroll">
        <div className="container">
          <div className="beyond-intro">
            <h2 className="section-title">Beyond Work</h2>
            <p className="beyond-text">
              When I&apos;m not designing, I&apos;m usually traveling,
              discovering new food spots, or trying different cuisines. I enjoy
              playing cricket, badminton, and table tennis — and I&apos;m always
              up for a good movie night, at home or in theatres.
            </p>
          </div>

          <BeyondSlider />

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <InstagramIcon size={20} strokeWidth={2} />
            Follow on Instagram
          </a>
        </div>
      </section>
    </>
  );
}



import type { Metadata } from "next";
import { EXPERIMENTS, VISUAL_SKETCHES } from "@/data/experiments";
import { ArrowUpRight } from "lucide-react";

import SafeImage from "@/components/SafeImage";

export const metadata: Metadata = {
  title: "Experiments — Prathamesh Patil",
  description:
    "A collection of explorations in vibe-coding, UI experiments, and personal sketches.",
};

export default function ExperimentsPage() {
  return (
    <>
      <section className="exp-section reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Playground</p>
            <h1 className="section-title">Experiments &amp; Side Projects</h1>
            <p className="section-sub">
              A collection of explorations in vibe-coding, UI experiments, and
              personal sketches.
            </p>
          </header>

          <div className="exp-list">
            {EXPERIMENTS.map((exp, idx) => {
              const isExternal = exp.linkHref.startsWith("http");
              return (
                <article key={idx} className="exp-card">
                  <a
                    href={exp.linkHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="exp-thumb"
                  >
                    <SafeImage
                      src={exp.img}
                      alt={exp.title}
                      loading="lazy"
                      fallbackSrc="https://via.placeholder.com/600x340/181D27/FFFFFF?text=Relaysis.com"
                    />
                  </a>
                  <div className="exp-body">
                    <h3>
                      <a
                        href={exp.linkHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {exp.title}
                      </a>
                    </h3>
                    <p>{exp.desc}</p>
                    <a
                      href={exp.linkHref}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="exp-live-btn"
                    >
                      {exp.linkText}
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">Visual Sketches</h2>
            <p className="section-sub">
              Playing with forms, colors, and layouts outside of commercial
              constraints.
            </p>
          </header>
          <div className="image-grid">
            {VISUAL_SKETCHES.map((sketch, idx) => (
              <div key={idx} className="image-card">
                <SafeImage
                  src={sketch.img}
                  alt={sketch.title}
                  loading="lazy"
                  fallbackSrc="https://via.placeholder.com/300x380/E9EAEB/181D27?text=Sketch"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

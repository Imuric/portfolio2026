import type { Metadata } from "next";
import { EXPERIMENTS, VISUAL_SKETCHES } from "@/data/experiments";
import { ArrowRight } from "lucide-react";

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
            {EXPERIMENTS.map((exp, idx) => (
              <article key={idx} className="exp-card">
                <div className="exp-thumb">
                  <img src={exp.img} alt={exp.title} />
                </div>
                <div className="exp-body">
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <a
                    href={exp.linkHref}
                    className="exp-live-btn"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    {exp.linkText}{" "}
                    <span className="title-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
                      <ArrowRight size={16} strokeWidth={2} />
                    </span>
                  </a>
                </div>
              </article>
            ))}
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
                <img src={sketch.img} alt={sketch.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


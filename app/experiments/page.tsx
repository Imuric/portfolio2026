import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { EXPERIMENTS } from "@/data";
import { SafeImage, SectionHead, VisualSlider } from "@/components";

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
          <SectionHead
            as="h1"
            eyebrow="Playground"
            title="Experiments & Side Projects"
            subtitle="A collection of explorations in vibe-coding, UI experiments, and personal sketches."
          />

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
          <SectionHead
            title="Visual Designs"
            subtitle="Playing with forms, colors, and layouts outside of commercial constraints."
          />
          <VisualSlider />
        </div>
      </section>
    </>
  );
}

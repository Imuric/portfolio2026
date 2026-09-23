import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import SafeImage from "@/components/SafeImage";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  const params: { slug: string }[] = [];

  projects.forEach((p) => {
    params.push({ slug: p.slug });
    if (p.aliases) {
      p.aliases.forEach((alias) => params.push({ slug: alias }));
    }
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Prathamesh Patil`,
    description: project.subtitle || project.desc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className={`cs-hero ${project.thumbClass}`}>
        <div className="container">
          <Link
            href="/#work"
            className="cs-back"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ArrowLeft size={16} strokeWidth={2} /> Back to Projects
          </Link>
          <div className="cs-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className={`tag ${tag.c || ""}`}>
                {tag.l}
              </span>
            ))}
          </div>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-subtitle">{project.subtitle}</p>

          <div className="cs-meta-row">
            {project.meta.map((item, idx) => (
              <div key={idx} style={{ display: "contents" }}>
                {idx > 0 && <div className="cs-meta-sep"></div>}
                <div className="cs-meta-item">
                  <span className="cs-meta-label">{item.label}</span>
                  <span className="cs-meta-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVER IMAGE ── */}
      <section className="cs-hero-img reveal-on-scroll">
        <div className="container">
          <SafeImage
            src={project.img}
            alt={`${project.title} Cover`}
            className="cs-cover-img"
            fallbackSrc="https://via.placeholder.com/1140x600"
          />
        </div>
      </section>

      {/* ── PROBLEM / INSIGHT ── */}
      <section className="cs-section reveal-on-scroll">
        <div className="container">
          <div className="cs-two-col">
            <div>
              <h2 className="cs-col-heading">The Problem</h2>
              <p className="cs-body">{project.problem}</p>
            </div>
            {project.quote && (
              <div className="cs-quote-card">
                <span className="cs-quote-label">{project.quote.label}</span>
                <p className="cs-quote-text">{project.quote.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURES / SOLUTION ── */}
      {project.features && project.features.length > 0 && (
        <section className="cs-features-wrap">
          <div className="container">
            {project.featuresIntro && (
              <header className="cs-section cs-features-intro reveal-on-scroll">
                <h2 className="cs-h2">{project.featuresIntro.title}</h2>
                <p className="cs-body muted">{project.featuresIntro.desc}</p>
              </header>
            )}

            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className={`cs-feature ${feat.imgLeft ? "img-left" : ""} reveal-on-scroll`}
              >
                <div>
                  <h3 className="cs-feat-title">{feat.title}</h3>
                  <p className="cs-feat-desc">{feat.desc}</p>
                  <ul className="cs-feat-bullets">
                    {feat.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="cs-feat-img">
                  <SafeImage
                    src={feat.img}
                    alt={feat.title}
                    fallbackSrc="https://via.placeholder.com/720x500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── OUTCOMES / IMPACT ── */}
      {project.impactOutcomes && (
        <section className="cs-section reveal-on-scroll">
          <div className="container">
            <h2 className="cs-h2">{project.impactOutcomes.title}</h2>
            {project.impactOutcomes.intro && (
              <p className="cs-outcome-intro">
                {project.impactOutcomes.intro}
              </p>
            )}

            {/* Metric Items Grid */}
            {project.impactOutcomes.items && (
              <div className="cs-outcome-items">
                {project.impactOutcomes.items.map((outcome, idx) => (
                  <div key={idx} className="cs-outcome-item">
                    <div className="cs-outcome-icon">{outcome.icon}</div>
                    <div>
                      <h4 className="cs-outcome-title">{outcome.title}</h4>
                      <p className="cs-outcome-desc">{outcome.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Metrics Table (e.g. OTC Seller Portal) */}
            {project.impactOutcomes.metricsTable && (
              <div className="cs-metrics-wrap">
                <table className="cs-metrics-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Before</th>
                      <th>After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.impactOutcomes.metricsTable.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.metric}</td>
                        <td>{row.before}</td>
                        <td>{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}


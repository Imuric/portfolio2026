import { Users, Layers, Compass, Rocket } from "lucide-react";
import { PROJECTS, LEADERS, TESTIMONIALS } from "@/data";
import {
  ProjectCard,
  SafeImage,
  SocialLinks,
  LogosMarquee,
  SectionHead,
  SkillsMarquee,
} from "@/components";

const LEADER_ICONS = {
  alignment: Users,
  process: Layers,
  mentorship: Compass,
  scale: Rocket,
} as const;

export default function HomePage() {
  const SHOW_PROJECTS = false;

  // Dynamically distribute all testimonials across 3 columns so none are excluded
  const columnCount = 3;
  const testimonialCols = Array.from({ length: columnCount }, () => [] as typeof TESTIMONIALS);
  TESTIMONIALS.forEach((testimonial, index) => {
    testimonialCols[index % columnCount].push(testimonial);
  });

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row align-center">
            <div className="col-md-7 hero-copy">
              <p className="eyebrow">Pune, India</p>
              <h1 className="hero-title">
                Hello, I&apos;m <span className="accent-underline">Prathamesh</span>
              </h1>
              <p className="hero-lede">
                Product Designer | M.Des HCI | B.Tech CSE | Fintech & B2B Specialist | User-Centric Design Advocate
              </p>
              <div className="reach-row">
                <span className="muted">Reach out</span>
                <SocialLinks className="socials" />
              </div>
            </div>
            <div className="col-md-5 hero-visual">
              <div className="photo-card">
                <div className="photo-bg"></div>
                <SafeImage
                  src="/assets/home/hero-portrait.png"
                  alt="Portrait of Prathamesh Patil"
                  className="photo"
                  fallbackSrc="https://via.placeholder.com/400x533"
                />
                <div className="avail-chip">
                  <span className="dot"></span> Available for work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LOGOS (marquee) ───────── */}
      <LogosMarquee />

      {/* ───────── SELECTED WORK ───────── */}
      <section className="section work" id="work">
        <div className="container">
          <SectionHead
            title="Selected Work"
            subtitle="A selection of work across 0→1 builds and scaled systems, solving complex problems with measurable impact."
          />

          {/* 
            Projects are preserved in code for future use. 
            Toggle SHOW_PROJECTS to true to re-enable the case studies list.
          */}
          {SHOW_PROJECTS ? (
            <div className="work-list" id="workList">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div
              className="updating-soon-card"
              style={{
                background: "var(--bg-soft)",
                border: "1px dashed var(--line-2)",
                borderRadius: "var(--radius)",
                padding: "56px 24px",
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255, 168, 97, 0.15)",
                  color: "var(--accent-2)",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                <span
                  className="dot"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "currentColor",
                  }}
                ></span>
                In Development
              </div>
              <h3
                style={{
                  fontFamily: "var(--head-font)",
                  fontSize: "26px",
                  fontWeight: "700",
                  margin: "0 0 10px",
                  color: "var(--ink)",
                }}
              >
                Updating Soon
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  margin: "0 auto",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  maxWidth: "480px",
                }}
              >
                Case studies and in-depth design breakdowns are currently being updated.
                Check back soon for the latest work!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───────── LEADERSHIP ───────── */}
      <section className="section leadership" id="leadership">
        <div className="container">
          <SectionHead
            title="Leadership & Impact"
            subtitle="How I drive clarity, scale design systems, and elevate teams while staying close to the craft."
          />
          <div className="row leader-grid align-items-start" id="leaderGrid" style={{ columnGap: 0 }}>
            {LEADERS.map((leader, index) => {
              const IconComponent = leader.icon ? LEADER_ICONS[leader.icon] : null;
              return (
                <div key={index} className="col-md-6">
                  <div className="leader-card h-100">
                    <div className="leader-ic" style={{ color: "var(--accent)" }}>
                      {IconComponent ? (
                        <IconComponent size={40} strokeWidth={1.8} />
                      ) : (
                        <SafeImage
                          src={leader.img}
                          alt=""
                          fallbackSrc="https://via.placeholder.com/48"
                        />
                      )}
                    </div>
                    <div className="leader-body">
                      <h3>{leader.t}</h3>
                      <p>{leader.d}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <SectionHead
            title="Testimonials"
            subtitle="What colleagues and partners say about working with me across teams and projects."
          />
          <div className="testi-grid" id="testiGrid">
            {testimonialCols.map((col, colIdx) => (
              <div key={colIdx} className="testi-col">
                <div
                  className="testi-track"
                  style={{
                    ["--dur" as string]: `${Math.max(16, col.length * (8 + colIdx * 1.5))}s`,
                  }}
                >
                  {[0, 1].map((iter) => (
                    <div key={iter} style={{ display: "contents" }}>
                      {col.map((t, tIdx) => (
                        <article key={`${iter}-${colIdx}-${tIdx}`} className="testi">
                          <p className="testi-quote">&ldquo;{t.q}&rdquo;</p>
                          <div className="testi-author">
                            <div className="testi-avatar">
                              <SafeImage
                                src={t.avatar}
                                alt={t.n}
                                fallbackText={t.i}
                              />
                            </div>
                            <div>
                              <p className="testi-name">{t.n}</p>
                              <p className="testi-role">{t.r}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MARQUEE ───────── */}
      <SkillsMarquee />
    </>
  );
}


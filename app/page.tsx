import { PROJECTS } from "@/data/projects";
import { LEADERS } from "@/data/leadership";
import { TESTIMONIALS } from "@/data/testimonials";
import ProjectCard from "@/components/ProjectCard";
import SafeImage from "@/components/SafeImage";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/SocialIcons";

export default function HomePage() {
  const testimonialCols = [
    TESTIMONIALS.slice(0, 2),
    TESTIMONIALS.slice(2, 4),
    TESTIMONIALS.slice(4, 6),
  ];

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row align-center">
            <div className="col-md-7 hero-copy">
              <p className="eyebrow">UI UX Designer · Pune, India</p>
              <h1 className="hero-title">
                Hello, I&apos;m <span className="accent-underline">Prathamesh</span>
              </h1>
              <p className="hero-lede">
                A multidisciplinary <strong>UI/UX Designer</strong> with a background in Computer Science and an M.Des in Human-Computer Interaction, passionate about crafting intuitive and engaging digital experiences.
              </p>
              <div className="reach-row">
                <span className="muted">Reach out</span>
                <div className="socials">
                  <a
                    href="https://www.linkedin.com/in/deepenvora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-ic"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="https://x.com/deepenv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="social-ic"
                  >
                    <TwitterIcon size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/deepenv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-ic"
                  >
                    <InstagramIcon size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 hero-visual">
              <div className="photo-card">
                <div className="photo-bg"></div>
                <img
                  src="/assets/home/hero-portrait.png"
                  alt="Portrait of Prathamesh Patil"
                  className="photo"
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
      <section className="logos">
        <div className="container">
          <p className="logos-title">I have worked with teams at</p>
        </div>
        <div className="logo-marquee" aria-hidden="true">
          <div className="logo-marquee-track">
            {/* set 1 */}
            <img src="/assets/home/logos/logo-pharmeasy.png" alt="PharmEasy" className="logo-img" />
            <img src="/assets/home/logos/logo-spire.png" alt="Spire" className="logo-img" />
            <img src="/assets/home/logos/logo-flipkart.png" alt="Flipkart" className="logo-img" />
            <img src="/assets/home/logos/logo-rediff.png" alt="Rediff" className="logo-img" />
            <img src="/assets/home/logos/logo-sony.png" alt="Sony" className="logo-img" />
            <img src="/assets/home/logos/logo-toi.png" alt="Times of India" className="logo-img" />
            <img src="/assets/home/logos/logo-stayzilla.png" alt="Stayzilla" className="logo-img" />
            {/* set 2 (duplicate for seamless loop) */}
            <img src="/assets/home/logos/logo-pharmeasy.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-spire.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-flipkart.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-rediff.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-sony.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-toi.png" alt="" className="logo-img" aria-hidden="true" />
            <img src="/assets/home/logos/logo-stayzilla.png" alt="" className="logo-img" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ───────── SELECTED WORK ───────── */}
      <section className="section work" id="work">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-sub">
              A selection of work across 0→1 builds and scaled systems, solving complex problems with measurable impact.
            </p>
          </header>

          {/* 
            Projects are preserved in code for future use. 
            Toggle SHOW_PROJECTS to true to re-enable the case studies list.
          */}
          {(() => {
            const SHOW_PROJECTS = false;
            return SHOW_PROJECTS ? (
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
            );
          })()}
        </div>
      </section>

      {/* ───────── LEADERSHIP ───────── */}
      <section className="section leadership" id="leadership">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">Leadership &amp; Impact</h2>
            <p className="section-sub">
              How I drive clarity, scale design systems, and elevate teams while staying close to the craft.
            </p>
          </header>
          <div className="row leader-grid align-items-start" id="leaderGrid" style={{ columnGap: 0 }}>
            {LEADERS.map((leader, index) => (
              <div key={index} className="col-md-6">
                <div className="leader-card h-100">
                  <div className="leader-ic">
                    <SafeImage
                      src={leader.img}
                      alt=""
                      fallbackSrc="https://via.placeholder.com/48"
                    />
                  </div>
                  <div className="leader-body">
                    <h3>{leader.t}</h3>
                    <p>{leader.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-sub">
              What colleagues and partners say about working with me across teams and projects.
            </p>
          </header>
          <div className="testi-grid" id="testiGrid">
            {testimonialCols.map((col, colIdx) => (
              <div key={colIdx} className="testi-col">
                <div
                  className="testi-track"
                  style={{ ["--dur" as string]: `${15 + colIdx * 2}s` }}
                >
                  {[0, 1].map((iter) => (
                    <div key={iter} style={{ display: "contents" }}>
                      {col.map((t, tIdx) => (
                        <article key={`${iter}-${tIdx}`} className="testi">
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
      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Ideation</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>User Research</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>User Flow</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Wireframe</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Prototype</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Design Systems</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Ideation</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>User Research</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>User Flow</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Wireframe</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Prototype</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
          <span>Design Systems</span><img src="/assets/home/star.png" width="56" height="56" alt="star" />
        </div>
      </section>
    </>
  );
}


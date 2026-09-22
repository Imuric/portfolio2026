import type { Metadata } from "next";
import BeyondSlider from "@/components/BeyondSlider";
import SafeImage from "@/components/SafeImage";
import { Search, Lightbulb, Palette } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About — Prathamesh Patil",
  description:
    "Design leader at the intersection of strategy and craft. Learn more about my background, process, and interests.",
};

export default function AboutPage() {
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
              <p className="eyebrow">UI UX Designer · Pune, India</p>
              <h1 className="page-title">
                Design leader at the intersection of{" "}
                <span className="accent-underline">strategy</span> &amp; craft.
              </h1>
              <div className="about-body">
                <p>
                  I am a UI/UX Designer with a strong foundation in
                  Human-Computer Interaction (M.Des) and Computer Science
                  (B.Tech). My journey spans roles at Roxiler Systems, AdroApex
                  Multiservices, and Exontric System, where I have focused on
                  solving complex problems and delivering user-centric solutions.
                </p>
                <p>
                  I believe design is a strategic tool—it should drive clarity,
                  efficiency, and measurable business impact. I&apos;m
                  passionate about continuous learning, user research, and
                  crafting digital experiences that matter.
                </p>
              </div>

              <div className="toolkit">
                <p className="tk-label">Core Expertise</p>
                <div className="tk-row">
                  <span className="tk">User Research</span>
                  <span className="tk">Wireframing</span>
                  <span className="tk">Prototyping</span>
                  <span className="tk">Usability Testing</span>
                  <span className="tk">Information Architecture</span>
                  <span className="tk">Interaction Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LOGOS (marquee) ───────── */}
      <section className="logos reveal-on-scroll">
        <div className="container">
          <p className="logos-title">I have worked with teams at</p>
        </div>
        <div className="logo-marquee" aria-hidden="true">
          <div className="logo-marquee-track">
            {/* set 1 */}
            <img
              src="/assets/home/logos/logo-pharmeasy.png"
              alt="PharmEasy"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-spire.png"
              alt="Spire"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-flipkart.png"
              alt="Flipkart"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-rediff.png"
              alt="Rediff"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-sony.png"
              alt="Sony"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-toi.png"
              alt="Times of India"
              className="logo-img"
            />
            <img
              src="/assets/home/logos/logo-stayzilla.png"
              alt="Stayzilla"
              className="logo-img"
            />
            {/* set 2 (duplicate for seamless loop) */}
            <img
              src="/assets/home/logos/logo-pharmeasy.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-spire.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-flipkart.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-rediff.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-sony.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-toi.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
            <img
              src="/assets/home/logos/logo-stayzilla.png"
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ───────── PROCESS ───────── */}
      <section className="section process-section reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <h2 className="section-title">My Design Process</h2>
            <p className="section-sub">
              A structured approach to navigating ambiguity and delivering
              high-quality design.
            </p>
          </header>
          <div className="process-card">
            <div className="row process-row">
              <div className="col-md-4">
                <div className="process-list">
                  <div>
                    <div className="proc-ic" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Search size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Discover</strong>
                      <p>
                        Deep diving into user needs and business constraints to
                        find the &ldquo;why&rdquo;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="process-list">
                  <div>
                    <div className="proc-ic" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Lightbulb size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Define</strong>
                      <p>
                        Synthesizing insights into actionable strategy and clear
                        problem statements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="process-list">
                  <div>
                    <div className="proc-ic" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Palette size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <strong>Deliver</strong>
                      <p>
                        Iterative design and testing to ensure the final
                        solution is polished and effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            href="https://www.instagram.com/"
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



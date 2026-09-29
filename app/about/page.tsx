import type { Metadata } from "next";
import { Search, Lightbulb, Palette } from "lucide-react";
import {
  BeyondSlider,
  SafeImage,
  LogosMarquee,
  SectionHead,
  InstagramIcon,
} from "@/components";
import { SOCIAL_LINKS } from "@/data";

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
              <p className="eyebrow">Product Designer · Pune, India</p>
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
      <LogosMarquee className="reveal-on-scroll" />

      {/* ───────── PROCESS ───────── */}
      <section className="section process-section reveal-on-scroll">
        <div className="container">
          <SectionHead
            title="My Design Process"
            subtitle="A structured approach to navigating ambiguity and delivering high-quality design."
          />
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



import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Sparkles } from "lucide-react";
import { getAllArticles } from "@/data";
import { SectionHead, SafeImage } from "@/components";

export const metadata: Metadata = {
  title: "Writings & Thoughts — Prathamesh Patil",
  description:
    "Essays, mental models, and reflections from building digital products across 0→1 and scale.",
};

export default function WritingsPage() {
  const articles = getAllArticles();

  return (
    <section className="writings-section reveal-on-scroll">
      <div className="container">
        <SectionHead
          as="h1"
          eyebrow="Writings & Thoughts"
          title="Thoughts on design, product & craft."
          subtitle="A collection of essays, practical frameworks, and design principles learned from shipping digital products."
        />

        {/* Coming Soon Notice Banner */}
        <div
          style={{
            maxWidth: "840px",
            margin: "32px auto 0",
            padding: "20px 24px",
            borderRadius: "16px",
            background: "var(--bg-soft)",
            border: "1px dashed var(--line-2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255, 168, 97, 0.15)",
                color: "var(--accent-2)",
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              <Sparkles size={18} strokeWidth={2} />
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "var(--ink)",
                }}
              >
                In Development · Essays Coming Soon
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "var(--muted)",
                }}
              >
                Sample templates below demonstrate the reading layout and data structure.
              </p>
            </div>
          </div>
          <span
            className="writing-badge"
            style={{ margin: 0 }}
          >
            ● Preview Mode
          </span>
        </div>

        {/* Articles List (Medium Style) */}
        <div className="writings-grid">
          {articles.map((article) => {
            const isFeatured = article.featured;
            const author = article.author ?? {
              name: "Prathamesh Patil",
              role: "UI/UX Designer",
              avatar: "/assets/home/hero-portrait.png",
            };

            return (
              <Link
                key={article.id}
                href={`/writings/${article.slug}`}
                className={`writing-card ${isFeatured ? "is-featured" : ""}`}
              >
                <div className="writing-meta">
                  <div className="writing-author-mini">
                    <SafeImage
                      src={author.avatar}
                      alt={author.name}
                      className="writing-author-img"
                      fallbackText="P"
                    />
                    <span>{author.name}</span>
                  </div>
                  <span>·</span>
                  <span>{article.publishedAt}</span>
                  <span>·</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={12} strokeWidth={2} />
                    {article.readTime}
                  </span>
                  {article.status === "coming_soon" && (
                    <span className="writing-badge">Coming Soon</span>
                  )}
                  {article.status === "published" && (
                    <span className="writing-badge published">Published</span>
                  )}
                </div>

                <h2 className="writing-title">{article.title}</h2>
                <p className="writing-sub">{article.subtitle}</p>

                <div className="writing-footer">
                  <div className="writing-tags">
                    {article.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="writing-action">
                    Read Article
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

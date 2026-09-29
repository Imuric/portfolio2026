import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { getAllArticles, getArticleBySlug } from "@/data";
import { SafeImage, SocialLinks } from "@/components";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found — Prathamesh Patil" };

  return {
    title: `${article.title} — Prathamesh Patil`,
    description: article.subtitle,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = article.author ?? {
    name: "Prathamesh Patil",
    role: "UI/UX Designer",
    avatar: "/assets/home/hero-portrait.png",
  };

  return (
    <article className="article-container reveal-on-scroll">
      {/* ── Back Navigation ── */}
      <Link href="/writings" className="article-back">
        <ArrowLeft size={16} strokeWidth={2} />
        Back to all writings
      </Link>

      {/* ── Article Header (Medium Style) ── */}
      <header className="article-header">
        <div className="article-tag-list">
          {article.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="article-headline">{article.title}</h1>
        <p className="article-deck">{article.subtitle}</p>

        {/* ── Author Byline ── */}
        <div className="article-byline">
          <div className="article-author-info">
            <SafeImage
              src={author.avatar}
              alt={author.name}
              className="article-author-avatar"
              fallbackText="P"
            />
            <div>
              <p className="article-author-name">{author.name}</p>
              <p className="article-author-meta">
                {article.publishedAt} · {article.readTime}
              </p>
            </div>
          </div>

          <div>
            {article.status === "coming_soon" ? (
              <span className="writing-badge">Coming Soon</span>
            ) : (
              <span className="writing-badge published">Published</span>
            )}
          </div>
        </div>
      </header>

      {/* ── Coming Soon Banner ── */}
      {article.status === "coming_soon" && (
        <div className="article-notice-card">
          <div className="article-notice-icon">
            <Sparkles size={22} strokeWidth={2} />
          </div>
          <div>
            <h4 className="article-notice-title">Draft Preview · Coming Soon</h4>
            <p className="article-notice-text">
              This article is currently being written and refined. The content below is a preview of the outline and core insights.
            </p>
          </div>
        </div>
      )}

      {/* ── Cover Image (Hero Banner) ── */}
      {article.coverImage && (
        <figure className="article-figure article-cover-figure">
          <div className="article-media-wrapper">
            <SafeImage
              src={article.coverImage}
              alt={article.title}
              className="article-media-img"
              fallbackSrc="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </figure>
      )}

      {/* ── Article Body (Medium Reading Layout) ── */}
      <div className="article-prose">
        {article.sections?.map((section, sIdx) => (
          <section key={sIdx} style={{ marginBottom: "32px" }}>
            {section.heading && <h2>{section.heading}</h2>}

            {section.paragraphs?.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}

            {section.quote && (
              <blockquote className="article-quote-box">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
            )}

            {section.callout && (
              <div className="article-callout-box">
                <div className="article-callout-label">
                  <Sparkles size={14} />
                  <span>Key {section.callout.type || "Takeaway"}</span>
                </div>
                <p className="article-callout-text">{section.callout.text}</p>
              </div>
            )}

            {section.bullets && (
              <ul className="article-bullets">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.image && (
              <figure className="article-figure">
                <div className="article-media-wrapper">
                  <SafeImage
                    src={section.image.src}
                    alt={section.image.alt || ""}
                    className="article-media-img"
                    fallbackSrc="https://via.placeholder.com/740x400"
                  />
                  {section.image.isGif && (
                    <span className="article-gif-badge">GIF</span>
                  )}
                </div>
                {section.image.caption && (
                  <figcaption className="article-caption">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {section.video && (
              <figure className="article-figure">
                <div className="article-video-wrapper">
                  {section.video.isEmbed ? (
                    <iframe
                      src={section.video.src}
                      className="article-embed-iframe"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={section.video.caption || "Embedded video"}
                    />
                  ) : (
                    <video
                      src={section.video.src}
                      poster={section.video.poster}
                      controls={section.video.controls !== false}
                      autoPlay={section.video.autoPlay}
                      loop={section.video.loop}
                      muted={section.video.autoPlay ? true : undefined}
                      playsInline
                      className="article-video-player"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                {section.video.caption && (
                  <figcaption className="article-caption">
                    {section.video.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>

      {/* ── Author Bio Footer Card ── */}
      <footer className="article-author-card">
        <SafeImage
          src="/assets/home/hero-portrait.png"
          alt="Prathamesh Patil"
          className="article-author-card-avatar"
          fallbackText="P"
        />
        <div style={{ flex: 1 }}>
          <h3 className="article-author-card-name">Written by Prathamesh Patil</h3>
          <p className="article-author-card-bio">
            UI/UX Designer with a background in Computer Science and an M.Des in Human-Computer Interaction, passionate about crafting intuitive digital experiences and scalable systems.
          </p>
          <SocialLinks className="socials" />
        </div>
      </footer>
    </article>
  );
}

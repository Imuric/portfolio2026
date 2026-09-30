"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Clock, BookOpen, RotateCcw } from "lucide-react";
import { WritingArticle } from "@/data";
import { SafeImage } from "@/components";

interface WritingsFeedProps {
  articles: WritingArticle[];
}

const PRIMARY_FILTERS = [
  "All",
  "Design Systems",
  "Design Engineering",
  "Product Strategy",
  "UX Research",
  "Accessibility",
  "B2B SaaS",
  "Career Growth",
];

export default function WritingsFeed({ articles }: WritingsFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Dynamically collect all available tags across all articles
  const availableTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags?.forEach((t) => set.add(t)));
    const primaries = PRIMARY_FILTERS.filter((f) => f === "All" || set.has(f));
    const others = Array.from(set)
      .filter((t) => !PRIMARY_FILTERS.includes(t))
      .sort((a, b) => a.localeCompare(b));
    return [...primaries, ...others];
  }, [articles]);

  // Filter articles by search term and selected category/tag
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesTag =
        selectedTag === "All" ||
        article.tags?.some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        );

      if (!matchesTag) return false;
      if (!q) return true;

      const titleMatch = article.title.toLowerCase().includes(q);
      const subtitleMatch = article.subtitle?.toLowerCase().includes(q);
      const tagsMatch = article.tags?.some((t) => t.toLowerCase().includes(q));

      return titleMatch || subtitleMatch || tagsMatch;
    });
  }, [articles, searchQuery, selectedTag]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedTag("All");
  };

  const isFiltering = searchQuery.trim() !== "" || selectedTag !== "All";

  return (
    <div className="writings-feed">
      {/* ── Search Bar & Filter Controls ── */}
      <div className="writings-controls">
        {/* Search Input Box */}
        <div className="writings-search-box">
          <Search size={18} className="writings-search-icon" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search essays by title, topic, or keyword (e.g., variables, React, handoff)..."
            className="writings-search-input"
            aria-label="Search writings"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="writings-search-clear"
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="writings-filter-tabs" role="tablist" aria-label="Filter essays by topic">
          {availableTags.slice(0, 10).map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`writings-filter-pill ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Status / Count Row */}
        <div className="writings-status-row">
          <span>
            {isFiltering ? (
              <>
                Showing <strong>{filteredArticles.length}</strong>{" "}
                {filteredArticles.length === 1 ? "essay" : "essays"}{" "}
                {selectedTag !== "All" && (
                  <>
                    in <em>{selectedTag}</em>
                  </>
                )}
                {searchQuery && (
                  <>
                    {" "}
                    matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                  </>
                )}
              </>
            ) : (
              <>
                All <strong>{articles.length}</strong> essays &amp; mental models
              </>
            )}
          </span>

          {isFiltering && (
            <button
              type="button"
              onClick={resetFilters}
              className="writings-reset-btn"
            >
              <RotateCcw size={13} />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* ── Empty State ── */}
      {filteredArticles.length === 0 && (
        <div className="writings-empty-state">
          <div className="writings-empty-icon">
            <BookOpen size={32} strokeWidth={1.8} />
          </div>
          <h3 className="writings-empty-title">No essays found</h3>
          <p className="writings-empty-desc">
            We couldn&apos;t find any writings matching{" "}
            {searchQuery ? `"${searchQuery}"` : selectedTag}. Try searching with
            different keywords or reset the filters.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="btn-outline"
            style={{ marginTop: "12px" }}
          >
            <RotateCcw size={15} />
            Reset all filters
          </button>
        </div>
      )}

      {/* ── Articles Grid (Balanced 3-Column Cards) ── */}
      {filteredArticles.length > 0 && (
        <div className="writings-grid">
          {filteredArticles.map((article) => {
            const isFeatured = article.featured;
            const author = article.author ?? {
              name: "Prathamesh Patil",
              role: "Product Designer",
              avatar: "/assets/home/hero-portrait.png",
            };

            const primaryTag = article.tags?.[0];

            return (
              <Link
                key={article.id}
                href={`/writings/${article.slug}`}
                className={`writing-grid-card ${isFeatured ? "is-featured" : ""}`}
              >
                {/* Top Cover Thumbnail */}
                {article.coverImage && (
                  <div className="writing-grid-thumb">
                    <SafeImage
                      src={article.coverImage}
                      alt={article.title}
                      className="writing-grid-thumb-img"
                      fallbackSrc="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=480&q=80"
                    />
                    {article.status === "coming_soon" && (
                      <span className="writing-thumb-badge">Coming Soon</span>
                    )}
                  </div>
                )}

                <div className="writing-grid-content">
                  {/* Meta: primary tag & read time */}
                  <div className="writing-grid-meta">
                    {primaryTag && (
                      <span
                        className="writing-grid-tag"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedTag(primaryTag);
                        }}
                      >
                        {primaryTag}
                      </span>
                    )}
                    <span className="writing-grid-dot">·</span>
                    <span className="writing-grid-time">
                      <Clock size={12} strokeWidth={2} />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Truncated Title (2 Lines) */}
                  <h2 className="writing-grid-title" title={article.title}>
                    {article.title}
                  </h2>

                  {/* Truncated Subtitle (2 Lines) */}
                  <p className="writing-grid-sub" title={article.subtitle}>
                    {article.subtitle}
                  </p>

                  {/* Footer: Author & Read CTA */}
                  <div className="writing-grid-footer">
                    <div className="writing-author-mini">
                      <SafeImage
                        src={author.avatar}
                        alt={author.name}
                        className="writing-author-img"
                        fallbackText="P"
                      />
                      <span>{author.name}</span>
                    </div>

                    <span className="writing-grid-action">
                      Read
                      <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

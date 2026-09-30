import type { Metadata } from "next";
import { getAllArticles } from "@/data";
import { SectionHead, WritingsFeed } from "@/components";

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

        <WritingsFeed articles={articles} />
      </div>
    </section>
  );
}


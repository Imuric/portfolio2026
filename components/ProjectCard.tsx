"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectDetail } from "@/data/types";
import SafeImage from "./SafeImage";

interface ProjectCardProps {
  project: ProjectDetail;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const url = `/projects/${project.slug}`;
  const isReverse = index % 2 !== 0;

  return (
    <article className={`work-card ${isReverse ? "reverse" : ""}`}>
      <Link href={url} className={`work-thumb ${project.thumbClass}`}>
        <SafeImage
          src={project.img}
          alt={project.title}
          loading="lazy"
          fallbackSrc="https://via.placeholder.com/600x400"
        />
      </Link>
      <div className="work-body">
        <h3 className="work-title">
          <Link
            href={url}
            className="work-title-link"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            {project.title}{" "}
            <span className="title-arrow" style={{ display: "inline-flex", alignItems: "center" }}>
              <ArrowRight size={18} strokeWidth={2} />
            </span>
          </Link>
        </h3>
        <p className="work-desc">{project.desc}</p>
        <div className="tag-row">
          {project.tags.map((t, idx) => (
            <span key={idx} className={`tag ${t.c || ""}`}>
              {t.l}
            </span>
          ))}
        </div>
        <p className="outcomes-label">Key outcomes</p>
        <div className="outcomes">
          {project.outcomes.map((o, idx) => (
            <div key={idx} className="outcome">
              <span className="outcome-val">{o.v}</span>
              <span className="outcome-lbl">{o.l}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

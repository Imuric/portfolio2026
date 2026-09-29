import React from "react";

interface SectionHeadProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export default function SectionHead({
  title,
  subtitle,
  eyebrow,
  as: HeadingTag = "h2",
  className = "",
}: SectionHeadProps) {
  const headerClass = `section-head ${className}`.trim();

  return (
    <header className={headerClass}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <HeadingTag className="section-title">{title}</HeadingTag>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </header>
  );
}

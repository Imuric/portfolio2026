import React from "react";

interface SkillsMarqueeProps {
  skills?: string[];
  className?: string;
}

export const DEFAULT_SKILLS = [
  "Ideation",
  "User Research",
  "User Flow",
  "Wireframe",
  "Prototype",
  "Design Systems",
];

export default function SkillsMarquee({
  skills = DEFAULT_SKILLS,
  className = "",
}: SkillsMarqueeProps) {
  const sectionClass = `marquee ${className}`.trim();
  // Repeat skills within each group so each group is wide enough for any screen
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className={sectionClass} aria-hidden="true">
      <div className="marquee-track">
        {/* Primary Group */}
        <div className="marquee-group">
          {repeatedSkills.map((skill, index) => (
            <React.Fragment key={`skill-g1-${index}`}>
              <span>{skill}</span>
              <img
                src="/assets/home/star.png"
                width="56"
                height="56"
                alt="star"
              />
            </React.Fragment>
          ))}
        </div>
        {/* Duplicate Group for seamless infinite loop */}
        <div className="marquee-group" aria-hidden="true">
          {repeatedSkills.map((skill, index) => (
            <React.Fragment key={`skill-g2-${index}`}>
              <span>{skill}</span>
              <img
                src="/assets/home/star.png"
                width="56"
                height="56"
                alt="star"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

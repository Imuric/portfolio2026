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

  return (
    <section className={sectionClass} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((setIndex) => (
          <React.Fragment key={setIndex}>
            {skills.map((skill, index) => (
              <React.Fragment key={`${setIndex}-${index}`}>
                <span>{skill}</span>
                <img
                  src="/assets/home/star.png"
                  width="56"
                  height="56"
                  alt="star"
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

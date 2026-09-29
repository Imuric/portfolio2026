import { BRAND_LOGOS, type BrandLogo } from "@/data/brands";

interface LogosMarqueeProps {
  title?: string;
  className?: string;
  logos?: BrandLogo[];
}

export default function LogosMarquee({
  title = "I have worked with brands",
  className = "",
  logos = BRAND_LOGOS,
}: LogosMarqueeProps) {
  const sectionClass = `logos ${className}`.trim();
  // Repeat logos within each group so each group is wide enough to cover any high-res or ultra-wide viewport
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className={sectionClass}>
      <div className="container">
        <p className="logos-title">{title}</p>
      </div>
      <div className="logo-marquee" aria-hidden="true">
        <div className="logo-marquee-track">
          {/* Primary Group */}
          <div className="logo-marquee-group">
            {repeatedLogos.map((logo, idx) => (
              <img
                key={`logo-g1-${idx}`}
                src={logo.src}
                alt={logo.name}
                className="logo-img"
              />
            ))}
          </div>
          {/* Duplicate Group for seamless infinite loop */}
          <div className="logo-marquee-group" aria-hidden="true">
            {repeatedLogos.map((logo, idx) => (
              <img
                key={`logo-g2-${idx}`}
                src={logo.src}
                alt=""
                className="logo-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

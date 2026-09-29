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

  return (
    <section className={sectionClass}>
      <div className="container">
        <p className="logos-title">{title}</p>
      </div>
      <div className="logo-marquee" aria-hidden="true">
        <div className="logo-marquee-track">
          {/* set 1 */}
          {logos.map((logo, idx) => (
            <img
              key={`logo-1-${idx}`}
              src={logo.src}
              alt={logo.name}
              className="logo-img"
            />
          ))}
          {/* set 2 (duplicate for seamless loop) */}
          {logos.map((logo, idx) => (
            <img
              key={`logo-2-${idx}`}
              src={logo.src}
              alt=""
              className="logo-img"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { BRAND_LOGOS, type BrandLogo } from "@/data/brands";

interface LogosMarqueeProps {
  title?: string;
  className?: string;
  logos?: BrandLogo[];
  speed?: number; // Optional duration override in seconds
}

export default function LogosMarquee({
  title = "I have worked with brands",
  className = "",
  logos = BRAND_LOGOS,
  speed,
}: LogosMarqueeProps) {
  const sectionClass = `logos ${className}`.trim();

  // Ensure each group is wide enough for ultra-wide / 4K screens (target ~3,500px+ per group)
  const repeatCount = Math.max(2, Math.ceil(24 / Math.max(1, logos.length)));
  const repeatedLogos = Array.from({ length: repeatCount }, () => logos).flat();

  // Smooth, calm reading speed (~45px to 55px per second)
  const duration = speed ?? Math.max(75, Math.round(repeatedLogos.length * 3.2));

  return (
    <section className={sectionClass}>
      <div className="container">
        <p className="logos-title">{title}</p>
      </div>
      <div
        className="logo-marquee"
        aria-hidden="true"
        style={{ ["--logo-speed" as string]: `${duration}s` }}
      >
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

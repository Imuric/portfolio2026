import { SOCIAL_LINKS, type SocialLink } from "@/data/socials";
import { LinkedinIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";

interface SocialLinksProps {
  className?: string;
  links?: SocialLink[];
  iconSize?: number;
}

export default function SocialLinks({
  className = "socials",
  links = SOCIAL_LINKS,
  iconSize = 18,
}: SocialLinksProps) {
  const renderIcon = (platform: SocialLink["platform"]) => {
    switch (platform) {
      case "linkedin":
        return <LinkedinIcon size={iconSize} />;
      case "twitter":
        return <TwitterIcon size={iconSize} />;
      case "instagram":
        return <InstagramIcon size={iconSize} strokeWidth={2} />;
    }
  };

  return (
    <div className={className}>
      {links.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="social-ic"
        >
          {renderIcon(social.platform)}
        </a>
      ))}
    </div>
  );
}

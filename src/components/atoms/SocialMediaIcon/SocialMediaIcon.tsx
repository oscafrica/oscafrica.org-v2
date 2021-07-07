import React from "react";
import { SocialLink } from "../../../types";

interface SocialMediaIconProps {
  social: SocialLink;
  className?: string;
  href: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ social, href, className }) => {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer noopener">
      <img alt={social} className="transform duration-200 hover:scale-110" src={`/images/icons/social/footer/${social}.svg`} />
    </a>
  );
};

export type { SocialMediaIconProps };

export default SocialMediaIcon;

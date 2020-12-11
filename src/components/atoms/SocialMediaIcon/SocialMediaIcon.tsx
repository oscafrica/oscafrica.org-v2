import React from "react";

interface SocialMediaIconProps {
  social: "facebook" | "discord" | "twitter" | "github" | "instagram";
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ social }) => {
  return (
    <a href="#" target="_blank" rel="noreferrer noopener">
      <img src={`/images/icons/social/footer/${social}.svg`} />
    </a>
  );
};

export type { SocialMediaIconProps };

export default SocialMediaIcon;

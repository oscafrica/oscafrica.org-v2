import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { SocialLink } from "../../../types";
import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon";
import styled from "styled-components";

interface IFooterLink {
  href: string;
  title: string;
}

interface ISocialLink {
  href: string;
  title: SocialLink;
}

const footerLinks: IFooterLink[] = [
  {
    title: "JOIN US",
    href: "https://discord.gg/pRJgjH9SwR"
  },
  {
    title: "DONATE",
    href: "https://opencollective.com/osca"
  },
  {
    title: "DOCS & HELP",
    href: "https://docs.oscafrica.org/"
  },
  {
    title: "LEAD A CHAPTER",
    href: "https://bit.ly/osca-leads-application"
  },
  {
    title: "CONTACT US",
    href: "mailto:info@oscafrica.org"
  },
  {
    title: "Code of conduct",
    href: "https://docs.oscafrica.org/about/community-code-of-conduct"
  }
];

const socialLinks: ISocialLink[] = [
  {
    href: "https://discord.gg/pRJgjH9SwR",
    title: "discord"
  },
  {
    href: "https://twitter.com/oscafrica",
    title: "twitter"
  },
  {
    href: "https://github.com/oscafrica",
    title: "github"
  },
  {
    href: "https://linkedin.com/company/oscafrica",
    title: "linkedin"
  },
  {
    href: "https://www.instagram.com/oscafrica/",
    title: "instagram"
  },
  {
    href: "https://www.facebook.com/opensourcecommunityafrica/",
    title: "facebook"
  },
  {
    href: "https://www.facebook.com/opensourcecommunityafrica/",
    title: "youtube"
  }
];

const Footer = () => {
  return (
    <header className="bg-secondary px-10 lg:px-32 pt-24 pb-16">
      <div className="flex w-full justify-between items-center">
        <Logo type="svg" tune="dark" />

        <nav className="lg:flex-grow">
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {footerLinks.map(({ title, href }) => (
              <li className="lg:ml-12 pb-12 text-center lg:text-left lg:pb-0" key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopenner"
                  className="text-captions uppercase hover:text-primary border-transparent border-b hover:border-primary font-medium tracking-widest text-white"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <StyledNewsLetterLink
          href="https://blog.oscafrica.org/newsletter"
          target="_blank"
          rel="noreferrer noopenner"
          className="bg-primary"
        >
          Subscribe to Newsletter
        </StyledNewsLetterLink>
      </div>

      <ul className="flex items-center mt-16 ">
        {socialLinks.map(({ title, href }) => (
          <li className="lg:mr-12" key={title}>
            <SocialMediaIcon href={href} social={title} />
          </li>
        ))}
      </ul>

      <p className="w-full mt-12 text-white opacity-25 text-base">Copyright &copy; Open Source Community Africa 2021</p>
    </header>
  );
};

const StyledNewsLetterLink = styled.a`
  padding: 14px 24px;
  background-color: #f2994a;
  font-weight: 700;
`;

export default Footer;

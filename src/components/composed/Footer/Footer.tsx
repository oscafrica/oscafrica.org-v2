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
    href: "https://oscafrica.org/discord"
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
    href: "https://oscafrica.org/discord",
    title: "discord"
  },
  {
    href: "https://x.com/osca_hq",
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
    href: "https://instagram.com/oscafrica",
    title: "instagram"
  },
  {
    href: "https://facebook.com/opensourcecommunityafrica",
    title: "facebook"
  },
  {
    href: "https://youtube.com/c/OpenSourceCommunityAfrica",
    title: "youtube"
  }
];

const Footer = () => {
  return (
    <header className="bg-secondary px-10 lg:px-32 pt-24 pb-16">
      <div className="flex flex-col md:flex-row w-full flex-wrap justify-between items-center">
        <Logo type="svg" tune="dark" className="mr-12" />

        <nav className="lg:flex-grow mt-16 mb-4 md:mt-0 md:mb-0 w-full lg:w-auto order-1 lg:order-1 md:order-2">
          <ul className="flex flex-col flex-wrap md:mt-20 lg:mt-0 md:flex-row lg:flex-row lg:items-center">
            {footerLinks.map(({ title, href }) => (
              <li className="md:mr-12 pb-12 text-center lg:text-left lg:pb-0" key={title}>
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
          className="bg-primary hover:bg-black hover:text-white order-2 lg:order-2 md:order-1"
        >
          Subscribe to Newsletter
        </StyledNewsLetterLink>
      </div>

      <ul className="flex flex-wrap md:flex-nowrap w-full justify-center md:justify-start items-center mt-16 ">
        {socialLinks.map(({ title, href }) => (
          <li className=" ml-6 mr-6 mb-12 md:mb-0 md:mr-12 md:ml-0 lg:mr-12" key={title}>
            <SocialMediaIcon href={href} social={title} />
          </li>
        ))}
      </ul>

      <p className="w-full mt-8 md:mt-12 text-center md:text-left text-black font-bold opacity-80 text-base">
        This site is powered by{" "}
        <a href="https://netlify.com?ref=oscafrica" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
        &nbsp;| Copyright &copy; Open Source Community Africa 2025.
      </p>
    </header>
  );
};

const StyledNewsLetterLink = styled.a`
  padding: 14px 24px;
  background-color: #f2994a;
  font-weight: 700;
`;

export default Footer;

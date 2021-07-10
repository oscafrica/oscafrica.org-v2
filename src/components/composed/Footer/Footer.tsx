import React from "react";
import Logo from "../../atoms/Logo/Logo";
import { SocialLink } from "../../../types";
import SocialMediaIcon from "../../atoms/SocialMediaIcon/SocialMediaIcon";

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
    title: "HOST AN EVENT",
    href: "https://opencollective.com/osca/contribute"
  },
  {
    title: "CONTACT US",
    href: "mailto:info@oscafrica.org"
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
    <header className="bg-secondary px-10 lg:px-32 pt-44 pb-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <Logo type="svg" tune="dark" />

        <nav className="lg:flex-grow py-20 lg:py-0">
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {footerLinks.map(({ title, href }) => (
              <li className="lg:ml-12 pb-12 text-center lg:text-left lg:pb-0" key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopenner"
                  className="text-captions hover:text-primary border-transparent border-b hover:border-primary font-medium tracking-widest text-white"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center w-full lg:w-auto justify-between">
          {socialLinks.map(({ title, href }) => (
            <li className="lg:ml-12" key={title}>
              <SocialMediaIcon
                href={href}
                social={title}
              />
            </li>
          ))}
        </ul>
      </div>

      <p className="w-full pt-20 text-white opacity-25 text-base">Copyright &copy; Open Source Community Africa 2020</p>
    </header>
  );
};

export default Footer;

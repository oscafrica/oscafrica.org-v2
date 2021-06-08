import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";

interface NavbarProps {
  tune?: "dark" | "light";
}

interface INavLink {
  href: string;
  title: string;
}

const navLinks: INavLink[] = [
  {
    title: "ABOUT US",
    href: "/about-us"
  },
  {
    title: "TEAM",
    href: "/team"
  },
  {
    title: "COMMUNITY",
    href: "/community"
  }
];

const NavBar: React.FC<NavbarProps> = ({ tune = "dark" }) => {
  const ifLightTune = tune === "light";

  return (
    <header
      className={classNames(
        "flex z-40 items-center justify-between lg:justify-start px-10 lg:px-32 py-8",
        ifLightTune ? "bg-transparent" : "bg-neutral-100"
      )}
    >
      <Logo type="svg" tune={tune} />

      <nav className="hidden lg:block">
        <ul className="flex items-center">
          {navLinks.map(({ title, href }) => (
            <li className="ml-12" key={title}>
              <Link href={href}>
                <a
                  className={classNames(
                    "text-captions hover:text-primary border-b border-transparent hover:border-primary font-medium tracking-widest",
                    ifLightTune ? " text-white" : " text-black"
                  )}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
          <li className="ml-12">
            <a
              href="https://blog.oscafrica.org/"
              target="_blank"
              rel="noreferrer noopenner"
              className={classNames(
                "text-captions font-medium hover:text-primary tracking-widest uppercase",
                ifLightTune ? " text-white" : " text-black"
              )}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <MobileMenu tune={tune} />
    </header>
  );
};

export type { NavbarProps };

export default NavBar;

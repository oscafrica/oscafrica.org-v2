import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";

interface NavbarProps {
  tune?: "dark" | "light";
}

interface INavLink {
  href: string;
  title: string;
}

const navLinks: INavLink[] = [
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
      className={classNames("flex z-50 items-center px-32 py-8", ifLightTune ? "bg-transparent" : "bg-neutral-100")}
    >
      <Logo type="svg" tune={tune} />

      <nav>
        <ul className="flex items-center">
          {navLinks.map(({ title, href }) => (
            <li className="ml-12" key={title}>
              <Link href={href}>
                <a
                  className={classNames(
                    "text-captions font-medium tracking-widest",
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
                "text-captions font-medium tracking-widest uppercase",
                ifLightTune ? " text-white" : " text-black"
              )}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export type { NavbarProps };

export default NavBar;

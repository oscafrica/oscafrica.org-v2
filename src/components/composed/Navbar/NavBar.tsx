import React from "react";
import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";

interface NavbarProps {
  tune: "dark" | "light";
}

interface INavLink {
  href: string;
  title: string;
}

const navLinks: INavLink[] = [
  {
    title: "TEAM",
    href: "#"
  },
  {
    title: "COMMUNITY",
    href: "#"
  },
  {
    title: "BLOG",
    href: "#"
  }
];

const NavBar: React.FC<NavbarProps> = () => {
  return (
    <header className="flex items-center px-32 py-8">
      <Logo type="svg" tune="dark" />

      <nav>
        <ul className="flex items-center">
          {navLinks.map(({ title, href }) => (
            <li className="ml-12" key={title}>
              <Link href={href}>
                <a className="text-captions font-medium tracking-widest text-black">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export type { NavbarProps };

export default NavBar;

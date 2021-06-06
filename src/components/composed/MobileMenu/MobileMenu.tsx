import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";
import Logo from "../../atoms/Logo/Logo";
import Link from "next/link";
import Icon from "../../atoms/Icon/Icon";

interface NavLinkInterface {
  title: string;
  href: string;
}

const navLinks: NavLinkInterface[] = [
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

export interface MobileMenuProps {
  tune?: "dark" | "light";
}

const MobileMenu: React.FC<MobileMenuProps> = ({ tune }) => {
  const ifLightTune = tune === "light";

  const [showHiddenDropdown, setShowHiddenDropdown] = useState(false);
  let timeOutId: number | any = 0;

  const onClickHandler = () => {
    setShowHiddenDropdown(!showHiddenDropdown);
  };

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setShowHiddenDropdown(false);
    }, 10);
  };

  const onFocusHandler = () => {
    clearTimeout(timeOutId);
  };

  return (
    <div className="lg:hidden" onBlur={onBlurHandler} onFocus={onFocusHandler}>
      <button className="flex items-center focus:outline-none" onClick={onClickHandler}>
        <img alt="collapse" src={`/images/icons/util/${ifLightTune ? "collapse-light" : "collapse"}.svg`} />
      </button>

      <HiddenDropDown
        className={classNames("bg-dark px-10 py-8", showHiddenDropdown ? "block" : "hidden")}
        style={{
          transform: showHiddenDropdown ? "scale(1)" : "scale(0)"
        }}
      >
        <div className=" flex justify-between">
          <Logo tune="dark" type="svg" />

          <button onClick={onClickHandler} className="focus:outline-none" name="close mobile menu">
            <Icon icon="close" width={20} />
          </button>
        </div>
        <ul className=" px-8 mt-24">
          {navLinks.map(({ title, href }) => (
            <li className="" key={title}>
              <Link href={href}>
                <a className="text-captions uppercase font-medium tracking-widest">{title}</a>
              </Link>
            </li>
          ))}
          <li className="">
            <a
              href="https://blog.oscafrica.org/"
              target="_blank"
              rel="noreferrer noopenner"
              className="text-captions uppercase font-medium tracking-widest"
            >
              Blog
            </a>
          </li>
        </ul>
      </HiddenDropDown>
    </div>
  );
};

const HiddenDropDown = styled.nav`
  position: absolute;
  top: 0rem;
  left: 0;
  transition: 0.2s all;
  transform-origin: 100% 0;
  min-width: 80vw;
  max-width: 80vw;
  transition: 0.2s all;
  height: 100vh;
  background-color: white;

  z-index: 10000;
  overflow: hidden;

  ul {
    list-style: none;
  }

  li,
  button {
    line-height: 24px;
    padding-bottom: 21px;
  }
`;

export default MobileMenu;

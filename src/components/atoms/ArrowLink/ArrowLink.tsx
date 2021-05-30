import Link from "next/link";
import classNames from "classnames";
import React from "react";
import styled from "styled-components";

interface ArrowLinkProps {
  href: string;
  colored?: boolean;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href, colored }) => {
  return (
    <Link href={href} passHref>
      <StyledLink className="inline-flex items-center pb-4  hover:border hover:border-b hover:border-white">
        <span
          className={classNames("mr-4 text-base font-medium inline-block text-white", colored ? "text-primary" : "text-white")}
        >
          {children}
        </span>
        <img
          alt="arrow-right"
          className="w-5 duration-200"
          src={colored ? "/images/icons/util/arrow-colored.svg" : "/images/icons/util/arrow-white.svg"}
        />
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  border-bottom: 1px solid transparent;
  &:hover {
    img {
      margin-left: 10px;
    }
  }
`;

export type { ArrowLinkProps };

export default ArrowLink;

import Link from "next/link";
import classNames from "classnames";
import React from "react";

interface ArrowLinkProps {
  href: string;
  colored?: boolean;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href, colored }) => {
  return (
    <Link href={href}>
      <a className="flex items-center">
        <span
          className={classNames("mr-4 font-medium inline-block text-white", colored ? "text-primary" : "text-white")}
        >
          {children}
        </span>
        <img
          alt="arrow-right"
          className="w-5"
          src={colored ? "/images/icons/util/arrow-colored.svg" : "/images/icons/util/arrow-white.svg"}
        />
      </a>
    </Link>
  );
};

export type { ArrowLinkProps };

export default ArrowLink;

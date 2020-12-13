import Link from "next/link";
import React from "react";

interface ArrowLinkProps {
  href: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className="flex items-center">
        <span className="mr-4 font-medium inline-block text-white">{children}</span>
        <img alt="arrow-right" className="w-5" src="/images/icons/util/right-arrow.svg" />
      </a>
    </Link>
  );
};

export type { ArrowLinkProps };

export default ArrowLink;

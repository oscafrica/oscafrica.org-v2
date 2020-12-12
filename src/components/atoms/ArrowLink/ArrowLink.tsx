import React from "react";

interface ArrowLinkProps {
  href: string;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="flex items-center">
      <span className="mr-4 font-medium inline-block text-white">{children}</span>
      <img alt="arrow-right" className="w-5" src="/images/icons/util/right-arrow.svg" />
    </a>
  );
};

export type { ArrowLinkProps };

export default ArrowLink;

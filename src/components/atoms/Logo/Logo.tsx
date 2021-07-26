import React from "react";
import Link from "next/link";

interface LogoProps {
  tune: "dark" | "light";
  type: "svg" | "png";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ tune, type, className }) => {
  return (
    <Link href="/" passHref>
      <a className={className}>
        <img alt="OSCA logo" src={`/images/logo/${tune}/osca.${type}`} />
      </a>
    </Link>
  );
};

export type { LogoProps };

export default Logo;

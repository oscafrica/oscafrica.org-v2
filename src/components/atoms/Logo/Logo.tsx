import React from "react";
import Link from "next/link";

interface LogoProps {
  tune: "dark" | "light";
  type: "svg" | "png";
}

const Logo: React.FC<LogoProps> = ({ tune, type }) => {
  return (
    <Link href="/">
      <a>
        <img src={`/images/logo/${tune}/osca.${type}`} />
      </a>
    </Link>
  );
};

export type { LogoProps };

export default Logo;

import React from "react";
import Link from "next/link";

interface LogoProps {
  tune: "dark" | "light";
  type: "svg" | "png";
}

const Logo: React.FC<LogoProps> = ({ tune, type }) => {
  return (
    <Link href="/">
      <img src={`/images/${tune}/osca.${type}`} />
    </Link>
  );
};

export type { LogoProps };

export default Logo;

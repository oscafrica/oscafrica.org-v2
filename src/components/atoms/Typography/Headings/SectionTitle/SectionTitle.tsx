import React from "react";
import styled from "styled-components";
import classNames from "classnames";

interface SectionTitleProps {
  color?: "black" | "white";
  fontSize?: "32" | "40" | "28";
  children: any;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, color = "black", fontSize = 24 }) => {
  const H2 = styled.h2`
    font-size: ${fontSize}px;
  `;

  return (
    <H2 className={classNames("font-bold tracking-widest font-ubuntu", `text-${color}`, className)}>{children}</H2>
  );
};

export type { SectionTitleProps };

export default SectionTitle;

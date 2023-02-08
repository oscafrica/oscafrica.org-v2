import React from "react";
import styled from "styled-components";
import classNames from "classnames";

type fontSize = "32" | "40" | "28";

interface SectionTitleProps {
  color?: "black" | "white";
  fontSize: fontSize;
  children: any;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, color = "black", fontSize = "28" }) => {
  return (
    <H2 fontSize={fontSize} className={classNames("font-bold tracking-widest font-ubuntu", `text-${color}`, className)}>
      {children}
    </H2>
  );
};

const H2 = styled.h2`
  font-size: ${({ fontSize }: { fontSize: fontSize }) => `${fontSize}px`};

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

SectionTitle.defaultProps = {
  color: "black",
  className: ""
};

export type { SectionTitleProps };

export default SectionTitle;

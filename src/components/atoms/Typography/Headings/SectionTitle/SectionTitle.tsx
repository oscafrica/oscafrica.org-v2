import React from "react";
import classNames from "classnames";

interface SectionTitleProps {
  color?: "black" | "white";
  children: any;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, color = "black" }: SectionTitleProps) => {
  return <h2 className={classNames("text-h5 font-bold tracking-widest", `text-${color}`, className)}>{children}</h2>;
};

export type { SectionTitleProps };

export default SectionTitle;

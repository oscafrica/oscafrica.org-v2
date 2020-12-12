import React from "react";
import classNames from "classnames";

interface SectionTitleProps {
  color?: "black" | "white";
  pageHeading?: boolean;
  children: any;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className, color = "black", pageHeading }) => {
  return (
    <h2
      className={classNames(
        "font-bold tracking-widest",
        pageHeading ? "text-h3" : "text-h5",
        `text-${color}`,
        className
      )}
    >
      {children}
    </h2>
  );
};

export type { SectionTitleProps };

export default SectionTitle;

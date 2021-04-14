import React from "react";
import SectionTitle from "../../atoms/Typography/Headings/SectionTitle/SectionTitle";

interface PageIntroProps {
  fontSize?: "40" | "32";
  heading: string;
  subHeading: string | HTMLElement;
  className?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ heading, subHeading, className, fontSize = "32" }) => {
  return (
    <div className={className}>
      <SectionTitle color="white" fontSize={fontSize}>
        {heading}
      </SectionTitle>
      <p className="text-white text-paragraph-2 whitespace-pre-wrap mt-8">{subHeading}</p>
    </div>
  );
};

export type { PageIntroProps };

export default PageIntro;

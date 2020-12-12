import React from "react";
import SectionTitle from "../../atoms/Typography/Headings/SectionTitle/SectionTitle";

interface PageIntroProps {
  heading: string;
  subHeading: string | HTMLElement;
  className?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ heading, subHeading, className }) => {
  return (
    <div className={className}>
      <SectionTitle color="white" pageHeading>
        {heading}
      </SectionTitle>
      <p className="text-white text-paragraph-2 whitespace-pre-wrap mt-8">{subHeading}</p>
    </div>
  );
};

export type { PageIntroProps };

export default PageIntro;

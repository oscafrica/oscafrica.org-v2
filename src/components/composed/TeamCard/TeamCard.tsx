import React from "react";
import classNames from "classnames";
import styled from "styled-components";

export interface TeamCardProps {
  image: string;
  name: string;
  twitter: string;
  className?: string;
}

const TeamCard = ({ image, name, className }: TeamCardProps) => {
  return (
    <TeamCardWrapper className={classNames("flex flex-col justify-center w-1/3", className)}>
      <div className="relative">
        <figure>
          <img className="team-image object-cover" src={image} alt={name} />
        </figure>
        <div className=" flex w-3/4 py-12 px-8 items-center bg-white absolute left-0 bottom-0">
          <p className="text-24 font-ubuntu font-bold mr-8">{name}</p>
            <img src="/images/icons/social/twitter-dark.svg" alt="Twitter Logo" />
        </div>
      </div>
    </TeamCardWrapper>
  );
};

const TeamCardWrapper = styled.article`
  .team-image {
    height: 613px;
  }
`;

TeamCard.defaultProps = {
  className: ""
};

export default TeamCard;

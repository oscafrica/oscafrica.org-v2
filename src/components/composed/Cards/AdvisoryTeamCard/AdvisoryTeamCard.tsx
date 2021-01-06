import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { IMember } from "../../../../interfaces/IMember.interface";

export interface AdvisoryTeamCardProps extends IMember {
  className?: string;
}

const CardImage = styled.figure`
  --height: 357px;

  height: var(--height);

  & > img {
    height: var(--height);
  }
`;

const AdvisoryTeamCard = ({ image, name, className }: AdvisoryTeamCardProps) => {
  return (
    <article className={classNames("flex flex-col justify-center p-5", className)}>
      <div className="w-full">
        <CardImage>
          <img className="object-cover w-full" src={image} alt={name} />
        </CardImage>
        <div className="w-full px-6 relative">
          <div className="bg-white rounded-lg -mt-24 w-full py-16 px-9">
            <h3 className="font-bold text-body font-ubuntu mb-6">{name}</h3>
            <p className="font-normal text-body text-gray-500 font-ubuntu w-2/3">Microsoft Open Source Organizer</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AdvisoryTeamCard;

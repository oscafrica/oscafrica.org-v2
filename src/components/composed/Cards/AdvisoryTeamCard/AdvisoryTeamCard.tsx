import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import { IAdvisoryMember } from "../../../../interfaces/IAdvisoryMember.interface";

export interface AdvisoryTeamCardProps extends IAdvisoryMember {
  className: string;
}

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
            <p className="font-normal text-body text-gray-400 font-ubuntu w-3/4">Microsoft Open Source Organizer</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const CardImage = styled.figure`
  --height: 357px;

  height: var(--height);

  & > img {
    height: var(--height);
  }
`;

export default AdvisoryTeamCard;

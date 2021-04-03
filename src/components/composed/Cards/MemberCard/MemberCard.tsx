import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import Icon from "../../../atoms/Icon/Icon";
import { IMember } from "../../../../interfaces/IMember.interface";

export interface MemberCardProps extends IMember {
  className?: string;
}

const CardImage = styled.figure`
  --height: 613px;

  height: var(--height);

  & > img {
    height: var(--height);
  }
`;

const MemberCard = ({ image, name, twitter, className }: MemberCardProps) => {
  return (
    <article className={classNames("flex flex-col justify-center p-5", className)}>
      <div className="w-full relative">
        <CardImage>
          <img className="object-cover w-full" src={image} alt={name} />
        </CardImage>
        <div className="flex items-center bg-white absolute bottom-0 left-0 pl-16 pr-20 py-12">
          <p className="font-bold text text-4xl font-ubuntu mr-9">{name}</p>
          <a href={twitter} target="_blank" rel="noreferrer noopener">
            <Icon icon="twitter" width={22} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default MemberCard;

import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import Icon from "../../../atoms/Icon/Icon";
import { IMember } from "../../../../interfaces/IMember.interface";
import Image from "next/image";

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

const StyledContainer = styled.article`
  .osca-img {
    filter: grayscale(100%);
  }

  &:hover {
    .osca-img {
      filter: none;
    }

    .osca-text {
      color: #f9aa4f;
    }
  }
`;

const MemberCard = ({ image, name, twitter, className }: MemberCardProps) => {
  return (
    <StyledContainer className={classNames("flex flex-col justify-center p-5", className)}>
      <div className="w-full relative">
        <CardImage className="bg-neutral-200 relative">
          <Image objectFit="cover" className="osca-img duration-200" layout="fill" src={image} alt={name} />
        </CardImage>
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center bg-white absolute bottom-0 left-0 pl-16 pr-20 py-12"
        >
          <p className="osca-text duration-200 font-bold text text-4xl font-ubuntu mr-9">{name}</p>
          <Icon icon="twitter" width={22} />
        </a>
      </div>
    </StyledContainer>
  );
};

export default MemberCard;

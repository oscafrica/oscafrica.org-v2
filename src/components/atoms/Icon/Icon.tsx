import React from "react";
import styled from "styled-components";

type Icon = "twitter" | 'close';

interface IconProps {
  icon: Icon;
  width: number;
  className?: string;
}

interface PodcastProps {
  width: number;
}

const IconImage = styled.img<PodcastProps>`
  width: ${({ width }) => width}px;
`;

const Icon: React.FC<IconProps> = ({ icon, width }) => {
  return <IconImage width={width} src={`/images/icons/util/${icon}.svg`} alt={icon} />;
};

export type { IconProps };

export default Icon;

import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import ArrowLink from "../../../atoms/ArrowLink/ArrowLink";

export interface EventCardProps {
  image: string;
  name: string;
  region: string;
  url: string;
  className?: string;
}

const EventCardWrapper = styled.article`
  --card-width: 411px;

  min-width: var(--card-width);
  max-width: var(--card-width);

  .event-image {
    width: var(--card-width);
    height: var(--card-width);
  }

  .event-region {
    margin-top: -25%;
  }
`;

const EventCard = ({ image, name, region, url, className }: EventCardProps) => {
  return (
    <EventCardWrapper className={classNames("flex flex-col justify-center", className)}>
      <div>
        <figure>
          <img className="event-image" src={image} alt={name} />
        </figure>
        <div className="px-10 relative event-region">
          <div className="px-12 pb-12 pt-16 bg-white rounded-lg ">
            <p className="font-ubuntu text-captions">{region}</p>
            <p className="mb-12 mt-9 font-bold font-lato">{name}</p>
            <ArrowLink href={url} colored>
              Know More
            </ArrowLink>
          </div>
        </div>
      </div>
    </EventCardWrapper>
  );
};

export default EventCard;

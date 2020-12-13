import React from "react";
import styled from "styled-components";
import ArrowLink from "../../atoms/ArrowLink/ArrowLink";

export interface EventCardProps {
  image: string;
  title: string;
  description: string;
  eventLink: string;
}

const EventCardWrapper = styled.article`
  --card-width: 411px;

  min-width: var(--card-width);
  max-width: var(--card-width);

  .event-image {
    width: var(--card-width);
    height: var(--card-width);
  }

  .event-description {
    margin-top: -25%;
  }
`;

const EventCard = ({ image, title, description, eventLink }: EventCardProps) => {
  return (
    <EventCardWrapper className="flex flex-col justify-center">
      <div>
        <figure>
          <img className="event-image" src={image} alt={title} />
        </figure>
        <div className="px-10 relative event-description">
          <div className="px-12 pb-12 pt-16 bg-white rounded-lg ">
            <h4 className="uppercase font-ubuntu">{title}</h4>
            <p className="mb-12 mt-9 font-bold">{description}</p>
            <ArrowLink href={eventLink} colored>
              Know More
            </ArrowLink>
          </div>
        </div>
      </div>
    </EventCardWrapper>
  );
};

export default EventCard;

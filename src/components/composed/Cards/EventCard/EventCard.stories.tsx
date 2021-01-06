import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import EventCard, { EventCardProps } from "./EventCard";

export default {
  title: "Composed/EventCard",
  component: EventCard
} as Meta;

const Template: Story<EventCardProps> = (args) => <EventCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: "/images/backgrounds/community/bg-2.png",
  region: "OSCA-LAGOS",
  name: "Open Source something something again for the year 2021",
  url: "https://opencollective.com/osca/events.json?limit=10&offset=0"
};

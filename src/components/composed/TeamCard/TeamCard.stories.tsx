import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TeamCard, { TeamCardProps } from "./TeamCard";

export default {
  title: "Composed/TeamCard",
  component: TeamCard
} as Meta;

const Template: Story<TeamCardProps> = (args) => <TeamCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: "/images/backgrounds/community/bg-2.png",
  name: "Samsong Goddy",
  twitter: "https://opencollective.com/osca/events.json?limit=10&offset=0"
};

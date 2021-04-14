import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import AdvisoryTeamCard, { AdvisoryTeamCardProps } from "./AdvisoryTeamCard";

export default {
  title: "Composed/AdvisoryTeamCard",
  component: AdvisoryTeamCard
} as Meta;

const Template: Story<AdvisoryTeamCardProps> = (args) => <AdvisoryTeamCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  role: "",
  name: "Samson Goddy",
  image: "https://source.unsplash.com/featured/?logo"
};

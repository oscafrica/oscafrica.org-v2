import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MemberCard, { MemberCardProps } from "./MemberCard";

export default {
  title: "Composed/MemberCard",
  component: MemberCard
} as Meta;

const Template: Story<MemberCardProps> = (args) => <MemberCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  twitter: "https://twitter.com/alabobriggs_",
  name: "Samson Goddy",
  image: "https://source.unsplash.com/featured/?logo"
};

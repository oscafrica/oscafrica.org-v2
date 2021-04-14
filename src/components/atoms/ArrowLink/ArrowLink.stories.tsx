import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ArrowLink, { ArrowLinkProps } from "./ArrowLink";

export default {
  title: "Atoms/Arrow Link",
  component: ArrowLink
} as Meta;

const Template: Story<ArrowLinkProps> = (args) => <ArrowLink {...args}>Check out our community</ArrowLink>;

export const Default = Template.bind({});

Default.args = {
  href: "#"
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Atoms/Logo",
  component: Logo
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args}>Who we are</Logo>;

export const Default = Template.bind({});

Default.args = {
  tune: "dark",
  type: "svg"
};

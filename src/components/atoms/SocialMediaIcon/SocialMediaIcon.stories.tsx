import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SocialMediaIcon, { SocialMediaIconProps } from "./SocialMediaIcon";

export default {
  title: "Atoms/Social Media Icon",
  component: SocialMediaIcon
} as Meta;

const Template: Story<SocialMediaIconProps> = (args) => <SocialMediaIcon {...args}>Who we are</SocialMediaIcon>;

export const Default = Template.bind({});

Default.args = {
  social: "facebook"
};

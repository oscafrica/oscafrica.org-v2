import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Get Referred</Button>;

export const Default = Template.bind({});

Default.args = {
  name: "default"
};

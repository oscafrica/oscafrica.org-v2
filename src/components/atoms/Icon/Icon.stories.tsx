import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Icon, { IconProps } from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "file",
  width: 24
};

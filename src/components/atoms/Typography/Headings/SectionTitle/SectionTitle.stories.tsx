import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Heading, { SectionTitleProps } from "./SectionTitle";

export default {
  title: "Atoms/Typography/Section Title",
  component: Heading
} as Meta;

const Template: Story<SectionTitleProps> = (args) => <Heading {...args}>This is a header component</Heading>;

export const Default = Template.bind({});
Default.args = {};

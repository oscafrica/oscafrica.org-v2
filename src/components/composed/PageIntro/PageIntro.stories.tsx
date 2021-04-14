import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PageIntro, { PageIntroProps } from "./PageIntro";

export default {
  title: "Composed/Navigation Bar",
  component: PageIntro
} as Meta;

const Template: Story<PageIntroProps> = (args) => <PageIntro {...args} />;

export const Default = Template.bind({});

Default.args = {
  heading: "The Next Billion Creators",
  subHeading: "A community of creative minds driving the Open Source"
};

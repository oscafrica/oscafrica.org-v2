import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NavBar, { NavbarProps } from "./NavBar";

export default {
  title: "Composed/Navigation Bar",
  component: NavBar
} as Meta;

const Template: Story<NavbarProps> = (args) => <NavBar {...args}>Who we are</NavBar>;

export const Default = Template.bind({});

Default.args = {
  tune: "dark",
  type: "svg"
};

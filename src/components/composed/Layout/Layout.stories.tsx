import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Layout from "./Layout";

export default {
  title: "Composed/Layout",
  component: Layout
} as Meta;

const Template: Story = () => <Layout>I am a layout</Layout>;

export const Default = Template.bind({});

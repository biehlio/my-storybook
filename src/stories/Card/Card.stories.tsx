import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card, { Props } from "./Card";

const meta: Meta<Props> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["sm", "lg"] },
    isClickable: { control: "boolean" },
    isDragable: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {};

export const Primary: Story = {
  args: { color: "primary" },
};

export const Secondary: Story = {
  args: { color: "secondary" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

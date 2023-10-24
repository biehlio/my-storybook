import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card, { Props } from "./Card";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SMALL_CARD,
  LARGE_CARD,
} from "../../constants";

const meta: Meta<Props> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: [PRIMARY_COLOR, SECONDARY_COLOR] },
    size: { control: "select", options: [SMALL_CARD, LARGE_CARD] },
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

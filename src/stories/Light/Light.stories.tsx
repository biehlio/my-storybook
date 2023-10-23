import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  title: "Light",
  component: Light,
  argTypes: {
    variant: { control: "select", options: ["red", "yellow", "green"] },
  },
};

export default meta;

type Story = StoryObj<typeof Light>;

export const Base: Story = {
  args: {},
};

export const Red: Story = {
  args: { variant: "red" },
};

export const Yellow: Story = {
  args: { variant: "yellow" },
};

export const green: Story = {
  args: { variant: "green" },
};

export const Grouped: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "2px solid black",
        borderRadius: 20,
        background: "gray",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};

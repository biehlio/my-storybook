import React from "react";
import type { Meta } from "@storybook/react";
import { options as cardOptions } from "./constants";
import Card, { CardProps } from "./Card";

const meta: Meta<typeof CardProps> = {
  title: "Card",
  component: ({
    children,
    color = "Primary",
    size,
    isClickable,
    isDragable,
  }: typeof CardProps) => (
    <Card
      color={color as string | undefined}
      size={size as string | undefined}
      isClickable={(isClickable as boolean) ?? false}
      isDragable={(isDragable as boolean) ?? false}
    >
      {String(children)}
    </Card>
  ),
  argTypes: {
    children: { control: "text" },
    color: { control: "select", options: cardOptions.colors },
    size: { control: "select", options: cardOptions.sizes },
    isClickable: { control: "boolean" },
    isDragable: { control: "boolean" },
  },
};

export default meta;

const CardTemplate: React.FC<{ items: (typeof CardProps)[] }> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <div style={{ width: "100%" }}>
        <p>Color {item.color}</p>
        <Card key={index} {...item} />
      </div>
    ))}
  </>
);

export const Colors = () => (
  <CardTemplate
    items={cardOptions.colors.map((color) => ({
      color,
      children: "",
      size: "",
      isClickable: false,
      isDragable: false,
    }))}
  />
);

export const Sizes = () => (
  <CardTemplate
    items={cardOptions.sizes.map((size) => ({
      size,
      children: "",
      color: "Primary",
      isClickable: false,
      isDragable: false,
    }))}
  />
);

const bools = [true, false];

export const Clickable = () => (
  <CardTemplate
    items={bools.map((isClickable) => ({
      isClickable,
      children: "",
      color: "Primary",
      size: "",
      isDragable: false,
    }))}
  />
);

export const Dragable = () => (
  <CardTemplate
    items={bools.map((isDragable) => ({
      isDragable,
      children: "",
      color: "Primary",
      size: "",
      isClickable: false,
    }))}
  />
);

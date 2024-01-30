import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Menu } from "../../components";
import "@design/icon/home";
import "@design/icon/menu";

const meta = {
  title: "Menu 排版",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: { control: "text", description: "Overwritten type" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      { label: "菜单一", key: "label1", icon: <is-home /> },
      {
        label: "菜单三",
        key: "label3",
        icon: <is-home />,
        children: [{ label: "子菜单一", key: "label4" }],
      },
    ],
  },
};

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
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const YMenu: Story = {
  args: {
    items: [
      { label: "菜单一", id: "label1", icon: <is-home /> },
      { label: "菜单二", id: "label2", icon: <is-home /> },
      {
        label: "菜单三",
        id: "label3",
        icon: <is-home />,
        children: [
          { label: "子菜单一", id: "label4" },
          { label: "子菜单二", id: "label5" },
          {
            label: "子菜单三",
            id: "label6",
            children: [{ label: "孙菜单", id: "label7" }],
          },
        ],
      },
    ],
  },
};

export const XMenu: Story = {
  args: {
    mode: "x",
    items: [
      { label: "菜单一", id: "label1", icon: <is-home /> },
      { label: "菜单二", id: "label2", icon: <is-home /> },
      {
        label: "菜单三",
        id: "label3",
        icon: <is-home />,
        children: [
          { label: "子菜单一", id: "label4" },
          { label: "子菜单二", id: "label5" },
          {
            label: "子菜单三",
            id: "label6",
            children: [{ label: "孙菜单", id: "label7" }],
          },
        ],
      },
    ],
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Menu } from "../../components";
import "@design/icon/home";
import "@design/icon/menu";

/**
 * 为页面和功能提供导航的菜单列表。
 */
const meta = {
  title: "Menu 导航菜单",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 垂直菜单，子菜单是弹出的形式。
 */
export const 垂直菜单: Story = {
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

/**
 * 水平的顶部导航菜单。
 */
export const 水平菜单: Story = {
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

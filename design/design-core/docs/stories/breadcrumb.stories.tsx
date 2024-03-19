import { BreadCrumb } from "../../components";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "@design/icon/right";

/**
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 */
const meta = {
  title: "Breadcrumb 面包屑",
  component: BreadCrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 垂直菜单，子菜单是弹出的形式。
 */
export const 基本使用: Story = {
  args: {
    separator: <is-right />,
    items: [
      { title: "首页", path: "/" },
      { title: <a>列表页</a> },
      { title: "详情页" },
    ],
  },
};

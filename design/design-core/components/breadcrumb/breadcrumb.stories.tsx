import { Breadcrumb } from "./";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "@design/icon/right";

/**
 * 显示当前页面在系统层级结构中的位置，并能向上返回。
 */
const meta = {
  title: "Breadcrumb 面包屑",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 垂直菜单，子菜单是弹出的形式。
 */
export const 基本使用 = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Core Design</Breadcrumb.Item>
        <Breadcrumb.Item>Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
        <Breadcrumb.Item>Default</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

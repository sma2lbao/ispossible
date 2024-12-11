import React from "react";
import { Popover } from "./popover";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。
 */
const meta = {
  title: "Popover 气泡卡片",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。
 */
export const 基本用法: Story = {
  args: {
    content: () => "文案详细解释详细解释详细解释",
    children: <span>文案</span>,
  },
};

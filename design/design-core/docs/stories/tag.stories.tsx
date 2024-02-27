import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tag } from "../../components";
import "@design/icon/home";

/**
 * 进行标记和分类的小标签。
 */
const meta = {
  title: "Tag 标签",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本标签的用法
 */
export const 有边框: Story = {
  args: {
    children: "标签",
    bordered: true,
    icon: <is-home />,
  },
};

/**
 * 无边框模式。
 */
export const 无边框: Story = {
  args: {
    children: "标签",
    bordered: false,
    icon: <is-home />,
  },
};

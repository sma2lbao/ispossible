import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Watermark } from "../../components";

const meta = {
  title: "Watermark 水印",
  component: Watermark,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div style={{ height: 200 }}>Primary</div>,
    content: "水印",
  },
};

export const 简单使用: Story = {
  args: {
    children: <div style={{ height: 200 }}>测试内容区域</div>,
    content: "水印",
  },
};

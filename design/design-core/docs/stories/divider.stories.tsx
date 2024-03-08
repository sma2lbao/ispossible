import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Divider, Space } from "../../components";

const meta = {
  title: "Divider 分隔线",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 按钮有：主按钮、次按钮、文本按钮和链接按钮
 */
export const 按钮类型 = () => (
  <Space>
    <Divider />
    <Divider>到底了</Divider>
  </Space>
);

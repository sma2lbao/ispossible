import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Space } from "../../components";

/**
 * 按钮用于开始一个即时操作。
 */
const meta = {
  title: "Button 按钮",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 按钮有：主按钮、次按钮、文本按钮和链接按钮
 */
export const 按钮类型 = () => (
  <Space>
    <Button type="primary">Primary Button</Button>
    <Button>Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);

/**
 * 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
 */
export const 幽灵按钮 = () => (
  <Space>
    <Button ghost type="primary">
      Primary Button
    </Button>
    <Button ghost>Button</Button>
    <Button ghost type="text">
      Text Button
    </Button>
    <Button ghost type="link">
      Link Button
    </Button>
  </Space>
);

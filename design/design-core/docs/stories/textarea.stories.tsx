import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Textarea } from "../../components";
import "@design/icon/user";

const meta = {
  title: "Textarea 文本框",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 */
export const 基本用法 = () => (
  <div style={{ width: 300 }}>
    <Textarea placeholder="测试" />
  </div>
);

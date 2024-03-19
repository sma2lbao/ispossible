import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "../../components";
import "@design/icon/user";

const meta = {
  title: "Input 输入框",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 */
export const 基本用法 = () => (
  <div style={{ width: 300 }}>
    <Input prefix={<is-user />} placeholder="测试" />
  </div>
);

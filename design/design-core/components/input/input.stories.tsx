import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./";
import { Space } from "../space";
import "@design/icon/user";
import "@design/icon/search";

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
    <Space direction="y">
      <Input prefix={<is-user />} placeholder="测试" clearable />
      <Input suffix={<is-search />} placeholder="测试" />
    </Space>
  </div>
);

export const 禁用 = () => {
  return (
    <div>
      <Input disabled />
    </div>
  );
};

export const 前后置标签 = () => {
  return <Input addonBefore="http://" addonAfter=".com" clearable />;
};

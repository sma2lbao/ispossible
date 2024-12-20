import React, { useState } from "react";
import { Space } from "../space";
import { Input } from "./";
import type { Meta } from "@storybook/react";
import "@design/icon/user";
import "@design/icon/search";

/**
 * 基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。
 */
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

export const 受控 = () => {
  const [value, setValue] = useState<string>("123");

  return (
    <div>
      <Input
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </div>
  );
};

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

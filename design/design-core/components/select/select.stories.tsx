import React from "react";
import { Select } from "./";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 设置组件之间的间距。
 */
const meta = {
  title: "Select 选择器",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 基本使用 = () => {
  return (
    <Select style={{ width: "320px" }}>
      <Select.Option value="ui">Design UI</Select.Option>
      <Select.Option value="core">Design Core</Select.Option>
      <Select.Option value="pro">Design Pro</Select.Option>
      <Select.Option value="plus">Design Plus</Select.Option>
    </Select>
  );
};

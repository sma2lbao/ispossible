import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Space, Checkbox } from "../../components";
import "@design/icon/user";

const meta = {
  title: "Checkbox 多选框",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 多选框。
 */
export const 基本用法 = () => (
  <Space>
    <Checkbox />
  </Space>
);

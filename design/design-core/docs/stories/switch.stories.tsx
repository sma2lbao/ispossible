import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Space, Switch } from "../../components";
import "@design/icon/user";

const meta = {
  title: "Switch 开关",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 开关选择器。
 */
export const 基本用法 = () => (
  <Space>
    <Switch />
    <Switch value={true} />
  </Space>
);

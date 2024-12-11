import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch } from "./switch";
import { Space } from "../space";
import "@design/icon/user";

/**
 * 互斥性的操作控件，用户可打开或关闭某个功能。
 */
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

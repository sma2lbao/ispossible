import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from "../../components";

/**
 * 警告提示，展现需要关注的信息。
 */
const meta = {
  title: "Alert 提示",
  component: Alert,
  parameters: {
    layout: "fullscreen",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 最简单的用法。
 */
export const 代码演示 = () => {
  return (
    <div style={{ padding: 50 }}>
      <Alert message={"消息提醒"} />
    </div>
  );
};

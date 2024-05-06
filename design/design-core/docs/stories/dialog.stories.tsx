import { Button, Dialog, useDialog } from "../../components";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Dialog 对话框",
  component: Dialog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => {
  const { confirm } = useDialog();

  const handleClick = () => {
    confirm({
      content: "测试",
    });
  };

  return (
    <div style={{ padding: 20, height: 300 }}>
      <Button onClick={handleClick}>弹窗</Button>
    </div>
  );
};

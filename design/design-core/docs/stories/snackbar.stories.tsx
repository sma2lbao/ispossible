import { Button, Snackbar, useSnackbar } from "../../components";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Snackbar 全局提示",
  component: Snackbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => {
  const { open } = useSnackbar();

  const handleClick = () => {
    open({
      content: "测试消息提示",
    });
  };

  return (
    <div style={{ padding: 20, height: 300 }}>
      <Button onClick={handleClick}>测试</Button>
      <Snackbar visible>测试</Snackbar>
    </div>
  );
};

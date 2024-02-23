import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Collapse } from "../../components";

const meta = {
  title: "Collapse 折叠面板",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "测试",
        children: <div>test</div>,
      },
    ],
  },
};

import React from "react";
import { Popover, Button } from "../../components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Popover 气泡卡片",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Content: Story = {
  args: {
    content: () => "文案详细解释详细解释详细解释",
    children: "文案",
  },
};

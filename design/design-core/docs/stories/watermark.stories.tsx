import type { Meta, StoryObj } from "@storybook/react";

import { Watermark } from "../../components";

const meta = {
  title: "Watermark 水印",
  component: Watermark,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "测试",
  },
};

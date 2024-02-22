import type { Meta, StoryObj } from "@storybook/react";

import { Space } from "../../components";

const meta = {
  title: "Space 间距",
  component: Space,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      // control: "text",
      description: "Overwritten type",
      defaultValue: undefined,
    },
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    direction: "y",
    children: ["测试0", "测试1", "测试2"],
  },
};

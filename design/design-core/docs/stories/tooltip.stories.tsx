import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "../../components";

const meta = {
  title: "Tooltip 文字提示",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "提示文字",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Title: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案",
  },
};

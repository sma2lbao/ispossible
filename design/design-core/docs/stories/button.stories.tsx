import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../components";

const meta = {
  title: "Button 按钮",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      // control: "text",
      description: "Overwritten type",
      defaultValue: "primary",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: "文案",
  },
};

export const Disabled: Story = {
  args: {
    type: "primary",
    disabled: true,
    children: "按钮",
  },
};

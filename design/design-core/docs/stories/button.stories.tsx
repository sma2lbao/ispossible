import type { Meta, StoryObj } from "@storybook/react";
import page from "../pages/button.mdx";

import { Button } from "../../components";

const meta = {
  title: "Button 按钮",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      page,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "inline-radio",
      description: "设置按钮类型",
      defaultValue: "primary",
    },
    disabled: {
      control: "boolean",
      description: "设置按钮失效状态",
      defaultValue: false,
    },
    ghost: {
      control: "boolean",
      description: "幽灵属性，使按钮背景透明",
      defaultValue: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
    children: "Primary Button",
  },
};

import { Avatar } from "../../components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Avatar 头像",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    shape: "square",
  },
};

export const Circle: Story = {
  args: {
    shape: "circle",
  },
};

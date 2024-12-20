import { Space } from "./space";
import type { Meta, StoryObj } from "@storybook/react";


/**
 * 设置组件之间的间距。
 */
const meta = {
  title: "Space 间距",
  component: Space,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 相邻组件垂直间距。
 */
export const 垂直间距: Story = {
  args: {
    direction: "y",
    children: ["测试0", "测试1", "测试2"],
  },
};

/**
 * 相邻组件水平间距。
 */
export const 水平间距: Story = {
  args: {
    direction: "x",
    separator: "|",
    children: ["测试0", "测试1", "测试2"],
  },
};

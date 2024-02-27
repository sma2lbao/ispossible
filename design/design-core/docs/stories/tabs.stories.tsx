import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../../components";

/**
 * 选项卡切换组件。
 */
const meta = {
  title: "Tabs 标签页",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认选中第一项
 */
export const 代码演示: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "Tab 1",
        children: "Content of Tab Pane 1",
      },
      {
        id: "2",
        label: "Tab 2",
        children: "Content of Tab Pane 2",
      },
      {
        id: "3",
        label: "Tab 3",
        children: "Content of Tab Pane 3",
      },
    ],
  },
};

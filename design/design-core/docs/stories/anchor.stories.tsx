import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "../../components";

/**
 * 用于跳转到页面指定位置。
 */
const meta = {
  title: "Anchor 锚点",
  component: Anchor,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "1",
    href: "#storybook-docs",
    label: "Basic",
  },
  {
    id: "2",
    href: "#anchor--anchor-锚点--demo",
    label: "Demo",
  },
  {
    id: "3",
    href: "#api",
    label: "API",
    children: [
      {
        id: "4",
        href: "#anchor-props",
        label: "Anchor Props",
      },
      {
        id: "5",
        href: "#link-props",
        label: "Link Props",
      },
    ],
  },
];

/**
 * 最简单的用法。
 */
export const 代码演示: Story = {
  args: {
    items,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "../../components";

/**
 * These stories showcase the button
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const items = [
  {
    id: "1",
    href: "#storybook-docs",
    label: "storybook-docs",
  },
  {
    id: "2",
    href: "#anchor--anchor-锚点--demo",
    label: "锚点--demo",
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
        children: [
          {
            id: "6",
            href: "#测试",
            label: "测试啊",
          },
        ],
      },
    ],
  },
];

/**
 * This is the primary button
 */
export const Primary: Story = {
  args: {
    items,
  },
};

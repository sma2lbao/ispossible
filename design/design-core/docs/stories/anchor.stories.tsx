import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "../../components";

const meta = {
  title: "Anchor 锚点",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    items: [
      {
        id: "1",
        href: "#storybook-docs",
        label: "storybook-docs",
      },
      {
        id: "2",
        href: "#anchor--anchor-锚点--demo",
        label: "anchor--anchor-锚点--demo",
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
    ],
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Tree } from "../../components";

const meta = {
  title: "Tree 树形控件",
  component: Tree,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      // control: "text",
      description: "Overwritten type",
      defaultValue: [],
    },
  },
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Demo: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "1",
        children: [
          {
            id: "1-1",
            label: "1-1",
          },
          {
            id: "1-2",
            label: "1-2",
          },
        ],
      },
      {
        id: "2",
        label: "2",
        children: [
          {
            id: "2-1",
            label: "2-1",
          },
          {
            id: "2-2",
            label: "2-2",
          },
        ],
      },
    ],
  },
};

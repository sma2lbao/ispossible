import { Skeleton } from "./";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Skeleton 骨架屏",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => (
  <div style={{ padding: 50 }}>
    <Skeleton />
  </div>
);

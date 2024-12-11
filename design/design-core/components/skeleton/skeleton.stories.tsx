import { Skeleton } from "./";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 将加载中的数据用灰色占位。
 */
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

export const 基本用法 = () => (
  <div style={{ padding: 50 }}>
    <Skeleton />
  </div>
);

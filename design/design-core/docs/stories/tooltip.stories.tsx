import { Tooltip } from "../../components";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Tooltip 文字提示",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const TopLeft: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "topLeft",
  },
};

export const Top: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "top",
  },
};

export const TopRight: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "topRight",
  },
};

export const RightTop: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "rightTop",
  },
};

export const Right: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "right",
  },
};

export const RightBottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "rightBottom",
  },
};

export const BottomRight: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "bottomRight",
  },
};

export const Bottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "bottom",
  },
};

export const BottomLeft: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "bottomLeft",
  },
};

export const LeftBottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "leftBottom",
  },
};

export const Left: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "left",
  },
};

export const LeftTop: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: (
      <div style={{ width: 300, height: 200, border: "1px solid #ddd" }}>
        文案文本
      </div>
    ),
    placement: "leftTop",
  },
};

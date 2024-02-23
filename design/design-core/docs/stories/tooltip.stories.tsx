import { Tooltip } from "../../components";

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
    children: "文案文本",
    placement: "topLeft",
  },
};

export const Top: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "top",
  },
};

export const TopRight: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "topRight",
  },
};

export const RightTop: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "rightTop",
  },
};

export const Right: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "right",
  },
};

export const RightBottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "rightBottom",
  },
};

export const BottomRight: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "bottomRight",
  },
};

export const Bottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "bottom",
  },
};

export const BottomLeft: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "bottomLeft",
  },
};

export const LeftBottom: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "leftBottom",
  },
};

export const Left: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "left",
  },
};

export const LeftTop: Story = {
  args: {
    title: "文案详细解释详细解释详细解释",
    children: "文案文本",
    placement: "leftTop",
  },
};

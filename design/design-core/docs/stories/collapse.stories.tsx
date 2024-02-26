import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Collapse } from "../../components";

/**
 * 可以折叠/展开的内容区域。
 */
const meta = {
  title: "Collapse 折叠面板",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 可以同时展开多个面板
 */
export const 代码演示: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "This is panel header 1",
        children: (
          <div>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </div>
        ),
      },
      {
        id: "2",
        label: "This is panel header 2",
        children: (
          <div>
            A dog is a type of domesticated animal. Known for its loyalty and
            faithfulness, it can be found as a welcome guest in many households
            across the world.
          </div>
        ),
      },
    ],
  },
};

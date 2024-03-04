import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Affix, Button } from "../../components";

/**
 * 将页面元素钉在可视范围。
 */
const meta = {
  title: "Affix 固钉",
  component: Affix,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 最简单的用法。
 */
export const 代码演示 = () => {
  return (
    <div style={{ height: "100px" }}>
      <Affix offsetTop={100}>
        <Button>按钮</Button>
      </Affix>
    </div>
  );
};

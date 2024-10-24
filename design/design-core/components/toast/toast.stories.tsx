import type { Meta } from "@storybook/react";
import React from "react";
import { Toast } from "./toast";

/**
 * 将页面元素钉在可视范围。
 */
const meta = {
  title: "Toast 提示",
  component: Toast,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

/**
 * 最简单的用法。
 */
export const 代码演示 = () => {
  return (
    <div>
      <Toast content="Hello, World!" />
    </div>
  );
};

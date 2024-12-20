import React from "react";
import { Affix } from "./affix";
import { Button } from "../button";
import type { Meta } from "@storybook/react";

/**
 * 将页面元素钉在可视范围。
 */
const meta = {
  title: "Affix 固钉",
  component: Affix,
  parameters: {
    layout: "fullscreen",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Affix>;

export default meta;

/**
 * 最简单的用法。
 */
export const 基本用法 = () => {
  return (
    <div>
      <Affix>
        <Button>按钮</Button>
      </Affix>
    </div>
  );
};

import type { Meta, StoryObj } from "@storybook/react";

import { Anchor } from "../../components";
import React from "react";

/**
 * 用于跳转到页面指定位置。
 */
const meta = {
  title: "Anchor 锚点",
  component: Anchor,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 最简单的用法。
 */
export const 代码演示: Story = {
  args: {
    items: [
      {
        href: "#代码演示",
        label: "代码演示",
        items: [
          {
            href: "#代码演示1",
            label: "1.1 代码演示",
          },
        ],
      },
      {
        href: "#使用组件",
        label: "使用组件",
      },
    ],
  },
};

export const 使用组件 = () => {
  return (
    <Anchor>
      <Anchor.Link href="#组件" label="组件" />
      <Anchor.Link href="#设计语言" label="设计语言" />
      <Anchor.Link href="#物料平台" label="物料平台" />
      <Anchor.Link href="#主题商店" label="主题商店">
        <Anchor.Link href="#物料平台1" label="1.1 物料平台" />
        <Anchor.Link href="#物料平台2" label="1.2 物料平台" />
      </Anchor.Link>
      <Anchor.Link href="#代码演示" label="代码演示" />
    </Anchor>
  );
};

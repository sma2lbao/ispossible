import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Divider, Space } from "../../components";

const meta = {
  title: "Divider 分隔线",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认为水平分割线，可在中间加入文字。
 */
export const 基本用法 = () => (
  <div style={{ width: 300 }}>
    <Divider align="start">到底了</Divider>

    <Divider>到底了</Divider>

    <Divider align="end">到底了</Divider>

    <div style={{ display: "flex", height: 20, alignItems: "center" }}>
      <div>文字</div>
      <Divider direction="y" />
      <div>文字</div>
      <Divider direction="y" />
      <div>文字</div>
    </div>
  </div>
);

export const Y方向有文字 = () => (
  <div style={{ height: 150, width: 400, overflow: "hidden" }}>
    <Divider direction="y" align="start">
      分隔线
    </Divider>
    <Divider direction="y">分隔线</Divider>
    <Divider direction="y" align="end">
      分隔线
    </Divider>
  </div>
);

export const X方向无文字 = () => (
  <div style={{ width: 300, overflow: "hidden" }}>
    <Divider />
  </div>
);

export const Y方向无文字 = () => (
  <div style={{ height: 100, width: 300, overflow: "hidden" }}>
    <Divider direction="y" />
  </div>
);

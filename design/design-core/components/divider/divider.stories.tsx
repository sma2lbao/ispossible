import React from "react";
import { Divider } from "./divider";
import type { Meta } from "@storybook/react";

/**
 * 划分内容区域，对模块做分隔。
 */
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

/**
 * 对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。
 * 通过 align 指定分割线文字的位置。
 */
export const 基本用法 = () => (
  <div style={{ width: 300 }}>
    <Divider align="start">到底了</Divider>

    <Divider>到底了</Divider>

    <Divider align="end">到底了</Divider>
  </div>
);

/**
 * 指定 direction 为 y 即可使用竖直分割线。
 */
export const 竖直分割线 = () => (
  <>
    <div
      style={{
        height: 150,
        width: 400,
        overflow: "hidden",
        marginBottom: "16px",
      }}
    >
      <Divider direction="y" align="start">
        分隔线
      </Divider>
      <Divider direction="y">分隔线</Divider>
      <Divider direction="y" align="end">
        分隔线
      </Divider>
    </div>
    <div style={{ display: "flex", height: 20, alignItems: "center" }}>
      <div>文字</div>
      <Divider direction="y" />
      <div>文字</div>
      <Divider direction="y" />
      <div>文字</div>
    </div>
  </>
);

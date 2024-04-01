import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Watermark } from "../../components";

const meta = {
  title: "Watermark 水印",
  component: Watermark,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Watermark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 代码演示: Story = {
  args: {
    children: (
      <div
        style={{
          height: 500,
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          lineHeight: 1.4,
        }}
      >
        怒髮衝冠，憑闌處，瀟瀟雨歇。
        <br />
        抬望眼，仰天長嘯，壯懷激烈。
        <br />
        三十功名塵與土，八千里路雲和月。
        <br />
        莫等閒，白了少年頭，空悲切。
        <br />
        靖康恥，猶未雪； 臣子恨，何時滅。
        <br />
        駕長車踏破賀蘭山缺。
        <br />
        壯志饑餐胡虜肉，笑談渴飲匈奴血。
        <br />
        待從頭，收拾舊山河，朝天闕。
      </div>
    ),
    content: "满江红",
    font: {
      fontSize: 12,
    },
  },
};

// export const 简单使用: Story = {
//   args: {
//     children: <div style={{ height: 200 }}>测试内容区域</div>,
//     content: "水印",
//   },
// };

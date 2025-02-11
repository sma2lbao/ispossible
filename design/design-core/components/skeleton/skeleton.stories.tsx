import React from "react";
import { Skeleton } from "./";
import type { Meta } from "@storybook/react";

/**
 * 将加载中的数据用灰色占位。
 */
const meta = {
  title: "Skeleton 骨架屏",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

export const 基本用法 = () => (
  <div style={{ padding: 50 }}>
    <Skeleton>
      <div>标题</div>
      <div>
        正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
      </div>
      <div>
        正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
      </div>
    </Skeleton>
  </div>
);

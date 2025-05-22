import React from "react";
import { HotKey } from "./";
import type { Meta } from "@storybook/react";

/**
 * 用于方便用户自定义快捷键及相关操作
 */
const meta = {
  title: "HotKey 快捷键",
  component: HotKey,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HotKey>;

export default meta;

/**
 * 基本使用，通过hotKeys传入快捷键组合，通过 onHotKeyPressed 绑定快捷键处理函数，作出响应动作。
 */
export const 基本用法 = () => {
  return <HotKey hotKeys={['Control', 'Enter']} onHotKeyPressed={() => { console.log('join') }} />;
};

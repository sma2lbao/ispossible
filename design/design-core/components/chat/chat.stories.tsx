import React from "react";
import { Chat } from "./";
import type { Meta } from "@storybook/react";

/**
 * 在一组数据中，用户可通过复选框选择一个或多个数据。
 */
const meta = {
  title: "Chat 对话",
  component: Chat,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Chat>;

export default meta;

/**
 * 最基本的点击选中操作。
 */
export const 基本用法 = () => (
  <div style={{ padding: "40px", height: "400px" }}>
    <Chat />
  </div>
);

import React from "react";
import type { Meta } from "@storybook/react";
import { Progress } from "./progress";

/**
 * 给予用户当前系统执行中任务运行状态的反馈，多用于运行一段时间的场景，有效减轻用户在等待中产生的焦虑感。
 */
const meta = {
  title: "Progress 进度条",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress>;

export default meta;

/**
 * 简单的进度条。
 */
export const 基本用法 = () => {
  return (
    <div style={{ width: 200 }}>
      <Progress percent={10} stroke="rgba(252,136,0,1)" />
      <br />
      <Progress percent={25} stroke="rgba(249,57,32,1)" />
      <br />
      <Progress percent={50} />
      <br />
      <Progress percent={80} />
      <br />
      <Progress percent={80} style={{ height: "8px" }} />
    </div>
  );
};

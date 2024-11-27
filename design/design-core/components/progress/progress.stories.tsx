import React from "react";
import type { Meta } from "@storybook/react";
import { Progress } from "./progress";

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

export const 基础使用 = () => {
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

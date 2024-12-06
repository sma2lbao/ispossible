import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from ".";
import { Space } from "../space";

/**
 * 警告提示，展现需要关注的信息。
 */
const meta = {
  title: "Alert 提示",
  component: Alert,
  parameters: {
    layout: "fullscreen",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 最简单的用法。
 */
export const 代码演示 = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Space direction="y">
        <Alert
          style={{ width: "300px" }}
          description="balabal 提示"
          title="标题"
          bordered
          justify="start"
          closable={false}
          icon={null}
        />
        <Alert description="balabal 提示" type="warning" />
        <Alert description="balabal 提示" type="success" />
        <Alert description="balabal 提示" type="error" />
      </Space>
    </div>
  );
};

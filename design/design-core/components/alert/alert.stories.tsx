import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from ".";
import { Space } from "../space";

/**
 * 横幅通常用于标识全页的状态或通知等。它通常是常驻的，需要用户主动将其关闭。
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
export const 基本用法 = () => {
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

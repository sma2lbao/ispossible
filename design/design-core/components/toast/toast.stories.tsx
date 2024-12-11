import type { Meta } from "@storybook/react";
import React from "react";
import { Toast as ToastComponent } from "./toast";
import { Toast } from "./";
import { Space } from "../space";
import { Button } from "../button";

/**
 * 由用户的操作触发的轻量级全局反馈。
 */
const meta = {
  title: "Toast 提示",
  component: ToastComponent,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToastComponent>;

export default meta;

/**
 * 全局提示有 4 种不同的类型，分别为：info, success, warning, error
 */
export const 基本用法 = () => {
  const handleClick = (type: "info" | "error" | "warning" | "success") => {
    if (type === "info") {
      Toast.info("测试");
      return;
    }
    if (type === "success") {
      Toast.success("成功");
      return;
    }
    if (type === "error") {
      Toast.error("错误");
      return;
    }
    if (type === "warning") {
      Toast.warning("警告");
      return;
    }
  };

  const handleClose = () => {
    Toast.destroyAll();
  };

  return (
    <div>
      <Space>
        <Button onClick={() => handleClick("info")}>Info</Button>
        <Button onClick={() => handleClick("success")}>Success</Button>
        <Button onClick={() => handleClick("warning")}>Warning</Button>
        <Button onClick={() => handleClick("error")}>Error</Button>
        <Button onClick={handleClose}>Close All</Button>
      </Space>
    </div>
  );
};

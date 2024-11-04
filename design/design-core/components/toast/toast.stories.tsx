import type { Meta } from "@storybook/react";
import React from "react";
import { Toast as ToastComponent } from "./toast";
import { Toast } from "./";
import { Space } from "../space";
import { Button } from "../button";

/**
 * 将页面元素钉在可视范围。
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
 * 最简单的用法。
 */
export const 代码演示 = () => {
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

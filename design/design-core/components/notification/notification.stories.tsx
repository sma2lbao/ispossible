import React from "react";
import { Notification as NotificationComponent } from "./notification";
import { Button } from "../button";
import { Space } from "../space";
import { Notification } from "./";
import type { Meta } from "@storybook/react";

/**
 * 全局展示通知提醒，将信息及时有效的传达给用户。
 */
const meta = {
  title: "Notification 消息通知",
  component: NotificationComponent,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NotificationComponent>;

export default meta;

/**
 * 通知提醒框有 4 种不同的类型，分别为：info, success, warning, error
 */
export const 基本用法 = () => {
  const handleClick = (type: "info" | "error" | "warning" | "success") => {
    if (type === "info") {
      Notification.info({
        title: "标题",
        content: "提示",
      });
      return;
    }
    if (type === "success") {
      Notification.success({
        title: "标题",
        content: "成功",
      });
      return;
    }
    if (type === "error") {
      Notification.error({
        title: "标题",
        content: "错误",
      });
      return;
    }
    if (type === "warning") {
      Notification.warning({
        title: "标题",
        content: "警告",
      });
      return;
    }
  };

  const handleClose = () => {
    Notification.destroyAll();
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

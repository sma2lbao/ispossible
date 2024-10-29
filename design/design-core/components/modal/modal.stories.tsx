import React from "react";
import type { Meta } from "@storybook/react";
import { Modal } from "./";
import { Space } from "../space";
import { Button } from "../button";

/**
 * 将页面元素钉在可视范围。
 */
const meta = {
  title: "Modal 模态对话框",
  component: Modal,
  parameters: {
    layout: "centered",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

/**
 * 最简单的用法。
 */
export const 代码演示 = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>打开弹窗</Button>
      <Modal
        type="info"
        visible={visible}
        title={"基本对话框"}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClosed={() => setVisible(false)}
      >
        This is the content of a basic modal.
        <br />
        More content...
      </Modal>
    </div>
  );
};

export const 命令式 = () => {
  const handleOpen = (type: string) => {
    if (type === "info") {
      const modal = Modal.info({
        title: "标题",
        content: "提示",
        onConfirm: () => {
          modal.destroy();
        },
      });
      modal.update({
        title: "更新后的标题",
        content: "更新后的内容",
      });
      return;
    }

    if (type === "success") {
      const modal = Modal.success({
        title: "标题",
        content: "成功",
        onConfirm: () => {
          modal.destroy();
        },
      });
      return;
    }

    if (type === "warning") {
      const modal = Modal.warning({
        title: "标题",
        content: "警告",
        onConfirm: () => {
          modal.destroy();
        },
      });
      return;
    }

    if (type === "error") {
      const modal = Modal.error({
        title: "标题",
        content: "错误",
        onConfirm: () => {
          modal.destroy();
        },
      });
      return;
    }

    if (type === "confirm") {
      const modal = Modal.confirm({
        title: "标题",
        content: "确认",
        onConfirm: () => {
          modal.destroy();
        },
      });
      return;
    }
  };

  return (
    <div>
      <Space>
        <Button onClick={() => handleOpen("info")}>Info</Button>
        <Button onClick={() => handleOpen("success")}>Success</Button>
        <Button onClick={() => handleOpen("warning")}>Warning</Button>
        <Button onClick={() => handleOpen("error")}>Error</Button>
        <Button onClick={() => handleOpen("confirm")}>Confirm</Button>
      </Space>
    </div>
  );
};

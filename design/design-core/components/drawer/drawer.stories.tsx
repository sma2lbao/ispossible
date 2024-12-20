import React, { useState } from "react";
import { Drawer } from "./drawer";
import { Button } from "../button";
import type { Meta } from "@storybook/react";

/**
 * 触发命令后，从屏幕一侧滑出的抽屉式的面板。
 */
const meta = {
  title: "Drawer 抽屉",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;

/**
 * 基础抽屉，点击触发按钮抽屉从右侧滑出，点击遮罩区关闭。
 */
export const 基本用法 = () => {
  const [visible, setVisivle] = useState(false);
  return (
    <>
      <Button onClick={() => setVisivle(true)}>打开侧边栏</Button>
      <Drawer
        visible={visible}
        title={"标题"}
        onClosed={() => setVisivle(false)}
      >
        <p>测试测试</p>
      </Drawer>
    </>
  );
};

import React, { useState } from "react";
import { Drawer } from "./drawer";
import type { Meta } from "@storybook/react";
import { Button } from "../button";

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

export const 基本使用 = () => {
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

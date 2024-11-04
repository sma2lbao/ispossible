import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Space } from "../../components";
import "@design/icon/user";

/**
 * 按钮用于开始一个即时操作。
 */
const meta = {
  title: "Button 按钮",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

export const 基础用法 = () => (
  <Space>
    <Button>Button</Button>
    <Button theme="solid">Button</Button>
    <Button theme="ghost">Button</Button>
    <Button theme="outline">Button</Button>
  </Space>
);

export const 浅色背景 = () => (
  <Space>
    <Button>Button</Button>
  </Space>
);

export const 深色背景 = () => (
  <Space>
    <Button theme="solid">Button</Button>
  </Space>
);

export const 无背景 = () => (
  <Space>
    <Button theme="ghost">Button</Button>
  </Space>
);

export const 边框模式 = () => (
  <Space>
    <Button theme="outline">Button</Button>
  </Space>
);

export const 图标按钮 = () => (
  <Space direction="y">
    <div>
      默认状态：<Button icon={<is-user />}></Button>
    </div>
    <div>
      禁用状态：<Button disabled icon={<is-user />}></Button>
    </div>
    <div>
      更改主题：
      <Space>
        <Button icon={<is-user />} />
        <Button theme="solid" icon={<is-user />} />
        <Button theme="outline" icon={<is-user />} />
        <Button theme="ghost" icon={<is-user />} />
      </Space>
    </div>
    <div>
      更改图标位置：
      <Space>
        <Button icon={<is-user />}>用户名</Button>
        <Button icon={<is-user />} iconAlign="end">
          用户名
        </Button>
      </Space>
    </div>
    <div>
      加载中：<Button loading>确认</Button>
    </div>
  </Space>
);

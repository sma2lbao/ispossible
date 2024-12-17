import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Space } from "../../components";
import "@design/icon/user";

/**
 * 按钮是一种命令组件，可发起一个即时操作。
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

export const 基本用法 = () => (
  <Space>
    <Button color="primary">Button</Button>
    <Button color="secondary">Button</Button>
    <Button color="tertiary">Button</Button>
    <Button color="warn">Button</Button>
    <Button color="error">Button</Button>
  </Space>
);

export const 不同颜色 = () => (
  <Space>
    <Button color="primary" theme="outline">
      Button
    </Button>
    <Button color="secondary" theme="outline">
      Button
    </Button>
    <Button color="tertiary" theme="outline">
      Button
    </Button>
    <Button color="warn" theme="outline">
      Button
    </Button>
    <Button color="error" theme="outline">
      Button
    </Button>
  </Space>
);

export const 深色背景 = () => (
  <Space>
    <Button color="primary" theme="solid">
      Button
    </Button>
    <Button color="secondary" theme="solid">
      Button
    </Button>
    <Button color="tertiary" theme="solid">
      Button
    </Button>
    <Button color="warn" theme="solid">
      Button
    </Button>
    <Button color="error" theme="solid">
      Button
    </Button>
  </Space>
);

export const 无背景 = () => (
  <Space>
    <Button color="primary" theme="ghost">
      Button
    </Button>
    <Button color="secondary" theme="ghost">
      Button
    </Button>
    <Button color="tertiary" theme="ghost">
      Button
    </Button>
    <Button color="warn" theme="ghost">
      Button
    </Button>
    <Button color="error" theme="ghost">
      Button
    </Button>
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

export const 禁用状态 = () => {
  return (
    <Space>
      <Button disabled>禁用</Button>
      <Button disabled theme="ghost">
        禁用
      </Button>
      <Button disabled theme="solid" color="primary">
        禁用
      </Button>
      <Button disabled theme="solid" color="red">
        禁用
      </Button>
      <Button disabled theme="outline" color="primary">
        禁用
      </Button>
    </Space>
  );
};

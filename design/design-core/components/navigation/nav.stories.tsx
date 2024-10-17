import { Nav, NavItem, SubNav } from "./";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Navigation 导航",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => {
  const items = [
    {
      itemKey: "1",
      text: "用户管理",
    },
    {
      itemKey: "2",
      text: "任务设置",
      items: [
        {
          itemKey: "2-1",
          text: "任务查询",
        },
      ],
    },
  ];
  return <Nav items={items} />;
};

export const 使用组件 = () => {
  return (
    <Nav>
      <SubNav itemKey={"1"} text="任务管理">
        <NavItem itemKey={"1-1"} text="任务查询" />
      </SubNav>
    </Nav>
  );
};

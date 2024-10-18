import { Nav } from "./";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import "@design/icon/home";
import "@design/icon/user";
import "@design/icon/wechat";
import "@design/icon/menu";
import "@design/icon/check-square";

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
    { itemKey: "user", text: "用户管理", icon: <is-user /> },
    { itemKey: "union", text: "活动管理", icon: <is-menu /> },
    {
      itemKey: "union-management",
      text: "任务管理",
      icon: <is-wechat />,
      items: [
        { itemKey: "union-management-query", text: "任务查询" },
        { itemKey: "union-management-setting", text: "任务设置" },
        { itemKey: "union-management-insert", text: "信息录入" },
      ],
    },
    {
      itemKey: "job",
      text: "公告管理",
      icon: <is-check-square />,
      items: [
        { itemKey: "job-pull", text: "推送管理" },
        { itemKey: "job-query", text: "任务查询" },
      ],
    },
  ];
  return <Nav items={items} />;
};

// export const 使用组件 = () => {
//   return (
//     <Nav>
//       <SubNav itemKey={"1"} text="任务管理">
//         <NavItem itemKey={"1-1"} text="任务查询" />
//       </SubNav>
//     </Nav>
//   );
// };

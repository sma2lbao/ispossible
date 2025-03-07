import React from "react";
import { Nav } from "./";
import type { Meta } from "@storybook/react";
import "@design/icon/home";
import "@design/icon/user";
import "@design/icon/wechat";
import "@design/icon/menu";
import "@design/icon/check-square";

/**
 * 收纳、排列并展示一系列选项的列表。
 */
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

export const 基本用法 = () => {
  const items = [
    { itemKey: "user", text: "用户管理", icon: <is-user /> },
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
    { itemKey: "union", text: "活动管理", icon: <is-menu /> },
    {
      itemKey: "job",
      text: "公告管理",
      icon: <is-check-square />,
      items: [
        { itemKey: "job-pull", text: "推送管理" },
        { itemKey: "job-query", text: "任务查询" },
        {
          itemKey: "job-types",
          text: "任务分类",
          items: [
            {
              itemKey: "job-student",
              text: "学生任务",
            },
            {
              itemKey: "job-teacher",
              text: "老师任务",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <div>
        <Nav items={items} mode="x" defaultSelectedKeys={["user"]} />
      </div>
      <div>
        <Nav items={items} defaultSelectedKeys={["user"]} />
        <Nav items={items} mode="y" defaultSelectedKeys={["user"]} />
      </div>
    </div>
  );
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

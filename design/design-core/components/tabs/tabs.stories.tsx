import React from "react";
import { Tabs, TabPane } from "./";
import type { Meta } from "@storybook/react";

/**
 * 将内容组织同一视图中，一次可查看一个视图内容。查看其他内容可切换选项卡查看。
 */
const meta = {
  title: "Tabs 标签页",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;

/**
 * 默认选中第一项
 */
export const 基本用法 = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="文档" itemKey="1">
          <h3>文档</h3>
        </TabPane>
        <TabPane tab="快速起步" itemKey="2">
          <h3>快速起步</h3>
        </TabPane>
        <TabPane tab="帮助" itemKey="3">
          <h3>帮助</h3>
        </TabPane>
      </Tabs>
    </div>
  );
};

import React from "react";
import { Tabs, TabPane } from "./";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 选项卡切换组件。
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
type Story = StoryObj<typeof meta>;

/**
 * 默认选中第一项
 */
export const 基础使用 = () => {
  return (
    <div>
      <Tabs>
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

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Collapse } from "./";

/**
 * 可以折叠/展开的内容区域。
 */
const meta = {
  title: "Collapse 折叠面板",
  component: Collapse,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 可以同时展开多个面板
 */
export const 代码演示 = () => {
  return (
    <div>
      <Collapse accordion>
        <Collapse.Panel header="This is panel header 1" itemKey="1">
          <div>
            代码测试面板专用；代码测试面板专用；代码测试面板专用；代码测试面板专用
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 2" itemKey="2" disabled>
          <div>
            代码测试面板专用；代码测试面板专用；代码测试面板专用；代码测试面板专用
          </div>
        </Collapse.Panel>
        <Collapse.Panel header="This is panel header 3" itemKey="3">
          <div>
            代码测试面板专用；代码测试面板专用；代码测试面板专用；代码测试面板专用
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

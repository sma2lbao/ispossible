import React from "react";
import { Collapse } from "./";
import type { Meta } from "@storybook/react";

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

/**
 * 用于将复杂的内容区域分组和隐藏，可折叠或展开，默认可以展开多个面板，也可以只展开某几个面板。
 */
export const 基本用法 = () => {
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

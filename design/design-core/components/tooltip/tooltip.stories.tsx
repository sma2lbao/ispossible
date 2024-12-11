import { Button, Divider, Space, Switch, Tooltip } from "../../components";
import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * 鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。
 */
const meta = {
  title: "Tooltip 文字提示",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 鼠标移入，气泡出现，鼠标移出，气泡消失。
 */
export const 基本用法 = () => {
  const title = "基本用法";
  const container: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const style: React.CSSProperties = {
    width: 80,
    height: 80,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #eee",
  };
  return (
    <div>
      <div>
        <Space>
          <Tooltip title={title} direction="top-left">
            <span style={style}>top-left</span>
          </Tooltip>
          <Tooltip title={title} direction="top">
            <span style={style}>top</span>
          </Tooltip>
          <Tooltip title={title} direction="top-right">
            <span style={style}>top-right</span>
          </Tooltip>
        </Space>
      </div>

      <Divider />

      <div style={container}>
        <Tooltip title={title} direction="left-top">
          <span style={style}>left-top</span>
        </Tooltip>
        <Tooltip title={title} direction="right-top">
          <span style={style}>right-top</span>
        </Tooltip>
      </div>

      <Divider />

      <div style={container}>
        <Tooltip title={title} direction="left">
          <span style={style}>left</span>
        </Tooltip>
        <Tooltip title={title} direction="right">
          <span style={style}>right</span>
        </Tooltip>
      </div>

      <Divider />

      <div style={container}>
        <Tooltip title={title} direction="left-bottom">
          <span style={style}>left-bottom</span>
        </Tooltip>
        <Tooltip title={title} direction="right-bottom">
          <span style={style}>right-bottom</span>
        </Tooltip>
      </div>

      <Divider />

      <div>
        <Space>
          <Tooltip title={title} direction="bottom-left">
            <span style={style}>bottom-left</span>
          </Tooltip>
          <Tooltip title={title} direction="bottom">
            <span style={style}>bottom</span>
          </Tooltip>
          <Tooltip title={title} direction="bottom-right">
            <span style={style}>bottom-right</span>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

/**
 * 设为 custom 时，需要配合 visible 属性使用，此时显示与否完全受控
 */
export const 触发时机 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>
        <Tooltip title="hello, world!">
          <Button>悬停显示</Button>
        </Tooltip>
      </div>
      <Divider />
      <div>
        <Tooltip title="hello, world!" trigger="click">
          <Button>点击显示</Button>
        </Tooltip>
      </div>
      <Divider />
      <div>
        <div>
          <Switch value={toggle} onChange={() => setToggle(!toggle)} />
        </div>
        <Tooltip
          title="hello, world!"
          trigger="custom"
          visible={toggle}
          direction="bottom"
        >
          <Button>受控显示</Button>
        </Tooltip>
      </div>
    </>
  );
};

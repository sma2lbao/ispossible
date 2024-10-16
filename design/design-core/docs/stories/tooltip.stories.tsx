import { Button, Divider, Space, Tooltip } from "../../components";
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const 基本使用 = () => {
  const title = "基本使用";
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
          <Tooltip title={title} direction="top" arrow={false} visible>
            <span style={style}>top</span>
          </Tooltip>
          <Tooltip title={title} direction="top-right">
            <span style={style}>top-right</span>
          </Tooltip>
        </Space>
      </div>

      <Divider />

      <div>
        <Space>
          <Tooltip title={title} direction="left-top">
            <span style={style}>left-top</span>
          </Tooltip>
          <Tooltip title={title} direction="right-top">
            <span style={style}>right-top</span>
          </Tooltip>
        </Space>
      </div>

      <Divider />

      <div>
        <Space>
          <Tooltip title={title} direction="left">
            <span style={style}>left</span>
          </Tooltip>
          <Tooltip title={title} direction="right">
            <span style={style}>right</span>
          </Tooltip>
        </Space>
      </div>

      <Divider />

      <div>
        <Space>
          <Tooltip title={title} direction="left-bottom">
            <span style={style}>left-bottom</span>
          </Tooltip>
          <Tooltip title={title} direction="right-bottom">
            <span style={style}>right-bottom</span>
          </Tooltip>
        </Space>
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

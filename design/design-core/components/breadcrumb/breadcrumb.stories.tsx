import React from "react";
import { Breadcrumb } from "./";
import type { Meta } from "@storybook/react";
import "@design/icon/right";

/**
 * 面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。
 */
const meta = {
  title: "Breadcrumb 面包屑",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

/**
 * 适用于广泛基本用法。分隔方式分为图标分隔及斜线分隔两种方式，可根据不同场景使用。
 */
export const 基本用法 = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Core Design</Breadcrumb.Item>
        <Breadcrumb.Item>Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
        <Breadcrumb.Item>Default</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

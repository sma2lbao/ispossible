import React from "react";
import { Checkbox } from "../../components";
import type { Meta } from "@storybook/react";

/**
 * 在一组数据中，用户可通过复选框选择一个或多个数据。
 */
const meta = {
  title: "Checkbox 多选框",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

/**
 * 最基本的点击选中操作。
 */
export const 基本用法 = () => <Checkbox>Design Core</Checkbox>;

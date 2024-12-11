import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Radio } from "./radio";
import { Space } from "../space";
import { RadioGroup } from "./radio-group";
import { RadioChangeEvent } from "./radio.types";

/**
 * 在一组相关且互斥数据中，用户仅能选择一个选项。
 */
const meta = {
  title: "Radio 单选框",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基础单选框。
 */
export const 基本用法 = () => {
  return (
    <Space>
      <Radio>Radio</Radio>
      <Radio checked>Radio</Radio>
    </Space>
  );
};

/**
 * 一组互斥的 Radio 配合使用
 */
export const 单选组合 = () => {
  const [value, setValue] = useState<number>(1);
  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value!);
  };

  return (
    <RadioGroup onChange={handleChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
};

/**
 * 可通过给 RadioGroup 设置 direction属性来决定 组内的 radio 元素水平排列或者垂直排列
 */
export const 垂直排列 = () => {
  const [value, setValue] = useState<number>(1);
  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value!);
  };

  return (
    <RadioGroup direction="y" onChange={handleChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
};

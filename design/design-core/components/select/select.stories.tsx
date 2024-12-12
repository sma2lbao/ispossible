import React, { useState } from "react";
import { Select } from "./";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。
 */
const meta = {
  title: "Select 选择器",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

/**
 * 基础选择器
 */
export const 基本用法 = () => {
  return (
    <Select style={{ width: "320px" }} placeholder="请选择">
      <Select.Option value="ui">Design UI</Select.Option>
      <Select.Option value="core">Design Core</Select.Option>
      <Select.Option value="pro">Design Pro</Select.Option>
      <Select.Option value="plus">Design Plus</Select.Option>
    </Select>
  );
};

export const 搜索功能 = () => {
  const [list, setList] = useState<any[]>([]);

  const handleSearch = (keyword: string) => {
    console.log("keyword: ", keyword);
    setList([
      {
        key: "1",
        label: "Design UI - " + keyword,
        value: "ui",
      },
      {
        key: "2",
        label: "Design Core - " + keyword,
        value: "core",
      },
      {
        key: "3",
        label: "Design Pro - " + keyword,
        value: "pro",
      },
    ]);
  };

  return (
    <Select
      style={{ width: "320px" }}
      placeholder="请选择"
      filter
      onSearch={handleSearch}
    >
      {list.map((item, index) => (
        <Select.Option key={item.key} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

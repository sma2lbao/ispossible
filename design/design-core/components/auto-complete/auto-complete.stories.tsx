import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import { AutoComplete } from "./";
import { Avatar } from "../avatar";

const meta = {
  title: "AutoComplete 自动补全",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;

/**
 * 通过 onSearch 监听用户输入，将输入建议通过更新 props.data 传入。通过 onChange 保持受控，当输入框变化/选中输入项时会触发 onChange
 */
export const 基本用法 = () => {
  const [data, setData] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let result: string[];
    if (value) {
      result = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    } else {
      result = [];
    }
    setData(result);
  };
  return <AutoComplete data={data} onSearch={handleSearch} />;
};

type Item = { label: string; value: string; image: string };

export const 自定义候选项渲染 = () => {
  const [data, setData] = useState<Item[]>([]);
  const handleSearch = (value: string) => {
    let result: Item[];
    if (value) {
      result = ["@gmail.com", "@163.com", "@qq.com"].map((domain) => ({
        label: value + domain,
        value: `${Date.now()}`,
        image: "https://test.",
      }));
    } else {
      result = [];
    }
    setData(result);
  };

  const renderItem = (item: any) => {
    return (
      <div>
        <Avatar src={item.image} size={36} />
        {item.label}
      </div>
    );
  };

  return (
    <AutoComplete data={data} onSearch={handleSearch} renderItem={renderItem} />
  );
};

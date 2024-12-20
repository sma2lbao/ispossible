import React, { useRef, useState } from "react";
import { List } from "./";
import type { Meta } from "@storybook/react";

/**
 * 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
 */
const meta = {
  title: "List 列表",
  component: List,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;

/**
 * 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
 */
export const 基本用法 = () => {
  const data = [
    "从明天起，做一个幸福的人",
    "喂马，劈柴，周游世界",
    "从明天起，关心粮食和蔬菜",
    "我有一所房子，面朝大海，春暖花开",
  ];

  return (
    <div>
      <List>
        {data.map((item, index) => {
          return <List.Item key={index}>{item}</List.Item>;
        })}
      </List>
    </div>
  );
};

export const 加载更多 = () => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const count = useRef(1);

  const handleLoad = () => {
    if (count.current >= 3) {
      setFinished(true);
    }
    count.current += 1;
    setLoading(true);
    setTimeout(() => {
      setData((old) => {
        return old.concat(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <List
        loading={loading}
        finished={finished}
        onLoad={handleLoad}
        hasLoadMore
      >
        {data.map((item, index) => {
          return <List.Item key={index}>{item}</List.Item>;
        })}
      </List>
    </div>
  );
};

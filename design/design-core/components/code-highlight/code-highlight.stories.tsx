import React from "react";
import { CodeHighlight } from "./";
import type { Meta } from "@storybook/react";

/**
 * 在一组数据中，用户可通过复选框选择一个或多个数据。
 */
const meta = {
  title: "CodeHighlight 代码高亮",
  component: CodeHighlight,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CodeHighlight>;

export default meta;

/**
 * 最基本的点击选中操作。
 */
export const 基本用法 = () => (
  <div style={{ padding: "40px", height: "400px" }}>
    <CodeHighlight
      code={`import * as React from 'react"
const Test = ()=>{
    const handleClick = ()=>{
        alert("Click")
    }
    return <div onClick={handleClick}>test</div>
}`}
      language="js"
    />
  </div>
);

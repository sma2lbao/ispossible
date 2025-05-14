import React from "react";
import { MarkdownRender } from "./";
import type { Meta } from "@storybook/react";

/**
 * 在网页中即时渲染 Markdown 和 MDX
 */
const meta = {
  title: "Markdown 渲染器",
  component: MarkdownRender,
  parameters: {
    layout: "fullscreen",
    doc: {},
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MarkdownRender>;

export default meta;

/**
 * 最基础的用法
 */
export const 基本用法 = () => {
  return (
    <div>
      <MarkdownRender
        raw={`
##

正文内容是普通的文本，也可以**加粗**~~删除线~~和<u>下划线</u> [超链接](https://ui.sma1lbao.cn) 等 Markdown 与 HTML 的基本语法所支持的富文本，也支持 emoji 🍰


部分符号需要转义 \\{\\} \\<\\> ...

<br/>
<br/>

#### MarkdownRender 渲染列表语法
- 好好地吃饭
- 好好地睡觉
- 好好地游玩
- 好好地学习
- 好好地聊天
- 好好地吵架
- 过着平凡普通的每日

| 支持 | Markdown 表格 |  c |  d  |
| - | :- | -: | :-: |
| 1 | 2 | 3 | 4 |
| 21 | 22 | 23 | 24 |
| 31 | 32 | 33 | 34 |
| 41 | 42 | 43 | 44 |

    `}
      />
    </div>
  );
};

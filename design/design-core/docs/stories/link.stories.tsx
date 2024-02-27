import type { Meta } from "@storybook/react";
import React from "react";
import { Link, Space } from "../../components";

/**
 * 链接用于链接其他网站。
 */
const meta = {
  title: "Link 链接",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

export const 基础用法 = () => (
  <Space>
    <Link href="https://sma2lbao.github.io/">sma2lbao.github.io</Link>
  </Space>
);

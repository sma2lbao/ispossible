import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Space, Typography } from "../../components";

/**
 * 文本的基本格式。
 */
const meta = {
  title: "Typography 排版",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

/**
 * 展示不同级别的标题。
 */
export const 标题 = () => (
  <>
    <Typography tagName={"h1"}>h1. 标题一</Typography>
    <Typography tagName={"h2"}>h2. 标题二</Typography>
    <Typography tagName={"h3"}>h3. 标题三</Typography>
    <Typography tagName={"h4"}>h4. 标题四</Typography>
    <Typography tagName={"h5"}>h5. 标题五</Typography>
    <Typography tagName={"h6"}>h6. 标题六</Typography>
  </>
);

/**
 * 内置不同样式的文本
 */
export const 文本 = () => (
  <Space direction="y">
    <Typography tagName={"div"}>文本(default)</Typography>
    <Typography tagName={"div"} type="primary">
      文本(primary)
    </Typography>
    <Typography tagName={"div"} type="secondary">
      文本(secondary)
    </Typography>
    <Typography tagName={"div"} type="success">
      文本(success)
    </Typography>
    <Typography tagName={"div"} type="warning">
      文本(warning)
    </Typography>
    <Typography tagName={"div"} type="danger">
      文本(danger)
    </Typography>
    <Typography tagName={"div"} link>
      文本(link)
    </Typography>
  </Space>
);

import { Avatar, Space } from "../../components";
import type { Meta } from "@storybook/react";
import React from "react";
import "@design/icon/user";

/**
 * 用来代表用户或事物，支持图片、图标或字符展示。
 */
const meta = {
  title: "Avatar 头像",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

/**
 * 支持两种形状可选。
 */

export const 基本 = () => (
  <Space direction="y">
    <Space>
      <Avatar shape="square" icon={<is-user />} />
      <Avatar shape="square" size={35} icon={<is-user />} />
    </Space>
    <Space>
      <Avatar icon={<is-user />} />
      <Avatar size={35} icon={<is-user />} />
    </Space>
  </Space>
);

/**
 * 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 */
export const 类型 = () => (
  <Space direction="x">
    <Avatar icon={<is-user />}></Avatar>
    <Avatar src="https://image.woshipm.com/wp-files/2018/08/R5JzE6HY8mK6HfoMTkK8.jpeg" />
    <Avatar>U</Avatar>
  </Space>
);

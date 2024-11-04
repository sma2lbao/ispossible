import { Avatar, Space } from "../../components";
import type { Meta } from "@storybook/react";
import React from "react";
import "@design/icon/user";
import { AvatarGroup } from "./avatar-group";

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
  <Space direction="x">
    <Avatar>
      <is-user />
    </Avatar>
    <Avatar src="https://image.woshipm.com/wp-files/2018/08/R5JzE6HY8mK6HfoMTkK8.jpeg" />
    <Avatar>U</Avatar>
  </Space>
);

export const 自适应字符大小 = () => {
  return (
    <Space>
      <Avatar>Tim</Avatar>
      <Avatar>Hello</Avatar>
      <Avatar>Hello World</Avatar>
    </Space>
  );
};

export const 头像组 = () => {
  return (
    <AvatarGroup max={3}>
      <Avatar>LL</Avatar>
      <Avatar>CX</Avatar>
      <Avatar>CX</Avatar>
      <Avatar>RM</Avatar>
      <Avatar>ZL</Avatar>
      <Avatar>YZ</Avatar>
    </AvatarGroup>
  );
};

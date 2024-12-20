import React from "react";
import { TagGroup } from "./group";
import { Space, Tag } from "../../components";
import "@design/icon/home";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * 用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。
 */
const meta = {
  title: "Tag 标签",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 标签的基础用法。
 */
export const 基本用法: Story = {
  args: {
    children: "标签",
    prefixIcon: <is-home />,
  },
};

/**
 * 默认定义了两种形状：square（默认）、circle
 */
export const 形状 = () => (
  <Space>
    <Tag>默认</Tag>
    <Tag shape="circle">椭圆形</Tag>
  </Space>
);

/**
 * 支持通过配置 prefixIcon、suffixIcon， 可以在 children 内容前后添加 Icon 图标
 */
export const 图标 = () => (
  <Space>
    <Tag shape="circle" prefixIcon={<is-home />}>
      Design Core
    </Tag>
    <Tag shape="circle" suffixIcon={<is-home />}>
      Design Core
    </Tag>
  </Space>
);

/**
 * 标签支持三种样式类型，包括浅色底色 light，白色底色 ghost，深色底色 solid；默认值为 light。通过 type 配置
 */
export const 样式类型 = () => (
  <Space>
    <Tag shape="circle" type="light" prefixIcon={<is-home />}>
      Design Core
    </Tag>
    <Tag shape="circle" type="ghost" prefixIcon={<is-home />}>
      Design Core
    </Tag>
    <Tag shape="circle" type="solid" prefixIcon={<is-home />}>
      Design Core
    </Tag>
  </Space>
);

/**
 * 可删除模式。
 */
export const 可删除: Story = {
  args: {
    children: "标签",
    prefixIcon: <is-home />,
    closeable: true,
  },
};

/**
 * 使用 TagGroup
 */
export const 使用TagGroup = () => {
  const tagList = [
    { color: "light-blue", label: "标签一" },
    { color: "cyan", label: "标签二" },
    { color: "violet", label: "标签三" },
    { color: "white", label: "标签四" },
  ];
  return <TagGroup maxTagCount={3} tagList={tagList} />;
};

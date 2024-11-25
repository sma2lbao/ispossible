import React from "react";
import { Image } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Image 图片",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;

export const 代码演示 = () => {
  return (
    <Image src="https://cbb464e7cd4b3c0fa45c09def07a7afaaa057a2c.mdnplay.dev/zh-CN/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
  );
};

export const 加载失败 = () => {
  return <Image width={200} height={200} src="https://load-error.jpeg" />;
};

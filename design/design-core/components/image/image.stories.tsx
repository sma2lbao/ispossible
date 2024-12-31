import React from "react";
import { Image, ImagePreview } from "./";
import type { Meta } from "@storybook/react";

/**
 * 展示和预览图片。
 */
const meta = {
  title: "Image 图片",
  component: Image,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;

/**
 * 需要查看图片的时候，简单的设置 src 属性，就能获得一个有预览图片功能的组件。
 */
export const 基本用法 = () => {
  return (
    <>
      <Image src="https://cbb464e7cd4b3c0fa45c09def07a7afaaa057a2c.mdnplay.dev/zh-CN/docs/Web/SVG/Element/image/mdn_logo_only_color.png" />
      <ImagePreview />
    </>
  );
};

/**
 * 当加载图片失败的时候显示的内容。
 */
export const 加载失败 = () => {
  return <Image width={200} height={200} src="https://load-error.jpeg" />;
};

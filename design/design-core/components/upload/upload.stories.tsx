import React from "react";
import { Button } from "../button";
import { Upload } from "./";
import type { UploadRequestOptions } from "./upload.types";
import type { Meta } from "@storybook/react";
import "@design/icon/plus";

/**
 * 用户可传输文件或提交相应的内容。
 */
const meta = {
  title: "Upload 上传",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Upload>;

export default meta;

/**
 * 最基础的上传组件用法。
 */
export const 基本用法 = () => {
  return (
    <Upload action="http://localhost:3000/api/upload">
      <Button theme="light">点击上传</Button>
    </Upload>
  );
};

/**
 * 默认通过 Ajax 请求上传，可以设置 customRequest 覆盖默认的上传请求，实现自定义上传。
 */
export const 自定义上传 = () => {
  const customRequest = (options: UploadRequestOptions) => {
    const {} = options;
  };

  return (
    <Upload
      action="http://localhost:3000/api/upload"
      customRequest={customRequest}
    >
      <Button theme="light">点击上传</Button>
    </Upload>
  );
};

/**
 * 设置 listType = 'picture'，用户可以上传图片并在列表中显示缩略图
 */
export const 照片墙 = () => {
  const defaultFiles = [
    {
      uid: "1",
      name: "dy.png",
      status: "success" as const,
      size: 130 * 1024,
      url: "https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg",
    },
  ];

  return (
    <Upload
      action="http://localhost:3000/api/upload"
      listType="picture"
      files={defaultFiles}
    >
      <span style={{ fontSize: "24px" }}>
        <is-plus />
      </span>
    </Upload>
  );
};

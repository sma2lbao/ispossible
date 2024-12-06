import React from "react";
import type { Meta } from "@storybook/react";
import { Upload } from "./";
import { Button } from "../button";
import type { UploadRequestOptions } from "./upload.types";
import "@design/icon/plus";

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

export const 基础使用 = () => {
  return (
    <Upload action="http://localhost:3000/api/upload">
      <Button theme="light">点击上传</Button>
    </Upload>
  );
};

export const 覆盖默认的上传 = () => {
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

import React from "react";
import type { Meta } from "@storybook/react";
import { Upload } from "./";
import { Button } from "../button";

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

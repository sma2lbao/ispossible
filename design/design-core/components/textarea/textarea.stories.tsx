import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import React from "react";

const meta = {
  title: "Textarea 多行输入",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Textarea>;

export default meta;

export const 基本用法 = () => {
  return <Textarea />;
};

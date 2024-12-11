import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./";
import { Input } from "../input";
import { Button } from "../button";

/**
 * 具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
 */
const meta = {
  title: "Form 表单",
  component: Form,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

/**
 * 非受控模式的用法。
 */
export const 基本用法 = () => {
  type FormData = {
    username: string;
    email: string;
  };

  const handleSubmit = (data: any) => {
    console.log("data: ", data);
  };

  return (
    <div style={{ padding: "30px", width: "400px" }}>
      <Form<FormData>
        onSubmit={handleSubmit}
        defaultValues={{ username: "测试" }}
      >
        <Form.Field
          required
          name="username"
          label="Username"
          rules={{ minLength: { value: 3, message: "长度" } }}
        >
          <Input placeholder="Enter your username" />
        </Form.Field>
        <Form.Field
          name="email"
          label="Email"
          rules={{
            minLength: {
              value: 3,
              message: "email长度",
            },
            required: { value: true, message: "请输入" },
          }}
        >
          <Input placeholder="Enter your email" />
        </Form.Field>

        <Button type="submit">提交</Button>
      </Form>
    </div>
  );
};

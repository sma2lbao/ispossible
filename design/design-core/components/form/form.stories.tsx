import React from "react";
import { AutoComplete } from "../auto-complete";
import { Button } from "../button";
import { Input } from "../input";
import { Select } from "../select";
import { Textarea } from "../textarea";
import { Form } from "./";
import type { Meta } from "@storybook/react";

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
    bio: string;
    hoppy: string;
    address: string;
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
        <Form.Field<FormData>
          required
          name="username"
          label="Username"
          rules={{ minLength: { value: 3, message: "长度" } }}
        >
          <Input placeholder="Enter your username" />
        </Form.Field>
        <Form.Field<FormData>
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
          <Input placeholder="请输入" />
        </Form.Field>
        <Form.Field<FormData> name="bio" label="个人简介">
          <Textarea placeholder="请输入" />
        </Form.Field>
        <Form.Field<FormData> name="hoppy" label="爱好">
          <Select placeholder="请选择">
            <Select.Option value="swim">游泳</Select.Option>
            <Select.Option value="run">跑步</Select.Option>
          </Select>
        </Form.Field>
        <Form.Field<FormData> name="address" label="住址">
          <AutoComplete />
        </Form.Field>

        <Button type="submit">提交</Button>
      </Form>
    </div>
  );
};

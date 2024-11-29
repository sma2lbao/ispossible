import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./";
import { Space } from "../space";
import "@design/icon/user";
import "@design/icon/search";

const meta = {
  title: "Input 输入框",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 */
// export const 基本用法 = () => (
//   <div style={{ width: 300 }}>
//     <Space direction="y">
//       <Input prefix={<is-user />} placeholder="测试" clearable />
//       <Input suffix={<is-search />} placeholder="测试" />
//     </Space>
//   </div>
// );

const InputTest = (props: any) => {
  const [rawValue, setRawValue] = useState(props.value || "");

  useEffect(() => {
    setRawValue(props.value);
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRawValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleCompositionStart = (
    e: React.CompositionEvent<HTMLInputElement>
  ) => {
    // 处理中文输入的开始
  };

  const handleCompositionUpdate = (
    e: React.CompositionEvent<HTMLInputElement>
  ) => {
    // 处理中文输入的实时更新
  };

  const handleCompositionEnd = (
    e: React.CompositionEvent<HTMLInputElement>
  ) => {
    console.log("join");
    // 处理中文输入完成
    setRawValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <input
      value={rawValue}
      onChange={handleChange}
      onCompositionStart={handleCompositionStart}
      onCompositionUpdate={handleCompositionUpdate}
      onCompositionEnd={handleCompositionEnd}
    />
  );
};

export const 受控 = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <Input value={value} onChange={(value) => setValue(value)} />
      {/* <InputTest
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      /> */}
    </div>
  );
};

// export const 禁用 = () => {
//   return (
//     <div>
//       <Input disabled />
//     </div>
//   );
// };

// export const 前后置标签 = () => {
//   return <Input addonBefore="http://" addonAfter=".com" clearable />;
// };

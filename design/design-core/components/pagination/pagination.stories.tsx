import React, { useState } from "react";
import { Pagination } from "./";
import type { Meta } from "@storybook/react";

/**
 * 采用分页控制单页内的信息数量，也可进行页面跳转。
 */
const meta = {
  title: "Pagination 分页",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;

export const 基本用法 = () => {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      page={current}
      total={160}
      onPageChange={(page) => setCurrent(page)}
    />
  );
};

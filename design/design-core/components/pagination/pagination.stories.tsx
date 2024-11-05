import { Pagination } from "./";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      page={current}
      total={160}
      onPageChange={(page) => setCurrent(page)}
    />
  );
};

import React from "react";
import { Table } from "../../components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Table 表格",
  component: Table,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 代码演示 = () => {
  const columns = [
    { field: "id", title: "ID", width: 80 },
    { field: "name", title: "用户名", width: 120, align: "center" as const },
    { field: "phone", title: "手机号", width: 600 },
    {
      field: "age",
      title: "年龄",
      width: 600,
    },
  ];

  const rows = [
    { id: 1, name: "Jon", age: 14, phone: "136****1111" },
    { id: 2, name: "Cersei", age: 31, phone: "136****1112" },
    { id: 3, name: "Jaime", age: 31, phone: "136****1113" },
  ];

  return (
    <div style={{ padding: 20, height: 300 }}>
      <Table columns={columns} dataSource={rows} bordered></Table>
    </div>
  );
};

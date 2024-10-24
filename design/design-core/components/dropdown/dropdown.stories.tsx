import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";
import { Button } from "../button";
import { DropdownMenuItemProps } from "./dropdown.types";
import { Space } from "../space";

const meta = {
  title: "Dropdown 下拉框",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;

export const 基本使用 = () => {
  const menu: DropdownMenuItemProps[] = [
    { node: "title", name: "分组1" },
    {
      node: "item",
      name: "primary1",
      // type: "primary",
      // onClick: () => console.log("click primary"),
    },
    { node: "item", name: "secondary" },
    { node: "divider" },
    { node: "title", name: "分组2" },
    { node: "item", name: "tertiary" },
    { node: "item", name: "warning", active: true },
    { node: "item", name: "danger" },
  ];
  return (
    <Space>
      <Dropdown menu={menu}>
        <Button>Click me</Button>
      </Dropdown>

      <Dropdown menu={menu} showTick>
        <Button>Click me</Button>
      </Dropdown>
    </Space>
  );
};

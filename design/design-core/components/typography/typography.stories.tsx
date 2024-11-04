import type { Meta } from "@storybook/react";
import React from "react";

import { Space, Typography } from "..";

/**
 * 文本的基本格式。
 */
const meta = {
  title: "Typography 排版",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

const LOREM$XS = "Lorem ipsum dolor sit amet.";
const LOREM$SM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const LOREM$MD =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus pharetra urna in porttitor.";
const LOREM$LG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ante et enim tempor pretium. Proin sed sem vehicula, dignissim velit vel, varius turpis. Ut vel ex non lectus iaculis pretium. Nunc at tempus enim. Donec commodo placerat libero.";

/**
 * 展示不同级别的标题。
 */
export const 标题 = () => (
  <>
    <div>
      <Typography variant="display" size="lg" gutterBottom>
        {LOREM$SM}
      </Typography>
    </div>
    <div>
      <Typography variant="display" size="md">
        {LOREM$SM}
      </Typography>
    </div>
    <div>
      <Typography variant="display" size="sm" dimmed>
        {LOREM$SM}
      </Typography>
    </div>
    <div>
      <Typography variant="headline" size="lg" gutterBottom>
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="headline" size="md">
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="headline" size="sm">
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="title" size="lg">
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="title" size="md">
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="title" size="sm">
        {LOREM$MD}
      </Typography>
    </div>
    <div>
      <Typography variant="body" size="lg">
        {LOREM$LG}
      </Typography>
    </div>
    <div>
      <Typography variant="body" size="md">
        {LOREM$LG}
      </Typography>
    </div>
    <div>
      <Typography variant="body" size="sm">
        {LOREM$LG}
      </Typography>
    </div>
    <div>
      <Typography variant="label" size="lg">
        {LOREM$XS}
      </Typography>
    </div>
    <div>
      <Typography variant="label" size="md">
        {LOREM$XS}
      </Typography>
    </div>
    <div>
      <Typography variant="label" size="sm">
        {LOREM$XS}
      </Typography>
    </div>
  </>
);

export const 链接 = () => {
  return (
    <Typography.Link href="https://www.baidu.com">测试链接</Typography.Link>
  );
};

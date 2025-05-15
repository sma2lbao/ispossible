"use client";

import React from "react";
import { Button, Space, Typography } from "@design/core";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";

export interface IHeaderProps {
  title?: string;

  children?: React.ReactNode;
}

const styles = stylex.create({
  root: {
    padding: "0 24px",
    height: 80,
    display: "flex",
    alignItems: "c",
  },
});

export default function Header(props: IHeaderProps) {
  const { title } = props;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div {...stylex.props(styles.root)}>
      <Space>
        <Button icon={<is-left />} onClick={handleBack}></Button>
        <Typography variant="title" size="md">
          {title}
        </Typography>
      </Space>
    </div>
  );
}

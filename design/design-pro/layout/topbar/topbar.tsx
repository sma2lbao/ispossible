import React from "react";
import stylex from "@stylexjs/stylex";
import { Avatar, Menu } from "@design/core";

const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
    padding: "8px 24px",
    display: "flex",
    alignContent: "center",
  },
});

export interface TopbarProps {
  logo?: () => React.ReactNode | React.ReactNode;
}

export const Topbar: React.FC = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <Menu items={[]} />
      <Avatar size={50} shape="circle" />
    </div>
  );
};

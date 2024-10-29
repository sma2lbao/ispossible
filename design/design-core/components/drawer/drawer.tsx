import React from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./drawer.stylex";
import { DrawerProps } from "./drawer.types";
import "@design/icon/close";

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { title, footer, closeIcon, children } = props;

  return (
    <div {...stylex.props(styles.drawer$wrap)}>
      <div {...stylex.props(styles.drawer$mask)}></div>
      <div {...stylex.props(styles.drawer)}>
        <div {...stylex.props(styles.drawer$header)}>{title}</div>
        <div>{children}</div>
        <div {...stylex.props(styles.drawer$footer)}>{footer}</div>
      </div>
    </div>
  );
};

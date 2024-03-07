import React from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";

export interface DividerProps {
  /**
   * 水平还是垂直类型
   * @default "x"
   */
  direction: "x" | "y";

  /**
   * 分割线样式对象
   */
  style: StyleXStyles;

  children?: React.ReactNode;
}

const styles = stylex.create({
  base: {},
  horizontal: {
    display: "flex",
    clear: "both",
    width: "100%",
    minWidth: "100%",
    margin: "0.5em 0",
  },
  vertical: {},
});

export const Divider: React.FC<DividerProps> = (props) => {
  const { direction = "x", children } = props;

  return (
    <div
      {...stylex.props(
        styles.base,
        direction === "x" && styles.horizontal,
        direction === "y" && styles.vertical
      )}
    >
      {children}
    </div>
  );
};

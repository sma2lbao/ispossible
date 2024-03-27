import React from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";

export interface DividerProps {
  /**
   * 水平还是垂直类型
   * @default x
   */
  direction?: "x" | "y";

  /**
   * 分割线样式对象
   */
  style?: StyleXStyles;

  children?: React.ReactNode;
}

const styles = stylex.create({
  base: {
    clear: "both",
    fontSize: 12,
  },
  x: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0.5em 0",
    "::before": {
      content: "",
      flex: 1,
      display: "flex",
      borderBottom: "1px solid #ddd",
      marginRight: 8,
    },
    "::after": {
      content: "",
      flex: 1,
      display: "flex",
      borderBottom: "1px solid #ddd",
      marginLeft: 8,
    },
  },
  y: {
    margin: "0 0.5em",
    height: "100%",
    width: "1em",
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "column",
    "::before": {
      content: "",
      flex: 1,
      display: "flex",
      borderRight: "1px solid #ddd",
      marginBottom: 8,
    },
    "::after": {
      content: "",
      flex: 1,
      display: "flex",
      borderRight: "1px solid #ddd",
      marginTop: 8,
    },
  },
  singleX: {
    margin: "0.5em 0",
    width: "100%",
    borderBottom: "1px solid #ddd",
  },
  singleY: {
    margin: "0 0.5em",
    height: "100%",
    borderRight: "1px solid #ddd",
    width: 0,
  },
});

export const Divider: React.FC<DividerProps> = (props) => {
  const { direction = "x", children } = props;
  const hasChild = React.Children.count(children) > 0;

  return (
    <div
      {...stylex.props(
        styles.base,
        hasChild && direction === "x" && styles.x,
        hasChild && direction === "y" && styles.y,
        !hasChild && direction === "x" && styles.singleX,
        !hasChild && direction === "y" && styles.singleY
      )}
    >
      {children}
    </div>
  );
};

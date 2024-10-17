import React from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";

export interface DividerProps {
  /**
   * 水平还是垂直类型
   * @default x
   */
  direction?: "x" | "y";

  /**
   * 带内容时，内容对齐方式
   * @default center
   */
  align?: "start" | "center" | "end";

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
    verticalAlign: "middle",
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
  start: {
    "::before": {
      flex: 0.25,
    },
  },
  end: {
    "::after": {
      flex: 0.25,
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
  const { direction = "x", align = "center", children } = props;
  const hasChild = React.Children.count(children) > 0;

  const styleConfig = {
    x: {
      default: styles.x,
      single: styles.singleX,
    },
    y: {
      default: styles.y,
      single: styles.singleY,
    },
  };

  const styleNext = styleConfig[direction][hasChild ? "default" : "single"];

  return (
    <div
      {...stylex.props(
        styles.base,
        styleNext,
        align === "start" && styles.start,
        align === "end" && styles.end
      )}
    >
      {children}
    </div>
  );
};

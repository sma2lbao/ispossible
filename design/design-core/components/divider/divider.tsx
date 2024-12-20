import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./divider.stylex";
import { DividerProps } from "./divider.types";

export const Divider: React.FC<DividerProps> = (props) => {
  const {
    direction = "x",
    align = "center",
    children,
    stylex: customStylex,
  } = props;
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
        align === "end" && styles.end,
        customStylex
      )}
    >
      {children}
    </div>
  );
};

import React from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";

export interface SpaceProps {
  children: React.ReactNode;
  /**
   * 设置拆分符号
   */
  separator?: React.ReactNode;
  /**
   * 间距大小
   */
  size?: number;
  /**
   * 间距方向
   */
  direction?: "x" | "y";

  style?: StyleXStyles;
}

const styles = stylex.create({
  root: (size?: number) => ({
    display: "inline-flex",
    columnGap: size ?? 8,
    rowGap: size ?? 8,
    alignItems: "center",
  }),
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  item: {},
});

export const Space: React.FC<SpaceProps> = (props) => {
  const { children, style, separator = "|", size = 8, direction = "x" } = props;

  const isArray = Array.isArray(children);

  if (!isArray) {
    return children;
  }

  return (
    <div
      {...stylex.props(
        styles.root(size),
        direction === "y" && styles.vertical,
        style
      )}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

import React from "react";
import stylex from "@stylexjs/stylex";

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
  const { children, separator = "|", size = 8, direction = "x" } = props;

  const isArray = Array.isArray(children);

  if (!isArray) {
    return <>{children}</>;
  }

  return (
    <div
      {...stylex.props(styles.root(size), direction === "y" && styles.vertical)}
    >
      {children.map((child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
};

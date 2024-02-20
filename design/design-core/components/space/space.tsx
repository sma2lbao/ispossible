import React from "react";
import stylex from "@stylexjs/stylex";

export interface SpaceProps {
  children: React.ReactNode;
  separator?: React.ReactNode;
  size?: number;
  direction?: "x" | "y";
}

const styles = stylex.create({
  root: (size?: number) => ({
    display: "inline-flex",
    alignItems: "center",
    columnGap: size ?? 8,
    rowGap: size ?? 8,
  }),
  vertical: {
    flexDirection: "column",
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

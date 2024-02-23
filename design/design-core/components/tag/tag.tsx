import React from "react";
import stylex from "@stylexjs/stylex";

interface TagProps {
  children: React.ReactNode;
  bordered?: boolean;
  color?: string;
  icon?: React.ReactNode;
}

const styles = stylex.create({
  base: (color: string) => ({
    color,
    lineHeight: 1.25,
    padding: "0 5px",
  }),
  bordered: (borderColor: string) => ({
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: borderColor,
  }),
});

export const Tag: React.FC<TagProps> = (props) => {
  const { children, color = "red", bordered } = props;

  return (
    <span
      {...stylex.props(styles.base(color), bordered && styles.bordered(color))}
    >
      {children}
    </span>
  );
};

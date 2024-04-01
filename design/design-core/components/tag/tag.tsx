import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, radius, spacing, sizes } from "../theme/tokens.stylex";

interface TagProps {
  children: React.ReactNode;
  /**
   * 是否有边框
   */
  bordered?: boolean;
  /**
   * 标签色
   */
  color?: string;
  /**
   * 设置图标
   */
  icon?: React.ReactNode;
}

const styles = stylex.create({
  base: (color?: string) => ({
    fontSize: sizes.basic,
    color: colors.white,
    backgroundColor: color ?? colors.basic,
    borderColor: color,
    borderWidth: 1,
    borderStyle: "solid",
    lineHeight: 1.25,
    padding: "1px 8px",
    borderRadius: radius.basic,
    overflow: "hidden",
    display: "inline-flex",
    boxSizing: "border-box",
  }),
  bordered: (borderColor?: string) => ({
    color: borderColor ?? "#3a3a3a",
    borderColor: borderColor ?? "#3a3a3a",
    backgroundColor: "transparent",
  }),
  icon: {
    marginRight: 4,
    display: "inline-flex",
    alignItems: "center",
  },
  onlyIcon: {
    maskRepeat: 0,
  },
});

export const Tag: React.FC<TagProps> = (props) => {
  const { children, color, bordered = true, icon } = props;

  const isOnlyIcon = !!icon && !children;

  return (
    <span
      {...stylex.props(styles.base(color), bordered && styles.bordered(color))}
    >
      {!!icon && (
        <i {...stylex.props(styles.icon, isOnlyIcon && styles.onlyIcon)}>
          {icon}
        </i>
      )}

      {children}
    </span>
  );
};

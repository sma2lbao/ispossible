import React from "react";
import stylex from "@stylexjs/stylex";
import {
  colors,
  radiusSizes,
  spacing,
  typography,
} from "../theme/tokens.stylex";

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
  base: (color: string) => ({
    fontSize: typography.basic,
    color: colors.textInverse,
    backgroundColor: color,
    borderColor: color,
    borderWidth: 1,
    borderStyle: "solid",
    lineHeight: 1.25,
    paddingTop: spacing.xsmall,
    paddingBottom: spacing.xsmall,
    paddingLeft: spacing.basic,
    paddingRight: spacing.basic,
    borderRadius: radiusSizes.small,
  }),
  bordered: (borderColor: string) => ({
    color: borderColor,
    borderColor: borderColor,
    backgroundColor: "transparent",
  }),
  icon: {
    marginRight: spacing.xsmall,
  },
  onlyIcon: {
    maskRepeat: 0,
  },
});

export const Tag: React.FC<TagProps> = (props) => {
  const { children, color = "red", bordered, icon } = props;

  const isOnlyIcon = !!icon && !children;

  return (
    <span
      {...stylex.props(styles.base(color), bordered && styles.bordered(color))}
    >
      <i {...stylex.props(styles.icon, isOnlyIcon && styles.onlyIcon)}>
        {icon}
      </i>
      {children}
    </span>
  );
};

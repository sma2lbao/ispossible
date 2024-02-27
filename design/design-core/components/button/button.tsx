import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, spacing } from "../theme/tokens.stylex";

export interface ButtonProps {
  /**
   * 设置按钮类型
   */
  type?: "primary" | "text" | "link";
  /**
   * 设置按钮类型
   */
  children?: React.ReactNode;
  /**
   * 设置按钮失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 设置按钮的图标组件
   */
  icon?: React.ReactNode;
  /**
   * 设置按钮载入状态
   */
  loading?: boolean;
  /**
   * 幽灵属性，使按钮背景透明
   */
  ghost?: boolean;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href?: string;
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   * @default _blank
   */
  target?: string;
  /**
   * 点击按钮时的回调
   */
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const styles = stylex.create({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: spacing.small,
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  disabled: {
    pointerEvents: "none",
    cursor: "not-allowed",
  },
  onlyIcon: {
    borderRadius: "50%",
    fontSize: "24px",
    backgroundColor: "transparent",
    color: "inherit",
  },
  primary: {
    color: "#fff",
    backgroundColor: colors.primary,
  },
  default: {
    color: colors.text,
  },
  text: {
    color: colors.text,
  },
  link: {
    color: colors.link,
  },
});

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      type = "default",
      disabled = false,
      icon,
      loading,
      ghost,
      href,
      target = "_blank",
      onClick,
    } = props;

    const onlyIcon = !!icon && !children;

    const handleClick: React.MouseEventHandler<Element> = (
      e: React.MouseEvent<Element, MouseEvent>
    ) => {
      if (href) {
        e.preventDefault();
        window.open(href, target);
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        {...stylex.props(
          styles.base,
          styles[type],
          disabled && styles.disabled,
          ghost && styles.ghost,
          onlyIcon && styles.onlyIcon
        )}
      >
        {loading ? "..." : icon}
        {children}
      </button>
    );
  }
);

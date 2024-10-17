import React from "react";
import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { colors, radius, spacing, animation } from "../theme/tokens.stylex";
import "@design/icon/loading";

type HostHTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLElement>,
  "type" | "style"
>;
export interface ButtonProps extends HostHTMLButtonProps {
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

  style?: StyleXStyles;

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
    padding: spacing.basic,
    border: "none",
    borderRadius: radius.basic,
    boxSizing: "border-box",
    minWidth: 32,
    minHeight: 32,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  disabled: {
    color: colors.secondary,
    cursor: "not-allowed",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  onlyIcon: {
    borderRadius: "50%",
    fontSize: "24px",
    backgroundColor: "transparent",
    color: "inherit",
    ":hover": {},
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.primary,
    ":hover": {},
  },
  default: {
    color: colors.basic,
    backgroundColor: colors.background,
    ":hover": {},
  },
  text: {
    color: colors.basic,
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: colors.background,
    },
  },
  link: {
    color: colors.link,
    backgroundColor: "transparent",

    ":hover": {
      textDecoration: "underline",
    },
  },
  iconContainer: {
    marginRight: 4,
    display: "inline-flex",
    alignItems: "center",
  },
  loading: {
    animationName: animation.spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
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
      style,
      ...rest
    } = props;

    const onlyIcon = !!icon && !children;
    const hasIcon = !!icon || loading;

    const handleClick: React.MouseEventHandler<Element> = (
      e: React.MouseEvent<Element, MouseEvent>
    ) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
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
          ghost && styles.ghost,
          onlyIcon && styles.onlyIcon,
          (disabled || loading) && styles.disabled,
          style
        )}
        {...rest}
      >
        {hasIcon && (
          <span {...stylex.props(styles.iconContainer)}>
            {loading ? <is-loading {...stylex.attrs(styles.loading)} /> : icon}
          </span>
        )}
        {children}
      </button>
    );
  }
);

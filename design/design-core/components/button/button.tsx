import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, spacing } from "../theme/tokens.stylex";

export interface ButtonProps {
  type?: "primary" | "text" | "link";
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  ghost?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler;
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
    color: "#fff",
  },
  primary: {
    color: "#fff",
    backgroundColor: colors.primary,
  },
  default: {
    color: colors.text,
  },
  text: {},
  link: {},
});

const ButtonInternal: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  const {
    children,
    type = "default",
    disabled = false,
    icon,
    loading,
    ghost,
    href,
    onClick,
  } = props;

  const onlyIcon = !!icon && !children;

  const handleClick: React.MouseEventHandler<Element> = (
    e: React.MouseEvent<Element, MouseEvent>
  ) => {
    if (href) {
      window.open(href);
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
};

export const Button = React.forwardRef(ButtonInternal);

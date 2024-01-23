import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, spacing } from "../theme/tokens.stylex";
import "@design/icon/arrow-down";
import { useTheme } from "../theme";

export interface ButtonProps {
  type?: "primary" | "text" | "link";
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const styles = stylex.create({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    padding: spacing.small,
  },
  disabled: {
    pointerEvents: "none",
    cursor: "not-allowed",
  },
  primary: {
    color: colors.primary,
  },
  text: {},
  link: {},
});

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, type = "primary", disabled = false, icon, loading } = props;

  return (
    <button
      {...stylex.props(styles.base, styles[type], disabled && styles.disabled)}
    >
      <is-arrow-down />
      {loading ? "..." : icon}
      {children}
    </button>
  );
};

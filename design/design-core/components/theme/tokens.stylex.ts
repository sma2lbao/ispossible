import stylex from "@stylexjs/stylex";

// 间隔
export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

// 配色
export const colors = stylex.defineVars({
  primary: "blue",
  secondary: "gray",
  success: "green",
  warning: "yellow",
  danger: "red",
});

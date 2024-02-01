import stylex from "@stylexjs/stylex";

// 间隔
export const spacing = stylex.defineVars({
  basic: "8px",
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});

// 尺寸
export const typography = stylex.defineVars({
  basic: "14px",
  h1: "38px",
  h2: "30px",
  h3: "24px",
  h4: "20px",
  h5: "16px",
  small: "12px",
});

// radius
export const radiusSizes = stylex.defineVars({
  basic: "6px",
});

// 配色
export const colors = stylex.defineVars({
  primary: "blue",
  secondary: "gray",
  success: "green",
  warning: "yellow",
  danger: "red",
  error: "red",
  link: "blue",
  text: "#333",
  textInverse: "#fff",
  background: {
    default: "#f6f6f6",
  },
  backgroundInverse: {
    default: "#000",
  },
  border: "#ddd",
});

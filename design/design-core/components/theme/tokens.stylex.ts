import stylex from "@stylexjs/stylex";

// 间隔
export const spacing = stylex.defineVars({
  basic: "8px",
  xsmall: "3px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
} as const);

// 尺寸
export const typography = stylex.defineVars({
  h1: "38px",
  h2: "30px",
  h3: "24px",
  h4: "20px",
  h5: "16px",
  h6: "14px",
  basic: "14px",
  small: "12px",
  medium: "16px",
  large: "20px",
  xlarge: "24px",
  xxlarge: "30px",
  xxxlarge: "38px",
} as const);

// 行高
export const lineHeight = stylex.defineVars({
  h1: "46px",
  h2: "38px",
  h3: "32px",
  h4: "28px",
  h5: "24px",
  h6: "22px",
  basic: "22px",
  small: "20px",
  medium: "24px",
  large: "28px",
  xlarge: "32px",
  xxlarge: "38px",
  xxxlarge: "46px",
} as const);

// radius
export const radiusSizes = stylex.defineVars({
  basic: "4px",
  small: "2px",
  medium: "4px",
  large: "6px",
  xlarge: "10px",
  xxlarge: "16px",
  xxxlarge: "20px",
} as const);

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
  text2nd: "#666",
  text3rd: "#999",
  background: {
    default: "#f6f6f6",
  },
  backgroundInverse: {
    default: "#000",
  },
  border: "#ddd",
} as const);

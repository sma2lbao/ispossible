import stylex from "@stylexjs/stylex";

export const topbar = stylex.defineVars({
  height: "52px",
});

export const radius = stylex.defineVars({
  none: "0",
  basic: "4px",
});

export const spacing = stylex.defineVars({
  none: "0",
  basic: "8px",
});

export const shadow = stylex.defineVars({
  none: "0",
  basic: "",
});

// TODO 颜色细分
// primary  primary-hover primary-active  primary-disabled  link-visited

export const colors = stylex.defineVars({
  basic: "#3a3a3a",
  primary: "blue",
  secondary: "gray",
  success: "green",
  warning: "yellow",
  error: "red",
  link: "blue",
  background: "#f6f6f6",
  border: "#ddd",
  white: "#fff",
  black: "#000",
});

export const sizes = stylex.defineVars({
  none: "0",
  basic: "14px",
});

export const lineHeight = stylex.defineVars({
  none: "0",
  basic: "1.4em",
});

const spin = stylex.keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

export const animation = stylex.defineVars({
  spin: spin,
});

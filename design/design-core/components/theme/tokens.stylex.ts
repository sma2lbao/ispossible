import stylex from "@stylexjs/stylex";

export const topbar = stylex.defineVars({
  height: "52px",
} as const);

export const radius = stylex.defineVars({
  none: "0",
  basic: "4px",
} as const);

export const spacing = stylex.defineVars({
  none: "0",
  basic: "8px",
} as const);

export const shadow = stylex.defineVars({
  none: "0",
  basic: "",
} as const);

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
} as const);

export const sizes = stylex.defineVars({
  none: "0",
  basic: "14px",
} as const);

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

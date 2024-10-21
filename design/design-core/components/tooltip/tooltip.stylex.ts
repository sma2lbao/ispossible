import stylex from "@stylexjs/stylex";

export const tokens = stylex.defineVars({
  color: "#ffffff",
  bgColor: "#000000",
  borderWidth: "6px",
});

export const light = stylex.createTheme(tokens, {
  color: "#000000",
  bgColor: "#ffffff",
  borderWidth: "6px",
});

export const styles = stylex.create({
  root: {
    position: "absolute",
    color: tokens.color,
    backgroundColor: tokens.bgColor,
    borderRadius: "4px",
    padding: "8px",
    inset: "0 auto auto 0",
    fontSize: 14,
    lineHeight: 1.4,
    boxShadow:
      "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  },
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: tokens.borderWidth,
  },
  top: {
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    borderBottomWidth: 0,
    borderTopColor: tokens.bgColor,
  },
  bottom: {
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    borderTopWidth: 0,
    borderBottomColor: tokens.bgColor,
  },
  left: {
    top: "50%",
    left: "100%",
    transform: "translateY(-50%)",
    borderRightWidth: 0,
    borderLeftColor: tokens.bgColor,
  },
  right: {
    top: "50%",
    right: "100%",
    transform: "translateY(-50%)",
    borderLeftWidth: 0,
    borderRightColor: tokens.bgColor,
  },
  "top-left": {
    top: "100%",
    left: "0",
    transform: "translateX(100%)",
    borderBottomWidth: 0,
    borderTopColor: tokens.bgColor,
  },
  "top-right": {
    top: "100%",
    right: "0",
    transform: "translateX(-100%)",
    borderBottomWidth: 0,
    borderTopColor: tokens.bgColor,
  },
  "bottom-left": {
    bottom: "100%",
    left: 0,
    transform: "translateX(100%)",
    borderTopWidth: 0,
    borderBottomColor: tokens.bgColor,
  },
  "bottom-right": {
    bottom: "100%",
    right: 0,
    transform: "translateX(-100%)",
    borderTopWidth: 0,
    borderBottomColor: tokens.bgColor,
  },
  "left-top": {
    top: "50%",
    left: "100%",
    transform: "translateY(-50%)",
    borderRightWidth: 0,
    borderLeftColor: tokens.bgColor,
  },
  "left-bottom": {
    top: "50%",
    left: "100%",
    transform: "translateY(-50%)",
    borderRightWidth: 0,
    borderLeftColor: tokens.bgColor,
  },
  "right-top": {
    top: "50%",
    right: "100%",
    transform: "translateY(-50%)",
    borderLeftWidth: 0,
    borderRightColor: tokens.bgColor,
  },
  "right-bottom": {
    top: "50%",
    right: "100%",
    transform: "translateY(-50%)",
    borderLeftWidth: 0,
    borderRightColor: tokens.bgColor,
  },
});

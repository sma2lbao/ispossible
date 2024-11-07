import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";

export const styles = stylex.create({
  checkbox: {
    boxSizing: "border-box",
    fontSize: "14px",
    lineHeight: "20px",
    listStyle: "none",
    display: "flex",
    alignItems: "flex-start",
    position: "relative",
    cursor: "pointer",
    columnGap: "8px",
  },
  checkbox$inner: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "16px",
    height: "20px",
    userSelect: "none",
    cursor: "pointer",
  },
  checkbox$host: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    margin: 0,
  },
  checkbox$inner$display: {
    boxSizing: "border-box",
    position: "relative",
    width: "16px",
    height: "16px",
    margin: 0,
    backgroundColor: "transparent",
    borderRadius: "3px",

    ["::after"]: {
      content: "",
      boxSizing: "border-box",
      position: "absolute",
      top: "50%",
      insetInlineStart: "25%",
      display: "table",
      width: "calc(16px / 14 * 5)",
      height: "calc(16px / 14 * 8)",
      border: "2px solid #fff",
      borderTop: 0,
      borderInlineStart: 0,
      opacity: 0,
      transform: "rotate(45deg) scale(0) translate(-50%, -50%)",
    },
  },
  checkbox$inner$display$indeterminate: {
    ["::after"]: {
      width: "calc(16px / 14 * 8)",
      height: "2px",
      border: "none",
    },
  },
  checkbox$inner$display$checked: {
    backgroundColor: colors.primary,
    color: "#fff",

    ["::after"]: {
      opacity: 1,
      transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
    },
  },
  checkbox$content: {
    flex: "1 1",
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
  },
  checkbox$addon: {
    display: "flex",
    flex: "1 1",
    alignItems: "center",
    color: "rgba(28,31,35,1)",
    lineHeight: "20px",
    userSelect: "none",
  },
});

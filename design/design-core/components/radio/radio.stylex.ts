import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export const styles = stylex.create({
  radio$group: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  radio$group$x: {
    display: "inline-flex",
    flexWrap: "wrap",
    verticalAlign: "bottom",
    gap: "16px",
  },
  radio$group$y: {
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
  },
  radio: {
    boxSizing: "border-box",
    fontSize: "14px",
    lineHeight: "20px",
    position: "relative",
    display: "inline-flex",
    columnGap: "8px",
    minHeight: "20px",
    minWidth: "16px",
    cursor: "pointer",
    verticalAlign: "bottom",
    textAlign: "left",
  },
  radio$inner: {
    display: "inline-flex",
    marginTop: "2px",
    position: "relative",
    width: "16px",
    height: "16px",
    verticalAlign: "sub",
    userSelect: "none",
  },
  radio$inner$checked: {},
  radio$host: {
    position: "absolute",
    inset: 0,
    margin: 0,
    cursor: "pointer",
    opacity: 0,
  },
  radio$inner$display: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    width: "16px",
    height: "16px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(28,31,35,.35)",
    borderRadius: "16px",
    backgroundColor: "transparent",

    ["::after"]: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      opacity: 0,
      transform: "scale(0)",
      backgroundColor: "#fff",
      content: "",
    },
  },

  radio$inner$display$checked: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,

    ["::after"]: {
      opacity: 1,
      transform: "scale(calc(6 / 16))",
    },
  },
  radio$content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "4px",
  },
  radio$addon: {
    userSelect: "none",
    color: "rgba(28,31,35,1)",
    display: "inline-flex",
    alignItems: "center",
  },
});

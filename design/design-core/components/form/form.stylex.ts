import stylex from "@stylexjs/stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  form: {},
  form$field: {
    margin: 0,
    paddingTop: spacings.padding$3,
    paddingBottom: spacings.padding$3,
    overflow: "hidden",
  },
  form$field$label: {
    display: "block",
    textAlign: "left",
    boxSizing: "border-box",
    fontWeight: 600,
    color: "rgba(28,31,35,1)",
    marginBottom: "4px",
    marginTop: 0,
    paddingRight: spacings.padding$4,
    verticalAlign: "middle",
    fontSize: "14px",
    lineHeight: "20px",
  },
  form$field$label$required: {
    ["::after"]: {
      content: "*",
      marginLeft: "4px",
      color: "rgba(249,57,32,1)",
      fontWeight: 600,
    },
  },
  form$field$main: {
    width: "100%",
  },
  form$field$message: {
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
  },
  form$field$message$error: {
    color: "rgba(249,57,32,1)",
    fontSize: "14px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
  },
  form$field$status$icon: {
    fontSize: "16px",
    marginRight: "4px",
    alignSelf: "flex-start",
    position: "relative",
    top: "2px",
    flexShrink: 0,
  },
});

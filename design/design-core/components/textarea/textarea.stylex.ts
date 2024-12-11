import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  textarea: {
    width: "100%",
    fontSize: "14px",
    lineHeight: "20px",
    boxShadow: "none",
    color: "rgba(28,31,35,1)",
    display: "inline-flex",
    boxSizing: "border-box",
    border: "1px solid transparent",
    borderRadius: shapes.corner$xs,
    backgroundColor: "rgba(46,50,56,.05)",
  },
  textarea$focus: {
    border: "1px solid rgba(0,100,250, 1)",
    // backgroundColor: "rgba(46,50,56,.13)",
  },
  textarea$host: {
    backgroundColor: "transparent",
    border: "0 solid transparent",
    width: "100%",
    boxSizing: "border-box",
    padding: `${spacings.padding$2} ${spacings.padding$3}`,
    outline: "none",
    resize: "none",
    height: "100%",
    fontFamily:
      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif",
  },
});

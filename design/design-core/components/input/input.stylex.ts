import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const tokens = stylex.defineVars({});

export const styles = stylex.create({
  input: {
    height: "32px",
    lineHeight: "30px",
    fontSize: "14px",
    display: "inline-flex",
    alignItems: "center",
    position: "relative",
    verticalAlign: "middle",
    boxShadow: "none",
    borderBlockColor: "rgba(46,50,56,.05)",
    backgroundColor: "rgba(46,50,56,.05)",
    border: "1px solid transparent",
    borderRadius: shapes.corner$xs,
    width: "100%",
    outline: "none",
    cursor: "text",
    boxSizing: "border-box",
    color: "rgba(28,31,35,1)",
  },
  input$clear: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minWidth: "32px",
    cursor: "pointer",
    color: "rgba(28,31,35,.62)",
    fontSize: "16px",
  },
  input$focus: {
    // backgroundColor: "rgba(46,50,56,.13)",
    borderColor: "rgba(0,100,250, 1)",
  },
  input$disabled: {
    backgroundColor: "rgba(46,50,56,.04)",
    cursor: "not-allowed",
    color: "rgba(28,31,35,.35)",
  },
  input$display$wrap: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input$display: (hasPrefix: boolean, hasSuffix: boolean) => ({
    height: "30px",
    lineHeight: "30px",
    fontSize: "14px",
    border: "none",
    outline: "none",
    width: "100%",
    color: "inherit",
    paddingLeft: hasPrefix ? 0 : spacings.padding$3,
    paddingRight: hasSuffix ? 0 : spacings.padding$3,
    backgroundColor: "transparent",
    boxSizing: "border-box",
  }),
  input$addon$container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: "rgba(28,31,35,.62)",
    padding: `0 ${spacings.padding$3}`,
  },
  input$stitch$container: {
    color: "rgba(28,31,35,.62)",
    margin: "0 8px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "16px",
  },
});

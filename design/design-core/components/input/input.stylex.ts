import stylex from "@stylexjs/stylex";

export const tokens = stylex.defineVars({});

export const styles = stylex.create({
  input: {
    height: "32px",
    lineHeight: "32px",
    fontSize: "14px",
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    boxShadow: "none",
    borderBlockColor: "rgba(46,50,56,.05)",
    border: "1px solid transparent",
    borderRadius: "3px",
    width: "100%",
    outline: "none",
    cursor: "text",
    boxSizing: "border-box",
    color: "rgba(28,31,35,1)",

    [":focus"]: {
      backgroundColor: "rgba(46,50,56,.13)",
      borderColor: "rgba(0,100,250, 1)",
    },
  },
  input$disabled: {
    backgroundColor: "rgba(46,50,56,.04)",
    cursor: "not-allowed",
    color: "rgba(28,31,35,.35)",
  },
  input$display: {
    height: "30px",
    lineHeight: "30px",
    fontSize: "14px",
    border: "none",
    outline: "none",
    width: "100%",
    color: "inherit",
    paddingLeft: "12px",
    paddingRight: "12px",
    backgroundColor: "transparent",
    boxSizing: "border-box",
  },
});

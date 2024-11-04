import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  base: {
    clear: "both",
    fontSize: 12,
  },
  x: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "0.5em 0",
    "::before": {
      content: "",
      flex: 1,
      display: "flex",
      borderBottom: "1px solid #ddd",
      marginRight: 8,
    },
    "::after": {
      content: "",
      flex: 1,
      display: "flex",
      borderBottom: "1px solid #ddd",
      marginLeft: 8,
    },
  },
  y: {
    margin: "0 0.5em",
    height: "100%",
    width: "1em",
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "column",
    verticalAlign: "middle",
    "::before": {
      content: "",
      flex: 1,
      display: "flex",
      borderRight: "1px solid #ddd",
      marginBottom: 8,
    },
    "::after": {
      content: "",
      flex: 1,
      display: "flex",
      borderRight: "1px solid #ddd",
      marginTop: 8,
    },
  },
  start: {
    "::before": {
      flex: 0.25,
    },
  },
  end: {
    "::after": {
      flex: 0.25,
    },
  },
  singleX: {
    margin: "0.5em 0",
    width: "100%",
    borderBottom: "1px solid #ddd",
  },
  singleY: {
    margin: "0 0.5em",
    height: "100%",
    borderRight: "1px solid #ddd",
    width: 0,
  },
});

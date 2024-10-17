import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: {
    width: 240,
    display: "inline-flex",
    borderRight: "1px solid rgba(28,31,35,.08)",
  },
  inner: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    direction: "column",
  },
  subRoot: {},
  subTitle: {
    display: "flex",
    justifyContent: "flex-start",
    height: "36px",
    alignItems: "center",
  },
  item: {
    height: 36,
    cursor: "pointer",
    display: "flex",
    padding: "8px 12px",
    fontSize: "14px",
    lineHeight: "20px",
  },
});

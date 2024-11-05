import stylex from "@stylexjs/stylex";
import { RowAlignType, RowJustifyType, SpanNumber } from "./grid.types";

export const styles = stylex.create({
  row: {
    display: "block",
    boxSizing: "border-box",
    position: "relative",
    height: "auto",
    marginRight: 0,
    marginLeft: 0,
    zoom: 1,
    textAlign: "center",

    ["::before"]: {
      content: "",
      display: "table",
    },
    ["::after"]: {
      content: "",
      display: "table",
      clear: "both",
    },
  },
  row$flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row$flex$justify: (justify: React.CSSProperties["justifyContent"]) => ({
    justifyContent: justify,
  }),
  row$flex$align: (align: React.CSSProperties["alignItems"]) => ({
    alignItems: align,
  }),
  row$gutter: (gutter: [number, number]) => ({
    margin: `-${gutter[1] / 2}px -${gutter[0] / 2}px`,
  }),
  col: {
    display: "block",
    boxSizing: "border-box",

    minHeight: "30px",
    lineHeight: "30px",
    backgroundColor: "rgba(234,245,255, 1)",
    outline: "1px solid rgba(152,205,253, 1)",
  },

  col$gutter: (gutter: [number, number]) => ({
    padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
  }),

  col$span: (number?: SpanNumber) => ({
    float: "left",
    width: `${((number || 0) / 24) * 100}%`,
  }),

  col$offset: (number?: SpanNumber) => ({
    marginLeft: `${((number || 0) / 24) * 100}%`,
  }),

  col$pull: (number?: SpanNumber) => ({
    insetInlineEnd: `${((number || 0) / 24) * 100}%`,
  }),
  col$push: (number?: SpanNumber) => ({
    insetInlineStart: `${((number || 0) / 24) * 100}%`,
  }),
});

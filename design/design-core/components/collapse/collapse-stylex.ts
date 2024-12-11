import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  collapse: {},
  collapse$panel: {
    borderBottom: "1px solid rgba(28,31,35,.08)",
  },
  collapse$panel$header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacings.padding$2,
    margin: "4px 8px",
    color: "rgba(28,31,35,1)",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    cursor: "pointer",
    outline: "none",
    borderRadius: shapes.corner$xs,

    [":hover"]: {
      backgroundColor: "rgba(46,50,56,.05)",
    },
  },
  collapse$panel$header$disabled: {
    cursor: "not-allowed",
    color: "rgba(28,31,35,.35)",
  },
  collapse$panel$header$right: {
    display: "flex",
    alignItems: "center",
  },
  collapse$panel$header$icon: {
    width: "16px",
    height: "16px",
    color: "rgba(28,31,35,.62)",
  },
  collapse$panel$content: {
    padding: `${spacings.padding$1} ${spacings.padding$4} ${spacings.padding$2}`,
    color: "rgba(28,31,35,.8)",
    fontSize: "14px",
    lineHeight: "20px",
  },
  collapse$pane$hidden: {
    display: "none",
  },
});

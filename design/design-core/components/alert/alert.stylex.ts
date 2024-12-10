import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";

export const styles = stylex.create({
  alert: {
    padding: "12px",
  },
  alert$info: {
    backgroundColor: colors.primaryContainer,
    color: colors.primary,
  },
  alert$warning: {
    backgroundColor: colors.warnContainer,
    color: colors.warn,
  },
  alert$error: {
    backgroundColor: colors.errorContainer,
    color: colors.error,
  },
  alert$success: {
    backgroundColor: colors.successContainer,
    color: colors.success,
  },
  alert$border$info: {
    borderRadius: shapes.corner$xs,
    border: "1px solid rgba(152,205,253, 1)",
  },
  alert$border$warning: {
    borderRadius: shapes.corner$xs,
    border: "1px solid rgba(254,217,152,1)",
  },
  alert$border$error: {
    borderRadius: shapes.corner$xs,
    border: "1px solid rgba(253,183,165,1)",
  },
  alert$border$success: {
    borderRadius: shapes.corner$xs,
    border: "1px solid rgba(164,224,167,1)",
  },
  alert$content$warp: {
    display: "flex",
    flexDirection: "row",
  },
  alert$content: {
    display: "flex",
    flex: "1 1",
    justifyContent: "center",
  },
  alert$content$start: {
    justifyContent: "flex-start",
  },
  alert$content$body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  alert$icon: {
    display: "flex",
    alignItems: "center",
    marginRight: "12px",
    fontSize: "20px",
    marginTop: "-2px",
  },
  alert$content$title: {
    color: "rgba(28,31,35,1)",
  },
  alert$content$description: {
    color: "rgba(28,31,35,1)",
  },
  alert$close: {
    padding: "4px",
    height: "24px",
  },
});

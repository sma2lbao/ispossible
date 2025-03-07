import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";

export const styles = stylex.create({
  avatar$group: {
    display: "inline-flex",
  },
  avatar: (size: number) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textAlign: "center",
    width: size,
    height: size,
    borderRadius: shapes.corner$xs,
    overflow: "hidden",
    verticalAlign: "middle",
    cursor: "pointer",
  }),
  avatar$grey: {
    backgroundColor: "rgb(167,171,176)",
    color: "#fff",
  },
  avatar$circle: {
    borderRadius: shapes.corner$circle,
  },
  avatar$border: {
    border: "1px solid #fff",
  },
  avatar$margin$left: (size: number) => ({
    marginLeft: `-${size}px`,
  }),
  avatar$content: {
    userSelect: "none",
  },
  avatar$label: {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "28px",
  },
  avatar$image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "transparent",
  },
});

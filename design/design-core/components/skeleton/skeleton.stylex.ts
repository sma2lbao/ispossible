import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  skeleton: {
    display: "grid",
    gridAutoRows: "auto",
    gridGap: "10px",
  },
  skeleton$title: (width: string | number, height?: string | number) => ({
    width,
    height: height ?? 24,
    backgroundColor: "#ddd",
    borderRadius: shapes.corner$sm,
  }),
  skeleton$text: (width: string, height?: string | number) => ({
    height: height ?? 16,
    backgroundColor: "#ddd",
    borderRadius: 4,
    width: width || "100%",
    margin: 0,
    marginBottom: spacings["margin$1.5"],
  }),
  skeleton$button: (width: string | number, height?: string | number) => ({
    display: "inline-block",
    width,
    borderRadius: 6,
    backgroundColor: "#ddd",
    height: height ?? 36,
  }),
  skeleton$button$circle: (width: string | number) => ({
    width,
    height: width,
    borderRadius: "50%",
  }),
  skeleton$avatar: (size: number, shape: "circle" | "square") => ({
    width: size || 80,
    height: size || 80,
    borderRadius: shape === "square" ? shapes.corner$circle : shapes.corner$sm,
    backgroundColor: "#ddd",
    display: "inline-block",
  }),
  skeleton$image: (
    aspectRatio: number,
    width: string | number,
    height?: string | number
  ) => ({
    aspectRatio,
    width,
    height,
    display: "inline-block",
    backgroundColor: "#ddd",
    borderRadius: 6,
  }),
});

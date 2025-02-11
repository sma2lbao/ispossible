import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  skeleton: {
    display: "grid",
    gridTemplateColumns: "1fr 200px",
    gridTemplateRows: "30px 120px",
    gridAutoFlow: "column dense",
    gridGap: "10px 20px",
  },
  skeleton$title: (width: string | number) => ({
    width,
    height: 18,
    backgroundColor: "#ddd",
  }),
  skeleton$text: (width: string) => ({
    height: 16,
    backgroundColor: "#ddd",
    borderRadius: 4,
    width: width || "100%",
    margin: 0,
    marginBottom: spacings["margin$1.5"],
  }),
  skeleton$button: (width: string | number) => ({
    display: "inline-block",
    width,
    borderRadius: 6,
    backgroundColor: "#ddd",
    height: 36,
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

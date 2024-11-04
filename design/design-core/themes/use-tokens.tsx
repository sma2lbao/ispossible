import { colors } from "./tokens/color.stylex";
import { densitys } from "./tokens/density.stylex";
import { palettes } from "./tokens/palette.stylex";
import { scales } from "./tokens/scale.stylex";
import { shapes } from "./tokens/shape.stylex";
import { spacings } from "./tokens/spacing.stylex";
import { typeFaces } from "./tokens/type-face.stylex";
import { typeScales } from "./tokens/type-scale.stylex";
import { zIndexs } from "./tokens/z-index.stylex";
import { animation } from "./tokens/animation.stylex";

export function useTokens() {
  return {
    colors,
    densitys,
    palettes,
    scales,
    shapes,
    spacings,
    typeFaces,
    typeScales,
    zIndexs,
    animation,
  };
}

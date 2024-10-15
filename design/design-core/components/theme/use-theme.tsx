import {
  colors,
  sizes,
  spacing,
  shadow,
  radius,
  lineHeight,
  topbar,
} from "./tokens.stylex";

export type Colors = typeof colors;

export type Sizes = typeof sizes;

export type Spacing = typeof spacing;

export type Shadow = typeof shadow;

export type Radius = typeof radius;

export type LineHeight = typeof lineHeight;

export type Topbar = typeof topbar;

export type Theme = ReturnType<typeof useTheme>;

export function useTheme() {
  return {
    colors,
    spacing,
    sizes,
    shadow,
    radius,
    lineHeight,
    topbar,
  };
}

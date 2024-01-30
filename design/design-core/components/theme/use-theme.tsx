import { colors, spacing } from "./tokens.stylex";

export type Colors = typeof colors;

export type Spacing = typeof spacing;

export type Theme = ReturnType<typeof useTheme>;

export function useTheme() {
  return {
    colors,
    spacing,
  };
}

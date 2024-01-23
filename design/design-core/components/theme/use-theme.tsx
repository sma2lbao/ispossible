import { colors, spacing } from "./tokens.stylex";

export function useTheme() {
  console.log("colors:", colors);
  console.log("spacing: ", spacing);
  return {
    colors,
    spacing,
  };
}

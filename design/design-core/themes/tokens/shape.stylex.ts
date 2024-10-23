import stylex from "@stylexjs/stylex";

import { scales } from "./scale.stylex";

export const shapes = stylex.defineVars({
  corner$full: "999px",

  corner$xl: `calc(28px * ${scales.scale})`,
  cornerTop$xl: `calc(28px * ${scales.scale}) calc(28px * ${scales.scale}) 0 0`,

  corner$lg: `calc(16px * ${scales.scale})`,
  cornerStart$lg: `calc(16px * ${scales.scale}) 0 0 calc(16px * ${scales.scale})`,
  cornerEnd$lg: `0 calc(16px * ${scales.scale}) calc(16px * ${scales.scale}) 0`,
  cornerTop$lg: `calc(16px * ${scales.scale}) calc(16px * ${scales.scale}) 0 0`,

  corner$md: `calc(12px * ${scales.scale})`,

  corner$sm: `calc(8px * ${scales.scale})`,

  corner$xs: `calc(6px * ${scales.scale})`,
  cornerTop$xs: `calc(6px * ${scales.scale}) calc(6px * ${scales.scale}) 0 0`,
  cornerBottom$xs: `0 0 calc(6px * ${scales.scale}) calc(6px * ${scales.scale})`,

  corner$none: "0px",
});

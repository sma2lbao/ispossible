import stylex from "@stylexjs/stylex";

import { scales } from "./scale.stylex";

export const shapes = stylex.defineVars({
  corner$full: "999px", // 用于创建全尺寸圆角，如胶囊标签等
  corner$circle: "50%", // 全圆角
  corner$xl: `calc(28px * ${scales.scale})`,
  corner$xl$top: `calc(28px * ${scales.scale}) calc(28px * ${scales.scale}) 0 0`,
  corner$lg: `calc(16px * ${scales.scale})`,
  corner$lg$end: `0 calc(16px * ${scales.scale}) calc(16px * ${scales.scale}) 0`,
  corner$lg$top: `calc(16px * ${scales.scale}) calc(16px * ${scales.scale}) 0 0`,
  corner$md: `calc(12px * ${scales.scale})`,
  corner$sm: `calc(6px * ${scales.scale})`,
  corner$xs: `calc(3px * ${scales.scale})`,
  corner$none: "0px",
});

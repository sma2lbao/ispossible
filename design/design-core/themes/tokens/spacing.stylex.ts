import stylex from "@stylexjs/stylex";

import { scales } from "./scale.stylex";

const PADDING_UNIT = "4px";
const PADDING_SCALE = `calc(${PADDING_UNIT} * ${scales.scale})`;

const MARGIN_UNIT = "8px";
const MARGIN_SCALE = `calc(${MARGIN_UNIT} * ${scales.scale})`;

export const spacings = stylex.defineVars({
  paddingScale: PADDING_SCALE,
  padding$1: `calc(${PADDING_SCALE} * 1)`,
  padding$2: `calc(${PADDING_SCALE} * 2)`,
  padding$3: `calc(${PADDING_SCALE} * 3)`,
  padding$4: `calc(${PADDING_SCALE} * 4)`,
  padding$5: `calc(${PADDING_SCALE} * 5)`,
  padding$6: `calc(${PADDING_SCALE} * 6)`,
  padding$7: `calc(${PADDING_SCALE} * 7)`,
  padding$8: `calc(${PADDING_SCALE} * 8)`,
  padding$9: `calc(${PADDING_SCALE} * 9)`,

  marginScale: MARGIN_SCALE,
  margin$1: `calc(${MARGIN_SCALE} * 1)`,
  margin$2: `calc(${MARGIN_SCALE} * 2)`,
  margin$3: `calc(${MARGIN_SCALE} * 3)`,
  margin$4: `calc(${MARGIN_SCALE} * 4)`,
  margin$5: `calc(${MARGIN_SCALE} * 5)`,
  margin$6: `calc(${MARGIN_SCALE} * 6)`,
  margin$7: `calc(${MARGIN_SCALE} * 7)`,
  margin$8: `calc(${MARGIN_SCALE} * 8)`,
});

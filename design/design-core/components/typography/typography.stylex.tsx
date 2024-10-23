import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { densitys } from "../../themes/tokens/density.stylex";
import { scales } from "../../themes/tokens/scale.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";
import { typeScales } from "../../themes/tokens/type-scale.stylex";

const MIN_DENSITY = -1;
const MAX_DENSITY = 0;
const DENSITY = `${densitys.interval} * clamp(${MIN_DENSITY}, ${densitys.density}, ${MAX_DENSITY}) * ${scales.scale}`;

export const styles = stylex.create({
  host: {
    margin: 0,
  },
  host$gutterBottom: {
    marginBottom: spacings.padding$1,
  },
  host$dimmed: {
    color: colors.onSurfaceVariant,
  },
  host$truncted: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  display$lg: {
    fontFamily: typeScales.displayFont$lg,
    fontSize: typeScales.displaySize$lg,
    fontWeight: typeScales.displayWeight$lg,
    lineHeight: `calc(${typeScales.displayLineHeight$lg} + ${DENSITY})`,
    letterSpacing: typeScales.displayLetterSpacing$lg,
  },
  display$md: {
    fontFamily: typeScales.displayFont$md,
    fontSize: typeScales.displaySize$md,
    fontWeight: typeScales.displayWeight$md,
    lineHeight: `calc(${typeScales.displayLineHeight$md} + ${DENSITY})`,
    letterSpacing: typeScales.displayLetterSpacing$md,
  },
  display$sm: {
    fontFamily: typeScales.displayFont$sm,
    fontSize: typeScales.displaySize$sm,
    fontWeight: typeScales.displayWeight$sm,
    lineHeight: `calc(${typeScales.displayLineHeight$sm} + ${DENSITY})`,
    letterSpacing: typeScales.displayLetterSpacing$sm,
  },
  headline$lg: {
    fontFamily: typeScales.headlineFont$lg,
    fontSize: typeScales.headlineSize$lg,
    fontWeight: typeScales.headlineWeight$lg,
    lineHeight: `calc(${typeScales.headlineLineHeight$lg} + ${DENSITY})`,
    letterSpacing: typeScales.headlineLetterSpacing$lg,
  },
  headline$md: {
    fontFamily: typeScales.headlineFont$md,
    fontSize: typeScales.headlineSize$md,
    fontWeight: typeScales.headlineWeight$md,
    lineHeight: `calc(${typeScales.headlineLineHeight$md} + ${DENSITY})`,
    letterSpacing: typeScales.headlineLetterSpacing$md,
  },
  headline$sm: {
    fontFamily: typeScales.headlineFont$sm,
    fontSize: typeScales.headlineSize$sm,
    fontWeight: typeScales.headlineWeight$sm,
    lineHeight: `calc(${typeScales.headlineLineHeight$sm} + ${DENSITY})`,
    letterSpacing: typeScales.headlineLetterSpacing$sm,
  },
  title$lg: {
    fontFamily: typeScales.titleFont$lg,
    fontSize: typeScales.titleSize$lg,
    fontWeight: typeScales.titleWeight$lg,
    lineHeight: `calc(${typeScales.titleLineHeight$lg} + ${DENSITY})`,
    letterSpacing: typeScales.titleLetterSpacing$lg,
  },
  title$md: {
    fontFamily: typeScales.titleFont$md,
    fontSize: typeScales.titleSize$md,
    fontWeight: typeScales.titleWeight$md,
    lineHeight: `calc(${typeScales.titleLineHeight$md} + ${DENSITY})`,
    letterSpacing: typeScales.titleLetterSpacing$md,
  },
  title$sm: {
    fontFamily: typeScales.titleFont$sm,
    fontSize: typeScales.titleSize$sm,
    fontWeight: typeScales.titleWeight$sm,
    lineHeight: `calc(${typeScales.titleLineHeight$sm} + ${DENSITY})`,
    letterSpacing: typeScales.titleLetterSpacing$sm,
  },
  body$lg: {
    fontFamily: typeScales.bodyFont$lg,
    fontSize: typeScales.bodySize$lg,
    fontWeight: typeScales.bodyWeight$lg,
    lineHeight: `calc(${typeScales.bodyLineHeight$lg} + ${DENSITY})`,
    letterSpacing: typeScales.bodyLetterSpacing$lg,
  },
  body$md: {
    fontFamily: typeScales.bodyFont$md,
    fontSize: typeScales.bodySize$md,
    fontWeight: typeScales.bodyWeight$md,
    lineHeight: `calc(${typeScales.bodyLineHeight$md} + ${DENSITY})`,
    letterSpacing: typeScales.bodyLetterSpacing$md,
  },
  body$sm: {
    fontFamily: typeScales.bodyFont$sm,
    fontSize: typeScales.bodySize$sm,
    fontWeight: typeScales.bodyWeight$sm,
    lineHeight: `calc(${typeScales.bodyLineHeight$sm} + ${DENSITY})`,
    letterSpacing: typeScales.bodyLetterSpacing$sm,
  },
  label$lg: {
    fontFamily: typeScales.labelFont$lg,
    fontSize: typeScales.labelSize$lg,
    fontWeight: typeScales.labelWeight$lg,
    lineHeight: `calc(${typeScales.labelLineHeight$lg} + ${DENSITY})`,
    letterSpacing: typeScales.labelLetterSpacing$lg,
  },
  label$md: {
    fontFamily: typeScales.labelFont$md,
    fontSize: typeScales.labelSize$md,
    fontWeight: typeScales.labelWeight$md,
    lineHeight: `calc(${typeScales.labelLineHeight$md} + ${DENSITY})`,
    letterSpacing: typeScales.labelLetterSpacing$md,
  },
  label$sm: {
    fontFamily: typeScales.labelFont$sm,
    fontSize: typeScales.labelSize$sm,
    fontWeight: typeScales.labelWeight$sm,
    lineHeight: `calc(${typeScales.labelLineHeight$sm}  + ${DENSITY})`,
    letterSpacing: typeScales.labelLetterSpacing$sm,
  },
});

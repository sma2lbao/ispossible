import stylex from "@stylexjs/stylex";
import { typeFaces } from "./type-face.stylex";
import { scales } from "./scale.stylex";

export const typeScales = stylex.defineVars({
  // display-large
  displayFont$lg: typeFaces.brand,
  displayLineHeight$lg: `calc(64px * ${scales.scale})`,
  displaySize$lg: `calc(57px * ${scales.scale})`,
  displayLetterSpacing$lg: `calc(-0.25px * ${scales.scale})`,
  displayWeight$lg: typeFaces.weightRegular,

  // display-medium
  displayFont$md: typeFaces.brand,
  displayLineHeight$md: `calc(52px * ${scales.scale})`,
  displaySize$md: `calc(45px * ${scales.scale})`,
  displayLetterSpacing$md: "0",
  displayWeight$md: typeFaces.weightRegular,

  // display-small
  displayFont$sm: typeFaces.brand,
  displayLineHeight$sm: `calc(44px * ${scales.scale})`,
  displaySize$sm: `calc(36px * ${scales.scale})`,
  displayLetterSpacing$sm: "0",
  displayWeight$sm: typeFaces.weightRegular,

  // headline-large
  headlineFont$lg: typeFaces.brand,
  headlineLineHeight$lg: `calc(40px * ${scales.scale})`,
  headlineSize$lg: `calc(32px * ${scales.scale})`,
  headlineLetterSpacing$lg: "0",
  headlineWeight$lg: typeFaces.weightRegular,

  // headline-medium
  headlineFont$md: typeFaces.brand,
  headlineLineHeight$md: `calc(36px * ${scales.scale})`,
  headlineSize$md: `calc(28px * ${scales.scale})`,
  headlineLetterSpacing$md: "0",
  headlineWeight$md: typeFaces.weightRegular,

  // headline-small
  headlineFont$sm: typeFaces.brand,
  headlineLineHeight$sm: `calc(32px * ${scales.scale})`,
  headlineSize$sm: `calc(24px * ${scales.scale})`,
  headlineLetterSpacing$sm: "0",
  headlineWeight$sm: typeFaces.weightRegular,

  // title-large
  titleFont$lg: typeFaces.brand,
  titleLineHeight$lg: `calc(28px * ${scales.scale})`,
  titleSize$lg: `calc(22px * ${scales.scale})`,
  titleLetterSpacing$lg: "0",
  titleWeight$lg: typeFaces.weightRegular,

  // title-medium
  titleFont$md: typeFaces.plain,
  titleLineHeight$md: `calc(24px * ${scales.scale})`,
  titleSize$md: `calc(16px * ${scales.scale})`,
  titleLetterSpacing$md: `calc(0.15px * ${scales.scale})`,
  titleWeight$md: typeFaces.weightMedium,

  // title-small
  titleFont$sm: typeFaces.plain,
  titleLineHeight$sm: `calc(20px * ${scales.scale})`,
  titleSize$sm: `calc(14px * ${scales.scale})`,
  titleLetterSpacing$sm: `calc(0.1px * ${scales.scale})`,
  titleWeight$sm: typeFaces.weightMedium,

  // body-large
  bodyFont$lg: typeFaces.plain,
  bodyLineHeight$lg: `calc(24px * ${scales.scale})`,
  bodySize$lg: `calc(16px * ${scales.scale})`,
  bodyLetterSpacing$lg: `calc(0.5px * ${scales.scale})`,
  bodyWeight$lg: typeFaces.weightRegular,

  // body-medium
  bodyFont$md: typeFaces.plain,
  bodyLineHeight$md: `calc(20px * ${scales.scale})`,
  bodySize$md: `calc(14px * ${scales.scale})`,
  bodyLetterSpacing$md: `calc(0.25px * ${scales.scale})`,
  bodyWeight$md: typeFaces.weightRegular,

  // body-small
  bodyFont$sm: typeFaces.plain,
  bodyLineHeight$sm: `calc(16px * ${scales.scale})`,
  bodySize$sm: `calc(12px * ${scales.scale})`,
  bodyLetterSpacing$sm: `calc(0.4px * ${scales.scale})`,
  bodyWeight$sm: typeFaces.weightRegular,

  // label-large
  labelFont$lg: typeFaces.plain,
  labelLineHeight$lg: `calc(20px * ${scales.scale})`,
  labelSize$lg: `calc(14px * ${scales.scale})`,
  labelLetterSpacing$lg: `calc(0.1px * ${scales.scale})`,
  labelWeight$lg: typeFaces.weightMedium,
  labelWeight$lg$prominent: typeFaces.weightBold,

  // label-medium
  labelFont$md: typeFaces.plain,
  labelLineHeight$md: `calc(16px * ${scales.scale})`,
  labelSize$md: `calc(12px * ${scales.scale})`,
  labelLetterSpacing$md: `calc(0.5px * ${scales.scale})`,
  labelWeight$md: typeFaces.weightMedium,
  labelWeight$md$prominent: typeFaces.weightBold,

  // label-small
  labelFont$sm: typeFaces.plain,
  labelLineHeight$sm: `calc(16px * ${scales.scale})`,
  labelSize$sm: `calc(11px * ${scales.scale})`,
  labelLetterSpacing$sm: `calc(0.5px * ${scales.scale})`,
  labelWeight$sm: typeFaces.weightRegular,
});

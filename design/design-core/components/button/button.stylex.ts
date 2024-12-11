import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { animation } from "../../themes/tokens/animation.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";
import type { Color } from "./button.types";

const DEFAULT_COLORS = ["primary", "secondary", "tertiary", "warn", "error"];

const onColors = {
  primary: "onPrimary" as const,
  secondary: "onSecondary" as const,
  tertiary: "onTertiary" as const,
  warn: "onWarn" as const,
  error: "onError" as const,
};

const hoverColors = {
  primary: "primaryHover" as const,
  secondary: "secondaryHover" as const,
  tertiary: "tertiaryHover" as const,
  warn: "warnHover" as const,
  error: "errorHover" as const,
};

const activeColors = {
  primary: "primaryActive" as const,
  secondary: "secondaryActive" as const,
  tertiary: "tertiaryActive" as const,
  warn: "warnActive" as const,
  error: "errorActive" as const,
};

const disabledColors = {
  primary: "primaryDisabled" as const,
  secondary: "secondaryDisabled" as const,
  tertiary: "tertiaryDisabled" as const,
  warn: "warnDisabled" as const,
  error: "errorDisabled" as const,
};

function isColor(color: string): color is Color {
  return DEFAULT_COLORS.includes(color);
}

export const styles = stylex.create({
  button: {
    boxShadow: "none",
    fontSize: "14px",
    lineHeight: "20px",
    height: "32px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${spacings.padding$2} ${spacings.padding$3}`,
    fontWeight: 600,
    outline: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    borderRadius: shapes.corner$xs,
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "0px solid transparent",
  },
  button$block: {
    width: "100%",
  },
  button$color: (color: Color | string) => ({}),
  button$light: (color: Color | string) => ({
    color: isColor(color) ? colors[color] : color,
    backgroundColor: colors.fill,
    ":not(:disabled):hover": {
      backgroundColor: colors.fillHover,
    },
    ":not(:disabled):active": {
      backgroundColor: colors.fillActive,
    },
  }),
  button$solid: (color: Color | string) => ({
    color: isColor(color) ? colors[onColors[color]] : colors.onPrimary,
    backgroundColor: isColor(color) ? colors[color] : color,
    ":not(:disabled):hover": {
      backgroundColor: isColor(color)
        ? colors[hoverColors[color]]
        : colors.primaryHover,
    },
    ":not(:disabled):active": {
      backgroundColor: isColor(color)
        ? colors[activeColors[color]]
        : colors.primaryActive,
    },
    ":disabled": {
      backgroundColor: isColor(color)
        ? colors[disabledColors[color]]
        : colors.primaryDisabled,
    },
  }),
  button$ghost: (color: Color | string) => ({
    color: isColor(color) ? colors[color] : color,
    ":not(:disabled):active": {
      backgroundColor: colors.fillActive,
    },
    ":not(:disabled):hover": {
      backgroundColor: colors.fillHover,
    },
  }),
  button$outline: (color: Color | string) => ({
    color: isColor(color) ? colors[color] : color,
    border: `1px solid ${isColor(color) ? colors[color] : color}`,
    ":not(:disabled):hover": {
      backgroundColor: colors.fillHover,
    },
    ":not(:disabled):active": {
      backgroundColor: colors.fillActive,
    },
  }),
  loading: {
    animationName: animation.spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  disabled: {
    cursor: "not-allowed",
  },
  button$content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  button$onlyIcon: {
    padding: spacings.padding$2,
  },
  button$icon: {
    fontSize: "16px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: "currentColor",
  },
});

import stylex from "@stylexjs/stylex";
import { palettes } from "./palette.stylex";

export const colors = stylex.defineVars({
  primary: palettes.primary40, // 应用的主颜色，用于突出显示主要元素，如按钮、链接等
  onPrimary: palettes.primary100, // 与 primary 颜色对比的颜色，通常用于文本或图标。
  primaryContainer: palettes.primary90, // 主色的容器颜色，通常是 primary 的变体，用于背景或卡片。
  onPrimaryContainer: palettes.primary10, // 在主色容器中的对比颜色。
  secondary: palettes.secondary40, // 辅助颜色，用于次要元素。
  onSecondary: palettes.secondary100, // 与 secondary 对比的颜色，通常是文本或图标颜色。
  secondaryContainer: palettes.secondary90, // 辅助色的容器颜色。
  onSecondaryContainer: palettes.secondary10, // 辅助色容器中的对比颜色。
  tertiary: palettes.tertiary40, // 第三颜色，可能用于额外的强调或特殊组件。
  onTertiary: palettes.tertiary100, // 与 tertiary 对比的颜色。
  tertiaryContainer: palettes.tertiary90, // 第三颜色的容器颜色。
  onTertiaryContainer: palettes.tertiary10, // 容器中的对比颜色。
  error: palettes.error40, // 错误状态的颜色，通常用于警告或错误提示。
  onError: palettes.error100, // 与 error 对比的颜色，通常用于错误背景下的文字。
  errorContainer: palettes.error90, // 错误颜色的容器背景色。
  onErrorContainer: palettes.error10, // 错误容器中的对比颜色。
  surface: palettes.neutral98, // 通常用于背景色，如页面背景或卡片背景。
  onSurface: palettes.neutral10, // 表面背景上的文本或图标颜色。
  onSurfaceVariant: palettes.neutralVariant30,
  // 不同透明度的表面容器颜色，逐渐由浅至深，用于不同的层次感和阴影效果。
  surfaceContainerLowest: palettes.neutral100,
  surfaceContainerLow: palettes.neutral96,
  surfaceContainer: palettes.neutral94,
  surfaceContainerHigh: palettes.neutral92,
  surfaceContainerHighest: palettes.neutral90,
  // 用于倒置色彩对比的表面颜色。
  inverseSurface: palettes.neutral20,
  inverseOnSurface: palettes.neutral95,
  inversePrimary: palettes.primary80,
  // 用于边框或分隔线的颜色。
  outline: palettes.neutralVariant50,
  // 较浅或较深的 outline 变体。
  outlineVariant: palettes.neutralVariant80,
  // 这些是主色、副色和第三色的固定版本，用于在特定情况下保持颜色一致性（如当背景色会影响颜色的对比度时）
  primaryFixed: palettes.primary90,
  secondaryFixed: palettes.secondary90,
  tertiaryFixed: palettes.tertiary90,
  // 这些是固定颜色的暗色变体，用于不同的阴影或深色模式下。
  primaryFixedDim: palettes.primary80,
  secondaryFixedDim: palettes.secondary80,
  tertiaryFixedDim: palettes.tertiary80,
  onPrimaryFixed: palettes.primary10,
  onSecondaryFixed: palettes.secondary10,
  onTertiaryFixed: palettes.tertiary10,
  onPrimaryFixedVariant: palettes.primary30,
  onSecondaryFixedVariant: palettes.secondary30,
  onTertiaryFixedVariant: palettes.tertiary30,
  surfaceDim: palettes.neutral87,
  surfaceBright: palettes.neutral98,
  // 阴影的颜色，通常是透明或深色，用于表示深度。
  shadow: palettes.neutral0,
  // 用于模糊效果或遮罩层的颜色，通常用于弹窗、模态对话框等场景。
  scrim: palettes.neutral0,
});

import stylex from "@stylexjs/stylex";
export const colors = stylex.defineVars({
  // 主色 (Primary)
  primary: "#0064FA", // 主色调（蓝色）
  onPrimary: "#FFFFFF", // 主色上的前景色（白色）
  primaryContainer: "#D9E2FF", // 容器色（浅蓝色）
  onPrimaryContainer: "#001A40", // 容器内前景色（深蓝色）

  // 主色交互状态
  primaryHover: "#0058E0", // 悬停状态（稍暗的蓝色）
  primaryPressed: "#0048BF", // 按下状态（更深的蓝色）
  primaryFocus: "#0064FA70", // 焦点状态（透明版蓝色）
  primaryDisabled: "#0064FA40", // 禁用状态（降低透明度）

  // 辅助色 (Secondary)
  secondary: "#5E5C68", // 辅助色（中性灰紫色）
  onSecondary: "#FFFFFF", // 辅助色上的前景色
  secondaryContainer: "#E3E1F0", // 容器色（浅灰紫色）
  onSecondaryContainer: "#1A1B23", // 容器内前景色（深灰紫色）

  // 辅助色交互状态
  secondaryHover: "#53515D", // 悬停状态
  secondaryPressed: "#484651", // 按下状态
  secondaryFocus: "#5E5C6870", // 焦点状态
  secondaryDisabled: "#5E5C6840", // 禁用状态

  // 错误色 (Error)
  error: "#F93920", // 错误色（红色）
  onError: "#FFFFFF", // 错误背景上的前景色
  errorContainer: "#F9DEDC", // 错误容器背景色
  onErrorContainer: "#410E0B", // 容器内前景色

  // 错误交互状态
  errorHover: "#9E2019", // 悬停状态
  errorPressed: "#841A14", // 按下状态
  errorFocus: "#B3261E70", // 焦点状态
  errorDisabled: "#B3261E40", // 禁用状态

  // 警告色 (Warn)
  warn: "#FC8800", // 警告色（橙色）
  onWarn: "#FFFFFF", // 警告背景上的前景色
  warnContainer: "#FFE6C4", // 容器背景色
  onWarnContainer: "#4D2600", // 容器内前景色

  // 警告交互状态
  warnHover: "#E69520", // 悬停状态
  warnPressed: "#CC841A", // 按下状态
  warnFocus: "#FFA72670", // 焦点状态
  warnDisabled: "#FFA72640", // 禁用状态

  // 成功色（Success）
  success: "#3bb346",
  onSuccess: "#FFFFFF",
  successContainer: "",
  onSuccessContainer: "",

  // 成功交互状态
  successHover: "",
  successPressed: "",
  successFocus: "",
  successDisabled: "",

  // 表面和背景 (Surface/Background)
  surface: "#FFFBFE", // 表面色（浅灰白色）
  onSurface: "#1C1B1F", // 表面上的前景色
  surfaceVariant: "#E7E0EC", // 表面变体
  onSurfaceVariant: "#49454F", // 表面变体上的前景色
  background: "#FFFBFE", // 背景色
  onBackground: "#1C1B1F", // 背景上的前景色

  // 表面交互状态
  surfaceHover: "#F6F2FA", // 悬停状态
  surfacePressed: "#EDE7F6", // 按下状态
  surfaceFocus: "#FFFBFE70", // 焦点状态
  surfaceDisabled: "#FFFBFE40", // 禁用状态

  // 中性色 (Neutral)
  neutral: "#E0E0E0", // 中性色（浅灰）
  onNeutral: "#121212", // 中性色上的前景色
  neutralContainer: "#F5F5F5", // 容器色
  onNeutralContainer: "#424242", // 容器内前景色

  // 反转表面色
  inverseSurface: "#313033", // 深色模式下的表面
  inverseOnSurface: "#F4EFF4", // 反转表面的前景色
  inversePrimary: "#A8C7FF", // 深色模式下的主色变体

  // 边框和分隔线 (Outline)
  outline: "#79747E", // 边框色
  outlineVariant: "#CAC4D0", // 边框变体

  // 阴影与模糊
  shadow: "#00000033", // 半透明黑色阴影
  scrim: "#0000004D", // 更深的模糊遮罩

  // 明暗模式
  surfaceBright: "#FFFFFF",
  surfaceDim: "#ECECEC",
});

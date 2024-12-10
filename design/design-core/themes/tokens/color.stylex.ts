import stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  // 主色 (Primary)
  primary: "#0064FA", // 主色调（蓝色）
  onPrimary: "#FFFFFF", // 主色上的前景色
  primaryContainer: "#D9E2FF", // 容器色（浅蓝色）
  onPrimaryContainer: "#002884", // 容器内前景色（深蓝色）

  // 辅助色 (Secondary)
  secondary: "#5E5C68", // 辅助色（中性灰紫色）
  onSecondary: "#FFFFFF", // 辅助色上的前景色
  secondaryContainer: "#EDE7F6", // 容器色（浅灰紫色）
  onSecondaryContainer: "#2A2A37", // 容器内前景色（深灰紫色）

  // 错误色 (Error)
  error: "#D32F2F", // 错误色（红色）
  onError: "#FFFFFF", // 错误背景上的前景色
  errorContainer: "#F9DEDC", // 容器背景色
  onErrorContainer: "#4A0000", // 容器内前景色

  // 警告色 (Warn)
  warn: "#ED6C02", // 警告色（橙色）
  onWarn: "#FFFFFF", // 警告背景上的前景色
  warnContainer: "#FFF3E0", // 容器背景色
  onWarnContainer: "#4A2500", // 容器内前景色

  // 成功色 (Success)
  success: "#2E7D32", // 成功色（绿色）
  onSuccess: "#FFFFFF", // 成功背景上的前景色
  successContainer: "#E8F5E9", // 容器背景色
  onSuccessContainer: "#1B5E20", // 容器内前景色

  // 表面和背景 (Surface/Background)
  surface: "#FFFFFF", // 表面色（白色）
  onSurface: "#212121", // 表面上的前景色
  surfaceVariant: "#F5F5F5", // 表面变体
  onSurfaceVariant: "#757575", // 表面变体上的前景色
  background: "#F9FAFB", // 背景色
  onBackground: "#121212", // 背景上的前景色

  // 填充色 (Fill)
  fill1: "#F0F4FF", // 最浅的填充色
  fill2: "#D9E2FF", // 浅色填充
  fill3: "#B3C9FF", // 中等浅的填充色
  fill4: "#8DAFFF", // 中等深的填充色
  fill5: "#6587FF", // 深色填充

  // 边框和分隔线 (Outline)
  outline: "#BDBDBD", // 边框色
  outlineVariant: "#E0E0E0", // 边框变体

  // 中性色 (Neutral)
  neutral: "#9E9E9E", // 中性色（灰色）
  onNeutral: "#FFFFFF", // 中性色上的前景色
  neutralContainer: "#FAFAFA", // 容器色
  onNeutralContainer: "#303030", // 容器内前景色

  // 反转表面色 (Dark Mode)
  inverseSurface: "#2E2E2E", // 深色模式下的表面色
  inverseOnSurface: "#F4EFF4", // 反转表面的前景色
  inversePrimary: "#A8C7FF", // 深色模式下的主色变体

  // 透明度处理 (Disabled)
  disabledOpacity: "0.38", // 禁用状态的透明度

  // 阴影与模糊
  shadow: "#00000033", // 半透明黑色阴影
  scrim: "#0000004D", // 更深的模糊遮罩
});

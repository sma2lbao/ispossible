import stylex from "@stylexjs/stylex";
export const colors = stylex.defineVars({
  white: "rgb(255,255,255)", // 浅色模式下深色背景内容Inverse
  black: "rgb(0,0,0)", // 深色模式下浅色背景内容Inverse

  // 主色 (Primary)
  primary: "rgb(0,100,250)", // 主色调
  onPrimary: "rgb(255,255,255)", // 主色上的前景色
  primaryContainer: "", // 容器色
  onPrimaryContainer: "", // 容器内前景色
  primaryHover: "rgb(0,98,214)", // 悬停状态（稍暗的蓝色）
  primaryActive: "rgb(0,79,179)", // 按下状态（更深的蓝色）
  primaryFocus: "", // 焦点状态（透明版蓝色）
  primaryDisabled: "rgb(152,205,253)", // 禁用状态（降低透明度）

  // 辅助色 (Secondary)
  secondary: "rgb(64,180,243)", // 辅助色 强调作用次于主要颜色，但仍然具有强调作用。
  onSecondary: "rgb(255,255,255)", // 辅助色上的前景色
  secondaryContainer: "", // 容器色
  onSecondaryContainer: "", // 容器内前景色
  secondaryHover: "rgb(110,200,246)", // 悬停状态
  secondaryActive: "rgb(157,220,249)", // 按下状态 active
  secondaryFocus: "", // 焦点状态
  secondaryDisabled: "rgb(3,102,169)", // 禁用状态

  // 第三颜色
  tertiary: "rgb(107,112,117)",
  onTertiary: "rgb(255,255,255)",
  tertiaryContainer: "",
  onTertiaryContainer: "",
  tertiaryHover: "rgb(85,91,97)",
  tertiaryActive: "rgb(65,70,76)",
  tertiaryFocus: "",
  tertiaryDisabled: "",

  // 信息色 (Error)
  info: "rgb(0,100,250)", // 通常用于表达客观、中立信息
  onInfo: "rgb(255,255,255)", // 错误背景上的前景色
  infoContainer: "", // 错误容器背景色
  onInfoContainer: "", // 容器内前景色
  infoHover: "rgb(0,98,214)", // 悬停状态
  infoActive: "rgb(0,79,179)", // 按下状态
  infoFocus: "", // 焦点状态
  infoDisabled: "rgb(152,205,253)", // 禁用状态

  // 错误色 (Error)
  error: "rgb(249,57,32)", // 错误色（红色）
  onError: "rgb(255,255,255)", // 错误背景上的前景色
  errorContainer: "", // 错误容器背景色
  onErrorContainer: "", // 容器内前景色
  errorHover: "rgb(213,37,21)", // 悬停状态
  errorActive: "rgb(178,20,12)", // 按下状态
  errorFocus: "", // 焦点状态
  errorDisabled: "", // 禁用状态

  // 警告色 (Warn)
  warn: "rgb(252,136,0)", // 警告色（橙色）
  onWarn: "rgb(255,255,255)", // 警告背景上的前景色
  warnContainer: "", // 容器背景色
  onWarnContainer: "", // 容器内前景色
  warnHover: "rgb(210,103,0)", // 悬停状态
  warnActive: "rgb(168,74,0)", // 按下状态
  warnFocus: "", // 焦点状态
  warnDisabled: "", // 禁用状态

  // 成功色（Success）
  success: "rgb(59,179,70)",
  onSuccess: "rgb(255,255,255)",
  successContainer: "",
  onSuccessContainer: "",
  successHover: "rgb(48,149,59)",
  successActive: "rgb(37,119,47)",
  successFocus: "",
  successDisabled: "rgb(164,224,167)",

  // 链接（Link）
  link: "rgb(0,100,250)",
  onLink: "rgb(255,255,255)",
  linkContainer: "",
  onLinkContainer: "",
  linkHover: "rgb(0,98,214)",
  linkActive: "rgb(0,79,179)",
  linkFocus: "rgb(0,100,250)",
  linkDisabled: "",

  // 表面和背景 (Surface/Background)
  surface: "rgb(255,255,255)", // 表面色，卡片、模态框、对话框的背景颜色
  onSurface: "#1C1B1F", // 表面上的前景色
  surfaceVariant: "#E7E0EC", // 表面变体
  onSurfaceVariant: "#49454F", // 表面变体上的前景色
  background: "#FFFBFE", // 背景色，页面主体的底色
  onBackground: "#1C1B1F", // 背景上的前景色
  surfaceHover: "#F6F2FA", // 悬停状态
  surfaceActive: "#EDE7F6", // 按下状态
  surfaceFocus: "#FFFBFE70", // 焦点状态
  surfaceDisabled: "#FFFBFE40", // 禁用状态

  // 蒙层
  overlay: "rgba(22,22,26,0.6)",

  fill: "rgba(46,50,56,0.05)", // 填充色 - 默认态，用于Button等
  fillHover: "rgba(46,50,56,0.09)",
  fillActive: "rgba(46,50,56,0.13)",

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

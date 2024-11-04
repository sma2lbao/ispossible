import { StyleXStyles } from "@stylexjs/stylex";

export interface DividerProps {
  /**
   * 水平还是垂直类型
   * @default x
   */
  direction?: "x" | "y";

  /**
   * 带内容时，内容对齐方式
   * @default center
   */
  align?: "start" | "center" | "end";

  /**
   * 分割线样式对象
   */
  stylex?: StyleXStyles;

  children?: React.ReactNode;
}

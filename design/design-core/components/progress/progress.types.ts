import { StyleXStyles } from "@stylexjs/stylex";

export interface ProgressProps {
  /**
   * 进度条填充色
   */
  stroke?: string;

  /**
   * 进度条轨道填充色
   */
  trackStroke?: string;

  /**
   * 类型
   * @default line
   */
  type?: "line" | "circle";

  /**
   * 条状进度条方向
   * @default x
   */
  direction?: "x" | "y";

  /**
   * 进度百分比
   */
  percent: number;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;
}

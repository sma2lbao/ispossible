import { StyleXStyles } from "@stylexjs/stylex";

export type IVariant = "display" | "headline" | "title" | "body" | "label";

export type ISize = "lg" | "md" | "sm";

export interface TypographyProps {
  /**
   * 文本颜色
   */
  color?: string;

  children?: React.ReactNode;
  /**
   * 原生标签
   * @default "span"
   */
  as?: React.ElementType;

  /**
   * 文本类型
   * @default body
   */
  variant?: IVariant;

  /**
   * 文本大小
   * @default md
   */
  size?: ISize;

  /**
   * 是否需要间隔
   */
  gutterBottom?: boolean;

  /**
   * 暗色主题
   */
  dimmed?: boolean;

  /**
   * 是否截断
   */
  truncate?: boolean;
  truncateLines?: number;

  /**
   * 样式
   */
  stylex?: StyleXStyles;

  style?: React.CSSProperties;

  className?: string;
}

export interface TypographyLinkProps
  extends Omit<TypographyProps, "as">,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * 是否需要下划线
   * @default false
   */
  underline?: boolean;

  children?: React.ReactNode;
}

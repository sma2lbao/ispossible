import { StyleXStyles } from "@stylexjs/stylex";

type ButtonTheme = "solid" | "ghost" | "light" | "outline";

export type Color = "primary" | "secondary" | "tertiary" | "warn" | "error";

type HostHTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLElement>,
  "style"
>;
export interface ButtonProps extends HostHTMLButtonProps {
  /**
   * 将按钮设置为块级按钮
   * @default false
   */
  block?: boolean;

  /**
   * 按钮主色
   * @default primary
   */
  color?: "primary" | "secondary" | "tertiary" | "warn" | "error" | string;

  /**
   * 按钮主题，可选值：solid（有背景色）、 ghost（无背景色）、 light（浅背景色）、outline(边框模式)
   * @default light
   */
  theme?: ButtonTheme;
  /**
   * 设置按钮类型
   */
  children?: React.ReactNode;
  /**
   * 设置按钮失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 设置按钮的图标组件
   */
  icon?: React.ReactNode;

  /**
   * 图标位置
   */
  iconAlign?: "start" | "end";
  /**
   * 设置按钮载入状态
   */
  loading?: boolean;

  stylex?: StyleXStyles;

  style?: React.CSSProperties;

  className?: string;

  /**
   * 点击按钮时的回调
   */
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

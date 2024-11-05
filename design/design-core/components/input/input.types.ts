import { StyleXStyles } from "@stylexjs/stylex";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "prefix"
  > {
  /**
   * 前置标签
   */
  addonBefore?: React.ReactNode;

  /**
   * 后置标签
   */
  addonAfter?: React.ReactNode;

  /**
   * 输入框内容默认值
   */
  defaultValue?: string;

  /**
   * 前缀标签
   */
  prefix?: React.ReactNode;

  /**
   * 后缀标签
   */
  suffix?: React.ReactNode;

  /**
   * 输入框内容
   */
  value?: string;

  /**
   * 是否禁用，默认为false
   * @default false
   */
  disabled?: boolean;

  stylex?: StyleXStyles;
}

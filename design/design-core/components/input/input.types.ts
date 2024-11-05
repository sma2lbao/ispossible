import { StyleXStyles } from "@stylexjs/stylex";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "prefix" | "onChange"
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

  /**
   * 输入框有内容且 hover 或 focus 时展示清除按钮
   * @default false
   */
  clearable?: boolean;

  stylex?: StyleXStyles;

  onChange?: (value?: string) => void;
}

import { StyleXStyles } from "@stylexjs/stylex";

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
  > {
  /**
   * 行数
   * @default 4
   */
  rows?: number;

  defaultValue?: string;

  value?: string;

  /**
   * 禁用状态
   */
  disabled?: boolean;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  onChange?: (newValue: string) => void;
}

import { StyleXStyles } from "@stylexjs/stylex";

export type SelectValueType = number | string | undefined;

export interface DisplayValueType {
  key?: React.Key;

  value?: SelectValueType;

  label?: React.ReactNode;

  disabled?: boolean;
}

export interface SelectProps {
  placeholder?: string;

  /**
   * 指定默认选中的条目
   */
  defaultValue?: SelectValueType;

  /**
   * 指定当前选中的条目，多选时为一个数组。
   */
  value?: SelectValueType;

  clearable?: boolean;

  /**
   * 前缀
   */
  prefix?: React.ReactNode;

  /**
   * 后缀
   */
  suffix?: React.ReactNode;

  style?: React.CSSProperties;

  className?: string;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  loading?: boolean;

  children?: React.ReactNode;

  onChange?: (nextValue: SelectValueType) => void;
}

export interface SelectOptionProps {
  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 展示的文本。渲染时优先取 label，若无则取 children、value，依次降级
   */
  label?: string;

  /**
   * 属性值
   */
  value: string | number;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  className?: string;

  children?: React.ReactNode;

  key?: React.Key;

  [key: string]: any;
}

export interface SelectContextProps {
  onSelectOption: (option: SelectOptionProps) => void;

  value: SelectValueType;
}

import React from "react";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /**
   * 指定当前是否选中
   * @default false
   */
  checked?: boolean;

  /**
   * 失效状态
   * @default false
   */
  disabled?: boolean;

  indeterminate?: boolean;

  /**
   * 变化时的回调函数
   */
  onChange?: (e: CheckboxChangeEvent) => void;

  children?: React.ReactNode;
}

export interface CheckboxGroupProps<
  T extends CheckboxValueType = CheckboxValueType
> {
  /**
   * CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性
   */
  name?: string;

  value?: T[];

  onChange?: (checkedValue: T[]) => void;

  children?: React.ReactNode;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;

  stopPropagation: () => void;

  preventDefault: () => void;

  nativeEvent: React.ChangeEvent<HTMLInputElement>["nativeEvent"];
}

export interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}

export interface CheckboxContextProps {}

import React from "react";

export type CheckboxValueType = string | number | boolean | undefined;

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  value?: CheckboxValueType;

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

export interface CheckboxGroupProps {
  /**
   * CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性
   */
  name?: string;

  disabled?: boolean;

  value?: CheckboxValueType[];

  onChange?: (checkedValue: CheckboxValueType[]) => void;

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

export interface CheckboxContextProps {
  name?: string;

  value?: CheckboxValueType[];

  disabled?: boolean;

  registerValue: (value: CheckboxValueType) => void;

  cancelValue: (value: CheckboxValueType) => void;

  toggleValue: (value: CheckboxValueType) => void;
}

import React from "react";

export interface CheckboxProps {
  /**
   * 指定当前是否选中
   */
  value?: boolean;

  /**
   * 指定当前是否选中
   * @default false
   */
  checked?: boolean;

  /**
   * 失效状态
   */
  disabled?: boolean;

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
}

export interface CheckboxChangeEvent {}

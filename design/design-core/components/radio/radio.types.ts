export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  /**
   * 指定当前是否选中
   */
  checked?: boolean;

  /**
   * 禁选单选框
   * @default false
   */
  disabled?: boolean;

  /**
   * 用于设置当前选中的值
   */
  value?: any;

  /**
   * 选项变化时的回调函数
   * @returns
   */
  onChange?: (e: RadioChangeEvent) => void;

  children?: React.ReactNode;
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export type RadioChangeEvent = {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent<HTMLInputElement>["nativeEvent"];
};

export interface RadioGroupProps {
  /**
   * 用于设置当前选中的值
   */
  value?: string | number;

  /**
   * 禁选所有子单选器
   * @default false
   */
  disabled?: boolean;

  /**
   * 	RadioGroup 下所有 input[type="radio"] 的 name 属性
   */
  name?: string;

  /**
   * radio 排列方向,
   * @default x
   */
  direction?: "x" | "y";

  children?: React.ReactNode;

  /**
   * 选项变化时的回调函数
   * @returns
   */
  onChange?: (e: RadioChangeEvent) => void;
}

export interface RadioContextProps {
  group: RadioGroupProps;
}

export interface SelectProps {}

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
  value?: string | number;
}

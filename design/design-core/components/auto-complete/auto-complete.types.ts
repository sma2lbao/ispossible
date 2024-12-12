import { StyleXStyles } from "@stylexjs/stylex";

export type AutoCompleteItem =
  | string
  | {
      label: string;
      value: string;
      [key: string]: unknown;
    };

export interface AutoCompleteProps {
  /**
   * 当前值
   */
  value?: string;

  placeholder?: string;

  name?: string;

  className?: string;

  clearable?: boolean;

  disabled?: boolean;

  loading?: boolean;

  prefix?: React.ReactNode;

  data?: AutoCompleteItem[];

  renderItem?: (item: AutoCompleteItem) => React.ReactNode;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  onChange?: (value: string) => void;

  onSearch?: (keyword: string) => void;

  onSelect?: (item: AutoCompleteItem) => void;
}

export interface AutoCompleteOptionProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

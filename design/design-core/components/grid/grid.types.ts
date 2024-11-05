export type RowAlignType = "top" | "middle" | "bottom";
export type RowJustifyType =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between";

export interface RowProps {
  /**
   * 布局模式，可选 flex
   */
  type?: "flex";

  /**
   * 栅格间隔
   * @default 0
   */
  gutter?: number | [number, number];

  /**
   * flex 布局下的垂直对齐方式：top middle bottom
   */
  align?: RowAlignType;

  /**
   * flex 布局下的水平排列方式：start end center space-around space-between
   */
  justify?: RowJustifyType;

  children?: React.ReactNode;
}

export interface ColProps {
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   * @default 0
   */
  span?: SpanNumber;

  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   * @default 0
   */
  offset?: SpanNumber;

  /**
   * 栅格向左移动格数
   * @default 0
   */
  pull?: SpanNumber;

  /**
   * 栅格向右移动格数
   * @default 0
   */
  push?: SpanNumber;

  children?: React.ReactNode;
}

export interface GridContextProps {
  gutter: [number, number];
}

export type SpanNumber =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

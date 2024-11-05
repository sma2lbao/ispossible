export interface PaginationProps {
  /**
   * 总条目数
   */
  total?: number;
  /**
   * 每页条目数
   * @default 20
   */
  pageSize?: number;
  /**
   * 当前页
   * @default 1
   */
  page?: number;
  onPageChange?: (nextPage: number) => void;
}

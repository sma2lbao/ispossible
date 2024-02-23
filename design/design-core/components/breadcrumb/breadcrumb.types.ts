export interface BreadCrumbItem {
  title: string;
  path?: string;
  href?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface BreadCrumbProps {
  /**
   * 分隔符自定义
   */
  separator?: React.ReactNode;

  /**
   * 路由栈信息
   */
  items: BreadCrumbItem[];
}

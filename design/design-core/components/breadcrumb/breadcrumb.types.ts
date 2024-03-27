export interface BreadCrumbItem {
  /**
   * 文本
   */
  title: string | React.ReactNode;
  /**
   * 跳转路径
   */
  path?: string;
  /**
   * 跳转路径
   */
  href?: string;
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

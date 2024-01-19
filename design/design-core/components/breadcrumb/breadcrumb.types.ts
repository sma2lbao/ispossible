export interface BreadCrumbItem {
  title: string;
  path?: string;
  href?: string;
  onClick?: (e: MouseEvent) => void;
}

export interface BreadCrumbProps {
  separator?: React.ReactNode;
  items: BreadCrumbItem[];
}

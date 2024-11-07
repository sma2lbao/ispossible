import { StyleXStyles } from "@stylexjs/stylex";

interface BaseLayoutProps {
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;
}

export interface LayoutProps extends BaseLayoutProps {}

export interface HeaderProps extends BaseLayoutProps {
  sticky?: boolean;

  top?: number;
}

export interface SiderProps extends BaseLayoutProps {
  width?: React.CSSProperties["width"];

  sticky?: boolean;

  top?: number;
}

export interface ContentProps extends BaseLayoutProps {}

export interface FooterProps extends BaseLayoutProps {}

export interface LayoutContextProps {
  headerRect?: DOMRect;
}

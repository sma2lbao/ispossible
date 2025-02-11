import { StyleXStyles } from "@stylexjs/stylex";

export type SkeletonNode =
  | "title"
  | "text"
  | "button"
  | "avatar"
  | "image";

export interface SkeletonProps {
  nodes?: SkeletonNode[];
  children?: React.ReactNode;
  stylex?: StyleXStyles;
  loading?: boolean;
}

export interface SkeletonTitleProps {
  width?: string | number;
}

export interface SkeletonTextProps {
  width?: string | string[];
  rows?: number;
}

export interface SkeletonButtonProps {
  shape?: "circle" | "round" | "square";
  width?: string | number;
}

export interface SkeletonAvatarProps {
  shape?: "circle" | "square";
  size?: number;
}

export interface SkeletonImageProps {
  width?: number | string;
  height?: number | string;
  aspectRatio?: number;
}

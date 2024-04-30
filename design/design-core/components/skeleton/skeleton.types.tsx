import { StyleXStyles } from "@stylexjs/stylex";

export type SkeletonNode =
  | "title"
  | "paragraph"
  | "button"
  | "avatar"
  | "image";

export interface SkeletonProps {
  nodes?: SkeletonNode[];
  children?: React.ReactNode;
  style?: StyleXStyles;
}

export interface SkeletonTitleProps {
  width?: string | number;
}

export interface SkeletonParagraphProps {
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

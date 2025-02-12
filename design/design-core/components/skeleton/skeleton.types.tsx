import { StyleXStyles } from "@stylexjs/stylex";

export type SkeletonNode = "title" | "text" | "button" | "avatar" | "image";

export type SkeletonNodeWithProps =
  | ["title", SkeletonTitleProps]
  | ["text", SkeletonTextProps]
  | ["button", SkeletonButtonProps]
  | ["avatar", SkeletonAvatarProps]
  | ["image", SkeletonImageProps];

export interface SkeletonProps {
  nodes?: (SkeletonNode | SkeletonNodeWithProps)[];
  children?: React.ReactNode;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
  loading?: boolean;
}

export interface SkeletonTitleProps {
  width?: string | number;
  height?: string | number;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
}

export interface SkeletonTextProps {
  width?: string | string[];
  height?: string | number;
  rows?: number;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
  rootStylex?: StyleXStyles;
  rootStyle?: React.CSSProperties;
}

export interface SkeletonButtonProps {
  shape?: "circle" | "round" | "square";
  width?: string | number;
  height?: string | number;
  repeat?: number;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
  rootStylex?: StyleXStyles;
  rootStyle?: React.CSSProperties;
}

export interface SkeletonAvatarProps {
  shape?: "circle" | "square";
  size?: number;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
}

export interface SkeletonImageProps {
  width?: number | string;
  height?: number | string;
  aspectRatio?: number;
  stylex?: StyleXStyles;
  style?: React.CSSProperties;
}

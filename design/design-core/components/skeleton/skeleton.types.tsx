import { StyleXStyles } from "@stylexjs/stylex";

interface GridCSSProperties {
  alignContent: React.CSSProperties["alignContent"];
  alignItems: React.CSSProperties["alignItems"];
  alignSelf: React.CSSProperties["alignSelf"];
  display: React.CSSProperties["display"];
  columnGap: React.CSSProperties["columnGap"];
  gap: React.CSSProperties["gap"];
  grid: React.CSSProperties["grid"];
  gridArea: React.CSSProperties["gridArea"];
  gridAutoColumns: React.CSSProperties["gridAutoColumns"];
  gridAutoFlow: React.CSSProperties["gridAutoFlow"];
  gridAutoRows: React.CSSProperties["gridAutoRows"];
  gridColumn: React.CSSProperties["gridColumn"];
  gridColumnStart: React.CSSProperties["gridColumnStart"];
  gridColumnEnd: React.CSSProperties["gridColumnEnd"];
  gridRow: React.CSSProperties["gridRow"];
  gridRowStart: React.CSSProperties["gridRowStart"];
  gridRowEnd: React.CSSProperties["gridRowEnd"];
  gridTemplate: React.CSSProperties["gridTemplate"];
  gridTemplateAreas: React.CSSProperties["gridTemplateAreas"];
  gridTemplateColumns: React.CSSProperties["gridTemplateColumns"];
  gridTemplateRows: React.CSSProperties["gridTemplateRows"];
  justifyContent: React.CSSProperties["justifyContent"];
  justifySelf: React.CSSProperties["justifySelf"];
  placeSelf: React.CSSProperties["placeSelf"];
  placeContent: React.CSSProperties["placeContent"];
  rowGap: React.CSSProperties["rowGap"];
}

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

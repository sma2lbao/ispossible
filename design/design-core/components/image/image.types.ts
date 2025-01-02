import { StyleXStyles } from "@stylexjs/stylex";

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "onLoad" | "onError"
  > {
  /**
   * 图片获取地址
   */
  src?: string;

  /**
   * 图片显示宽度
   */
  width?: string | number;

  /**
   * height
   */
  height?: string | number;

  /**
   * 图像描述
   */
  alt?: string;

  stylex?: StyleXStyles;

  /**
   * 加载成功回调
   * @param event
   * @returns
   */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;

  /**
   * 加载错误回调
   * @param event
   * @returns
   */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export interface ImagePreviewProps {
  src?: string | string[];

  /**
   * 当前选中
   * @default 0
   */
  current?: number;

  visible?: boolean;

  /**
   * 关闭回调
   */
  onClose?: () => void;
}

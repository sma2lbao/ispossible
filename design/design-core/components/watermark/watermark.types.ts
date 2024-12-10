export interface FontProps {
  color?: string;

  fontSize?: number;

  fontWeight?: "normal" | "light" | "weight" | number;

  fontFamily?: string;

  // fontStyle?: "none" | "normal" | "italic" | "oblique";

  textAlign?: "left" | "right" | "center" | "start" | "end";
}

export interface WatermarkProps {
  /**
   * 水印的宽度，content 的默认值为自身的宽度
   * @default 120
   */
  width?: number;

  /**
   * 水印的高度，content 的默认值为自身的高度
   * @default 64
   */
  height?: number;

  /**
   * 水印之间的间距
   * @default [100, 100]
   */
  gap?: [number, number];

  /**
   * 水印距离容器左上角的偏移量，默认为 gap/2
   * @default [gap[0]/2, gap[1]/2]
   *
   */
  offset?: [number, number];

  /**
   * 水印绘制时，旋转的角度，单位 °
   * @default -25
   */
  rotate?: number;

  children?: React.ReactNode;

  /**
   * 水印图片地址
   * 优先使用image，获取失败时使用content
   */
  image?: string;
  /**
   * 水印文字内容
   */
  content?: string | string[];

  /**
   * 文字样式
   */
  font?: FontProps;
}

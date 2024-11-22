export interface CarouselProps {
  /**
   * 是否自动循环展示
   * @default true
   */
  autoplay?: boolean;

  /**
   * 是否显示箭头
   * @default false
   */
  arrows?: boolean;

  /**
   * 指示器和箭头主题
   */
  theme: "primary" | "light" | "dark";
}

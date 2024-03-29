import React, { useLayoutEffect, useRef } from "react";
import stylex from "@stylexjs/stylex";

interface WatermarkProps {
  gap?: [number, number];
  children?: React.ReactNode;

  /**
   * 水印图片地址
   * 优先使用image，获取失败时使用content
   */
  image?: string;
  /**
   * 水印文字内容
   */
  content?: string;
}

export const Watermark: React.FC<WatermarkProps> = (props) => {
  const { children, image, content } = props;
  const rootRef = useRef<HTMLDivElement>(null);

  const createWatermark = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    const createText = (
      font: Pick<React.CSSProperties, "fontFamily" | "fontSize" | "fontWeight">
    ) => {};
  };

  useLayoutEffect(() => {
    createWatermark();
  });

  return <div ref={rootRef}>{children}</div>;
};

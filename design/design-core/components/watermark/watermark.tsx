import React, { useLayoutEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";

interface FontProps {
  color?: string;

  fontSize?: number;

  fontWeight?: "normal" | "light" | "weight" | number;

  fontFamily?: string;

  // fontStyle?: "none" | "normal" | "italic" | "oblique";

  textAlign?: "left" | "right" | "center" | "start" | "end";
}

interface WatermarkProps {
  /**
   * 水印之间的间距
   */
  gap?: [number, number];

  /**
   * 水印绘制时，旋转的角度，单位 °
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
  content?: string;

  /**
   * 文字样式
   */
  font?: FontProps;
}

const styles = stylex.create({
  root: {
    position: "relative",
  },
  watermark: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundRepeat: "repeat",
    backgroundPosition: `0px 0px`,
    zIndex: 9,
  },
});

export const Watermark: React.FC<WatermarkProps> = (props) => {
  const { children, content, font, rotate = -45, gap = [100, 100] } = props;
  const {
    fontWeight = 600,
    fontSize = 16,
    fontFamily = "system-ui",
    textAlign = "start",
    color = "#0000002e",
  } = font || {};
  const watermarkRef = useRef<HTMLDivElement>(null);

  const createContext2D = (width?: number, height?: number) => {
    const canvas = document.createElement("canvas");
    const cotext = canvas.getContext("2d")!;
    if (width) {
      canvas.width = width;
    }
    if (height) {
      canvas.height = height;
    }
    cotext.save();
    return cotext;
  };

  const measureContextSize = () => {
    const context = createContext2D();
    context.font = `${fontSize}px ${fontFamily}`;
    context.textAlign = textAlign;
    context.textBaseline = "top";

    const metrics = context.measureText(content!);
    const contentWidht = metrics.width;
    const contentHeight = Math.ceil(
      metrics.fontBoundingBoxDescent + metrics.fontBoundingBoxAscent
    );

    return {
      width: contentWidht,
      height: contentHeight,
    };
  };

  const createText = (context: CanvasRenderingContext2D) => {
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    context.textAlign = textAlign;
    context.textBaseline = "top";
    if (color) {
      context.fillStyle = color;
    }
    const metrics = context.measureText(content!);

    context.fillText(
      content!,
      metrics.actualBoundingBoxLeft,
      metrics.fontBoundingBoxAscent
    );
  };

  const createWatermark = () => {
    const { width, height } = measureContextSize();
    const contentContext = createContext2D(width, height);
    createText(contentContext);

    const maxSize = Math.max(width, height);
    const transformContext = createContext2D(maxSize, maxSize);
    const angle = (rotate * Math.PI) / 180;
    transformContext.translate(maxSize / 2, maxSize / 2);
    transformContext.rotate(angle);
    transformContext.drawImage(contentContext.canvas, -width / 2, -height / 2);

    const rectWidth = maxSize + gap[0];
    const rectHeight = maxSize + gap[1];
    const rectContext = createContext2D(rectWidth, rectHeight);
    const rectX = (rectWidth - maxSize) / 2;
    const rectY = (rectHeight - maxSize) / 2;

    rectContext.drawImage(transformContext.canvas, rectX, rectY);

    const base64 = rectContext!.canvas.toDataURL();
    if (watermarkRef.current) {
      watermarkRef.current.style.backgroundImage = `url("${base64}")`;
      watermarkRef.current.style.backgroundSize = `${rectWidth}px ${rectHeight}px`;
    }
  };

  useLayoutEffect(() => {
    createWatermark();
  });

  return (
    <div {...stylex.props(styles.root)}>
      {children}
      <div ref={watermarkRef} {...stylex.props(styles.watermark)}></div>
    </div>
  );
};

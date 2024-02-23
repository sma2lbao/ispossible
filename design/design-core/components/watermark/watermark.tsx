import React, { useLayoutEffect, useRef } from "react";

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

  const renderWatermark = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    if (image) {
      const resource = new Image();
      resource.onload = () => {
        drawWatermark(resource);
      };
      resource.onerror = () => {
        drawWatermark(content);
      };
      resource.src = image;
      resource.crossOrigin = "anonymous";
      resource.referrerPolicy = "no-referrer";
    } else {
      drawWatermark(content);
    }

    function drawWatermark(origin?: string | HTMLImageElement) {
      if (!origin) return;
      if (origin instanceof HTMLImageElement) {
        context.drawImage(origin, 0, 0, origin.width, origin.height);
      } else {
        context.font = "14px serif";
        context.fillText(origin, 10, 50);
      }
      const base64 = canvas.toDataURL();
      if (rootRef.current) {
        rootRef.current.style.backgroundImage = `url("${base64}")`;
      }
    }
  };

  useLayoutEffect(() => {
    renderWatermark();
  });

  return <div ref={rootRef}>{children}</div>;
};

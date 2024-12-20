import stylex from "@stylexjs/stylex";
import React, { useLayoutEffect, useRef } from "react";
import { styles } from "./watermark.stylex";
import type { WatermarkProps } from "./watermark.types";

export const Watermark: React.FC<WatermarkProps> = (props) => {
  const {
    children,
    content = [],
    font = {},
    rotate = -25,
    gap = [100, 100],
    offset = [gap[0] / 2, gap[1] / 2],
    image,
  } = props;
  const {
    fontWeight = "normal",
    fontSize = 16,
    fontFamily = "sans-serif",
    textAlign = "left",
    color = "rgba(0,0,0,.15)",
  } = font;
  const watermarkRef = useRef<HTMLDivElement>(null);
  const contents = Array.isArray(content) ? content : [content].filter(Boolean);

  const measureTextSize = (context: CanvasRenderingContext2D) => {
    // 渲染 contents
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    context.textBaseline = "top";
    let maxWidth = 0;
    let sumHeight = 0;
    const lines: { width: number; height: number }[] = [];

    contents.forEach((content) => {
      const metrics = context.measureText(content);
      const contentWidht = metrics.width;
      const contentHeight = Math.ceil(
        metrics.fontBoundingBoxDescent + metrics.fontBoundingBoxAscent
      );
      maxWidth = Math.max(maxWidth, contentWidht);
      sumHeight += contentHeight;

      lines.push({ width: contentWidht, height: contentHeight });
    });

    const angle = (rotate * Math.PI) / 180;

    return {
      //  rotate 旋转后的实际占位宽度
      width: Math.ceil(
        Math.abs(Math.sin(angle) * maxWidth) +
          Math.abs(Math.cos(angle) * maxWidth)
      ),
      // rotate 旋转后的实际占位高度
      height: Math.ceil(
        Math.abs(Math.sin(angle) * sumHeight) +
          Math.abs(Math.cos(angle) * sumHeight)
      ),
      contentWidth: maxWidth,
      contentHeight: sumHeight,
      lines,
    };
  };

  const measureImageSize = (
    image: string
  ): Promise<{ width: number; height: number; source: HTMLImageElement }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.referrerPolicy = "no-referrer";
      img.src = image;
      img.onload = () => {
        const { width, height } = props;
        let imageWidth = 0;
        let imageHeight = 0;
        if (width && !height) {
          imageWidth = width;
          imageHeight = (img.height / img.width) * width;
        } else if (height && !width) {
          imageWidth = (img.width / img.height) * height;
          imageHeight = height;
        } else if (!height && !width) {
          imageWidth = 120;
          imageHeight = 64;
        }
        resolve({
          width: imageWidth,
          height: imageHeight,
          source: img,
        });
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  const prepareContext = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const canvasWidth = width + 2 * offset[0];
    const canvasHeight = height + 2 * offset[1];
    context.canvas.setAttribute("width", `${canvasWidth}px`);
    context.canvas.setAttribute("height", `${canvasHeight}px`);
    context.translate(canvasWidth / 2, canvasHeight / 2);
    const angle = (rotate * Math.PI) / 180;
    context.rotate(angle);
  };

  const drawText = (
    context: CanvasRenderingContext2D,
    measures: ReturnType<typeof measureTextSize>
  ) => {
    prepareContext(context, measures.width, measures.height);

    contents.forEach((content, index) => {
      const line = measures.lines[index];
      const x = -line.width / 2;
      const y = line.height * index - measures.contentHeight / 2;

      context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      context.textAlign = textAlign;
      context.textBaseline = "top";
      if (color) {
        context.fillStyle = color;
      }

      context.fillText(content, x, y, measures.contentWidth);
    });
  };

  const createWatermark = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;

    if (image) {
      measureImageSize(image)
        .then((measures) => {
          const { width, height, source } = measures;
          prepareContext(context, width, height);
          context.drawImage(source, -width / 2, -height / 2, width, height);
          const base64 = canvas.toDataURL();
          if (watermarkRef.current) {
            watermarkRef.current.style.backgroundSize = `${gap[0] + width}px ${
              gap[1] + height
            }px`;
            watermarkRef.current.style.backgroundImage = `url("${base64}")`;
          }
        })
        .catch(() => {
          const measures = measureTextSize(context);
          drawText(context, measures);
          const base64 = canvas.toDataURL();
          if (watermarkRef.current) {
            watermarkRef.current.style.backgroundSize = `${
              gap[0] + measures.width
            }px ${gap[1] + measures.height}px`;
            watermarkRef.current.style.backgroundImage = `url("${base64}")`;
          }
        });
    } else {
      const measures = measureTextSize(context);
      drawText(context, measures);
      const base64 = canvas.toDataURL();
      if (watermarkRef.current) {
        watermarkRef.current.style.backgroundSize = `${
          gap[0] + measures.width
        }px ${gap[1] + measures.height}px`;
        watermarkRef.current.style.backgroundImage = `url("${base64}")`;
      }
    }
  };

  useLayoutEffect(() => {
    createWatermark();
  });

  return (
    <div {...stylex.props(styles.watermark)}>
      {children}
      <div ref={watermarkRef} {...stylex.props(styles.watermark$content)}></div>
    </div>
  );
};

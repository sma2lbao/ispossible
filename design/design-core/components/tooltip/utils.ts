import type { Direction } from "./tooltip.types";

// 计算 Tooltip 位置的函数
export const calculatePosition = (
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  direction: Direction,
  scrollX: number,
  scrollY: number
) => {
  const spacing = 8; // 设置触发元素和 Tooltip 之间的距离
  const {
    top: triggerTop,
    left: triggerLeft,
    right: triggerRight,
    bottom: triggerBottom,
    width: triggerWidth,
    height: triggerHeight,
  } = triggerRect;
  const { width: tooltipWidth, height: tooltipHeight } = tooltipRect;

  // 基本位置计算
  const baseTop = triggerTop + scrollY;
  const baseLeft = triggerLeft + scrollX;

  let top = 0;
  let left = 0;

  switch (direction) {
    case "top":
      top = triggerTop - tooltipHeight - spacing + scrollY;
      left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
      break;
    case "bottom":
      top = triggerBottom + spacing + scrollY;
      left = baseLeft + triggerWidth / 2 - tooltipWidth / 2;
      break;
    case "left":
      top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
      left = triggerLeft - tooltipWidth - spacing + scrollX;
      break;
    case "right":
      top = baseTop + triggerHeight / 2 - tooltipHeight / 2;
      left = triggerRight + spacing + scrollX;
      break;
    case "top-left":
      top = triggerTop - tooltipHeight - spacing + scrollY;
      left = baseLeft;
      break;
    case "top-right":
      top = triggerTop - tooltipHeight - spacing + scrollY;
      left = triggerRight - tooltipWidth + scrollX;
      break;
    case "bottom-left":
      top = triggerBottom + spacing + scrollY;
      left = baseLeft;
      break;
    case "bottom-right":
      top = triggerBottom + spacing + scrollY;
      left = triggerRight - tooltipWidth + scrollX;
      break;
    case "left-top":
      top = baseTop;
      left = triggerLeft - tooltipWidth - spacing + scrollX;
      break;
    case "left-bottom":
      top = triggerBottom + scrollY - tooltipHeight;
      left = triggerLeft - tooltipWidth - spacing + scrollX;
      break;
    case "right-top":
      top = baseTop;
      left = triggerRight + spacing + scrollX;
      break;
    case "right-bottom":
      top = triggerBottom + scrollY - tooltipHeight;
      left = triggerRight + spacing + scrollX;
      break;
    default:
      break;
  }

  return { top, left };
};

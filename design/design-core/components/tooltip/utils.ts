import type { Placement } from "./types";

export interface CalcStyleProps {
  placement: Placement;
  gap?: number;
  trigger: Element;
  hasPosition?: boolean;
  scrollX?: number;
  scrollY?: number;
}

export const calcPositionStyle = (
  props: CalcStyleProps
): React.CSSProperties => {
  const {
    placement,
    gap = 0,
    scrollX = 0,
    scrollY = 0,
    trigger,
    hasPosition = false,
  } = props;
  const [primary, secondary] = splitCamelCase(placement);
  const rect = trigger.getBoundingClientRect();

  const { left, top, width, height } = rect;
  let transformX = -50; // X轴 左移 - ； 右移 +
  let transformY = -50; // Y轴 上移 - ；下移 +
  let moveX = hasPosition ? width / 2 : left + width / 2; // X轴 左移 - ； 右移 +
  let moveY = hasPosition ? height / 2 : top + height / 2; // Y轴 上移 - ；下移 +
  const moveYUnit = height / 2;
  const moveXUnit = width / 2;
  const transformUnit = 50;

  if (primary === "top") {
    transformY -= transformUnit;
    moveY -= moveYUnit;
    moveY -= gap;
  }
  if (primary === "bottom") {
    transformY += transformUnit;
    moveY += moveYUnit;
    moveY += gap;
  }
  if (primary === "right") {
    transformX += transformUnit;
    moveX += moveXUnit;
    moveX += gap;
  }
  if (primary === "left") {
    transformX -= transformUnit;
    moveX -= moveXUnit;
    moveX -= gap;
  }

  if (secondary === "top") {
    moveY -= moveYUnit;
    transformY += transformUnit;
  }
  if (secondary === "bottom") {
    moveY += moveYUnit;
    transformY -= transformUnit;
  }
  if (secondary === "right") {
    moveX += moveXUnit;
    transformX -= transformUnit;
  }
  if (secondary === "left") {
    transformX += transformUnit;
    moveX -= moveXUnit;
  }

  return {
    transform: `translate(calc(${moveX + scrollX}px + ${transformX}%), calc(${
      moveY + scrollY
    }px + ${transformY}%))`,
  };
};

const splitCamelCase = (input: string): string[] => {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(" ");
};

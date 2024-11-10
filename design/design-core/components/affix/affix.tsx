import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { AffixProps } from "./affix.types";
import { isWindow } from "../../shared";

export const Affix: React.FC<AffixProps> = (props) => {
  const { offset = 0, direction = "top", target = window, children } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [affixed, setAffixed] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect>();
  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});

  // 监听窗口尺寸变化
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 更新 affix 状态和位置样式
  useEffect(() => {
    const updatePosition = () => {
      if (!rootRef.current || !containerRect) return;

      const rootRect = rootRef.current.getBoundingClientRect();
      let shouldAffix = false;
      let newPositionStyle: React.CSSProperties = {};

      if (isWindow(target)) {
        if (target !== window) {
          const scrollY = target.scrollY;
          // target 为 window，直接根据视口计算
          shouldAffix =
            direction === "top"
              ? rootRect.top <= offset
              : window.innerHeight - rootRect.bottom <= offset;

          newPositionStyle =
            direction === "top"
              ? { top: offset + scrollY }
              : { bottom: offset };
        } else {
          // target 为 window，直接根据视口计算
          shouldAffix =
            direction === "top"
              ? rootRect.top <= offset
              : window.innerHeight - rootRect.bottom <= offset;

          newPositionStyle =
            direction === "top" ? { top: offset } : { bottom: offset };
        }
      } else {
        // target 为 DOM 元素，使用 target 的位置计算
        const targetRect = target.getBoundingClientRect();
        if (direction === "top") {
          shouldAffix = rootRect.top <= targetRect.top + offset;
          newPositionStyle = {
            top: targetRect.top + offset,
          };
        } else {
          shouldAffix = rootRect.bottom >= targetRect.bottom - offset;
          newPositionStyle = {
            top: targetRect.bottom - offset - containerRect.height,
          };
        }
      }

      setAffixed(shouldAffix);
      if (shouldAffix) {
        setPositionStyle(newPositionStyle);
      }
    };

    // 获取目标滚动元素
    updatePosition(); // 初始检查

    target.addEventListener("scroll", updatePosition);
    return () => {
      target.removeEventListener("scroll", updatePosition);
    };
  }, [offset, direction, target, containerRect]);

  return (
    <div ref={rootRef}>
      {/* 占位元素 */}
      {affixed && containerRect ? (
        <div
          style={{
            width: containerRect.width,
            height: containerRect.height,
          }}
        />
      ) : null}

      {/* Affix 元素 */}
      <div
        ref={containerRef}
        style={
          affixed
            ? {
                position: "fixed", // 只有当 affixed 为 true 时才固定定位
                width: containerRect?.width,
                zIndex: 99,
                ...positionStyle,
              }
            : {} // 否则保持原本流中的位置
        }
      >
        {children}
      </div>
    </div>
  );
};

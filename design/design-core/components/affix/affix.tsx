import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { AffixProps } from "./affix.types";

export const Affix: React.FC<AffixProps> = (props) => {
  const { offset = 0, direction = "top", target = window, children } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [affixed, setAffixed] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect>();

  // 获取容器的初始宽高，用于创建占位元素
  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  // 监听 window resize 事件，以便在窗口尺寸变化时更新组件状态
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!rootRef.current || !containerRect) return;

      const rootRect = rootRef.current.getBoundingClientRect();

      // 判断 target 是否为 window
      const isWindow = target === window;
      let shouldAffix = false;

      if (isWindow) {
        // 如果是 window，使用 scrollY 或 scrollX 计算偏移
        shouldAffix =
          direction === "top"
            ? rootRect.top <= offset
            : window.innerHeight - rootRect.bottom <= offset;
      } else {
        // 如果是其他 DOM 元素，使用 target 的 getBoundingClientRect()
        const targetRect = (target as HTMLElement).getBoundingClientRect();
        const offsetTop =
          direction === "top"
            ? rootRect.top - targetRect.top
            : targetRect.bottom - rootRect.bottom;

        shouldAffix =
          direction === "top"
            ? offsetTop <= offset
            : offsetTop + containerRect.height >= offset;
      }

      setAffixed(shouldAffix);
    };

    if (target) {
      const scrollTarget = target === window ? window : (target as HTMLElement);
      scrollTarget.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check in case already affixed
      return () => {
        scrollTarget.removeEventListener("scroll", handleScroll);
      };
    }
  }, [offset, direction, target, containerRect]);

  return (
    <div ref={rootRef}>
      {/* 占位元素，当 affixed 状态为 true 时显示 */}
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
                position: "fixed",
                width: containerRect?.width,
                zIndex: 99,
                ...(direction === "bottom"
                  ? { bottom: offset }
                  : { top: offset }),
              }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
};

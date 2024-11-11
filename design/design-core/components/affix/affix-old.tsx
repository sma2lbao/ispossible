import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { AffixProps } from "./affix.types";
import { isWindow } from "../../shared";

export const Affix: React.FC<AffixProps> = (props) => {
  const { offset = 0, direction = "top", target = window, children } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [affixed, setAffixed] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect>();

  // 获取容器的初始宽高
  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  // 设置 IntersectionObserver 来监控目标元素的可见性
  useEffect(() => {
    const updatePosition = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        setAffixed(true); // 目标元素不可见时固定
      } else {
        setAffixed(false); // 目标元素可见时取消固定
      }
    };

    const options: IntersectionObserverInit = {
      root: isWindow(target) ? null : target, // 如果是 window，root 为 null；如果是其他 DOM 元素，设置为 target
      rootMargin:
        direction === "top"
          ? `-${offset}px 0px 0px 0px`
          : `0px 0px -${offset}px 0px`, // 计算 offset
      threshold: 0, // 当目标元素进入或离开视口时触发
    };

    const observer = new IntersectionObserver(updatePosition, options);
    if (containerRef.current) {
      observer.observe(containerRef.current); // 观察 containerRef 元素
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [offset, direction, target]);

  // 在 affixed 为 true 时调整位置样式
  const positionStyle = affixed
    ? {
        position: "fixed",
        zIndex: 99,
        width: containerRect?.width,
        ...(direction === "top" ? { top: offset } : { bottom: offset }),
      }
    : {};

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
      <div ref={containerRef} style={positionStyle}>
        {children}
      </div>
    </div>
  );
};

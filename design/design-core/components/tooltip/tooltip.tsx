import React, { useRef, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import stylex from "@stylexjs/stylex";
import { isFunction, mergeEvents, mergeRefs } from "../../shared";
import type { TooltipProps } from "./tooltip.types";
import { calculatePosition } from "./utils";
import { styles } from "./tooltip.stylex";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    title,
    children,
    direction = "top",
    arrow = true,
    visible = false,
    popupStyle,
  } = props;

  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>();
  const [visibleInner, setVisibleInner] = useState<boolean>(visible);

  const child: React.ReactElement = React.isValidElement(children) ? (
    children
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

  const handleOpenPopover = () => {
    setVisibleInner(true);
  };

  const handleClosePopover = () => {
    setVisibleInner(false);
  };

  const updatePosition = () => {
    const triggerRect = triggerRef.current?.getBoundingClientRect();
    if (tooltipRef.current && triggerRect) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      // 获取当前的滚动位置
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      setPosition(
        calculatePosition(triggerRect, tooltipRect, direction, scrollX, scrollY)
      );
    }
  };

  // 当大小变化时更新位置
  const handleResize = () => {
    if (visibleInner) {
      updatePosition();
    }
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (triggerRef.current) {
      resizeObserver.observe(triggerRef.current);
    }
    return () => {
      resizeObserver.disconnect(); // 清理观察者
    };
  }, [visibleInner]);

  useLayoutEffect(() => {
    if (visibleInner) {
      updatePosition();
    }
  }, [visibleInner]);

  const renderContent = () => {
    if (!visibleInner) {
      return null;
    }

    return createPortal(
      <div
        ref={tooltipRef}
        {...stylex.props(styles.root, popupStyle)}
        style={{ top: `${position?.top}px`, left: `${position?.left}px` }}
      >
        <div>{isFunction(title) ? title() : title}</div>
        {arrow ? (
          <div {...stylex.props(styles.arrow, styles[direction])}></div>
        ) : null}
      </div>,
      document.body
    );
  };

  return (
    <React.Fragment>
      {React.cloneElement(child, {
        ref: mergeRefs(child.props?.ref, triggerRef),
        onMouseEnter: mergeEvents(child.props?.onMouseEnter, handleOpenPopover),
        onMouseLeave: mergeEvents(
          child.props?.onMouseLeave,
          handleClosePopover
        ),
      })}
      {renderContent()}
    </React.Fragment>
  );
};

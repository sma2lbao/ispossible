import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import stylex from "@stylexjs/stylex";
import { isFunction, mergeEvents, mergeRefs, noop } from "../../shared";
import { useClickOutside } from "../../hooks/use-click-outside";
import type { TooltipProps } from "./tooltip.types";
import { calculatePosition } from "./utils";
import { styles, light } from "./tooltip.stylex";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    title,
    children,
    direction = "top",
    trigger = "hover",
    enterDelay = 50,
    leaveDelay = 50,
    visible = false,
    arrow = true,
    gap = 0,
    theme = "dark",
    popupStylex,
    popupStyle,
  } = props;

  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>();
  const [visibleInner, setVisibleInner] = useState<boolean>(false);

  const child: React.ReactElement = React.isValidElement(children) ? (
    children
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );

  const handleOpenPopover = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    openTimer.current = setTimeout(() => {
      setVisibleInner(true);
    }, enterDelay);
  };

  const handleClosePopover = () => {
    closeTimer.current = setTimeout(() => {
      setVisibleInner(false);
    }, leaveDelay);
  };

  // 鼠标移入弹窗
  const handleEnterPopover = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setVisibleInner(true);
  };

  // 鼠标移出弹窗
  const handleLeavePopover = () => {
    handleClosePopover();
  };

  const handleOutside = useCallback((event: MouseEvent) => {
    if (trigger !== "click") return;
    handleClosePopover();
  }, []);

  // 更新位置
  const updatePosition = () => {
    const triggerRect = triggerRef.current?.getBoundingClientRect();
    if (tooltipRef.current && triggerRect) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      // 获取当前的滚动位置
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      setPosition(
        calculatePosition({
          triggerRect,
          tooltipRect,
          direction,
          scrollX,
          scrollY,
          gap,
        })
      );
    }
  };

  // 当大小变化时更新位置
  const handleResize = () => {
    if (visibleInner) {
      updatePosition();
    }
  };

  // 点击外面时
  useClickOutside([triggerRef, tooltipRef], handleOutside);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (triggerRef.current) {
      resizeObserver.observe(triggerRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [visibleInner]);

  useLayoutEffect(() => {
    if (visibleInner) {
      updatePosition();
    }
  }, [visibleInner]);

  useEffect(() => {
    if (trigger === "custom") {
      setVisibleInner(visible);
    }
  }, [visible]);

  const renderContent = () => {
    if (!visibleInner) {
      return null;
    }
    return createPortal(
      <div
        ref={tooltipRef}
        {...stylex.props(theme === "light" && light, styles.root, popupStylex)}
        style={{
          top: `${position?.top}px`,
          left: `${position?.left}px`,
          ...popupStyle,
        }}
        onMouseEnter={handleEnterPopover}
        onMouseLeave={handleLeavePopover}
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
        onMouseEnter: mergeEvents(
          child.props?.onMouseEnter,
          trigger === "hover" ? handleOpenPopover : noop
        ),
        onMouseLeave: mergeEvents(
          child.props?.onMouseLeave,
          trigger === "hover" ? handleClosePopover : noop
        ),
        onClick: mergeEvents(
          child.props?.onClick,
          trigger === "click" ? handleOpenPopover : noop
        ),
      })}
      {renderContent()}
    </React.Fragment>
  );
};

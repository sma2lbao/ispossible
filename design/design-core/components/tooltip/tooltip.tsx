import stylex from "@stylexjs/stylex";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import { styles, light } from "./tooltip.stylex";
import { calculatePosition } from "./utils";
import { useClickOutside } from "../../hooks/use-click-outside";
import { isFunction, mergeEvents, mergeRefs, noop } from "../../shared";
import type { TooltipHandles, TooltipProps } from "./tooltip.types";

export const Tooltip = React.forwardRef<TooltipHandles, TooltipProps>(
  (props, ref) => {
    const isControl = "visible" in props && props.trigger === "custom";
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
      onClosed,
    } = props;

    const triggerRef = useRef<HTMLElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const openTimer = useRef<NodeJS.Timeout | null>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);
    const [position, setPosition] = useState<{ top: number; left: number }>();
    const [rawVisible, setRawVisible] = useState<boolean>(visible);
    const prevRawVisibleRef = useRef(rawVisible);

    const child = React.isValidElement(children) ? (
      children
    ) : (
      <React.Fragment>{children}</React.Fragment>
    );

    /**
     * 打开弹窗
     */
    const handleOpenPopover = () => {
      if (isControl) return;
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
      openTimer.current = setTimeout(() => {
        setRawVisible(true);
      }, enterDelay);
    };

    /**
     * 关闭弹窗
     */
    const handleClosePopover = () => {
      if (isControl) return;
      closeTimer.current = setTimeout(() => {
        setRawVisible(false);
      }, leaveDelay);
    };

    /**
     * 鼠标移入弹窗
     */
    const handleEnterPopover = () => {
      if (isControl) return;
      if (closeTimer.current) {
        // 需要清除关闭回调
        clearTimeout(closeTimer.current);
      }
      setRawVisible(true);
    };

    // 鼠标移出弹窗
    const handleLeavePopover = () => {
      if (trigger === "hover") {
        handleClosePopover();
      }
    };

    const handleOutside = useCallback((event: MouseEvent) => {
      if (trigger !== "click") return;
      handleClosePopover();
    }, []);

    /**
     * 更新位置
     */
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

    /**
     * 当大小变化时更新位置
     */
    const handleResize = () => {
      if (rawVisible) {
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
    }, [rawVisible]);

    useLayoutEffect(() => {
      if (rawVisible) {
        updatePosition();
      }
    }, [rawVisible]);

    useEffect(() => {
      const prevRawVisible = prevRawVisibleRef.current;

      if (prevRawVisible && !rawVisible) {
        onClosed?.();
      }

      // 更新 ref 的值为当前的 visible 值
      prevRawVisibleRef.current = visible;
    }, [rawVisible]);

    useEffect(() => {
      if (trigger === "custom") {
        setRawVisible(visible);
      }
    }, [visible]);

    useImperativeHandle(ref, () => {
      return {
        close: () => {
          handleClosePopover();
        },
      };
    });

    const renderContent = () => {
      if (!rawVisible) {
        return null;
      }
      return createPortal(
        <div
          ref={tooltipRef}
          {...stylex.props(
            theme === "light" && light,
            styles.root,
            popupStylex
          )}
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
          ref: mergeRefs((child as any)?.ref, triggerRef),
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
  }
);

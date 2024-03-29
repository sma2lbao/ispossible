import React, {
  CSSProperties,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import stylex from "@stylexjs/stylex";
import { isFunction } from "../../shared";
import { arrowConfig, arrowPlacement, arrowSize, delay } from "./config";
import { calcPositionStyle } from "./utils";
import { type TooltipProps } from "./types";

const styles = stylex.create({
  root: (color: string, backgroundColor: string) => ({
    position: "absolute",
    color: color || "#fff",
    backgroundColor: backgroundColor || "#000",
    borderRadius: "4px",
    padding: "6px 10px",
    inset: "0 auto auto 0",
    fontSize: 14,
    lineHeight: 1.4,
    boxShadow:
      "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  }),

  arrow: (color: string, size: number) => ({
    position: "absolute",
    inset: "0 auto auto 0",
    color: color || "#000",
    lineHeight: 1,
    fontSize: size || 16,
  }),
});

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    title,
    children,
    placement = "top",
    visible = false,
    arrow = true,
    popupStyle,
    backgroundColor = "#000",
    color = "#fff",
  } = props;

  const gap = arrow ? Math.round(arrowSize * 0.5) + 2 : 4;
  const childRef = useRef<HTMLElement>();
  const panelRef = useRef<HTMLDivElement>(null);
  const delayRef = useRef<NodeJS.Timeout>();
  const [positionStyle, setPositionStyle] = useState<CSSProperties>();
  const [arrowPositionStyle, setArrowPositionStyle] = useState<CSSProperties>();
  const [visibleInner, setVisibleInner] = useState<boolean>(visible);

  const child = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const closePopup: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
    delayRef.current = setTimeout(() => {
      setVisibleInner(false);
    }, delay);
  };

  const openPopup = () => {
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }
    setVisibleInner(true);
  };

  /**
   * 计算样式
   */
  const calcStyle = () => {
    if (childRef.current) {
      const style = calcPositionStyle({
        placement,
        gap,
        trigger: childRef.current,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });

      setPositionStyle({ ...style });
    }
  };

  const renderContent = () => {
    if (!visibleInner) {
      return null;
    }

    return createPortal(
      <div
        onMouseEnter={openPopup}
        onMouseLeave={closePopup}
        ref={panelRef}
        style={{
          ...positionStyle,
          ...stylex.props(styles.root(color, backgroundColor), popupStyle)
            .style,
        }}
        className={
          stylex.props(styles.root(color, backgroundColor), popupStyle)
            .className
        }
      >
        {arrow && (
          <span
            style={{
              ...arrowPositionStyle,
              ...stylex.props(styles.arrow(backgroundColor, arrowSize)).style,
            }}
            className={
              stylex.props(styles.arrow(backgroundColor, arrowSize)).className
            }
          >
            {arrowConfig[placement]}
          </span>
        )}
        <div>{isFunction(title) ? title() : title}</div>
      </div>,
      document.body
    );
  };

  useLayoutEffect(() => {
    if (childRef.current) {
      const resizeObserver = new ResizeObserver(calcStyle);
      resizeObserver.observe(document.body);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (visibleInner) {
      calcStyle();
    }
  }, [visibleInner]);

  useEffect(() => {
    if (panelRef.current) {
      const arrowPositonStyle = calcPositionStyle({
        trigger: panelRef.current!,
        placement: arrowPlacement[placement],
        hasPosition: true,
        gap: -gap / 2 - 2,
      });

      setArrowPositionStyle(arrowPositonStyle);
    }
  }, [panelRef.current]);

  useEffect(() => {
    return () => {
      if (delayRef.current) {
        clearTimeout(delayRef.current);
      }
    };
  }, []);

  return (
    <React.Fragment>
      {React.cloneElement(child, {
        ref: childRef,
        onMouseEnter: openPopup,
        onMouseLeave: closePopup,
      })}
      {renderContent()}
    </React.Fragment>
  );
};

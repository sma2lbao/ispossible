import React, { CSSProperties, useRef, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import stylex from "@stylexjs/stylex";
import { isFunction } from "../../shared";

type TootipAlign =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";
export interface TooltipProps {
  title: (() => React.ReactNode) | React.ReactNode;
  children: React.ReactNode;
  align?: TootipAlign;
  visible?: boolean;
  arrow?: boolean;
}

const styles = stylex.create({
  root: {
    position: "absolute",
    backgroundColor: "#fff",
    // borderRadius: "4px",
    // padding: "8px 16px",
    // fontSize: 14,
    // lineHeight: 1.4,
    display: "none",
    boxShadow:
      "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  },
});

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { title, children, align = "right", visible = false } = props;
  const childRef = useRef<HTMLElement>();
  const [style, setStyle] = useState<CSSProperties>();
  const [visibleInner, setVisibleInner] = useState<boolean>(visible);
  const resizeRef = useRef<ResizeObserver>();

  const child = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const calcStyle = () => {
    const rect = childRef.current?.getBoundingClientRect();

    if (rect) {
      const { left, top, width, height } = rect;
      const insetConfig: Record<TootipAlign, CSSProperties> = {
        top: {
          inset: `${top}px auto auto ${left + width / 2}px`,
          transform: "translate(-50%, -100%)",
        },
        left: {
          inset: `${top + height / 2}px auto auto ${left}px`,
          transform: "translate(-100%, -50%)",
        },
        right: {
          inset: `${top + height / 2}px auto auto ${left + width}px`,
          transform: "translate(0, -50%)",
        },
        bottom: {
          inset: `${top + height}px auto auto ${left + width / 2}px`,
          transform: "translate(-50%, 0)",
        },
        topLeft: {
          inset: `${top}px auto auto ${left}px`,
          transform: "translate(0, -100%)",
        },
        topRight: {
          inset: `${top}px auto auto ${left + width}px`,
          transform: "translate(-100%, -100%)",
        },
        rightTop: {
          inset: `${top}px auto auto ${left + width}px`,
        },
        rightBottom: {
          inset: `${top + height}px auto auto ${left + width}px`,
          transform: "translate(0, -100%)",
        },
        bottomLeft: {
          inset: `${top + height}px auto auto ${left}px`,
        },
        bottomRight: {
          inset: `${top + height}px auto auto ${left + width}px`,
          transform: "translate(-100%, 0)",
        },
        leftTop: {
          inset: `${top}px auto auto ${left}px`,
          transform: "translate(-100%, 0)",
        },
        leftBottom: {
          inset: `${top + height}px auto auto ${left}px`,
          transform: "translate(-100%, -100%)",
        },
      };
      const style = insetConfig[align];
      setStyle({ ...style, display: "block" });
    }
  };

  const renderContent = () => {
    if (!visibleInner) {
      return null;
    }
    return createPortal(
      <div
        onMouseEnter={() => setVisibleInner(true)}
        onMouseLeave={() => setVisibleInner(false)}
        style={style}
        {...stylex.props(styles.root)}
      >
        {isFunction(title) ? title() : title}
      </div>,
      document.body
    );
  };

  useLayoutEffect(() => {
    if (childRef.current && !resizeRef.current) {
      resizeRef.current = new ResizeObserver(calcStyle);

      resizeRef.current.observe(document.body);

      return () => {
        resizeRef.current?.disconnect();
      };
    }
  }, []);

  return (
    <React.Fragment>
      {React.cloneElement(child, {
        ref: childRef,
        onMouseEnter: () => setVisibleInner(true),
        onMouseLeave: () => setVisibleInner(false),
      })}
      {renderContent()}
    </React.Fragment>
  );
};

export default Tooltip;

import React, {
  CSSProperties,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { isFunction } from "../../shared";
import "@design/icon/caret-left";
import "@design/icon/caret-right";
import "@design/icon/caret-bottom";
import "@design/icon/caret-top";

export type TootipPlacement =
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
  /**
   * 气泡框位置
   */
  placement?: TootipPlacement;
  /**
   * 用于手动控制浮层显隐
   */
  visible?: boolean;
  /**
   * 是否显示箭头
   */
  arrow?: boolean;
  /**
   * 卡片样式 (使用StyleX)
   */
  popupStyle?: StyleXStyles;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 字体颜色
   */
  color?: string;
}

const arrowSize = 16;
const delay = 180;

const styles = stylex.create({
  root: {
    position: "absolute",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
    padding: "6px 10px",
    fontSize: 14,
    lineHeight: 1.4,
    boxShadow:
      "0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  },
  hidden: {
    display: "none",
  },
  arrow: {
    position: "absolute",
    color: "#000",
    lineHeight: 1,
    fontSize: arrowSize,
  },
  top: {
    inset: "auto auto 0 50%",
    transform: "translate(-50%, 60%)",
  },
  topLeft: {
    inset: "auto auto 0 0",
    transform: "translate(25%, 60%)",
  },
  topRight: {
    inset: "auto 0 0 auto",
    transform: "translate(-25%, 60%)",
  },
  right: {
    inset: "50% auto auto 0",
    transform: "translate(-60%, -50%)",
  },
  rightTop: {
    inset: "0 auto auto 0",
    transform: "translate(-60%, 25%)",
  },
  rightBottom: {
    inset: "50% auto auto 0",
    transform: "translate(-60%, -25%)",
  },
  bottom: {
    inset: "0 auto auto 50%",
    transform: "translate(-50%, -60%)",
  },
  bottomLeft: {
    inset: "0 auto auto 0",
    transform: "translate(25%, -60%)",
  },
  bottomRight: {
    inset: "0 0 auto auto",
    transform: "translate(-25%, -60%)",
  },
  left: {
    inset: "50% 0 auto auto",
    transform: "translate(60%, -50%)",
  },
  leftTop: {
    inset: "0 0 auto auto",
    transform: "translate(60%, 25%)",
  },
  leftBottom: {
    inset: "auto 0 0 auto",
    transform: "translate(60%, -25%)",
  },
});

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    title,
    children,
    placement = "right",
    visible = false,
    arrow = true,
    popupStyle,
    backgroundColor = "#000",
    color = "#fff",
  } = props;

  const childRef = useRef<HTMLElement>();
  const [style, setStyle] = useState<CSSProperties>();
  const [visibleInner, setVisibleInner] = useState<boolean>(visible);
  const resizeRef = useRef<ResizeObserver>();

  const child = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const closePopup = () => {
    setTimeout(() => {
      setVisibleInner(false);
    }, delay);
  };

  const openPopup = () => {
    setTimeout(() => {
      setVisibleInner(true);
    }, delay);
  };

  const calcStyle = () => {
    const rect = childRef.current?.getBoundingClientRect();
    const gap = arrow ? Math.round(arrowSize * 0.6) : 4;

    if (rect) {
      const { left, top, width, height } = rect;
      const insetConfig: Record<TootipPlacement, CSSProperties> = {
        top: {
          inset: `${top - gap}px auto auto ${left + width / 2}px`,
          transform: "translate(-50%, -100%)",
        },
        left: {
          inset: `${top + height / 2}px auto auto ${left - gap}px`,
          transform: "translate(-100%, -50%)",
        },
        right: {
          inset: `${top + height / 2}px auto auto ${left + width + gap}px`,
          transform: "translate(0, -50%)",
        },
        bottom: {
          inset: `${top + height + gap}px auto auto ${left + width / 2}px`,
          transform: "translate(-50%, 0)",
        },
        topLeft: {
          inset: `${top - gap}px auto auto ${left}px`,
          transform: "translate(0, -100%)",
        },
        topRight: {
          inset: `${top - gap}px auto auto ${left + width}px`,
          transform: "translate(-100%, -100%)",
        },
        rightTop: {
          inset: `${top}px auto auto ${left + width + gap}px`,
        },
        rightBottom: {
          inset: `${top + height}px auto auto ${left + width + gap}px`,
          transform: "translate(0, -100%)",
        },
        bottomLeft: {
          inset: `${top + height + gap}px auto auto ${left}px`,
        },
        bottomRight: {
          inset: `${top + height + gap}px auto auto ${left + width}px`,
          transform: "translate(-100%, 0)",
        },
        leftTop: {
          inset: `${top}px auto auto ${left - gap}px`,
          transform: "translate(-100%, 0)",
        },
        leftBottom: {
          inset: `${top + height}px auto auto ${left - gap}px`,
          transform: "translate(-100%, -100%)",
        },
      };
      const style = insetConfig[placement];
      setStyle({ ...style });
    }
  };

  const renderContent = () => {
    if (!visibleInner) {
      return null;
    }
    const arrowConfig: Record<TootipPlacement, React.ReactNode> = {
      top: <is-caret-bottom />,
      bottom: <is-caret-top />,
      left: <is-caret-right />,
      right: <is-caret-left />,
      topLeft: <is-caret-bottom />,
      topRight: <is-caret-bottom />,
      bottomLeft: <is-caret-top />,
      bottomRight: <is-caret-top />,
      leftTop: <is-caret-right />,
      leftBottom: <is-caret-right />,
      rightTop: <is-caret-left />,
      rightBottom: <is-caret-left />,
    };
    return createPortal(
      <div
        onMouseEnter={() => openPopup()}
        onMouseLeave={() => closePopup()}
        style={{ ...style, backgroundColor, color }}
        {...stylex.props(
          styles.root,
          !visibleInner && styles.hidden,
          popupStyle
        )}
      >
        {arrow && (
          <span
            {...stylex.props(styles.arrow, styles[placement])}
            style={{ color: backgroundColor }}
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
    if (childRef.current && !resizeRef.current) {
      resizeRef.current = new ResizeObserver(calcStyle);
      resizeRef.current.observe(document.body);
      return () => {
        resizeRef.current?.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (visible) {
      calcStyle();
    }
  }, [visible]);

  return (
    <React.Fragment>
      {React.cloneElement(child, {
        ref: childRef,
        onMouseEnter: () => openPopup(),
        onMouseLeave: () => closePopup(),
      })}
      {renderContent()}
    </React.Fragment>
  );
};

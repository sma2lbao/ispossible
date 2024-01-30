import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { isFunction } from "../../shared";

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content } = props;
  const childRef = useRef<HTMLElement>();
  const [childRect, setChildRect] = useState<DOMRect>();

  const child = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children}</span>
  );

  const renderContent = () => {
    return createPortal(
      <div
        style={{
          position: "absolute",
          left: childRect?.left + "px",
          top: childRect?.top + "px",
        }}
      >
        {isFunction(content) ? content() : content}
      </div>,
      document.body
    );
  };

  useEffect(() => {
    if (childRef.current) {
      setChildRect(childRef.current?.getBoundingClientRect());
    }
  }, []);

  return (
    <React.Fragment>
      {React.cloneElement(child, { ref: childRef })}
      {renderContent()}
    </React.Fragment>
  );
};

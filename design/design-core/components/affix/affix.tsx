import React, { useLayoutEffect, useRef, useState } from "react";

export interface AffixProps {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * 优先级高于offsetBottom
   * @default 0
   */
  offsetTop?: number;

  children?: React.ReactNode;
}

export const Affix: React.FC<AffixProps> = (props) => {
  const { offsetTop = 0, children } = props;
  const domRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [childStyle, setChildStyle] = useState<React.CSSProperties>();

  useLayoutEffect(() => {
    if (!domRef.current || !childRef.current) return;
    const { width, height } = childRef.current.getBoundingClientRect();

    const observer = new IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (offsetTop != null) {
          if (ratio < 1) {
            setChildStyle({
              position: "fixed",
              top: offsetTop,
              width,
              height,
            });
          } else {
            setChildStyle(undefined);
          }
        }
        // TODO offsetBottom
      },
      {
        root: null,
        threshold: [0, 1],
        rootMargin: `${-offsetTop}px 0px 0px 0px`,
      }
    );
    observer.observe(domRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={domRef}></div>
      <div ref={childRef} style={childStyle}>
        {children}
      </div>
    </>
  );
};

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { AnchorLink } from "./anchor-link";
import { AnchorContext } from "./anchor.context";
import type { AnchorProps, OnClickLinkData } from "./anchor.types";
import { styles } from "./anchor.stylex";

export const Anchor: React.FC<AnchorProps> = (props) => {
  const {
    items,
    offsetTop = 0,
    container = window,
    stylex: customStylex,
    children,
  } = props;
  const [activeAnchor, setActiveAnchor] = useState<string>();
  const [records, setRecords] = useState<string[]>([]);
  const scroolByEventFlag = useRef<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const register = (anchor: string) => {
    if (!records.includes(anchor)) {
      records.push(anchor);
      setRecords(records);
    }
  };

  const handleClickLink = (data: OnClickLinkData) => {
    if (activeAnchor === data.href) return;
    scroolByEventFlag.current = true;
    setActiveAnchor(data.href);
    const rect = document.querySelector(data.href)?.getBoundingClientRect();
    if (rect) {
      window.scrollTo({
        top: rect.top,
      });
    }
  };

  const handleScroll: EventListenerOrEventListenerObject = () => {
    if (scroolByEventFlag.current) {
      scroolByEventFlag.current = false;
      return;
    }
    let closestTop: number | undefined;
    let closestAnchor: string | undefined;
    records.forEach((anchor) => {
      const rect = document.querySelector(anchor)?.getBoundingClientRect();
      if (rect?.top != null && offsetTop <= rect?.top) {
        // 满足达到offset条件的(即top已经在窗口上方)
        // 找到最靠近阈值的（top值越小越接近）
        if (closestTop === undefined || rect.top < closestTop) {
          closestAnchor = anchor;
          closestTop = rect.top;
        }
      }
    });
    if (closestAnchor) {
      setActiveAnchor(closestAnchor);
    }
  };

  // 自身滚动
  useEffect(() => {
    if (rootRef?.current) {
      const aDom = rootRef?.current.querySelector<HTMLElement>(
        `a[data-anchor="${activeAnchor}"]`
      );
      if (!aDom) return;
      rootRef?.current.scrollTo({
        top: aDom.offsetTop - 10,
      });
    }
  }, [activeAnchor]);

  useLayoutEffect(() => {
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div {...stylex.props(styles.root, customStylex)} ref={rootRef}>
      <div {...stylex.props(styles.slide)}></div>
      <AnchorContext.Provider
        value={{
          level: 0,
          activeAnchor,
          register,
          onClickLink: handleClickLink,
        }}
      >
        {items?.length
          ? items.map((item, index) => {
              return <AnchorLink key={item.label + index} {...item} />;
            })
          : children}
      </AnchorContext.Provider>
    </div>
  );
};

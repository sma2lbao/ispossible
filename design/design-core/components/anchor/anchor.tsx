import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";
import { AnchorNode, type AnchorNodeBaseProps } from "./anchor-node";
import { AnchorContext } from "./context";
import { radiusSizes, spacing } from "../theme/tokens.stylex";

export interface AnchorProps {
  /**
   * 数据化配置选项内容
   */
  items: AnchorNodeBaseProps[];
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * @default 0
   * @type number
   */
  offsetTop?: number;
  /**
   * 指定滚动的容器
   */
  container?: HTMLElement;

  /**
   * 锚点样式（StyleXStyles）
   */
  style?: StyleXStyles;
}

type FlatItem = {
  id: string;
  eleId: string;
};

const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
    padding: spacing.basic,
    borderRadius: radiusSizes.basic,
  },
});

const idMatcherRegex = /#([\S]+)$/;

export const Anchor: React.FC<AnchorProps> = (props) => {
  const { items, offsetTop = 0, container = window, style } = props;
  const [activeNodeId, setActiveNodeId] = useState<string>();
  const scroolByEventFlag = useRef<boolean>(false);

  function toIds(items: AnchorProps["items"]): FlatItem[] {
    return items.reduce<FlatItem[]>((previous, current) => {
      const matcher = idMatcherRegex.exec(current.href);
      const currentArray = !matcher
        ? []
        : [{ id: current.id, eleId: matcher[1] }];
      if (current.children) {
        return previous.concat([...currentArray, ...toIds(current.children)]);
      }
      return previous.concat(currentArray);
    }, []);
  }

  const flatItems = useMemo<FlatItem[]>(() => {
    // 树转数组
    const ids = toIds(items);
    return ids;
  }, [items]);

  const handleClickNode = (node: AnchorNodeBaseProps) => {
    if (activeNodeId === node.id) return;
    scroolByEventFlag.current = true;
    setActiveNodeId(node.id);
    const nextEleId = flatItems.find((item) => item.id === node.id)?.eleId;
    if (!nextEleId) return;
    const rect = document.getElementById(nextEleId)?.getBoundingClientRect();
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
    let closestId: string | undefined;
    flatItems.forEach(({ id, eleId }) => {
      const element = document.getElementById(eleId);
      const rect = element?.getBoundingClientRect();
      if (rect?.top != null && offsetTop <= rect?.top) {
        // 满足达到offset条件的(即top已经在窗口上方)
        // 找到最靠近阈值的（top值越小越接近）
        if (closestTop === undefined || rect.top < closestTop) {
          closestId = id;
          closestTop = rect.top;
        }
      }
    });
    if (closestId) {
      setActiveNodeId(closestId);
    }
  };

  useLayoutEffect(() => {
    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div {...stylex.props(styles.root, style)}>
      <AnchorContext.Provider value={{ activeNodeId, handleClickNode }}>
        {items.map((item) => {
          return <AnchorNode key={item.id} {...item} deep={0} />;
        })}
      </AnchorContext.Provider>
    </div>
  );
};

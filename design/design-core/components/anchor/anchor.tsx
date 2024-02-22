import React, { useLayoutEffect, useMemo, useState } from "react";
import stylex from "@stylexjs/stylex";
import { AnchorNode, type AnchorNodeProps } from "./anchor-node";
import { AnchorContext } from "./context";

export interface AnchorProps {
  items: Omit<AnchorNodeProps, "parentId" | "deep">[];
  offsetTop?: number;
  container?: HTMLElement;
}

export type AnchorNodeEventProps = Pick<
  AnchorNodeProps,
  "id" | "href" | "target" | "replace"
>;

type FlatItem = {
  id: string;
  eleId: string;
};

const styles = stylex.create({
  root: {},
});

const idMatcherRegex = /#([\S]+)$/;

export const Anchor: React.FC<AnchorProps> = (props) => {
  const { items, offsetTop = 0, container = window } = props;
  const [activeNodeId, setActiveNodeId] = useState<string>();

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

  const handleClickNode = (node: AnchorNodeEventProps) => {
    if (activeNodeId === node.id) return;
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

  const handleScroll = () => {
    let closestTop: number | undefined;
    let closestId: string | undefined;
    flatItems.forEach(({ id, eleId }) => {
      const element = document.getElementById(eleId);
      const rect = element?.getBoundingClientRect();
      if (rect?.top != null && offsetTop >= rect?.top) {
        // 满足达到offset条件的(即top已经在窗口上方)
        // 找到最靠近阈值的（top值越大越接近）
        if (closestTop === undefined || rect.top > closestTop) {
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
    <div {...stylex.props(styles.root)}>
      <AnchorContext.Provider value={{ activeNodeId, handleClickNode }}>
        {items.map((item) => {
          return <AnchorNode key={item.id} {...item} deep={0} />;
        })}
      </AnchorContext.Provider>
    </div>
  );
};

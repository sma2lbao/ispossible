import React, { useLayoutEffect, useState } from "react";
import { Affix, Anchor, OnClickLinkData } from "../../components";
import stylex from "@stylexjs/stylex";

type TocItem = { id: string; name: string; story: string };

interface TocProps {
  stories: TocItem[];
  custom?: Omit<TocItem, "story">[];
}

export interface ClickAnchorData {
  type: "click-anchor";
  args: {
    targetRect: DOMRect;
  };
}

const styles = stylex.create({
  root: (scrollY: number) => ({
    marginLeft: "40px",
    // position: "sticky",
    // top: `${scrollY + 65}px`,
  }),
});

export const Toc = (props: TocProps) => {
  const [parentScrollY, setParentScrollY] = useState(0);

  const items = props.stories.map((item) => {
    return {
      href: `#anchor--${item.id}`,
      label: item.name,
    };
  });

  const customItems =
    props.custom?.map((item) => {
      return {
        href: `#${item.id}`,
        label: item.name,
      };
    }) || [];

  const anchors = [...items, ...customItems];

  const sendMessage = (rect: DOMRect) => {
    const answer: ClickAnchorData = {
      type: "click-anchor",
      args: {
        targetRect: rect,
      },
    };
    window.parent?.postMessage(answer, "*");
  };

  const handleClickAnchor = (data: OnClickLinkData) => {
    if (data.targetRect) {
      sendMessage(data.targetRect);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data?.type === "scroll") {
        // 父元素滚动的高度
        setParentScrollY(data.args?.scrollY || 0);
      }
    });
  }, []);

  return (
    <div {...stylex.props(styles.root(parentScrollY))}>
      <Affix target={window.parent} offset={65}>
        <Anchor items={anchors} onClick={handleClickAnchor} />
      </Affix>
    </div>
  );
};

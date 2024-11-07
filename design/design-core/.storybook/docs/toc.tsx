import React from "react";
import { Anchor, Affix } from "../../components";
import stylex from "@stylexjs/stylex";

type TocItem = { id: string; name: string; story: string };

interface TocProps {
  stories: TocItem[];
  custom?: Omit<TocItem, "story">[];
}

const styles = stylex.create({
  root: {
    marginLeft: "40px",
  },
});

export const Toc = (props: TocProps) => {
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

  return (
    <div {...stylex.props(styles.root)}>
      <Affix offsetTop={64}>
        <Anchor items={[...items, ...customItems]} />
      </Affix>
    </div>
  );
};

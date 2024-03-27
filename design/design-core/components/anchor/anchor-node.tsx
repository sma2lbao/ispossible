import React, { useContext } from "react";
import { AnchorContext } from "./context";
import stylex from "@stylexjs/stylex";
import { colors, lineHeight, sizes } from "../theme/tokens.stylex";

export interface AnchorNodeBaseProps {
  id: string;
  href: string;
  target?: string;
  label: string;
  children?: AnchorNodeBaseProps[];
  replace?: boolean;
}

export interface AnchorNodeProps extends AnchorNodeBaseProps {
  // 辅助属性
  parentId?: string;
  deep?: number;
  children?: AnchorNodeProps[];
}

const styles = stylex.create({
  root: {
    paddingLeft: 8,
    fontSize: sizes.basic,
    lineHeight: lineHeight.basic,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  a: {
    color: colors.basic,
    textDecoration: "none",
  },
  active: {
    color: colors.primary,
  },
});

export const AnchorNode: React.FC<AnchorNodeProps> = (props) => {
  const { id, href, target, label, children, replace, deep = 0 } = props;
  const context = useContext(AnchorContext);

  const handClickAELement: React.MouseEventHandler<HTMLAnchorElement> = () => {
    context?.handleClickNode?.({
      id,
      href,
      target,
      replace,
      label,
    });
  };

  return (
    <div {...stylex.props(styles.root)}>
      <a
        href={href}
        title={label}
        onClick={handClickAELement}
        {...stylex.props(
          styles.a,
          context?.activeNodeId === id && styles.active
        )}
      >
        {label}
      </a>
      {children?.map((item) => (
        <AnchorNode key={item.id} {...item} parentId={id} deep={deep + 1} />
      ))}
    </div>
  );
};

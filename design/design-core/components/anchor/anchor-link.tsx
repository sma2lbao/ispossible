import React, { useContext, useEffect, useLayoutEffect } from "react";
import { AnchorContext } from "./anchor.context";
import stylex from "@stylexjs/stylex";
import { AnchorLinkProps } from "./anchor.types";
import { styles } from "./anchor.stylex";

export const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
  const { href, label, items, children } = props;
  const context = useContext(AnchorContext);

  const handClickAELement: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    context.onClickLink?.({
      href,
      domEvent: e,
    });
  };

  useEffect(() => {
    context.register?.(href);
  }, []);

  return (
    <AnchorContext.Provider
      value={{
        ...context,
        level: context.level + 1,
      }}
    >
      <div {...stylex.props(styles.linkRoot)}>
        <a
          data-anchor={href}
          title={label}
          onClick={handClickAELement}
          {...stylex.props(
            styles.link,
            context?.activeAnchor === href && styles.active
          )}
        >
          {label}
        </a>
        <div>
          {items?.length
            ? items?.map((item, index) => (
                <AnchorLink key={item.label + index} {...item} />
              ))
            : children}
        </div>
      </div>
    </AnchorContext.Provider>
  );
};

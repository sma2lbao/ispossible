import stylex from "@stylexjs/stylex";
import React, { useContext, useEffect } from "react";
import { NavContext } from "./nav.context";
import { styles } from "./nav.stylex";
import { NavItemProps } from "./nav.types";
import { useFullPath, useMeasure } from "./path.context";

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { icon, itemKey, text, disabled = false } = props;
  const context = useContext(NavContext);
  const isActive = context.selectedKeys?.includes(itemKey);
  const fullPath = useFullPath(itemKey);
  const measure = useMeasure();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    context.onNavItemClick({
      ...props,
      itemKey,
      domEvent: event,
    });
  };

  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {};

  useEffect(() => {
    measure?.register(itemKey, fullPath);
  }, []);

  return (
    <div
      key={itemKey}
      {...stylex.props(
        styles.item,
        context.firstLevel && styles.firstLevel,
        isActive && styles.active
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!!icon ? <i {...stylex.props(styles.icon)}>{icon}</i> : null}
      <span {...stylex.props(styles.text)}>{text}</span>
    </div>
  );
};

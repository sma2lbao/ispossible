import stylex from "@stylexjs/stylex";
import React, { useEffect, useState } from "react";
import { Avatar } from "./avatar";
import { AvatarContext } from "./avatar.context";
import { styles } from "./avatar.stylex";
import type {
  AvatarContextProps,
  AvatarGroupProps,
  AvatarProps,
} from "./avatar.types";

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const { max = 5, size = 45, shape = "circle", children } = props;
  const contextValue: AvatarContextProps = {};
  const [restCount, setRestCount] = useState<number>(0);
  const [nextChildren, setNextChildren] = useState<React.ReactNode>();

  useEffect(() => {
    let nextRestCount = 0;
    const nextChildren = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === Avatar) {
        if (index < max) {
          return React.cloneElement(child as React.ReactElement<AvatarProps>, {
            size,
            shape,
            key: index,
          });
        }
        nextRestCount++;
        return null;
      }
    });
    setNextChildren(nextChildren);
    setRestCount(nextRestCount);
  }, [children]);

  const renderMore = () => {
    if (!restCount) return;
    return (
      <Avatar size={size} shape={shape}>
        +{restCount}
      </Avatar>
    );
  };

  return (
    <div {...stylex.props(styles.avatar$group)}>
      <AvatarContext.Provider value={contextValue}>
        {nextChildren}
        {renderMore()}
      </AvatarContext.Provider>
    </div>
  );
};

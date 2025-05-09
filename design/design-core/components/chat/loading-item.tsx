import React from "react";
import { styles } from "./chat.stylex";
import { x } from "../../shared";

export const LoadingItem: React.FC = () => {
  return <div {...x(styles.loading$item)}></div>;
};

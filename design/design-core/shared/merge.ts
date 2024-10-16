import { Ref } from "react";

/**
 * 合并 事件 的工具函数
 * @param callbacks
 * @returns
 */
export const mergeEvents = (
  ...callbacks: (((ev: Event) => void) | undefined)[]
) => {
  return (ev: Event) => callbacks.forEach((callback) => callback?.(ev));
};

/**
 * 合并 ref 的工具函数
 * @param refs
 * @returns
 */
export const mergeRefs = <T>(...refs: (Ref<T> | undefined)[]) => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node); // 如果 ref 是回调形式，调用它
      } else if (ref != null) {
        // 如果是对象形式，则赋值给 current
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
};

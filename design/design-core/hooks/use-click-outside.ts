import { RefObject, useEffect } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent) => void
): void {
  const callback = (event: MouseEvent) => {
    const target = event.target as Node;

    const isOutside = Array.isArray(ref)
      ? ref
          .filter((item) => !!item.current)
          .every((item) => item.current && !item.current.contains(target))
      : ref.current && !ref.current.contains(target);
    if (isOutside) {
      handler(event);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", callback);
    return () => {
      window.removeEventListener("mousedown", callback);
    };
  }, [ref, handler]);
}

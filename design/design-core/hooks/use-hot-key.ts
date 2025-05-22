import { useEffect, useRef, useState } from "react";

export interface IUseHotKey {
  hotKeys: KeyboardEvent["key"][];
  selector?: HTMLElement | (() => HTMLElement | null);
  onHotKeyPressed?: () => void;
}

export function useHotKey(options: IUseHotKey) {
  const { hotKeys = [], selector = document.body, onHotKeyPressed } = options;
  const [cache, setCache] = useState<Set<KeyboardEvent["key"]>>(new Set());
  const target = useRef<HTMLElement>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    const hotKey = event.key.toLowerCase();
    setCache((previous) => new Set(previous.add(hotKey)));
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const hotKey = event.key.toLowerCase();
    setCache((previous) => {
      const newSet = new Set(previous);
      newSet.delete(hotKey);
      return newSet;
    });
  };

  const registerEvent = (target: HTMLElement) => {
    target?.addEventListener("keydown", handleKeyDown);
    target?.addEventListener("keyup", handleKeyUp);
  };

  const removeEvent = (target: HTMLElement) => {
    target.removeEventListener("keydown", handleKeyDown);
    target.removeEventListener("keyup", handleKeyUp);
  };

  // 监听 cache 变化并检查是否所有热键都按下
  useEffect(() => {
    const isAllPressed = hotKeys.every((key) =>
      cache.has(key.toLocaleLowerCase())
    );
    if (isAllPressed) {
      onHotKeyPressed?.();
    }
  }, [cache, hotKeys, onHotKeyPressed]);

  useEffect(() => {
    const element = typeof selector === "function" ? selector() : selector;
    if (element && element !== target.current) {
      target.current = element;
    }
  }, [selector]);

  // 监听 selector 变化
  useEffect(() => {
    const element = target.current;
    if (element !== null) {
      registerEvent(element);
      return () => {
        removeEvent(element);
      };
    }
  }, [target.current]);
}

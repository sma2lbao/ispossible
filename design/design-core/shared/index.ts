export const isFunction = (target: unknown): target is Function => {
  return target instanceof Function;
};

export const isWindow = (target: unknown): target is Window => {
  return Object.prototype.toString.call(target) === "[object Window]";
};

export const noop = () => {};

export * from "./merge";

export * from "./merge-stylex";

export * from "./format";

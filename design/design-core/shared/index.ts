export const isFunction = (target: unknown): target is Function => {
  return target instanceof Function;
};

export const noop = () => {};

export * from "./merge";

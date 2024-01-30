export const isFunction = (target: unknown): target is Function => {
  return target instanceof Function;
};

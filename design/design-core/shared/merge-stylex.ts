import clsx from "clsx";
import stylex from "@stylexjs/stylex";
import type {
  CompiledStyles,
  InlineStyles,
  StyleXArray,
} from "@stylexjs/stylex/lib/StyleXTypes";

export type XOptions = {
  style?: React.CSSProperties;
  className?: string;
};

export type XStyles = ReadonlyArray<
  StyleXArray<
    | (null | undefined | CompiledStyles)
    | boolean
    | Readonly<[CompiledStyles, InlineStyles]>
  >
>;

export type XReturn = Readonly<{
  className?: string;
  style?: Readonly<{ [$$Key$$: string]: string | number }>;
}>;

const isCSSProperties = (target: unknown): target is React.CSSProperties => {
  return (
    !Array.isArray(target) &&
    typeof target === "object" &&
    target !== null &&
    !("$$css" in target)
  );
};

function x(...styles: XStyles): XReturn;
function x(style?: React.CSSProperties, ...styles: XStyles): XReturn;
function x(className?: string, ...styles: XStyles): XReturn;
function x(
  className?: string,
  style?: React.CSSProperties,
  ...styles: XStyles
): XReturn;
function x(
  style?: React.CSSProperties,
  className?: string,
  ...styles: XStyles
): XReturn;
function x(...args: any[]): XReturn {
  let style: React.CSSProperties = {};
  let className: string = "";

  // 判断第一个参数类型
  const first = args[0];
  const second = args[1];

  if (typeof first === "string") {
    className = first;
  } else if (isCSSProperties(first)) {
    style = first;
  }

  if (typeof second === "string") {
    className = clsx(className, second);
  } else if (isCSSProperties(second)) {
    style = { ...style, ...second };
  }

  // 提取 styles 数组
  const styles = args.slice(
    typeof first === "undefined" ? 0 : typeof second === "undefined" ? 1 : 2
  ) as XStyles;

  // 合并 stylex 的样式
  const { style: xStyle, className: xClassName } = stylex.props(...styles);

  return {
    style: {
      ...xStyle,
      ...style,
    },
    className: clsx(xClassName, className),
  };
}

export default x;
export { x };

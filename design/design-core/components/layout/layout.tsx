import React, {
  ReactElement,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Header } from "./header";
import { LayoutContext } from "./layout.context";
import { styles } from "./layout.stylex";
import { Sider } from "./sider";
import { mergeRefs, x } from "../../shared";
import type { LayoutProps } from "./layout.types";

export const Layout: React.FC<LayoutProps> = (props) => {
  const parentContext = useContext(LayoutContext);
  const { children, className, style, stylex: customStylex } = props;
  const headerRef = useRef<HTMLElement>(null);
  const [headerRect, setHeaderRect] = useState<DOMRect>();

  const hasHeader = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === Header
  );
  const hasSider = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === Sider
  );

  useLayoutEffect(() => {
    if (headerRef.current == null) return;

    const observer = new ResizeObserver(() => {
      headerRef.current &&
        setHeaderRect(headerRef.current.getBoundingClientRect());
    });
    observer.observe(headerRef.current);

    return () => {
      headerRef.current && observer.unobserve(headerRef.current);
    };
  }, [headerRef.current]);

  const contextValue = {
    headerRect: hasHeader ? headerRect : parentContext?.headerRect,
  };

  return (
    <div
      {...x(
        className,
        style,
        styles.layout,
        hasSider && styles.layout$has$sider,
        customStylex
      )}
    >
      <LayoutContext.Provider value={contextValue}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Header) {
            return React.cloneElement(child as ReactElement, {
              ref: mergeRefs(child.props?.ref, headerRef),
            });
          }
          return child;
        })}
      </LayoutContext.Provider>
    </div>
  );
};

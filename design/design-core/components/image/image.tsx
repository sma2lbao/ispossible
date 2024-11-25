import React, { useRef, useState } from "react";
import type { ImageProps } from "./image.types";
import { x } from "../../shared";
import { styles } from "./image.stylex";
import { Skeleton } from "../skeleton";

import "@design/icon/warning-filled";

export const Image: React.FC<ImageProps> = (props) => {
  const {
    src,
    width,
    stylex,
    style,
    className,
    height,
    onLoad,
    onError,
    ...rest
  } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    onLoad?.(e);
    setStatus("success");
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    onError?.(e);
    setStatus("error");
  };

  const renderStatus = () => {
    if (status === "error") {
      return (
        <div {...x(styles.image$overlay)}>
          <div {...x({ fontSize: "30px" }, styles.image$status)}>
            <is-warning-filled />
          </div>
        </div>
      );
    }

    return (
      <div {...x(styles.image$overlay)}>
        <Skeleton.Image width={width} height={height}></Skeleton.Image>
      </div>
    );
  };

  return (
    <div {...x(styles.image)}>
      <img
        ref={imageRef}
        width={width}
        height={height}
        src={src}
        data-src={src}
        {...x(
          className,
          style,
          styles.image$host,
          status === "error" && styles.image$host$error,
          stylex
        )}
        {...rest}
        onLoad={handleLoad}
        onError={handleError}
      />
      {status !== "success" && renderStatus()}
    </div>
  );
};

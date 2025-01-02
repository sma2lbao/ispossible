import React, { useState } from "react";
import { createPortal } from "react-dom";
import { styles } from "./image.stylex";
import { x } from "../../shared";
import { Button } from "../button";
import { Space } from "../space";
import { Typography } from "../typography";
import type { ImagePreviewProps } from "./image.types";
import "@design/icon/plus";
import "@design/icon/minus";
import "@design/icon/left";
import "@design/icon/right";
import "@design/icon/one-to-one";
import "@design/icon/expand";
import "@design/icon/rotate-left";
import "@design/icon/cloud-download";
import "@design/icon/close";

export const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const { src, current = 0, onClose } = props;
  const sources = Array.isArray(src) ? src : Boolean(src) ? [src] : [];
  const [rotate, setRotate] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [rawVisible, setRawVisible] = useState(true);
  const [rawCurrent, setRawCurrent] = useState(current);

  const handleClose = () => {
    setRawVisible(false);
    onClose?.();
  };

  const handleRotate = () => {
    setRotate((rotate - 90) % 360);
  };

  const handleResize = () => {
    setScale(1);
  };

  const handleMinus = () => {
    if (scale <= 0.25) return;
    if (scale > 1) {
      setScale(scale - 1);
    } else {
      setScale(scale - 0.25);
    }
  };

  const handlePlus = () => {
    if (scale >= 5) return;
    if (scale >= 1) {
      setScale(scale + 1);
    } else {
      setScale(scale + 0.25);
    }
  };

  const handlePrevious = () => {
    if (rawCurrent === 0) return;
    setRawCurrent(rawCurrent - 1);
  };

  const handleNext = () => {
    if (rawCurrent === sources.length - 1) return;
    setRawCurrent(rawCurrent + 1);
  };

  if (sources.length === 0 || !rawVisible) return null;
  return (
    <div {...x(styles.image$preview)}>
      <div {...x(styles.image$preview$header)}>
        <div {...x(styles.image$preview$header$title)}></div>
        <div {...x(styles.image$preview$header$close)}>
          <Button
            theme="ghost"
            color="#fff"
            icon={<is-close />}
            onClick={handleClose}
          />
        </div>
      </div>
      <div {...x(styles.image$preview$content)}>
        <div
          {...x(styles.image$preview$content$image$container)}
          style={{ transform: `scale(${scale}, ${scale})` }}
        >
          <img
            style={{
              transform: `rotate(${rotate}deg)`,
            }}
            src={sources[rawCurrent]}
          />
        </div>
      </div>
      <div {...x(styles.image$preview$footer)}>
        <Space size={12}>
          <Space>
            <Button
              icon={<is-left />}
              theme="ghost"
              color="#fff"
              onClick={handlePrevious}
            />
            <Typography>{`${rawCurrent + 1}/${sources.length}`}</Typography>
            <Button
              icon={<is-right />}
              theme="ghost"
              color="#fff"
              onClick={handleNext}
            />
          </Space>
          <div>
            <Button
              icon={<is-minus />}
              theme="ghost"
              color="#fff"
              onClick={handleMinus}
            />
            <Button
              icon={<is-plus />}
              theme="ghost"
              color="#fff"
              onClick={handlePlus}
            />
            <Button
              icon={<is-one-to-one />}
              theme="ghost"
              color="#fff"
              onClick={handleResize}
            />
          </div>
          <div>
            <Button
              icon={<is-rotate-left />}
              theme="ghost"
              color="#fff"
              onClick={handleRotate}
            />
            <Button icon={<is-cloud-download />} theme="ghost" color="#fff" />
          </div>
        </Space>
      </div>
    </div>
  );
};

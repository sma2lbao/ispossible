import React, { useState } from "react";
import { createPortal } from "react-dom";
import { styles } from "./image.stylex";
import { x } from "../../shared";
import { Button } from "../button";
import { Space } from "../space";
import type { ImagePreviewProps } from "./image.types";
import "@design/icon/plus";
import "@design/icon/minus";
import "@design/icon/left";
import "@design/icon/right";
import "@design/icon/one-to-one";
import "@design/icon/expand";
import "@design/icon/rotate-left";
import "@design/icon/cloud-download";

export const ImagePreview: React.FC<ImagePreviewProps> = (props) => {
  const [rotate, setRotate] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  const handleRotate = () => {
    setRotate(rotate - 90);
  };

  const handleResize = () => {
    setScale(1);
  };

  const renderPortal = () => {
    return createPortal(
      <div {...x(styles.image$preview)}>
        <div {...x(styles.image$preview$header)}>
          <div {...x(styles.image$preview$header$title)}></div>
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
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
            />
          </div>
        </div>
        <div {...x(styles.image$preview$footer)}>
          <Space size={12}>
            <div>
              <Button icon={<is-left />} theme="ghost" color="#fff" />
              <Button icon={<is-right />} theme="ghost" color="#fff" />
            </div>
            <div>
              <Button icon={<is-minus />} theme="ghost" color="#fff" />
              <Button icon={<is-plus />} theme="ghost" color="#fff" />
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
      </div>,
      document.body
    );
  };

  return renderPortal();
};

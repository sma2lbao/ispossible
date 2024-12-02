import React from "react";
import type { UploadFile, UploadFilesProps } from "./upload.types";
import { formatBytes, x } from "../../shared";
import { styles } from "./upload.stylex";
import { Button } from "../button";
import "@design/icon/close";
import "@design/icon/file-text-filled";
import { Progress } from "../progress";

export const UploadFiles: React.FC<UploadFilesProps> = (props) => {
  const { files, onClear, onRemove, onRetry } = props;

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClear?.();
  };

  const handleRemove = (e: React.MouseEvent, file: UploadFile) => {
    e.stopPropagation();
    onRemove?.(file);
  };

  const handleRetry = (e: React.MouseEvent, file: UploadFile) => {
    e.stopPropagation();
    onRetry?.(file);
  };

  if (files.length === 0) return null;

  return (
    <div {...x(styles.upload$files)}>
      <div {...x(styles.upload$files$title)}>
        <span>已选择文件</span>
        <span {...x(styles.upload$files$title$clear)} onClick={handleClear}>
          清空
        </span>
      </div>
      <div {...x(styles.upload$files$main)}>
        {files.map((file) => (
          <div key={file.uid} {...x(styles.upload$files$item)}>
            <div
              {...x(
                styles.upload$files$item$preview,
                styles.upload$files$item$preview$placeholder
              )}
            >
              <is-file-text-filled />
            </div>
            <div {...x(styles.upload$files$item$info)}>
              <div {...x(styles.upload$files$item$info$text)}>
                <span {...x(styles.upload$files$item$info$name)}>
                  {file.name}
                </span>
                {file.size ? (
                  <span>
                    <span {...x(styles.upload$files$item$info$size)}>
                      {formatBytes(file.size)}
                    </span>
                  </span>
                ) : null}
              </div>
              {file.status === "uploading" ? (
                <Progress
                  style={{ width: "100%" }}
                  percent={file.percent ?? 0}
                  type="line"
                  direction="x"
                />
              ) : null}
              {file.status === "fail" ? (
                <div {...x(styles.upload$files$item$info$control)}>
                  <span {...x(styles.upload$files$item$info$message)}>
                    上传失败
                  </span>
                  <span
                    {...x(styles.upload$files$item$info$retry)}
                    onClick={(e) => handleRetry(e, file)}
                  >
                    重试
                  </span>
                </div>
              ) : null}
            </div>
            <Button
              theme="ghost"
              icon={<is-close />}
              stylex={styles.upload$files$item$close}
              onClick={(e) => handleRemove(e, file)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

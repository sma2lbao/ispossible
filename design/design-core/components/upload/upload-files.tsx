import React, { useContext, useState } from "react";
import type { UploadFile, UploadFilesProps } from "./upload.types";
import { formatBytes, x } from "../../shared";
import { styles } from "./upload.stylex";
import { Button } from "../button";
import { Progress } from "../progress";
import { UploadContext } from "./upload.context";
import "@design/icon/file-text-filled";
import "@design/icon/close";
import "@design/icon/close-circle-filled";
import "@design/icon/redo";
import "@design/icon/exclamation-circle-filled";
import { Tooltip } from "../tooltip";

export const UploadFiles: React.FC<UploadFilesProps> = (props) => {
  const context = useContext(UploadContext);
  const { files, onClear, onRemove, onRetry, children } = props;

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

  if (context?.listType === "picture") {
    return (
      <div {...x(styles.upload$files$main)}>
        {files.map((file) => {
          return (
            <div
              key={file.uid}
              {...x(
                styles.upload$files$picture$card,
                file.status === "fail" && styles.upload$files$picture$card$fail
              )}
            >
              <img src={file.url} {...x(styles.upload$files$picture$img)} />

              <div
                {...x(styles.upload$files$picture$remove)}
                onClick={(e) => handleRemove(e, file)}
              >
                <is-close-circle-filled />
              </div>

              {file.status === "uploading" ? (
                <Progress
                  stylex={styles.upload$files$picture$progress}
                  percent={file.percent ?? 0}
                  trackStroke="#fff"
                  type="line"
                  direction="x"
                />
              ) : null}

              {file.status === "fail" ? (
                <div
                  {...x(styles.upload$files$picture$retry)}
                  onClick={(e) => handleRetry(e, file)}
                >
                  <is-redo />
                </div>
              ) : null}

              {file.status === "fail" ? (
                <Tooltip title="上传失败">
                  <div {...x(styles.upload$files$picture$message)}>
                    <is-exclamation-circle-filled />
                  </div>
                </Tooltip>
              ) : null}
            </div>
          );
        })}
        {(context.limit ?? Infinity) > (files.length ?? 0) ? children : null}
      </div>
    );
  }

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

import React, { useEffect, useRef, useState } from "react";
import { x } from "../../shared";
import { styles } from "./upload.stylex";
import short from "short-uuid";
import { UploadFiles } from "./upload-files";
import type {
  UploadFile,
  UploadProps,
  UploadRequestOptions,
} from "./upload.types";
import { xhrRequest } from "./upload.xhr";

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    filename = "file",
    disabled,
    accept,
    files,
    limit,
    multiple,
    children,
    beforeUpload,
    customRequest,
    withCredentials,
    onClear,
    onRemove,
    onRetry,
    onChange,
  } = props;
  const [uniqueID, setUnique] = useState<string>(short.generate());
  const [rawFiles, setRawFiles] = useState<UploadFile[]>([]);
  const hostRef = useRef<HTMLInputElement>(null);
  const isControl = "files" in props;

  /**
   * 点击 trigger 时，触发选择文件
   */
  const handleClick = () => {
    if (disabled) return;
    hostRef.current?.click();
  };

  /**
   * 选择文件时
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    let originFiles = Array.from(files ?? []);

    const total = originFiles.length + rawFiles.length;
    if (typeof limit === "number" && limit > 0 && total > limit) {
      const rest = limit - originFiles.length;
      originFiles = originFiles.slice(0, rest);
    }

    const nextRawFiles = rawFiles.slice();
    const uploadFiles = originFiles.map((file) => buildUploadFile(file));
    uploadFiles.forEach((file) => {
      const index = nextRawFiles.findIndex((item) => item.uid === file.uid);
      if (index !== -1) {
        nextRawFiles[index] = file;
      } else {
        nextRawFiles.push(file);
      }
      onChange?.(file, nextRawFiles);
    });

    !isControl && setRawFiles(nextRawFiles);
    reset();
  };

  /**
   * 构造UploadFile
   * @param file
   * @returns
   */
  const buildUploadFile = (file: File): UploadFile => {
    const nextFile: UploadFile = {
      instance: file,
      percent: 0,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      status: "wait",
      uid: short.generate(),
    };

    return nextFile;
  };

  /**
   * 上传文件
   * @param file
   * @returns
   */
  const upload = async (file: UploadFile): Promise<void> => {
    const { instance } = file;
    if (!instance) return;
    if (typeof beforeUpload === "function") {
      const result = beforeUpload(file.instance!);
      if (result === false) {
        return;
      }
      if (result instanceof Promise) {
        file.instance = await result;
      }
    }

    // 修改状态 uploading
    const nextRawFiles = rawFiles.slice();
    const index = nextRawFiles.findIndex((item) => item.uid === file.uid);
    nextRawFiles[index].status = "uploading";
    nextRawFiles[index].percent = 0;
    onChange?.(nextRawFiles[index], rawFiles);
    !isControl && setRawFiles(nextRawFiles);

    if (!action || !file.instance) return;
    const options: UploadRequestOptions = {
      filename,
      action,
      file: file.instance!,
      withCredentials,
      onProgress: (percent) => handleProgress(file, percent),
      onSuccess: (body) => handleSuccess(file, body),
      onError: (e) => handleError(file, e),
    };
    if (typeof customRequest === "function") {
      customRequest(options);
    } else {
      xhrRequest(options);
    }
  };

  const handleProgress = (file: UploadFile, percent: number) => {
    const nextRawFiles = rawFiles.slice();
    const index = rawFiles.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    nextRawFiles[index].percent = percent;
    nextRawFiles[index].status = "uploading";
    onChange?.(nextRawFiles[index], rawFiles);
    !isControl && setRawFiles(nextRawFiles);
  };

  const handleSuccess = (file: UploadFile, body: any) => {
    const index = rawFiles.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    const nextRawFiles = rawFiles.slice();
    nextRawFiles[index].status = "success";
    nextRawFiles[index].percent = 100;
    onChange?.(nextRawFiles[index], rawFiles);
    !isControl && setRawFiles(nextRawFiles);
  };

  const handleError = (file: UploadFile, e: ProgressEvent | Error) => {
    const index = rawFiles.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    const nextRawFiles = rawFiles.slice();
    nextRawFiles[index].status = "fail";
    nextRawFiles[index].percent = 0;
    onChange?.(nextRawFiles[index], rawFiles);
    !isControl && setRawFiles(nextRawFiles);
  };

  /**
   * 点击清空回调
   */
  const handleClear = () => {
    onClear?.();
    if (!isControl) {
      setRawFiles([]);
    }
  };

  /**
   * 点击删除回调
   * @param file
   * @returns
   */
  const handleRemove = (file: UploadFile) => {
    onRemove?.(file);
    if (isControl) return;
    const nextRawFiles = rawFiles.slice();
    const index = nextRawFiles.findIndex((item) => item.uid === file.uid);
    nextRawFiles.splice(index, 1);
    setRawFiles(nextRawFiles);
  };

  /**
   * 点击重试回调
   * @param file
   * @returns
   */
  const handleRetry = (file: UploadFile) => {
    onRetry?.(file);
    if (isControl) return;
    const nextRawFiles = rawFiles.slice();
    const index = nextRawFiles.findIndex((item) => item.uid === file.uid);
    const nextFile: UploadFile = {
      ...file,
      status: "wait",
      percent: 0,
    };
    nextRawFiles[index] = nextFile;
    setRawFiles(nextRawFiles);
  };

  const reset = () => {
    setUnique(short.generate());
  };

  useEffect(() => {
    if (isControl) {
      setRawFiles(files || []);
    }
  }, [files]);

  useEffect(() => {
    const uploadFiles = rawFiles
      .slice()
      .filter((file) => file.status === "wait");
    uploadFiles.forEach((file) => {
      upload(file);
    });
  }, [rawFiles]);

  return (
    <div {...x(styles.upload)}>
      <input
        type="file"
        autoComplete="off"
        accept={accept}
        multiple={multiple}
        ref={hostRef}
        key={uniqueID}
        {...x(styles.upload$host)}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
      />
      <div {...x(styles.upload$trigger)} onClick={handleClick}>
        {children}
      </div>
      <UploadFiles
        files={rawFiles}
        onClear={handleClear}
        onRemove={handleRemove}
        onRetry={handleRetry}
      />
    </div>
  );
};

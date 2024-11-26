import React, { useEffect, useRef, useState } from "react";
import { x } from "../../shared";
import { styles } from "./upload.stylex";
import short from "short-uuid";
import type { UploadFile, UploadProps } from "./upload.types";

export const Upload: React.FC<UploadProps> = (props) => {
  const {
    action,
    name = "file",
    accept,
    files,
    limit,
    multiple,
    children,
    beforeUpload,
    customRequest,
    withCredentials,
  } = props;
  const [rawFiles, setRawFiles] = useState<UploadFile[]>([]);
  const hostRef = useRef<HTMLInputElement>(null);
  const isControl = "files" in props;

  /**
   * 点击 trigger 时，触发选择文件
   */
  const handleClick = () => {
    hostRef.current?.click();
  };

  /**
   * 选择文件时
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    let currentFiles = Array.from(files ?? []);

    const total = currentFiles.length + rawFiles.length;
    if (limit && limit > 0 && total > limit) {
      const rest = limit - currentFiles.length;
      currentFiles = currentFiles.slice(0, rest);
    }

    const nextRawFiles = rawFiles.slice();
    const uploadFiles = currentFiles.map((file) => buildUploadFile(file));
    uploadFiles.forEach((file) => {
      const index = nextRawFiles.findIndex((item) => item.uid === file.uid);
      if (index !== -1) {
        nextRawFiles[index] = file;
      } else {
        nextRawFiles.push(file);
      }
    });
    setRawFiles(nextRawFiles);
    console.log("rawFiles", rawFiles);

    uploadFiles.forEach((file) => {
      upload(file);
    });
  };

  const buildUploadFile = (file: File): UploadFile => {
    const nextFile: UploadFile = {
      instance: file,
      percent: 0,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      status: "uploading",
      uid: short.generate(),
    };

    return nextFile;
  };

  /**
   * 上传文件
   * @param file
   * @returns
   */
  const upload = (file: UploadFile): void => {
    const { instance } = file;
    if (!instance) return;

    if (typeof customRequest === "function") {
      return customRequest();
    }

    if (!action) return;

    const formData = new FormData();
    formData.append(name, instance);

    const xhr = new XMLHttpRequest();
    xhr.open("post", action, true);
    if (withCredentials) {
      xhr.withCredentials = true;
    }

    xhr.upload.onprogress = (e: ProgressEvent): void => {
      handleUploadProgress(e, file);
    };

    xhr.onload = (e: ProgressEvent): void => {
      console.log("join onload");
      console.log("rawFiles: ", rawFiles);
      handleUploadLoad(e, file, xhr);
    };

    xhr.onerror = (e: ProgressEvent): void => {
      console.log("join onerror");
      handleUploadError(e, file, xhr);
    };

    xhr.send();
  };

  const handleUploadProgress = (e: ProgressEvent, file: UploadFile) => {
    const nextRawFiles = rawFiles.slice();
    let precent = 0;
    if (e.total > 0) {
      precent = Number(((e.loaded / e.total) * 100).toFixed(0)) || 0;
    }
    const index = rawFiles.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    nextRawFiles[index].percent = precent;
    nextRawFiles[index].status = "uploading";
    setRawFiles(nextRawFiles);
    console.log("progress: ", nextRawFiles);
  };

  const handleUploadLoad = (
    e: ProgressEvent,
    file: UploadFile,
    xhr: XMLHttpRequest
  ) => {
    console.log("rawFiles: ", rawFiles, file);
    const index = rawFiles?.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    console.log("handleUploadLoad: ", xhr);
    if (xhr.status < 200 || xhr.status >= 300) {
      handleUploadError(e, file, xhr);
    } else {
      handleUploadSuccess(e, file, xhr);
    }
  };

  const handleUploadSuccess = (
    e: ProgressEvent,
    file: UploadFile,
    xhr: XMLHttpRequest
  ) => {
    console.log("rawFiles: ", rawFiles);
    const index = rawFiles.findIndex((item) => item.uid === file.uid);
    if (index === -1) return;
    const nextRawFiles = rawFiles.slice();
    nextRawFiles[index].status = "success";
    nextRawFiles[index].percent = 100;

    setRawFiles(nextRawFiles);

    console.log("success: ", nextRawFiles);
  };

  const handleUploadError = (
    e: ProgressEvent,
    file: UploadFile,
    xhr: XMLHttpRequest
  ) => {};

  useEffect(() => {
    console.log("isControl: ", isControl);
    if (isControl) {
      setRawFiles(files || []);
    }
  }, [files]);

  return (
    <div {...x(styles.upload)}>
      <input
        type="file"
        autoComplete="off"
        accept={accept}
        multiple={multiple}
        ref={hostRef}
        {...x(styles.upload$host)}
        onChange={handleChange}
      />
      <div {...x(styles.upload$trigger)} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

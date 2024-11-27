import type { UploadRequestOptions } from "./upload.types";

export function xhrRequest(options: UploadRequestOptions) {
  const {
    action,
    filename = "file",
    file,
    method = "POST",
    withCredentials,
    onProgress,
    onError,
    onSuccess,
  } = options;

  if (!action) return;

  const formData = new FormData();
  formData.append(filename, file);

  const xhr = new XMLHttpRequest();
  xhr.open(method, action, true);
  if (withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.upload.onprogress = (e: ProgressEvent): void => {
    let percent = 0;
    if (e.total > 0) {
      percent = Number(((e.loaded / e.total) * 100).toFixed(0)) || 0;
    }
    onProgress?.(percent, e);
  };

  xhr.onload = (e: ProgressEvent): void => {
    if (xhr.status < 200 || xhr.status >= 300) {
      onError?.(e);
    } else {
      onSuccess?.(xhr.response ?? xhr.responseText);
    }
  };

  xhr.onerror = (e: ProgressEvent): void => {
    onError?.(e);
  };

  xhr.send(formData);
}

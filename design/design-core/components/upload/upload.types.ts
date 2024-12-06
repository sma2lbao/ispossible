export interface UploadProps {
  name?: string;

  /**
   * html 原生属性，接受上传的文件类型。
   * accept 的值为你允许选择文件的MIME types 字符串或文件后缀（.jpg等）
   */
  accept?: string;

  /**
   * 发到后台的文件参数名
   * @default 'file'
   */
  filename?: string;

  /**
   * 上传的地址
   */
  action?: string;

  /**
   * 是否允许单次选中多个文件
   */
  multiple?: boolean;

  /**
   * 已上传的文件列表，传入该值时，upload 即为受控组件
   */
  files?: UploadFile[];

  /**
   * 文件列表展示类型
   * @default list
   */
  listType?: "list" | "picture";

  /**
   * 最大允许上传文件个数
   */
  limit?: number;

  disabled?: boolean;

  className?: string;

  style?: React.CSSProperties;

  children?: React.ReactNode;

  /**
   * 上传请求时是否携带 cookie
   */
  withCredentials?: boolean;

  beforeUpload?: (file: File) => boolean | Promise<File>;

  customRequest?: (options: UploadRequestOptions) => void;

  onChange?: (file: UploadFile, files: UploadFile[]) => void;

  /**
   * 点击清空时的回调
   * @returns
   */
  onClear?: () => void;

  onRemove?: (file: UploadFile, files: UploadFile[]) => void;

  onRetry?: (file: UploadFile, files: UploadFile[]) => void;

  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
}

export interface UploadFilesProps {
  files: UploadFile[];

  children?: React.ReactNode;

  onClear?: () => void;

  onRemove?: (file: UploadFile) => void;

  onRetry?: (file: UploadFile) => void;
}

export interface UploadFile {
  /**
   * 浏览器实际获取到的文件对象
   */
  instance?: File;

  /**
   * 文件名
   */
  name?: string;

  /**
   * 上传进度百分比
   */
  percent?: number;

  /**
   * 文件大小
   */
  size?: number;

  /**
   * 上传状态
   */
  status: "success" | "uploading" | "fail" | "wait";

  /**
   * 唯一标识符，不设置时会自动生成
   */
  uid: string;

  /**
   * 下载地址
   */
  url?: string;

  /**
   * 上传成功后的response
   */
  response?: any;
}

export interface UploadRequestOptions<T = any> {
  action: string;

  /**
   * 请求方式
   * @default POST
   */
  method?: string;

  /**
   * 发到后台的文件参数名
   * @default file
   */
  filename?: string;

  file: Blob | string | File;

  withCredentials?: boolean;

  onProgress?: (percent: number, e?: ProgressEvent) => void;

  onError?: (e: ProgressEvent | Error, body?: T) => void;

  onSuccess?: (body: T) => void;
}

export interface UploadContextProps {
  listType: UploadProps["listType"];

  limit?: UploadProps["limit"];
}

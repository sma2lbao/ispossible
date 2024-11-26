export interface UploadProps {
  /**
   * html 原生属性，接受上传的文件类型。
   * accept 的值为你允许选择文件的MIME types 字符串或文件后缀（.jpg等）
   */
  accept?: string;

  /**
   * 发到后台的文件参数名
   * @default 'file'
   */
  name?: string;

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

  beforeUpload?: () => void;

  customRequest?: () => void;
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
  status: "success" | "uploading" | "fail";

  /**
   * 唯一标识符，不设置时会自动生成
   */
  uid: string;

  /**
   * 下载地址
   */
  url?: string;
}

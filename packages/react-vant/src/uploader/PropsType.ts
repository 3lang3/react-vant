import React from 'react';
import type { ImageFit } from '../image/PropsType';
import type { Interceptor } from '../utils/interceptor';
import { BaseTypeProps } from '../utils';
import { ImagePreviewProps } from '../image-preview/PropsType';

type PromiseOrNot<T> = T | Promise<T>;

export type UploaderResultType = 'dataUrl' | 'text' | 'file';

export type UploaderFileListItem = {
  /** 文件url */
  url?: string;
  /** file 对象	 */
  file?: File;
  content?: string;
  /** 断言图片类型 */
  isImage?: boolean;
  /** 上传状态 */
  status?: string | 'uploading' | 'done' | 'failed';
  /** 状态文字 */
  message?: string;
  /** 图片填充模式 */
  imageFit?: ImageFit;
  /** 是否展示删除按钮	 */
  deletable?: boolean;
  /** 预览图和上传区域的尺寸，默认单位为 px	 */
  previewSize?: number | string;
  /**
   * 文件删除前的回调函数，返回 false 可终止文件读取
   * 支持返回 Promise
   */
  beforeDelete?: Interceptor;
} & Record<string, any>;

export type UploaderMaxSize = number | string | ((file: File) => boolean);

export type UploaderBeforeRead = (
  file: File | File[],
  detail: {
    name: string | number;
    index: number;
  },
) => PromiseOrNot<File | File[] | undefined | boolean | void>;

export type UploaderAfterRead = (
  items: UploaderFileListItem | UploaderFileListItem[],
  detail: {
    name: string | number;
    index: number;
  },
) => void;

export interface UploaderPrviewItemProps {
  name?: number | string;
  index?: number;
  imageFit?: ImageFit;
  lazyLoad?: boolean;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
  /** 自定义覆盖在预览区域上方的内容	 */
  previewCoverRender?: (item: UploaderFileListItem) => React.ReactNode;
  /** 删除文件预览时触发	 */
  onDelete?: () => void;
  onPreview?: () => void;
  onClick?: () => void;
  item: UploaderFileListItem;
}

export interface UploaderProps extends BaseTypeProps {
  /** 图片选取模式，可选值为 camera (直接调起摄像头)	 */
  capture?: string;
  /** 是否开启图片多选，部分安卓机型不支持	 */
  multiple?: boolean;
  /** 是否禁用文件上传	 */
  disabled?: boolean;
  /** 是否将上传区域设置为只读状态	 */
  readonly?: boolean;
  /** 上传区域文字提示	 */
  uploadText?: string;
  /** 是否展示删除按钮	 */
  deletable?: boolean;
  /** 文件读取完成后的回调函数	 */
  afterRead?: UploaderAfterRead;
  /** 是否展示上传区域	 */
  showUpload?: boolean;
  /** 文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise */
  beforeRead?: UploaderBeforeRead;
  /**  文件删除前的回调函数，返回 false 可终止文件读取，支持返回 Promise */
  beforeDelete?: Interceptor;
  /** 预览图和上传区域的尺寸，默认单位为 px	 */
  previewSize?: number | string;
  /** 是否在上传完成后展示预览图	 */
  previewImage?: boolean;
  /** 全屏图片预览的配置项，可选值见 ImagePreview	 */
  previewOptions?: Omit<ImagePreviewProps, 'visible'>;
  /** 是否在点击预览图后展示全屏图片预览	 */
  previewFullImage?: boolean;
  /** 自定义覆盖在预览区域上方的内容	 */
  previewCoverRender?: (item: UploaderFileListItem) => React.ReactNode;
  /** 标识符，可以在回调函数的第二项参数中获取	*/
  name?: number | string;
  /**
   * 允许上传的文件类型
   * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B
   * @default 'image/*'
   */
  accept?: string;
  /** 已上传的文件列表	 */
  value?: UploaderFileListItem[];
  /**
   * 文件大小限制，单位为 byte
   * @default `Number.MAX_VALUE`
   */
  maxSize?: UploaderMaxSize;
  /**
   * 文件上传数量限制
   * @default `Number.MAX_VALUE`
   */
  maxCount?: number | string;
  /**
   * 预览图裁剪模式，可选值见 Image 组件
   * @default 'cover'
   */
  imageFit?: ImageFit;
  /**
   * 文件读取结果类型，可选值为 file text
   * @default 'dataUrl'
   */
  resultType?: UploaderResultType;
  /**
   * 上传区域图标名称或图片链接
   * @default 'photograph'
   */
  uploadIcon?: string | React.ReactNode;
  /**
   * 上传input value变化时触发
   */
  onChange?: (value: UploaderFileListItem[]) => void;
  /** 关闭全屏图片预览时触发	 */
  onClosePreview?: () => void;
  /** 删除文件预览时触发	 */
  onDelete?: UploaderAfterRead;
  /** 文件大小超过限制时触发	 */
  onOversize?: UploaderAfterRead;
  /** 点击预览图时触发	 */
  onClickPreview?: UploaderAfterRead;
  /** 点击上传区域时触发	 */
  onClickUpload?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export type UploaderInstance = {
  /** 主动调起文件选择，由于浏览器安全限制，只有在用户触发操作的上下文中调用才有效	 */
  chooseFile: () => void;
  /** 关闭全屏的图片预览	 */
  closeImagePreview: () => void;
};

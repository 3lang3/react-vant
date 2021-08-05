import React from 'react';
import type { ImageFit } from '../image/PropsType';
import type { Interceptor } from '../utils/interceptor';
import { BaseTypeProps } from '../utils';
import { Position as PopupCloseIconPosition } from '../popup/PropsType';

type PromiseOrNot<T> = T | Promise<T>;

export type UploaderResultType = 'dataUrl' | 'text' | 'file';

export type UploaderFileListItem = {
  url?: string;
  file?: File;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
  imageFit?: ImageFit;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
};

export type UploaderMaxSize = number | string | ((file: File) => boolean);

export type UploaderBeforeRead = (
  file: File | File[],
  detail: {
    name: string | number;
    index: number;
  },
) => PromiseOrNot<File | File[] | undefined>;

export type UploaderAfterRead = (
  items: UploaderFileListItem | UploaderFileListItem[],
  detail: {
    name: string | number;
    index: number;
  },
) => void;

export type ImagePreviewOptions = {
  loop?: boolean;
  images: string[];
  maxZoom?: number;
  minZoom?: number;
  className?: unknown;
  showIndex?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  transition?: string;
  beforeClose?: Interceptor;
  overlayStyle?: React.CSSProperties;
  swipeDuration?: number;
  startPosition?: number;
  showIndicators?: boolean;
  closeOnPopstate?: boolean;
  closeIconPosition?: PopupCloseIconPosition;
  onClose?(): void;
  onScale?(args: { scale: number; index: number }): void;
  onChange?(index: number): void;
};

export interface UploaderPrviewItemProps {
  name?: number | string;
  index?: number;
  imageFit?: ImageFit;
  lazyLoad?: boolean;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
  previewCover?: any;
  onDelete?: () => void;
  item: UploaderFileListItem;
}

export interface UploaderProps extends BaseTypeProps {
  capture?: string;
  multiple?: boolean;
  disabled?: boolean;
  lazyLoad?: boolean;
  uploadText?: string;
  deletable?: boolean;
  afterRead?: UploaderAfterRead;
  showUpload?: boolean;
  beforeRead?: UploaderBeforeRead;
  beforeDelete?: Interceptor;
  previewSize?: number | string;
  previewImage?: boolean;
  previewOptions?: ImagePreviewOptions;
  previewFullImage?: boolean;
  /** @default '' */
  name?: number | string;
  /** @default image/* */
  accept?: string;
  value?: UploaderFileListItem[];
  /** @default `Number.MAX_VALUE` */
  maxSize?: UploaderMaxSize;
  /** @default `Number.MAX_VALUE` */
  maxCount?: number | string;
  /** @default 'cover' */
  imageFit?: ImageFit;
  /** @default 'dataUrl' */
  resultType?: UploaderResultType;
  /** @default 'photograph' */
  uploadIcon?: string;
  onChange?: (value: UploaderFileListItem[]) => void;
  onDelete?: UploaderAfterRead;
  onOversize?: UploaderAfterRead;
  children?: React.ReactNode;
}

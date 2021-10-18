import React from 'react';
import { LazyloadProps } from '../lazyload/PropsType';
import { BaseTypeProps } from '../utils';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface ImageProps extends BaseTypeProps {
  /** 图片链接	 */
  src?: string;
  /** 替代文本	 */
  alt?: string;
  /**  图片填充模式	 */
  fit?: ImageFit;
  /** 是否显示为圆形	 */
  round?: boolean;
  /** 是否为块级元素 */
  block?: boolean;
  /** 宽度，默认单位为 px	 */
  width?: number | string;
  /** 高度，默认单位为 px	 */
  height?: number | string;
  /** 圆角大小，默认单位为 px	 */
  radius?: number | string;
  /** 加载图标和失败图标的大小	 */
  iconSize?: number | string;
  /** 图标类名前缀，等同于 Icon 组件的 classPrefix 属性	 */
  iconPrefix?: string;
  /**
   * 是否展示图片加载失败提示
   * @default true
   */
  showError?: boolean;
  /**
   * 是否展示图片加载中提示
   * @default true
   */
  showLoading?: boolean;
  /**
   * 失败时提示的图标名称或图片链接
   * @default 'photo-fail'
   */
  errorIcon?: string | React.ReactNode;
  /**
   * 加载时提示的图标名称或图片链接
   * @default 'photo'
   */
  loadingIcon?: string | React.ReactNode;
  /** 图片加载完毕时触发	 */
  onLoad?: (e: React.MouseEvent<HTMLImageElement>) => void;
  /** 图片加载失败时触发	 */
  onError?: (e: React.MouseEvent<HTMLImageElement>) => void;
  /** 点击图片时触发	 */
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export type LazyImageType = boolean | Pick<LazyloadProps, 'placeholder'>;

export interface LazyImageProps extends ImageProps {
  /** 是否开启图片懒加载 */
  lazyload?: LazyImageType;
}

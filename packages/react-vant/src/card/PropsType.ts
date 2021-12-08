import React from 'react';
import { BaseTypeProps } from '../utils';

export interface CardProps extends BaseTypeProps {
  /** 图片角标 */
  tag?: React.ReactNode;
  /** 自定义描述下方标签区域 */
  tags?: React.ReactNode;
  /** 自定义价格下方区域 */
  bottom?: React.ReactNode;
  /** 自定义价格上方区域 */
  priceTop?: React.ReactNode;
  /** 自定义右下角内容 */
  footer?: React.ReactNode;
  /** 商品数量支持自定义 */
  num?: React.ReactNode;
  /** 描述 */
  desc?: React.ReactNode;
  /** 左侧图片URL支持自定义	 */
  thumb?: string | React.ReactNode;
  /** 标题 */
  title?: React.ReactNode;
  /** 商品价格支持自定义 */
  price?: React.ReactNode;
  /** 补全价格两位小数 */
  decimal?: boolean;
  /** 内容是否垂直居中	 */
  centered?: boolean;
  /** 是否开启图片懒加载 */
  lazyload?: boolean;
  /** 点击左侧图片后跳转的链接地址	 */
  thumbLink?: string;
  /** 商品划线原价支持自定义 */
  originPrice?: React.ReactNode;
  /** 货币符号 */
  currency?: string;
  /** 点击时触发 */
  onClick?: (event: React.MouseEvent) => void;
  /** 点击自定义图片时触发 */
  onClickThumb?: (event: React.MouseEvent) => void;
}

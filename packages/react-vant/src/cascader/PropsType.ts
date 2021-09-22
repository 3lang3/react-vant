import React from 'react';
import { BaseTypeProps } from '../utils';

export type CascaderOption = {
  /** 选项文字 */
  text?: string;
  /** 选项对应的值 */
  value?: string | number;
  /** 选项文字颜色	 */
  color?: string;
  /** 是否禁用选项	 */
  disabled?: boolean;
  /** 子选项列表	 */
  children?: CascaderOption[];
  /** 为对应列添加额外的 class	 */
  className?: unknown;
  // for custom filed names
  [key: string]: any;
};

export type CascaderTab = {
  options: CascaderOption[];
  selectedOption: CascaderOption | null;
};

export type CascaderFieldNames = {
  text?: string;
  value?: string;
  children?: string;
};

export interface CascaderProps extends BaseTypeProps {
  /** 顶部标题	 */
  title?: React.ReactNode;
  /** 是否显示关闭图标	 */
  closeable?: boolean;
  /** 是否开启手势左右滑动切换	 */
  swipeable?: boolean;
  /** 选中项 */
  value?: (number | string)[];
  /** 默认选中项 */
  defaultValue?: (number | string)[];
  /** 自定义 options 结构中的字段	 */
  fieldNames?: CascaderFieldNames;
  /** 未选中时的提示文案	 */
  placeholder?: string;
  /** 选中状态的高亮颜色	 */
  activeColor?: string;
  /** 可选项数据源	 */
  options?: CascaderOption[];
  /** 自定义选项文字	 */
  optionRender?: ({
    option,
    selected,
  }: {
    option: CascaderOption;
    selected: boolean;
  }) => React.ReactNode;
  /** 关闭图标名称或图片链接	 */
  closeIcon?: string | React.ReactNode;
  /** 点击关闭图标时触发	 */
  onClose?: () => void;
  /** 选中项变化时触发	 */
  onChange?: ({ value, selectedOptions, tabIndex }) => void;
  /** 全部选项选择完成后触发	 */
  onFinish?: ({ value, selectedOptions, tabIndex }) => void;
  /** 点击标签时触发 */
  onClickTab?: (tabIndex: number, title: string) => void;
}

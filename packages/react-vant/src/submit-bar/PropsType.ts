import React from 'react';
import { ButtonType } from '../button/PropsType';
import { BaseTypeProps } from '../utils';

export interface SubmitBarProps extends BaseTypeProps {
  /** 在订单栏上方的提示文案	 */
  tip?: React.ReactNode;
  /** 自定义订单栏上方内容 */
  top?: React.ReactNode;
  /** 金额左侧文案	 */
  label?: React.ReactNode;
  /** 金额右侧文案	 */
  suffixLabel?: string;
  /** 金额（单位分）	 */
  price?: number | string;
  /** 提示文案左侧的图标名称或图片链接或者自定义内容 */
  tipIcon?: React.ReactNode;
  /** 是否显示将按钮显示为加载中状态	 */
  loading?: boolean;
  /** 是否禁用按钮	 */
  disabled?: boolean;
  /** 金额文案对齐方向 */
  textAlign?: React.CSSProperties['textAlign'];
  /** 自定义按钮 */
  button?: React.ReactNode;
  /** 按钮文字	 */
  buttonText?: string;
  /** 自定义按钮颜色	 */
  buttonColor?: string;
  /** 是否开启底部安全区适配	 */
  safeAreaInsetBottom?: boolean;
  /** 金额小数点位数	 */
  decimalLength?: number | string;
  /** 货币符号	 */
  currency?: string;
  /** 按钮类型	 */
  buttonType?: ButtonType;
  /** 按钮点击事件回调	 */
  onSubmit?: () => void;
  children?: React.ReactNode;
}

import React from 'react';
import { ButtonType } from '../button/PropsType';
import { BaseTypeProps } from '../utils';

export interface SubmitBarProps extends BaseTypeProps {
  // 这里写组件的props
  tip?: React.ReactNode;
  label?: React.ReactNode;
  price?: number | string;
  tipIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
  button?: React.ReactNode;
  buttonText?: string;
  buttonColor?: string;
  suffixLabel?: string;
  safeAreaInsetBottom?: boolean;
  decimalLength?: number | string;
  currency?: string;
  buttonType?: ButtonType;
  onSubmit?: () => void;
}

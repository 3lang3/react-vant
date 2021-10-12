import React from 'react';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import type { FieldProps as RcFieldProps } from 'rc-field-form/lib/Field';
import type { Meta } from 'rc-field-form/lib/interface';
import type { BaseTypeProps } from '../utils';
import type { CellGroupProps } from '../cell/PropsType';
import { FieldProps } from '../field/PropsType';

export type FormLayout = 'vertical' | 'horizontal';
export interface FormProps extends RcFormProps, Omit<CellGroupProps, 'title'>, BaseTypeProps {
  layout?: FormLayout;
  hasFeedback?: boolean;
  label?: React.ReactNode;
  footer?: React.ReactNode;
}

export type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type MemoInputProps = {
  value: any;
  update: number;
  children: React.ReactNode;
} & Record<string, any>;

export type FormItemProps = RcFieldProps &
  Pick<FieldProps, 'style' | 'className' | 'tooltip' | 'intro' | 'onClick'> & {
    label?: string;
    hasFeedback?: boolean;
    required?: boolean;
    noStyle?: boolean;
    disabled?: boolean;
    children: ChildrenType;
  };

export type FormItemLayoutProps = Pick<
  FormItemProps,
  'required' | 'hasFeedback' | 'disabled' | 'label' | 'style' | 'className' | 'tooltip' | 'intro'
> & {
  onClick?: (e?: React.MouseEvent) => void;
  htmlFor?: string;
  meta?: Meta;
  layout?: FormLayout;
  /** @private */
  isFieldChildren?: boolean;
};

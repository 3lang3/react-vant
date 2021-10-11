import React from 'react';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { Meta } from 'rc-field-form/lib/interface';
import type { BaseTypeProps } from '../utils';
import type { CellGroupProps } from '../cell/PropsType';

export type FormLayout = 'vertical' | 'horizontal';
export interface FormProps extends RcFormProps, Omit<CellGroupProps, 'title'>, BaseTypeProps {
  layout?: FormLayout;
  hasFeedback?: boolean;
  label?: React.ReactNode;
  footer?: React.ReactNode;
}

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type FormItemProps = FieldProps &
  BaseTypeProps & {
    label?: string;
    help?: string;
    extra?: React.ReactNode;
    tooltip?: React.ReactNode;
    hasFeedback?: boolean;
    required?: boolean;
    noStyle?: boolean;
    disabled?: boolean;
  };

export type FormItemLayoutProps = Pick<
  FormItemProps,
  'required' | 'hasFeedback' | 'disabled' | 'label' | 'help' | 'style' | 'className'
> & {
  onClick?: (e?: React.MouseEvent) => void;
  htmlFor?: string;
  meta?: Meta;
  layout?: FormLayout;
  /** @private */
  isFieldChildren?: boolean;
};

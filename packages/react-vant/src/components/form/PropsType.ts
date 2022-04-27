import React from 'react';
import type { FormInstance as RcFormInstance, FormProps as RcFormProps } from 'rc-field-form';
import type { FieldProps as RcFieldProps } from 'rc-field-form/lib/Field';
import type { Meta } from 'rc-field-form/lib/interface';
import type { BaseTypeProps } from '../utils';
import { FieldProps } from '../field/PropsType';

export type FormLayout = 'vertical' | 'horizontal';
export type FormProps = {
  /** 表单布局 */
  layout?: FormLayout;
  /** 是否显示 label 后面的冒号 */
  colon?: boolean;
  /** 表单底部内容	 */
  footer?: React.ReactNode;
  /** 是否显示验证信息 */
  showValidateMessage?: boolean;
} & Omit<RcFormProps, 'style'> &
  BaseTypeProps &
  Pick<FieldProps, 'labelAlign' | 'inputAlign' | 'border'>;

export type RenderChildren<Values = any> = (form: RcFormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

export type FormInstance = RcFormInstance;

export type MemoInputProps = {
  value: unknown;
  update: number;
  children: React.ReactNode;
} & Record<string, unknown>;

export interface FormItemProps<Values = any>
  extends Omit<RcFieldProps, 'children'>,
    Pick<FormProps, 'showValidateMessage' | 'border' | 'layout'>,
    Pick<
      FieldProps,
      | 'style'
      | 'className'
      | 'tooltip'
      | 'intro'
      | 'colon'
      | 'labelWidth'
      | 'labelAlign'
      | 'labelClass'
      | 'onClick'
      | 'inputAlign'
      | 'errorMessageAlign'
    > {
  label?: string;
  required?: boolean;
  noStyle?: boolean;
  disabled?: boolean;
  /** 自定义item，此时不会渲染内置的field */
  customField?: boolean;
  children?: ChildrenType<Values>;
}

export type FormItemLayoutProps = Pick<
  FormItemProps,
  | 'required'
  | 'disabled'
  | 'label'
  | 'style'
  | 'className'
  | 'tooltip'
  | 'intro'
  | 'colon'
  | 'border'
  | 'layout'
  | 'labelWidth'
  | 'labelAlign'
  | 'labelClass'
  | 'showValidateMessage'
  | 'inputAlign'
  | 'errorMessageAlign'
> & {
  onClick?: (e?: React.MouseEvent) => void;
  htmlFor?: string;
  meta?: Meta;
  /** @private */
  isFieldChildren?: boolean;
};

import React from 'react'
import type {
  FormInstance as RcFormInstance,
  FormProps as RcFormProps,
} from 'rc-field-form'
import type { FieldProps as RcFieldProps } from 'rc-field-form/lib/Field'
import type { Meta } from 'rc-field-form/lib/interface'
import type { BaseTypeProps } from '../utils'
import { FieldProps } from '../field/PropsType'

/** Form.Item 继承自 Field 等属性 */
export type FieldSharedProps = Pick<
  FieldProps,
  | 'style'
  | 'className'
  | 'disabled'
  | 'label'
  | 'size'
  | 'colon'
  | 'intro'
  | 'tooltip'
  | 'required'
  | 'isLink'
  | 'errorMessageAlign'
  | 'arrowDirection'
  | 'controlAlign'
  | 'labelClass'
  | 'labelWidth'
  | 'labelAlign'
  | 'leftIcon'
  | 'rightIcon'
  | 'prefix'
  | 'suffix'
>

export type FormLayout = 'vertical' | 'horizontal'
export type FormProps = {
  /** 表单布局 */
  layout?: FormLayout
  /** 是否显示 label 后面的冒号 */
  colon?: boolean
  /** 表单底部内容	 */
  footer?: React.ReactNode
  /** 是否显示验证信息 */
  showValidateMessage?: boolean
  /** 统一配置required显示 */
  required?: boolean
} & Omit<RcFormProps, 'style'> &
  BaseTypeProps &
  Pick<FieldProps, 'labelAlign' | 'controlAlign' | 'border'>

export type RenderChildren<Values = any> = (
  form: RcFormInstance<Values>
) => React.ReactNode
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

export type FormInstance = RcFormInstance

export type MemoInputProps = {
  value: unknown
  update: number
  children: React.ReactNode
} & Record<string, unknown>

export interface FormItemProps<Values = any>
  extends Omit<RcFieldProps, 'children'>,
    Pick<FormProps, 'showValidateMessage' | 'border' | 'layout'>,
    FieldSharedProps {
  noStyle?: boolean
  children?: ChildrenType<Values>
  onClick?: (
    e: React.MouseEvent,
    // Not yet implemented
    // https://mobile.ant.design/zh/components/form#faq
    widgetRef?: React.MutableRefObject<any>
  ) => void
}

export type FormItemLayoutProps = Omit<FormItemProps, 'name'> & {
  onClick?: (e?: React.MouseEvent) => void
  htmlFor?: string
  meta?: Meta
  children?: React.ReactNode
}

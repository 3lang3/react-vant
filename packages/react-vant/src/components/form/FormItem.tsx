import React, { FC } from 'react'
import clsx from 'clsx'
import { Field as RcField } from 'rc-field-form'
import { FieldContext } from 'rc-field-form'
import type { Meta } from 'rc-field-form/lib/interface'
import Field from '../field'
import type {
  FormItemLayoutProps,
  FormItemProps,
  MemoInputProps,
  RenderChildren,
} from './PropsType'
import { toArray } from '../uploader/utils'
import { FormContext } from './FormContext'
import { devWarning } from '../utils/dev-log'
import { createNamespace, pick } from '../utils'
import { isSafeSetRefComponent } from './utils'

function undefinedFallback(...items: any[]) {
  let i: number
  for (i = 0; i < items.length; i++) {
    if (items[i] !== undefined) break
  }
  return items[i]
}

const MemoInput = React.memo(
  ({ children, ...props }: MemoInputProps) =>
    React.cloneElement(
      children as React.ReactElement,
      props
    ) as React.ReactElement,
  (prev, next) => prev.value === next.value && prev.update === next.update
)

const [bem] = createNamespace('form-item')

const FormItemLayout: React.FC<FormItemLayoutProps> = props => {
  const { meta, ...fieldProps } = props
  const context = React.useContext(FormContext)

  const layout = props.layout ?? context.layout
  const border = props.border ?? context.border
  const colon = props.colon ?? context.colon
  const showValidateMessage =
    props.showValidateMessage ?? context.showValidateMessage
  const labelAlign = props.labelAlign ?? context.labelAlign
  const controlAlign = props.controlAlign ?? context.controlAlign

  const error = meta && meta.errors.length > 0
  const errorMessage = showValidateMessage && error ? meta.errors[0] : null

  const attrs = {
    ...fieldProps,
    className: clsx(bem({ vertical: layout === 'vertical' }), props.className),
    colon,
    error: showValidateMessage ? false : error,
    errorMessage,
    labelAlign,
    controlAlign,
    border,
  }

  return <Field {...attrs}>{props.children}</Field>
}

// 移植自antd mobile: https://github.com/ant-design/ant-design-mobile/blob/master/src/components/form/form-item.tsx
const FormItem: FC<FormItemProps> = props => {
  const formContext = React.useContext(FormContext)

  const {
    // RcFiled props
    name,
    noStyle,
    rules,
    trigger = 'onChange',
    validateTrigger = trigger,
    shouldUpdate,
    dependencies,
    messageVariables,
    // Field props
    label,
    required,
    disabled,
    children,
    onClick,
    ...rcFieldProps
  } = props

  // Pick Field props
  const fieldProps = pick(props, [
    'style',
    'className',
    'tooltip',
    'intro',
    'colon',
    'labelWidth',
    'labelAlign',
    'labelClass',
    'showValidateMessage',
    'controlAlign',
    'errorMessageAlign',
    'border',
    'layout',
    'isLink',
    'size',
    'arrowDirection',
    'leftIcon',
    'rightIcon',
    'prefix',
    'suffix',
  ])

  const { validateTrigger: contextValidateTrigger } =
    React.useContext(FieldContext)

  const mergedValidateTrigger = undefinedFallback(
    validateTrigger,
    contextValidateTrigger,
    trigger
  )

  const widgetRef = React.useRef<any>(null)

  const updateRef = React.useRef(0)
  updateRef.current += 1

  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    meta?: Meta,
    isRequired?: boolean
  ) {
    if (noStyle) {
      return baseChildren
    }
    return (
      <FormItemLayout
        htmlFor={fieldId}
        meta={meta}
        {...fieldProps}
        required={isRequired}
        label={label}
        disabled={disabled}
        onClick={e => onClick?.(e, widgetRef)}
      >
        {baseChildren}
      </FormItemLayout>
    )
  }

  const isRenderProps = typeof children === 'function'

  if (!name && !isRenderProps && !props.dependencies) {
    return renderLayout(children) as React.ReactElement
  }

  let variables: Record<string, string> = {}
  if (typeof label === 'string') {
    variables.label = label
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables }
  }

  return (
    <RcField
      {...rcFieldProps}
      name={name}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
    >
      {(control, meta, context) => {
        let childNode: React.ReactNode = null
        const isRequired =
          required !== undefined
            ? required
            : formContext.required ??
              (rules &&
                rules.some(
                  rule => !!(rule && typeof rule === 'object' && rule.required)
                ))

        const fieldId = (toArray(name).length && meta ? meta.name : []).join(
          '_'
        )
        if (shouldUpdate && dependencies) {
          devWarning(
            'Form.Item',
            "`shouldUpdate` and `dependencies` shouldn't be used together."
          )
        }

        if (isRenderProps) {
          if ((shouldUpdate || dependencies) && !name) {
            childNode = (children as RenderChildren)(context)
          } else {
            if (!(shouldUpdate || dependencies)) {
              devWarning(
                'Form.Item',
                '`children` of render props only work with `shouldUpdate` or `dependencies`.'
              )
            }
            if (name) {
              devWarning(
                'Form.Item',
                "Do not use `name` with `children` of render props since it's not a field."
              )
            }
          }

          // not render props
        } else if (dependencies && !name) {
          devWarning(
            'Form.Item',
            'Must set `name` or use render props when `dependencies` is set.'
          )
        } else if (React.isValidElement(children)) {
          if (children.props.defaultValue) {
            devWarning(
              'Form.Item',
              '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.'
            )
          }
          const childProps = { ...children.props, ...control }

          if (isSafeSetRefComponent(children)) {
            childProps.ref = (instance: any) => {
              const originRef = (children as any).ref
              if (originRef) {
                if (typeof originRef === 'function') {
                  originRef(instance)
                }
                if ('current' in originRef) {
                  originRef.current = instance
                }
              }
              widgetRef.current = instance
            }
          }

          if (!childProps.id) {
            childProps.id = fieldId
          }

          if (disabled) {
            childProps.disabled = disabled
          }

          // We should keep user origin event handler
          const triggers = new Set<string>([
            ...toArray<string>(trigger),
            ...toArray<string>(mergedValidateTrigger as string),
          ])

          triggers.forEach(eventName => {
            childProps[eventName] = (...args) => {
              control[eventName]?.(...args)
              children.props[eventName]?.(...args)
            }
          })

          childNode = (
            <MemoInput
              value={control[props.valuePropName || 'value']}
              update={updateRef.current}
            >
              {React.cloneElement(children, childProps)}
            </MemoInput>
          )
        } else {
          if (name) {
            devWarning(
              'Form.Item',
              '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.'
            )
          }
          childNode = children
        }

        return renderLayout(childNode, fieldId, meta, isRequired)
      }}
    </RcField>
  )
}

export default FormItem

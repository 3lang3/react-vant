/* eslint-disable no-console */
import React, { FC } from 'react';
import classNames from 'classnames';
import { Field as RcField, FormInstance } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import FieldContext from 'rc-field-form/lib/FieldContext';
import type { Meta } from 'rc-field-form/lib/interface';
import type { CellProps } from '../cell';
import Field from '../field';
import type { FormItemLayoutProps } from './PropsType';
import { toArray } from '../uploader/utils';
import { FIELD_KEY } from '../field/Field';
import { COMPONENT_TYPE_KEY } from '../utils/constant';

function devWarning(component: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[${component}] ${message}`);
  }
}

type RenderChildren<Values = any> = (form: FormInstance<Values>) => React.ReactNode;
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode;

type RcFieldProps = Omit<FieldProps, 'children'>;

const classPrefix = `adm-form-item`;

export type FormItemProps = RcFieldProps &
  Pick<CellProps, 'style' | 'className' | 'onClick'> & {
    label?: string;
    help?: string;
    hasFeedback?: boolean;
    required?: boolean;
    noStyle?: boolean;
    disabled?: boolean;
    children: ChildrenType;
  };

type MemoInputProps = {
  value: any;
  update: number;
  children: React.ReactNode;
} & Record<string, any>;

const MemoInput = React.memo(
  ({ children, ...props }: MemoInputProps) =>
    React.cloneElement(children as React.ReactElement, props) as JSX.Element,
  (prev, next) => prev.value === next.value && prev.update === next.update,
);

const FormItemLayout: React.FC<FormItemLayoutProps> = (props) => {
  const {
    className,
    help,
    style,
    label,
    required,
    disabled,
    meta,
    onClick,
    children,
    isFieldChildren,
  } = props;

  const fieldErrorMessage = meta && meta.errors.length > 0 ? meta.errors[0] : null;
  const error = !!fieldErrorMessage;
  const errorMessage = help || fieldErrorMessage;

  const attrs = {
    className: classNames(classPrefix, className),
    label,
    style,
    disabled,
    required,
    error,
    errorMessage,
    onClick,
  };

  if (isFieldChildren) return React.cloneElement(children as React.ReactElement, attrs);

  return <Field {...attrs}>{children}</Field>;
};

const FormItem: FC<FormItemProps> = (props) => {
  const {
    // 样式相关
    className,
    style,
    // FormItem 相关
    label,
    help,
    hasFeedback,
    name,
    required,
    noStyle,
    // Field 相关
    disabled,
    rules,
    children,
    messageVariables,
    trigger = 'onChange',
    validateTrigger,
    onClick,
    shouldUpdate,
    dependencies,
    ...fieldProps
  } = props;

  const { validateTrigger: contextValidateTrigger } = React.useContext(FieldContext);
  const mergedValidateTrigger =
    validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;

  const updateRef = React.useRef(0);
  updateRef.current += 1;

  const isFieldChildren = (children as any).type?.[COMPONENT_TYPE_KEY] === FIELD_KEY;

  function renderLayout(
    baseChildren: React.ReactNode,
    fieldId?: string,
    meta?: Meta,
    isRequired?: boolean,
  ) {
    if (noStyle) {
      return baseChildren;
    }
    return (
      <FormItemLayout
        isFieldChildren={isFieldChildren}
        className={className}
        style={style}
        label={label}
        help={help}
        required={isRequired}
        disabled={disabled}
        hasFeedback={hasFeedback}
        htmlFor={fieldId}
        meta={meta}
        onClick={onClick}
      >
        {baseChildren}
      </FormItemLayout>
    );
  }

  const isRenderProps = typeof children === 'function';

  if (!name && !isRenderProps && !props.dependencies) {
    return renderLayout(children) as JSX.Element;
  }

  let variables: Record<string, string> = {};
  if (typeof label === 'string') {
    variables.label = label;
  }
  if (messageVariables) {
    variables = { ...variables, ...messageVariables };
  }

  return (
    <RcField
      {...fieldProps}
      name={name}
      shouldUpdate={shouldUpdate}
      dependencies={dependencies}
      rules={rules}
      trigger={trigger}
      validateTrigger={mergedValidateTrigger}
    >
      {(control, meta, context) => {
        let childNode: React.ReactNode = null;
        const isRequired =
          required !== undefined
            ? required
            : !!(
                rules &&
                rules.some((rule) => {
                  if (rule && typeof rule === 'object' && rule.required) {
                    return true;
                  }
                  return false;
                })
              );

        const fieldId = (toArray(name).length && meta ? meta.name : []).join('_');
        if (shouldUpdate && dependencies) {
          devWarning('Form.Item', "`shouldUpdate` and `dependencies` shouldn't be used together.");
        }

        if (isRenderProps) {
          if ((shouldUpdate || dependencies) && !name) {
            childNode = (children as RenderChildren)(context);
          } else {
            if (!(shouldUpdate || dependencies)) {
              devWarning(
                'Form.Item',
                '`children` of render props only work with `shouldUpdate` or `dependencies`.',
              );
            }
            if (name) {
              devWarning(
                'Form.Item',
                "Do not use `name` with `children` of render props since it's not a field.",
              );
            }
          }

          // not render props
        } else if (dependencies && !name) {
          devWarning(
            'Form.Item',
            'Must set `name` or use render props when `dependencies` is set.',
          );
        } else if (React.isValidElement(children)) {
          if (children.props.defaultValue) {
            devWarning(
              'Form.Item',
              '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.',
            );
          }
          const childProps = { ...children.props, ...control };

          if (!childProps.id) {
            childProps.id = fieldId;
          }

          if (disabled) {
            childProps.disabled = disabled;
          }

          // We should keep user origin event handler
          const triggers = new Set<string>([
            ...toArray(trigger),
            ...toArray(mergedValidateTrigger),
          ] as any);

          triggers.forEach((eventName) => {
            childProps[eventName] = (...args: any[]) => {
              control[eventName]?.(...args);
              children.props[eventName]?.(...args);
            };
          });

          childNode = (
            <MemoInput value={control[props.valuePropName || 'value']} update={updateRef.current}>
              {React.cloneElement(children, childProps)}
            </MemoInput>
          );

          if (isFieldChildren) {
            childProps.value = childProps.value || '';
            childNode = React.cloneElement(children, childProps);
          }
        } else {
          if (name) {
            devWarning(
              'Form.Item',
              '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.',
            );
          }
          childNode = children;
        }
        return renderLayout(childNode, fieldId, meta, isRequired);
      }}
    </RcField>
  );
};

export default FormItem;

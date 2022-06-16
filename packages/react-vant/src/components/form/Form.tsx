import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import type { FormInstance } from 'rc-field-form';
import RcForm from 'rc-field-form';
import { FormProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { FormContext } from './FormContext';

const Form = forwardRef<FormInstance, FormProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('form', prefixCls);

  const {
    className,
    style,
    layout,
    footer,
    children,
    colon,
    border,
    labelAlign,
    controlAlign,
    showValidateMessage,
    ...formProps
  } = props;

  return (
    <RcForm className={clsx(bem(), className)} style={style} ref={ref} {...formProps}>
      <FormContext.Provider
        value={{
          layout,
          colon,
          border,
          showValidateMessage,
          controlAlign,
          labelAlign,
        }}
      >
        {children}
      </FormContext.Provider>
      {footer && <div className={clsx(bem('footer'))}>{footer}</div>}
    </RcForm>
  );
});

Form.defaultProps = {
  showValidateMessage: true,
};

export default Form;

import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';
import RcForm from 'rc-field-form';
import type { FormProps as RcFormProps, FormInstance } from 'rc-field-form';
import { FormProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Form = forwardRef<FormInstance, FormProps & RcFormProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('form', prefixCls);

  return (
    <RcForm className={classnames(bem(), props.className)} style={props.style} ref={ref}>
      {props.children}
      {props.footer && <div className={classnames(bem('footer'))}>{props.footer}</div>}
    </RcForm>
  );
});

export default Form;

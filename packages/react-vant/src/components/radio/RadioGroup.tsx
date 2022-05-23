/* eslint-disable no-console */
import React, { useContext } from 'react';
import clsx from 'clsx';

import useMergedState from '../hooks/use-merged-state';
import RadioContext, { RadioContextState } from './RadioContext';
import { RadioGroupProps, RadioValueType } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

function RadioGroup<T = RadioValueType>(props: RadioGroupProps<T>) {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('radio-group', prefixCls);

  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggle = (name: T) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <RadioContext.Provider value={{ parent: { props }, toggle, checked } as RadioContextState<any>}>
      <div
        className={clsx(props.className, bem([props.direction]))}
        style={props.style}
        role="radiogroup"
      >
        {props.children}
      </div>
    </RadioContext.Provider>
  );
}

export default RadioGroup;

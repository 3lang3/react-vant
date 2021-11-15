/* eslint-disable no-console */
import React, { useContext } from 'react';
import clsx from 'clsx';

import useMergedState from '../hooks/use-merged-state';
import RadioContext from './RadioContext';
import { RadioGroupProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('radio-group', prefixCls);

  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggle = (name: string) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <RadioContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div
        className={clsx(props.className, bem([props.direction]))}
        style={props.style}
        role="radiogroup"
      >
        {props.children}
      </div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;

/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames';

import useMergedState from '../hooks/use-merged-state';
import RadioContext from './RadioContext';

import { createNamespace } from '../utils';
import { RadioGroupProps } from './PropsType';

const [bem] = createNamespace('radio-group');

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
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
        className={classnames(props.className, bem([props.direction]))}
        style={props.style}
        role="radiogroup"
      >
        {props.children}
      </div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;

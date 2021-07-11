import React from 'react';
import classnames from 'classnames';

import useMergedState from '../hooks/use-merged-state';
import CheckBoxContext from './CheckboxContext';

import { CheckBoxGroupProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('checkbox-group');

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {
  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggle = (name: Array<string | number>) => {
    setChecked(name);
    props.onChange?.(name);
  };

  return (
    <CheckBoxContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={classnames(bem([props.direction]))}>{props.children}</div>
    </CheckBoxContext.Provider>
  );
};

export default CheckBoxGroup;

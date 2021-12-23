import React, { forwardRef, useContext, useImperativeHandle } from 'react';
import clsx from 'clsx';

import useMergedState from '../hooks/use-merged-state';
import CheckBoxContext from './CheckboxContext';

import {
  CheckboxGroupProps,
  CheckboxGroupToggleAllOptions,
  CheckboxGroupInstance,
  CheckboxInstance,
} from './PropsType';
import { WithDisplayNameReactElement } from '../utils';
import useRefs from '../hooks/use-refs';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CheckBoxGroup = forwardRef<CheckboxGroupInstance, CheckboxGroupProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('checkbox-group', prefixCls);
  const [childrenRefs, setChildrenRefs] = useRefs();
  const [checked, setChecked] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const toggleAll = (options: CheckboxGroupToggleAllOptions = {}) => {
    if (typeof options === 'boolean') {
      options = { checked: options };
    }

    const { checked: isChecked, skipDisabled } = options;

    const checkedChildren = childrenRefs.filter((item: CheckboxInstance) => {
      if (!item.props.bindGroup) {
        return false;
      }
      if (item.props.disabled && skipDisabled) {
        return item.checked;
      }
      return isChecked ?? !item.checked;
    });

    const names = checkedChildren.map((item) => item.props.name);
    setChecked(names);
    props.onChange(names);
  };

  const toggle = (name: Array<string | number>) => {
    setChecked(name);
    props.onChange?.(name);
  };

  useImperativeHandle(ref, () => ({
    toggleAll,
  }));

  return (
    <CheckBoxContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={clsx(bem([props.direction]))}>
        {React.Children.toArray(props.children)
          .filter(Boolean)
          .map((child: WithDisplayNameReactElement, index: number) => {
            if (child.type?.displayName !== 'Checkbox') return child;
            return React.cloneElement(child, { ref: setChildrenRefs(index) });
          })}
      </div>
    </CheckBoxContext.Provider>
  );
});

CheckBoxGroup.defaultProps = {
  defaultValue: [],
};

export default CheckBoxGroup;

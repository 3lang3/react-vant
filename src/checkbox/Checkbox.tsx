import React, { useContext, useMemo } from 'react';

import Checker from './Checker';
import CheckBoxContext from './CheckboxContext';
import useMergedState from '../hooks/use-merged-state';

import { CheckboxProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('checkbox');

const CheckBox: React.FC<CheckboxProps> = (props) => {
  const { parent, ...context } = useContext(CheckBoxContext);
  const [checked, setChecked] = useMergedState<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  const emit = (type?: string, args?: unknown) => {
    const name = `on${type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`;
    if (props[name] && typeof props[name] === 'function') {
      props[name](args);
    }
  };

  const setParentValue = (isChecked: boolean) => {
    const { name } = props;
    const { max } = parent.props;
    const value = context.checked.slice();

    if (isChecked) {
      const overlimit = max && value.length >= max;

      if (!overlimit && value.indexOf(name) === -1) {
        value.push(name);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    } else {
      const index = value.indexOf(name);

      if (index !== -1) {
        value.splice(index, 1);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    }
  };

  const isChecked = useMemo(() => {
    if (parent && props.bindGroup) {
      return context.checked.indexOf(props.name as string) !== -1;
    }
    return checked;
  }, [context.checked, checked]);

  const toggle = (newValue = !isChecked) => {
    if (parent && props.bindGroup) {
      setParentValue(newValue);
    } else {
      setChecked(newValue);
      emit('change', newValue);
    }
  };

  return (
    <Checker
      {...props}
      bem={bem}
      role="checkbox"
      parent={parent}
      checked={isChecked}
      className={props.className}
      bindGroup={props.bindGroup}
      onToggle={toggle}
    />
  );
};

CheckBox.defaultProps = {
  bindGroup: true,
};

export default CheckBox;

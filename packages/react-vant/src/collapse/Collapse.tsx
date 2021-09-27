/* eslint-disable no-console */
import React, { ReactElement, useContext, useRef, useState } from 'react';
import classnames from 'classnames';

import CollapseContext from './CollapseContext';

import { CollapseProps } from './PropsType';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

function validateModelValue(
  modelValue: string | number | Array<string | number>,
  accordion: boolean,
) {
  if (accordion && Array.isArray(modelValue)) {
    console.error('[ReactVant] Collapse: "value" should not be Array in accordion mode');
    return false;
  }
  if (!accordion && !Array.isArray(modelValue)) {
    console.error('[React Vant] Collapse: "value" should be Array in non-accordion mode');
    return false;
  }
  return true;
}

const Collapse: React.FC<CollapseProps> = (props) => {
  const { prefixCls,  createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('collapse', prefixCls);

  const innerEffect = useRef(false);
  const [expanded, setExpanded] = useState(() => props.value ?? props.initExpanded);
  const updateName = (name: number | string | Array<number | string>) => {
    innerEffect.current = true;
    setExpanded(name);
    props.onChange?.(name);
  };

  const toggle = (name, isExpanded: boolean) => {
    const { accordion } = props;
    if (accordion) {
      if (name === expanded) {
        name = '';
      }
    } else if (isExpanded) {
      name = (expanded as []).concat(name);
    } else {
      name = (expanded as []).filter((activeName) => activeName !== name);
    }
    updateName(name);
  };

  const isExpanded = (name: string | number): boolean => {
    const { accordion } = props;

    if (process.env.NODE_ENV !== 'production' && !validateModelValue(expanded, accordion)) {
      return false;
    }

    return accordion ? expanded === name : (expanded as Array<number | string>).includes(name);
  };

  useUpdateEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    setExpanded(props.value);
  }, [props.value]);

  return (
    <CollapseContext.Provider value={{ isExpanded, toggle }}>
      <div className={classnames(bem(), { [BORDER_TOP_BOTTOM]: props.border })}>
        {React.Children.toArray(props.children).filter(Boolean).map((child: ReactElement, index: number) =>
          React.cloneElement(child, {
            index,
          }),
        )}
      </div>
    </CollapseContext.Provider>
  );
};

Collapse.defaultProps = {
  border: true,
  initExpanded: [],
};

export default Collapse;

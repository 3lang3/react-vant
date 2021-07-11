/* eslint-disable no-console */
import React, { ReactElement, useState } from 'react';
import classnames from 'classnames';

import CollapseContext from './CollapseContext';

import { CollapseGroupProps } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [bem] = createNamespace('collapse');

const CollapseGroup: React.FC<CollapseGroupProps> = (props) => {
  const [expanded, setExpanded] = useState(props.initExpanded);

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
    if (props.onChange) {
      props.onChange(name);
    }
    setExpanded(name);
  };

  const isExpanded = (name: string | number): boolean => {
    const { accordion } = props;
    if (!accordion && !Array.isArray(expanded) && process.env.NODE_ENV !== 'production') {
      console.error('[Rokku] Collapse: type of prop "initExpanded" should be Array');
      return false;
    }

    return accordion ? expanded === name : (expanded as string).indexOf(name as string) !== -1;
  };

  return (
    <CollapseContext.Provider value={{ isExpanded, toggle }}>
      <div className={classnames(bem(), { [BORDER_TOP_BOTTOM]: props.border })}>
        {React.Children.map(props.children, (child: ReactElement, index: number) =>
          React.cloneElement(child, {
            index,
          }),
        )}
      </div>
    </CollapseContext.Provider>
  );
};

CollapseGroup.defaultProps = {
  border: true,
  initExpanded: [],
};

export default CollapseGroup;

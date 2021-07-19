import React, { useMemo, useRef, useContext, useState, useEffect } from 'react';
import classnames from 'classnames';

import Cell from '../cell';
import CollapseContext from './CollapseContext';
import useLazyRender from '../hooks/use-lazy-render';

import { CollapseProps } from './PropsType';
import { createNamespace } from '../utils';
import { raf, doubleRaf } from '../utils/raf';

const [bem] = createNamespace('collapse-item');

const Collapse: React.FC<CollapseProps> & { Group?: React.FC } = (props) => {
  const { index } = props;
  const context = useContext(CollapseContext);

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const currentName = useMemo(() => props.name ?? index, [props.name]);

  const expanded = useMemo(() => {
    if (context) {
      return context.isExpanded(currentName);
    }
    return null;
  }, [context, currentName]);

  const [show, setShow] = useState(expanded);
  const lazyRender = useLazyRender(show);

  const onTransitionEnd = () => {
    if (!expanded) {
      setShow(false);
    } else {
      wrapperRef.current.style.height = '';
    }
  };

  const toggle = (value = !expanded) => {
    context.toggle(currentName, value);
  };

  const onClickTitle = () => {
    if (!props.disabled) {
      toggle();
    }
  };

  const renderTitle = () => {
    const { border, disabled, children, ...others } = props;

    return (
      <Cell
        className={classnames(
          bem('title', {
            disabled,
            expanded,
            borderless: !border,
          }),
        )}
        aria-expanded={String(expanded)}
        onClick={onClickTitle}
        {...others}
      />
    );
  };

  const renderContent = lazyRender(() => (
    <div ref={wrapperRef} className={classnames(bem('wrapper'))} onTransitionEnd={onTransitionEnd}>
      <div ref={contentRef} className={classnames(bem('content'))}>
        {props.children}
      </div>
    </div>
  ));

  useEffect(() => {
    if (expanded) {
      setShow(true);
    }

    raf(() => {
      if (!contentRef.current || !wrapperRef.current) {
        return;
      }

      const { offsetHeight } = contentRef.current;
      if (offsetHeight) {
        const contentHeight = `${offsetHeight}px`;
        wrapperRef.current.style.height = expanded ? 0 : contentHeight;

        // use double raf to ensure animation can start
        doubleRaf(() => {
          wrapperRef.current.style.height = expanded ? contentHeight : 0;
        });
      } else {
        onTransitionEnd();
      }
    });
  }, [expanded]);

  return (
    <div className={classnames(bem({ border: index && props.border }))}>
      {renderTitle()}
      {renderContent()}
    </div>
  );
};

Collapse.defaultProps = {
  isLink: true,
  border: true,
};

export default Collapse;

import React, {
  useMemo,
  useRef,
  useContext,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import clsx from 'clsx';

import Cell from '../cell';
import CollapseContext from './CollapseContext';
import useLazyRender from '../hooks/use-lazy-render';

import { CollapseItemInstance, CollapseItemProps } from './PropsType';
import { raf, doubleRaf } from '../utils/raf';
import { useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CollapseItem = forwardRef<CollapseItemInstance, CollapseItemProps>((props, ref) => {
  const { index } = props;
  const parent = useContext(CollapseContext);
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('collapse-item', prefixCls);

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const name = useMemo(() => props.name ?? index, [props.name]);
  const expanded = useMemo(() => {
    if (parent) {
      return parent.isExpanded(name);
    }
    return null;
  }, [parent, name]);

  const [show, setShow] = useState(() => expanded);
  const lazyRender = useLazyRender(show);

  const onTransitionEnd = () => {
    if (!expanded) {
      setShow(false);
    } else {
      wrapperRef.current.style.height = '';
    }
  };

  useUpdateEffect(() => {
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

  const toggle = (value = !expanded) => {
    parent.toggle(name, value);
  };

  const onClickTitle = () => {
    if (!props.disabled && !props.readonly) {
      toggle();
    }
  };

  const renderTitle = () => {
    const { border, disabled, children, readonly, ...others } = props;

    return (
      <Cell
        className={clsx(
          bem('title', {
            disabled,
            expanded,
            borderless: !border,
          }),
        )}
        aria-expanded={String(expanded)}
        onClick={onClickTitle}
        {...others}
        isLink={readonly ? false : others.isLink}
        clickable={disabled || readonly ? false : others.clickable}
      />
    );
  };

  const renderContent = lazyRender(() => (
    <div ref={wrapperRef} className={clsx(bem('wrapper'))} onTransitionEnd={onTransitionEnd}>
      <div ref={contentRef} className={clsx(bem('content'))}>
        {props.children}
      </div>
    </div>
  ));

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  return (
    <div className={clsx(bem({ border: index && props.border }))}>
      {renderTitle()}
      {renderContent()}
    </div>
  );
});

CollapseItem.defaultProps = {
  isLink: true,
  border: true,
};

export default CollapseItem;

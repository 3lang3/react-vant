import React, { Children, cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { DropdownMenuItemProps, DropdownMenuProps } from './PropsType';
import { isDef, createNamespace } from '../utils';
import useEventListener from '../hooks/use-event-listener';
import useScrollParent from '../hooks/use-scroll-parent';
import { getRect } from '../hooks/use-rect';
import useRefs from '../hooks/use-refs';
import DropdownMenuItem from './DropdownMenuItem';

export type DropdownMenuDirection = 'up' | 'down';

const [bem, name] = createNamespace('dropdown-menu');

export const DROPDOWN_KEY = Symbol(name);

const DropdownMenu: React.FC<DropdownMenuProps> & {
  Item: React.FC<Omit<DropdownMenuItemProps, 'onChange' | 'parentProps' | 'parentValue'>>;
} = (props) => {
  const [innerValue = {}, setInnerValue] = useState(() => props.value);
  const [opened, setOpened] = useState<boolean | number>(false);
  const [refs, setRefs] = useRefs();
  const root = useRef<HTMLDivElement>();
  const barRef = useRef<HTMLDivElement>();
  const offset = useRef(0);
  const rect = useRef<{ bottom: number; top: number }>({ bottom: 0, top: 0 });
  const innerEffect = useRef(false);
  const mounted = useRef(false);

  const { children } = props;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }

    if (!props.value) {
      setInnerValue(undefined);
      return;
    }
    setInnerValue(props.value);
  }, [props.value]);

  const onInnerChange = (v) => {
    innerEffect.current = true;
    const newValue = { ...innerValue, ...v };
    setInnerValue(newValue);
    setImmediate(() => setOpened(false));
    if (props.onChange) props.onChange(newValue);
  };

  const barStyle = () => {
    if (opened && isDef(props.zIndex)) {
      return {
        zIndex: +props.zIndex + 1,
      };
    }
    return {};
  };

  const updateOffset = () => {
    if (barRef.current) {
      rect.current = getRect(barRef.current);
      if (props.direction === 'down') {
        offset.current = rect.current.bottom;
      } else {
        offset.current = window.innerHeight - rect.current.top;
      }
    }
  };

  useEffect(() => {
    if (barRef.current) {
      updateOffset();
    }
  }, [barRef.current]);

  const onScroll = () => {
    if (opened) {
      updateOffset();
    }
  };

  const toggleItem = (active: number) => {
    refs.forEach((item, index) => {
      if (index === active) {
        updateOffset();
        item.toggle();
      } else if (item.state().showPopup) {
        item.toggle(false, { immediate: true });
      }
    });
  };

  const renderTitle = (item, index: number) => {
    const showPopup = opened === index;
    const { disabled, titleClass, name: itemName } = item.props;
    return (
      <div
        key={index}
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={classnames(bem('item', { disabled }))}
        onClick={() => {
          if (!disabled) {
            setOpened(opened === false ? index : false);
            toggleItem(index);
          }
        }}
      >
        <span
          className={classnames(
            bem('title', {
              down: showPopup === (props.direction === 'down'),
              active: showPopup,
            }),
            titleClass,
          )}
          style={{ color: showPopup ? props.activeColor : '' }}
        >
          <div className="rv-ellipsis">{item.renderTitle(innerValue[itemName])}</div>
        </span>
      </div>
    );
  };

  const scrollParent = useScrollParent(root);
  useEventListener('scroll', onScroll, { target: scrollParent });

  return (
    <div ref={root} className={classnames(bem())}>
      <div ref={barRef} style={barStyle()} className={classnames(bem('bar', { opened }))}>
        {refs.map(renderTitle)}
      </div>
      {Children.map(children, (child: ReactElement, index: number) =>
        cloneElement(child, {
          ref: setRefs(index),
          offset: offset.current,
          parentProps: props,
          parentValue: innerValue,
          onChange: onInnerChange,
        }),
      )}
    </div>
  );
};

DropdownMenu.defaultProps = {
  duration: 200,
  overlay: true,
  closeOnClickOutside: true,
  closeOnClickOverlay: true,
  direction: 'down',
};

DropdownMenu.Item = DropdownMenuItem;

export default DropdownMenu;

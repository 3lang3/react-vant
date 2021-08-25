import React, { Children, cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { DropdownMenuProps } from './PropsType';
import { isDef, createNamespace } from '../utils';
import useEventListener from '../hooks/use-event-listener';
import useScrollParent from '../hooks/use-scroll-parent';
import { getRect } from '../hooks/use-rect';
import useRefs from '../hooks/use-refs';
import DropdownMenuContext from './DropdownMenuContext';

export type DropdownMenuDirection = 'up' | 'down';

const [bem, name] = createNamespace('dropdown-menu');

export const DROPDOWN_KEY = Symbol(name);

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const [innerValue = {}, setInnerValue] = useState(() => props.value);
  const [openedMap, setOpened] = useState<Record<string, boolean>>({});
  const [refs, setRefs] = useRefs();
  const root = useRef<HTMLDivElement>();
  const barRef = useRef<HTMLDivElement>();
  const offset = useRef(0);
  const rect = useRef<{ bottom: number; top: number }>({ bottom: 0, top: 0 });
  const innerEffect = useRef(false);
  const mounted = useRef(false);

  const opened = Object.values(openedMap).filter(Boolean).length > 0;

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
    const showPopup = openedMap[index] || false;
    const { titleClass, name: itemName } = item.props;
    const disabled = item.props.disabled || props.disabled;
    return (
      <div
        key={index}
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={classnames(bem('item', { disabled }))}
        onClick={() => {
          if (!disabled) {
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
    <DropdownMenuContext.Provider value={{ props, currentValue: innerValue, openedMap }}>
      <div ref={root} className={classnames(bem())}>
        <div ref={barRef} style={barStyle()} className={classnames(bem('bar', { opened }))}>
          {refs.map(renderTitle)}
        </div>
        {Children.map(children, (child: ReactElement, index: number) =>
          cloneElement(child, {
            setOpened: (v) => setOpened((f) => ({ ...f, [index]: v })),
            ref: setRefs(index),
            offset: offset.current,
            onChange: onInnerChange,
          }),
        )}
      </div>
    </DropdownMenuContext.Provider>
  );
};

DropdownMenu.defaultProps = {
  duration: 200,
  overlay: true,
  closeOnClickOutside: true,
  closeOnClickOverlay: true,
  direction: 'down',
};

export default DropdownMenu;

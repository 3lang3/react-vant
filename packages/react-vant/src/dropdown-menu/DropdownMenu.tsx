import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { DropdownMenuProps } from './PropsType';
import { isDef, createNamespace } from '../utils';
import useEventListener from '../hooks/use-event-listener';
import useScrollParent from '../hooks/use-scroll-parent';
import { getRect } from '../hooks/use-rect';
import useRefs from '../hooks/use-refs';
import DropdownMenuContext from './DropdownMenuContext';
import { useUpdateEffect } from '../hooks';
import useClickAway from '../hooks/use-click-away';

const [bem, name] = createNamespace('dropdown-menu');

export const DROPDOWN_KEY = Symbol(name);

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const [innerValue = {}, setInnerValue] = useState(() => props.value);
  const [childrenRefs, setChildrenRefs] = useRefs();
  const [showPopupIndex, setShowPopupIndex] = useState<number>(null);
  const showPopupIndexRef = useRef<number>();
  const root = useRef<HTMLDivElement>();
  const barRef = useRef<HTMLDivElement>();
  const offset = useRef(0);

  const rect = useRef<{ bottom: number; top: number }>({ bottom: 0, top: 0 });
  const innerEffect = useRef(false);

  const opened = useMemo(() => showPopupIndex !== null, [showPopupIndex]);

  const barStyle = () => {
    if (opened && isDef(props.zIndex)) {
      return {
        zIndex: +props.zIndex + 1,
      };
    }
    return {};
  };

  const updateShowPopupIndex = (current: number) => {
    showPopupIndexRef.current = current;
    setShowPopupIndex(current);
  };
  const onClickAway = () => {
    if (props.closeOnClickOutside) {
      childrenRefs.forEach((item) => {
        item.toggle(false);
      });
      updateShowPopupIndex(null);
    }
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

  const onScroll = () => {
    if (opened) {
      updateOffset();
    }
  };

  const toggleItem = (active: number) => {
    childrenRefs.forEach((item, index) => {
      if (index === active) {
        if (active === showPopupIndexRef.current) {
          updateShowPopupIndex(null);
          item.toggle();
          return;
        }
        updateOffset();
        updateShowPopupIndex(index);
        item.toggle();
      }
    });
  };

  const close = () => {
    updateShowPopupIndex(null);
  };

  const renderTitle = (item, index: number) => {
    const showPopup = showPopupIndex === index;
    const { titleClass } = item;
    const disabled = props.disabled || item.disabled;

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
          <div className="rv-ellipsis">{item.renderTitle(innerValue[item.name])}</div>
        </span>
      </div>
    );
  };

  useUpdateEffect(() => {
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

  useEffect(() => {
    if (barRef.current) {
      updateOffset();
    }
  }, [barRef.current]);

  const onInnerChange = (v) => {
    innerEffect.current = true;
    const newValue = { ...innerValue, ...v };
    setInnerValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  const scrollParent = useScrollParent(root);
  useEventListener('scroll', onScroll, { target: scrollParent });
  useClickAway(root, onClickAway);

  return (
    <DropdownMenuContext.Provider
      value={{ props, value: innerValue, onChange: onInnerChange, close }}
    >
      <div ref={root} className={classnames(bem())}>
        <div ref={barRef} style={barStyle()} className={classnames(bem('bar', { opened }))}>
          {childrenRefs.map(renderTitle)}
        </div>
        {Children.map(props.children, (child: ReactElement, index: number) =>
          cloneElement(child, {
            ref: setChildrenRefs(index),
            offset: offset.current,
            showPopup: showPopupIndex === index,
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

import React, {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { DropdownItemInstance, DropdownMenuInstance, DropdownMenuProps } from './PropsType';
import { isDef } from '../utils';
import useEventListener from '../hooks/use-event-listener';
import useScrollParent from '../hooks/use-scroll-parent';
import { getRect } from '../hooks/use-rect';
import useRefs from '../hooks/use-refs';
import DropdownMenuContext from './DropdownMenuContext';
import { useUpdateEffect } from '../hooks';
import useClickAway from '../hooks/use-click-away';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import useMergedState from '../hooks/use-merged-state';

const DropdownMenu = forwardRef<DropdownMenuInstance, DropdownMenuProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('dropdown-menu', prefixCls);
  const [innerValue = {}, setInnerValue] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });
  const [childrenRefs, setChildrenRefs] = useRefs();
  const [showPopupIndex, setShowPopupIndex] = useState<number>(null);
  const showPopupIndexRef = useRef<number>();
  const root = useRef<HTMLDivElement>();
  const barRef = useRef<HTMLDivElement>();
  const offset = useRef(0);
  const isToggleEvent = useRef<boolean>(false);

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
  const closeAll = () => {
    childrenRefs.forEach((item) => {
      item.toggle(false);
    });
    updateShowPopupIndex(null);
  };
  const onClickAway = () => {
    if (props.closeOnClickOutside && !isToggleEvent.current) {
      closeAll();
    } else {
      isToggleEvent.current = false;
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

  const showItem = (index: number) => {
    const item = childrenRefs[index];
    isToggleEvent.current = true;
    updateOffset();
    updateShowPopupIndex(index);
    item.toggle(true);
  };

  const toggleItem = (active: number) => {
    childrenRefs.forEach((item: DropdownItemInstance, index) => {
      if (index === active) {
        if (active === showPopupIndexRef.current) {
          updateShowPopupIndex(null);
          item.toggle();
          return;
        }
        showItem(active);
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
        className={clsx(bem('item', { disabled }))}
        onClick={() => {
          if (!disabled) {
            toggleItem(index);
          }
        }}
      >
        <span
          className={clsx(
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

  useImperativeHandle(ref, () => ({
    toggleItem,
    showItem,
    close: closeAll,
  }));

  return (
    <DropdownMenuContext.Provider
      value={{ props, value: innerValue, onChange: onInnerChange, close }}
    >
      <div ref={root} className={clsx(bem(), props.className)} style={{ ...props.style }}>
        <div ref={barRef} style={barStyle()} className={clsx(bem('bar', { opened }))}>
          {childrenRefs.map(renderTitle)}
        </div>
        {Children.toArray(props.children)
          .filter(Boolean)
          .map((child: ReactElement, index: number) =>
            cloneElement(child, {
              ref: setChildrenRefs(index),
              offset: offset.current,
              showPopup: showPopupIndex === index,
            }),
          )}
      </div>
    </DropdownMenuContext.Provider>
  );
});

DropdownMenu.defaultProps = {
  duration: 200,
  overlay: true,
  closeOnClickOutside: true,
  closeOnClickOverlay: true,
  direction: 'down' as const,
  defaultValue: {},
};

export default DropdownMenu;

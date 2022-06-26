import React, {
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
  useState,
} from 'react';
import clsx from 'clsx';

import Loading from '../loading';
import Column from './PickerColumn';
import useEventListener from '../hooks/use-event-listener';

import { PickerProps, PickerPopupActions, PickerColumnOption } from './PropsType';
import { unitToPx, preventDefault, isObject, extend } from '../utils';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { usePropsValue } from '../hooks';
import Popup from '../popup';
import { useColumnsExtend } from './columnsExtend';
import useRefs from '../hooks/use-refs';
import useDebounceEffect from '../hooks/use-debunce-effect';

function PickerInner<T = PickerColumnOption>(props: PickerProps<T>) {
  const { prefixCls, createNamespace, locale } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('picker', prefixCls);

  const wrapper = useRef(null);

  const [refs, setRefs] = useRefs();

  const {
    text: textKey,
    value: valueKey,
    children: childrenKey,
  } = extend(
    {
      text: 'text',
      value: 'value',
      children: 'children',
    },
    props.columnsFieldNames,
  );

  const formatValue = Array.isArray(props.value) ? props.value : [props.value];
  const formatDefaultValue = Array.isArray(props.defaultValue)
    ? props.defaultValue
    : [props.defaultValue];

  const [innerValue, setInnerValue] = useState<string[]>(
    formatValue === undefined ? formatDefaultValue : formatValue,
  );

  // Sync `value` to `innerValue`
  useEffect(() => {
    if (props.value === undefined) return; // Uncontrolled mode
    if (JSON.stringify(innerValue) === JSON.stringify(formatValue)) return;
    setInnerValue(formatValue);
  }, [props.value]);

  const formatColumns = useColumnsExtend(
    props.columns,
    { textKey, valueKey, childrenKey },
    innerValue,
  );
  const { columns, items, indexes, dataType } = formatColumns;

  useDebounceEffect(
    () => {
      if (JSON.stringify(formatValue) === JSON.stringify(innerValue)) return;
      const val = dataType === 'plain' ? innerValue[0] : innerValue;
      const selectedOptions = dataType === 'plain' ? items[0] : items;
      const index = dataType === 'plain' ? indexes[0] : indexes;
      props.onChange?.(val as any, selectedOptions as any, index as any);
    },
    [innerValue],
    {
      wait: 0,
      leading: false,
      trailing: true,
    },
  );

  const itemHeight = useMemo(() => unitToPx(props.itemHeight), [props.itemHeight]);

  const handleSelect = (val: PickerColumnOption, index: number) => {
    setInnerValue((prev) => {
      const next = [...prev];
      next[index] = val === null ?  undefined : val?.[valueKey];
      return next;
    });
  };

  const confirm = () => {
    refs.forEach((_ref) => _ref.stopMomentum());
    const val = dataType === 'plain' ? innerValue[0] : innerValue;
    const selectedOptions = dataType === 'plain' ? items[0] : items;
    const index = dataType === 'plain' ? indexes[0] : indexes;
    props.onConfirm?.(val as any, selectedOptions as any, index as any);
  };

  const cancel = () => {
    props.onCancel?.();
  };

  const renderTitle = () => {
    if (props.title) {
      return <div className={clsx(bem('title'), 'rv-ellipsis')}>{props.title}</div>;
    }
    return null;
  };

  const renderCancel = () => {
    const text = props.cancelButtonText || locale.cancel;
    return (
      <button type="button" className={clsx(bem('cancel'))} onClick={cancel}>
        {text}
      </button>
    );
  };

  const renderConfirm = () => {
    const text = props.confirmButtonText || locale.confirm;
    return (
      <button type="button" className={clsx(bem('confirm'))} onClick={confirm}>
        {text}
      </button>
    );
  };

  const renderToolbar = () => {
    if (props.showToolbar) {
      return (
        <div className={clsx(bem('toolbar'))}>
          {props.toolbar || (
            <>
              {renderCancel()}
              {renderTitle()}
              {renderConfirm()}
            </>
          )}
        </div>
      );
    }
    return null;
  };

  const renderColumnItems = () => {
    return columns.map((item, columnIndex) => {
      return (
        <Column
          key={columnIndex}
          ref={setRefs(columnIndex)}
          optionRender={props.optionRender}
          readOnly={props.readOnly}
          value={innerValue[columnIndex] || null}
          itemHeight={itemHeight}
          index={columnIndex}
          swipeDuration={props.swipeDuration}
          visibleItemCount={props.visibleItemCount}
          options={item}
          onSelect={handleSelect}
        />
      );
    });
  };

  const renderColumns = () => {
    const wrapHeight = itemHeight * props.visibleItemCount;
    const frameStyle = { height: `${itemHeight}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    };

    return (
      <div ref={wrapper} className={clsx(bem('columns'))} style={columnsStyle}>
        {renderColumnItems()}
        <div className={clsx(bem('mask'))} style={maskStyle} />
        <div className={clsx(BORDER_UNSET_TOP_BOTTOM, bem('frame'))} style={frameStyle} />
      </div>
    );
  };

  useEventListener('touchmove', preventDefault, {
    target: wrapper.current,
  });

  return (
    <div className={clsx(bem(), props.className)}>
      {props.toolbarPosition === 'top' ? renderToolbar() : null}
      {props.loading ? <Loading className={clsx(bem('loading'))} /> : null}
      {props.columnsTop}
      {renderColumns()}
      {props.columnsBottom}
      {props.toolbarPosition === 'bottom' ? renderToolbar() : null}
    </div>
  );
}

function PopupPicker<T = PickerColumnOption>(
  props: PickerProps<T>,
  ref: React.ForwardedRef<PickerPopupActions & Partial<PickerPopupActions>>,
) {
  const { visible: outerVisible, popup, children, ...pickerProps } = props;
  const [visivle, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: false,
    onChange: (v) => {
      if (v === false) {
        props.onClose?.();
      }
    },
  });

  const actions: PickerPopupActions = {
    toggle: () => {
      setVisible((v) => !v);
    },
    open: () => {
      if (popup) {
        setVisible(true);
      }
    },
    close: () => {
      if (popup) {
        setVisible(false);
      }
    },
  };

  useImperativeHandle(ref, () => actions);

  const onConfirm = (value: string & string[], option: T & T[], index: number & number[]) => {
    props.onConfirm?.(value, option, index);
    if (popup) actions.close();
  };

  const onCancel = () => {
    props.onCancel?.();
    if (popup) actions.close();
  };

  const popupProps = isObject(popup) ? popup : {};
  const content = <PickerInner {...pickerProps} onCancel={onCancel} onConfirm={onConfirm} />;

  if (!popup) return content;

  return (
    <>
      <Popup
        position="bottom"
        visible={visivle}
        onClickOverlay={() => {
          if (!popupProps?.closeOnClickOverlay) return;
          setVisible(false);
        }}
        {...popupProps}
      >
        {content}
      </Popup>
      {children?.('' as any, actions)}
    </>
  );
}

const Picker = forwardRef(PopupPicker) as <T>(
  props: PickerProps<T> & {
    ref?: React.ForwardedRef<Partial<PickerPopupActions>>;
  },
) => ReturnType<typeof PopupPicker>;

(Picker as React.FC<PickerProps>).defaultProps = {
  itemHeight: 44,
  visibleItemCount: 5,
  swipeDuration: 1000,
  showToolbar: true,
  toolbarPosition: 'top',
};

export default Picker;

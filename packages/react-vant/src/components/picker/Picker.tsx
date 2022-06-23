import React, {
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
} from 'react';
import clsx from 'clsx';

import Loading from '../loading';
import Column from './PickerColumn';

import useRefs from '../hooks/use-refs';
import useEventListener from '../hooks/use-event-listener';

import {
  PickerProps,
  PickerInstance,
  PickerOption,
  PickerObjectColumn,
  PickerPopupActions,
} from './PropsType';
import { unitToPx, preventDefault, extend, isObject } from '../utils';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { useMount, usePropsValue } from '../hooks';
import Popup from '../popup';

function PickerInner<T = PickerOption>(
  props: PickerProps<T>,
  ref: React.ForwardedRef<PickerInstance>,
) {
  const { prefixCls, createNamespace, locale } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('picker', prefixCls);

  const [refs, setRefs] = useRefs();

  const {
    text: textKey,
    value: valueKey,
    values: valuesKey,
    children: childrenKey,
  } = extend(
    {
      // compatible with valueKey prop
      text: 'text',
      value: 'value',
      values: 'values',
      children: 'children',
    },
    props.columnsFieldNames,
  );
  const wrapper = useRef(null);

  const formatValue = Array.isArray(props.value) ? props.value : [props.value];
  const formatDefaultValue = Array.isArray(props.defaultValue)
    ? props.defaultValue
    : [props.defaultValue];

  useMount(() => {
    if (props.defaultValue !== undefined) {
      setValues(formatDefaultValue as any);
    }
  });

  // Sync `value` to `innerValue`
  useEffect(() => {
    if (props.value === undefined) return; // Uncontrolled mode
    const innerValue = getValues();
    if (JSON.stringify(innerValue) === JSON.stringify(formatValue)) return;
    setValues(formatValue as any);
  }, [props.value]);

  const itemHeight = useMemo(() => unitToPx(props.itemHeight), [props.itemHeight]);

  const dataType = useMemo(() => {
    const { columns } = props;
    const firstColumn = columns[0] || {};

    if (typeof firstColumn === 'object') {
      if (childrenKey in firstColumn) {
        return 'cascade';
      }
      if (valuesKey in firstColumn) {
        return 'object';
      }
    }
    return 'plain';
  }, [props.columns]);

  const formatCascade = () => {
    const formatted: PickerObjectColumn[] = [];

    let cursor: PickerObjectColumn = {
      [childrenKey]: props.columns,
    };

    while (cursor && cursor[childrenKey]) {
      const children = cursor[childrenKey];
      let defaultIndex = cursor.defaultIndex ?? 0;

      while (children[defaultIndex] && children[defaultIndex].disabled) {
        if (defaultIndex < children.length - 1) {
          defaultIndex++;
        } else {
          defaultIndex = 0;
          break;
        }
      }

      formatted.push({
        [valuesKey]: cursor[childrenKey],
        className: cursor.className,
        // defaultIndex,
      });

      cursor = children[defaultIndex];
    }
    return formatted;
  };

  function format() {
    const { columns } = props;

    if (dataType === 'plain') {
      return [
        {
          [valuesKey]: columns,
        },
      ];
    }
    if (dataType === 'cascade') {
      return formatCascade();
    }
    return columns;
  }

  // get indexes of all columns
  const getIndexes = () => refs.map((_ref) => _ref.indexRef.current);

  // set options of column by index
  const setColumnOptions = (index: number, options, columnIndex?: number) => {
    const column = refs[index];
    if (column) {
      column.setOptions(options, columnIndex);
    }
  };

  const onCascadeChange = (columnIndex: number) => {
    let cursor: PickerObjectColumn = {
      [childrenKey]: props.columns,
    };

    const indexes = getIndexes();

    for (let i = 0; i <= columnIndex; i += 1) {
      cursor = cursor[childrenKey][indexes[i]];
    }

    if (cursor && cursor[childrenKey]) {
      while (cursor && cursor[childrenKey]) {
        columnIndex += 1;
        setColumnOptions(columnIndex, cursor[childrenKey]);
        cursor = cursor[childrenKey]?.[cursor.defaultIndex || 0];
      }
    } else {
      // Clean unsafe data children value
      // https://github.com/3lang3/react-vant/issues/378
      refs.forEach((column, i) => {
        if (i > columnIndex && columnIndex < refs.length) {
          column.setOptions([]);
        }
      });
    }
  };

  // get column instance by index
  const getChild = (index: number) => refs[index];

  // get column value by index
  const getColumnValue = (index: number): string & string[] => {
    const column = getChild(index);
    return column.getValue();
  };

  // get column value by index
  const getColumnOption = (index: number): T & T[] => {
    const column = getChild(index);
    return column.getOption();
  };

  // set column value by index
  const setColumnValue = (index: number, value: string) => {
    const column = refs[index];
    if (column) {
      column.setValue(value);
      if (dataType === 'cascade') {
        onCascadeChange(index);
      }
    }
  };

  // get column option index by column index
  const getColumnIndex = (index: number) => {
    const column = getChild(index);
    return column.indexRef.current;
  };

  // set column option index by column index
  const setColumnIndex = (columnIndex: number, optionIndex: number) => {
    const column = getChild(columnIndex);

    if (column) {
      column.setIndex(optionIndex);
      if (dataType === 'cascade') {
        onCascadeChange(columnIndex);
      }
    }
  };

  // get options of column by index
  const getColumnOptions = (index: number) => {
    const column = getChild(index);
    return column.getOptions();
  };

  // get values of all columns
  const getValues = () => refs.map((_ref) => _ref.getValue());
  // get select option of all columns
  const getOptions = () => refs.map((_ref) => _ref.getOption());
  // set values of all columns
  const setValues = (values: string[]) => {
    values.forEach((value, index) => {
      setColumnValue(index, value);
    });
  };

  // set indexes of all columns
  const setIndexes = (indexes: []) => {
    indexes.forEach((optionIndex, columnIndex) => {
      setColumnIndex(columnIndex, optionIndex);
    });
  };

  function onChange(currentColumnIndex: number) {
    if (dataType === 'cascade') {
      onCascadeChange(currentColumnIndex);
    }
    if (dataType === 'plain') {
      props.onChange?.(getColumnValue(0), getColumnOption(0), getColumnIndex(0));
    } else {
      props.onChange?.(getValues(), getOptions(), currentColumnIndex);
    }
  }

  const confirm = () => {
    refs.forEach((_ref) => _ref.stopMomentum());
    if (dataType === 'plain') {
      props.onConfirm?.(getColumnValue(0), getColumnOption(0), getColumnIndex(0));
    } else {
      props.onConfirm?.(getValues(), getOptions(), getIndexes());
    }
  };

  const cancel = () => {
    if (dataType === 'plain') {
      props.onCancel?.(getColumnValue(0), getColumnIndex(0));
    } else {
      props.onCancel?.(getValues(), getIndexes());
    }
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
    const columns = format();
    return columns.map((item, columnIndex) => {
      const options = Array.isArray(item) ? item : item[valuesKey];
      return (
        <Column
          key={columnIndex}
          optionRender={props.optionRender}
          ref={setRefs(columnIndex)}
          textKey={textKey}
          valueKey={valueKey}
          readOnly={props.readOnly}
          className={item.className}
          itemHeight={itemHeight}
          swipeDuration={props.swipeDuration}
          visibleItemCount={props.visibleItemCount}
          options={options}
          onChange={(_, ignoreChange) => {
            if (ignoreChange) return;
            onChange(columnIndex);
          }}
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

  useImperativeHandle(ref, () => ({
    confirm,
    getOptions,
    getValues,
    setValues,
    getIndexes,
    setIndexes,
    getColumnIndex,
    setColumnIndex,
    getColumnValue,
    setColumnValue,
    getColumnOptions,
    setColumnOptions,
  }));

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

const InnerPickerForward = forwardRef(PickerInner) as <T>(
  props: PickerProps<T> & { ref?: React.ForwardedRef<PickerInstance> },
) => ReturnType<typeof PickerInner>;

function PopupPicker<T = PickerOption>(
  props: PickerProps<T>,
  ref: React.ForwardedRef<PickerInstance & Partial<PickerPopupActions>>,
) {
  const innerRef = useRef<PickerInstance>(null);
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

  useImperativeHandle(ref, () => ({
    ...innerRef.current,
    ...actions,
  }));

  const onConfirm = (value: string & string[], option: T & T[], index: number & number[]) => {
    props.onConfirm?.(value, option, index);
    if (popup) actions.close();
  };

  const onCancel = (value: string & string[], index: number & number[]) => {
    props.onCancel?.(value, index);
    if (popup) actions.close();
  };

  const popupProps = isObject(popup) ? popup : {};
  const content = (
    <InnerPickerForward ref={innerRef} {...pickerProps} onCancel={onCancel} onConfirm={onConfirm} />
  );

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
      {(() => {
        const values = innerRef.current?.getValues<string>();
        const value = Array.isArray(values) && values.length === 1 ? values[0] : values;
        const selectedOptions = innerRef.current?.getOptions<T>();
        const selectedOptionsParsed =
          Array.isArray(selectedOptions) && selectedOptions.length === 1
            ? selectedOptions[0]
            : selectedOptions;

        return children?.(value, selectedOptionsParsed, actions);
      })()}
    </>
  );
}

const Picker = forwardRef(PopupPicker) as <T>(
  props: PickerProps<T> & {
    ref?: React.ForwardedRef<PickerInstance & Partial<PickerPopupActions>>;
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

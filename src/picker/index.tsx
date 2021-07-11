/* eslint-disable react/no-array-index-key */
import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import classnames from 'classnames';

import Button from '../button';
import Loading from '../loading';
import PickerColumn from './PickerColumn';

import useRefs from '../hooks/use-refs';
import useEventListener from '../hooks/use-event-listener';

import { PickerProps, Column, PickerRef } from './PropsType';
import { createNamespace, unitToPx, preventDefault } from '../utils';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';

const [bem] = createNamespace('picker');

const Picker = forwardRef<PickerRef, PickerProps>((props, ref) => {
  const [refs, setRefs] = useRefs();
  const [formattedColumns, setFormattedColumns] = useState([]);

  const wrapper = useRef(null);

  const itemHeight = useMemo(() => unitToPx(props.itemHeight), [props.itemHeight]);

  const dataType = useMemo(() => {
    const { columns } = props;
    const firstColumn = columns[0] || {};

    if (firstColumn.children) {
      return 'cascade';
    }
    if (firstColumn.values) {
      return 'object';
    }
    return 'text';
  }, [props.columns]);

  const formatCascade = () => {
    const formatted = [];
    let cursor: Column = { children: props.columns };

    while (cursor && cursor.children) {
      const { children } = cursor;
      let defaultIndex = cursor.defaultIndex ?? +props.defaultIndex;

      while (children[defaultIndex] && children[defaultIndex].disabled) {
        if (defaultIndex < children.length - 1) {
          defaultIndex += 1;
        } else {
          defaultIndex = 0;
          break;
        }
      }

      formatted.push({
        values: cursor.children,
        className: cursor.className,
        defaultIndex,
      });

      cursor = children[defaultIndex];
    }
    setFormattedColumns(formatted);
  };

  const format = () => {
    const { columns } = props;

    if (dataType === 'text') {
      setFormattedColumns([
        {
          values: columns,
        },
      ]);
    } else if (dataType === 'cascade') {
      formatCascade();
    } else {
      setFormattedColumns(columns);
    }
  };

  useEffect(() => {
    format();
  }, [props.columns]);

  useEventListener('touchmove', preventDefault, {
    target: wrapper.current,
    depends: [wrapper.current],
  });

  // get column instance by index
  const getColumn = (index: number) => refs[index];

  // get indexes of all columns
  const getIndexes = () => refs.map((_ref) => _ref.index.current);

  // get options of column by index
  const getColumnValues = (index: number) => (getColumn(index) || {}).state.options;

  // set options of column by index
  const setColumnValues = (index: number, options) => {
    const column = refs[index];
    if (column) {
      column.setOptions(options);
    }
  };

  const onCascadeChange = (columnIndex: number) => {
    let cursor: Column = { children: props.columns };
    const indexes = getIndexes();

    for (let i = 0; i <= columnIndex; i += 1) {
      cursor = cursor.children[indexes[i]];
    }

    while (cursor && cursor.children) {
      columnIndex += 1;
      setColumnValues(columnIndex, cursor.children);
      cursor = cursor.children[cursor.defaultIndex || 0];
    }
  };

  // get column value by index
  const getColumnValue = (index: number) => {
    const column = getColumn(index);
    return column && column.getValue();
  };

  // set column value by index
  const setColumnValue = (index: number, value: string) => {
    const column = getColumn(index);

    if (column) {
      column.setValue(value);

      if (dataType === 'cascade') {
        onCascadeChange(index);
      }
    }
  };

  // get column option index by column index
  const getColumnIndex = (index: number) => (getColumn(index) || {}).index.current;

  // set column option index by column index
  const setColumnIndex = (columnIndex: number, optionIndex: number) => {
    const column = getColumn(columnIndex);

    if (column) {
      column.setIndex(optionIndex);
      if (dataType === 'cascade') {
        onCascadeChange(columnIndex);
      }
    }
  };

  // get values of all columns
  const getValues = () => refs.map((_ref) => _ref.getValue());

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

  const onChange = (columnIndex: number) => {
    if (dataType === 'cascade') {
      onCascadeChange(columnIndex);
    }
    if (props.onChange) {
      if (dataType === 'text') {
        props.onChange(getColumnValue(0), getColumnIndex(0));
      } else {
        props.onChange(getValues(), columnIndex);
      }
    }
  };

  const confirm = () => {
    refs.forEach((_ref) => _ref.stopMomentum());
    if (props.onConfirm) {
      if (dataType === 'text') {
        props.onConfirm(getColumnValue(0), getColumnIndex(0));
      } else {
        props.onConfirm(getValues(), getIndexes());
      }
    }
  };

  const renderColumnItems = () =>
    formattedColumns.map((item, columnIndex) => (
      <PickerColumn
        key={columnIndex}
        ref={setRefs(columnIndex)}
        textKey="text"
        readonly={props.readonly}
        className={item.className}
        itemHeight={itemHeight}
        defaultIndex={item.defaultIndex ?? +props.defaultIndex}
        swipeDuration={props.swipeDuration}
        visibleItemCount={props.visibleItemCount}
        initialOptions={item.values}
        onChange={() => {
          onChange(columnIndex);
        }}
      />
    ));

  const renderColumns = () => {
    const wrapHeight = itemHeight * props.visibleItemCount;
    const frameStyle = { height: `${itemHeight}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    };

    return (
      <div ref={wrapper} className={classnames(bem('columns'))} style={columnsStyle}>
        {renderColumnItems()}
        <div className={classnames(bem('mask'))} style={maskStyle} />
        <div className={classnames(BORDER_UNSET_TOP_BOTTOM, bem('frame'))} style={frameStyle} />
      </div>
    );
  };

  const renderConfirmBtn = () => {
    if (props.showSubmitBtn) {
      return (
        <div className={classnames(bem('confirm'))}>
          {props.children || (
            <Button block type="primary" onClick={confirm}>
              确认
            </Button>
          )}
        </div>
      );
    }
    return null;
  };

  useImperativeHandle(ref, () => ({
    confirm,
    getValues,
    setValues,
    getIndexes,
    setIndexes,
    getColumnIndex,
    setColumnIndex,
    getColumnValue,
    setColumnValue,
    getColumnValues,
    setColumnValues,
  }));

  return (
    <div className={classnames(bem(), props.className)}>
      {props.loading ? <Loading className={classnames(bem('loading'))} /> : null}
      {renderColumns()}
      {renderConfirmBtn()}
    </div>
  );
});

Picker.defaultProps = {
  itemHeight: 44,
  visibleItemCount: 5,
  swipeDuration: 1000,
  defaultIndex: 0,
};

export default Picker;

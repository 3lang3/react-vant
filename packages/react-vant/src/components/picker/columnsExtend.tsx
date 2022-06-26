import { useMemo } from 'react';

import type { PickerColumn, PickerColumnOption, PickerProps, PickerValueExtend } from './PropsType';

type KeysProps = {
  textKey: string;
  valueKey: string;
  childrenKey: string;
};

function useColumnsFn(options: PickerProps['columns'], keys: KeysProps) {
  const { textKey, valueKey, childrenKey } = keys;
  const dataType = useMemo(() => {
    const firstColumn = options[0] || {};

    if (typeof firstColumn === 'object') {
      // 联级
      if (childrenKey in firstColumn) {
        return 'cascade';
      }
      return 'object';
    }
    // 单列
    return 'plain';
  }, [options, childrenKey]);

  const depth = useMemo(() => {
    let depth = 0;
    function traverse(options: PickerColumnOption[], currentDepth: number) {
      if (currentDepth > depth) depth = currentDepth;
      const nextDepth = currentDepth + 1;
      options.forEach((option) => {
        if (option[childrenKey]) {
          traverse(option[childrenKey], nextDepth);
        }
      });
    }
    traverse(options, 1);
    return depth;
  }, [options, childrenKey]);

  if (dataType !== 'cascade') return options;

  return (selected: string[]) => {
    const columns: PickerColumnOption[][] = [];
    let currentOptions = options as PickerColumn<PickerColumnOption>[];
    let i = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      columns.push(
        currentOptions.map((option) => ({
          text: option[textKey],
          value: option[valueKey] ?? option[textKey],
        })) as any,
      );
      const x = selected[i];
      const targetOptions = currentOptions.find((option) => (option[valueKey] ?? option[textKey]) === x);
      if (!targetOptions || !targetOptions[childrenKey]) break;
      currentOptions = targetOptions[childrenKey];
      i++;
    }
    while (i < depth - 1) {
      columns.push([] as any);
      i++;
    }
    return columns;
  };
}

function withCache<T>(generate: () => T) {
  let cache: T | null = null;
  return () => {
    if (cache === null) {
      cache = generate();
    }
    return cache;
  };
}

export function generateColumnsExtend(
  rawColumns: PickerProps['columns'] | ((value: string[]) => PickerProps['columns']),
  keys: KeysProps,
  val: string[],
) {
  const { textKey, valueKey, childrenKey } = keys;

  const dataType = () => {
    const firstColumn = rawColumns[0] || {};

    if (typeof firstColumn === 'object') {
      // 联级
      if (childrenKey in firstColumn) {
        return 'cascade';
      }
      return 'object';
    }
    // 单列
    return 'plain';
  };

  const columns = withCache(() => {
    let cls = typeof rawColumns === 'function' ? rawColumns(val) : rawColumns;
    if (!Array.isArray(cls[0])) cls = [cls];
    return cls.map((column) =>
      column.map((item) => {
        if (typeof item === 'string') return { text: item, value: item };
        if (item[textKey]) item.text = item[textKey];
        if (item[valueKey]) item.value = item[valueKey];
        if (item.value === undefined) item.value = item.text;
        if (item[childrenKey]) item.children = item[childrenKey];
        return item;
      }),
    );
  });
  const items = withCache(() => {
    return val.map((v, index) => {
      const column = columns()[index];
      if (!column) return null;
      return column.find((item) => item.value === v) ?? null;
    });
  });

  const indexes = withCache(() => {
    return val.map((v, index) => {
      const column = columns()[index];
      if (!column) return null;
      return column.findIndex((item) => item.value === v) ?? null;
    });
  });

  const result: PickerValueExtend = {
    get columns() {
      return columns();
    },
    get items() {
      return items();
    },
    get indexes() {
      return indexes();
    },
    get dataType() {
      return dataType();
    },
  };
  return result;
}

export function useColumnsExtend(
  columns: PickerProps['columns'],
  keys: KeysProps,
  value: string[],
) {
  const formatColumns = useColumnsFn(columns, keys);

  return useMemo(() => generateColumnsExtend(formatColumns, keys, value), [columns, keys, value]);
}

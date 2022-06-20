/* eslint-disable no-plusplus */
import React, { forwardRef, useContext, useImperativeHandle, useMemo, useRef } from 'react';
import clsx from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { AreaColumnOption, AreaColumnType, AreaInstance, AreaProps } from './PropsType';
import Picker from '../picker';
import type { PickerInstance } from '../picker';
import { useMount, useUpdateEffect } from '../hooks';
import { deepClone } from '../utils/deep-clone';
import { pick } from '../utils';
import useRefState from '../hooks/use-ref-state';

const EMPTY_CODE = '000000';

const INHERIT_PROPS = [
  'title',
  'loading',
  'readonly',
  'itemHeight',
  'swipeDuration',
  'visibleItemCount',
  'cancelButtonText',
  'confirmButtonText',
  'toolbar',
  'columnsTop',
  'columnsBottom',
  'optionRender',
] as const;

const Area = forwardRef<AreaInstance, AreaProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('area', prefixCls);

  const pickerRef = useRef<PickerInstance>();
  const [innerCode, updateCode, codeRef] = useRefState(props.value);

  const areaList = useMemo(() => {
    return {
      province: props.areaList.province_list || {},
      city: props.areaList.city_list || {},
      county: props.areaList.county_list || {},
    };
  }, [JSON.stringify(props.areaList)]);

  const placeholderMap = useMemo(() => {
    const { columnsPlaceholder } = props;
    return {
      province: columnsPlaceholder[0] || '',
      city: columnsPlaceholder[1] || '',
      county: columnsPlaceholder[2] || '',
    };
  }, [JSON.stringify(props.columnsPlaceholder)]);

  const getDefaultCode = (): string => {
    if (props.columnsPlaceholder.length) {
      return EMPTY_CODE;
    }

    const { county, city } = areaList;

    const countyCodes = Object.keys(county);
    if (countyCodes[0]) {
      return countyCodes[0];
    }

    const cityCodes = Object.keys(city);
    if (cityCodes[0]) {
      return cityCodes[0];
    }

    return '';
  };

  const getColumnValues = (type: AreaColumnType, code?: string) => {
    let column: AreaColumnOption[] = [];
    if (type !== 'province' && !code) {
      return column;
    }

    const list = areaList[type];
    column = Object.keys(list).map((listCode) => ({
      code: listCode,
      name: list[listCode],
    }));

    if (code) {
      // oversea code
      if (type === 'city' && props.isOverseaCode(code)) {
        code = '9';
      }
      column = column.filter((item) => item.code.indexOf(code) === 0);
    }

    if (placeholderMap[type] && column.length) {
      // set columns placeholder
      let codeFill = '';
      if (type === 'city') {
        codeFill = EMPTY_CODE.slice(2, 4);
      } else if (type === 'county') {
        codeFill = EMPTY_CODE.slice(4, 6);
      }

      column.unshift({
        code: code + codeFill,
        name: placeholderMap[type],
      });
    }

    return column;
  };

  // get index by code
  const getIndex = (type: AreaColumnType, code: string) => {
    let compareNum = code.length;
    if (type === 'province') {
      compareNum = props.isOverseaCode(code) ? 1 : 2;
    }
    if (type === 'city') {
      compareNum = 4;
    }

    code = code.slice(0, compareNum);

    const list = getColumnValues(type, compareNum > 2 ? code.slice(0, compareNum - 2) : '');

    for (let i = 0; i < list.length; i++) {
      if (list[i].code.slice(0, compareNum) === code) {
        return i;
      }
    }

    return 0;
  };

  const columnsData = useMemo(() => {
    let code = innerCode || getDefaultCode();
    const province = getColumnValues('province');
    const city = getColumnValues('city', code.slice(0, 2));

    if (city.length && code.slice(2, 4) === '00' && !props.isOverseaCode(code)) {
      [{ code }] = city;
    }
    const county = getColumnValues('county', code.slice(0, 4));

    return [province, city, county];
  }, [innerCode]);

  const setIndexes = (code?: string) => {
    const picker = pickerRef.current;
    if (!picker) {
      return;
    }

    code = code || getDefaultCode();

    const city = getColumnValues('city', code.slice(0, 2));

    if (city.length && code.slice(2, 4) === '00' && !props.isOverseaCode(code)) {
      [{ code }] = city;
    }
    picker.setIndexes([
      getIndex('province', code),
      getIndex('city', code),
      getIndex('county', code),
    ]);
  };

  const getValuesFormCode = (currentCode) => {
    let code = currentCode;
    const province = getColumnValues('province');
    const city = getColumnValues('city', code.slice(0, 2));
    if (city.length && code.slice(2, 4) === '00' && !props.isOverseaCode(code)) {
      [{ code }] = city;
    }
    const county = getColumnValues('county', code.slice(0, 4));
    const [provinceIndex, cityIndex, countyIndex] = [
      getIndex('province', code),
      getIndex('city', code),
      getIndex('county', code),
    ];
    return [province[provinceIndex], city[cityIndex], county[countyIndex]];
  };

  // parse output columns data
  const parseValues = (values: AreaColumnOption[]) =>
    values.map((value, index) => {
      if (value) {
        value = deepClone(value) as AreaColumnOption;

        if (!value.code || value.name === props.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }
      }

      return value;
    });

  const getValues = () => {
    if (pickerRef.current) {
      const values = pickerRef.current?.getValues<AreaColumnOption>().filter(Boolean);
      return parseValues(values);
    }
    return [];
  };

  const getArea = () => {
    const values = getValues();
    const area = {
      code: '',
      country: '',
      province: '',
      city: '',
      county: '',
    };

    if (!values.length) {
      return area;
    }

    const names = values.map((item) => item.name);
    const validValues = values.filter((value) => value.code);

    area.code = validValues.length ? validValues[validValues.length - 1].code : '';

    if (props.isOverseaCode(area.code)) {
      area.country = names[1] || '';
      area.province = names[2] || '';
    } else {
      area.province = names[0] || '';
      area.city = names[1] || '';
      area.county = names[2] || '';
    }

    return area;
  };

  const reset = (code = '') => {
    updateCode(code);
  };

  const onChange = (values: AreaColumnOption[], index: number) => {
    updateCode(values[index].code);
    if (pickerRef.current) {
      const currentValues = getValuesFormCode(values[index].code);
      if (props.onChange) props.onChange(parseValues(currentValues), index);
    }
  };

  const onConfirm = (values: AreaColumnOption[], index: number) => {
    if (props.onConfirm) props.onConfirm(parseValues(values), index);
  };

  const onCancel = (...args) => {
    if (props.onCancel) props.onCancel(...args);
  };

  useMount(() => {
    setIndexes(props.value);
  });

  useUpdateEffect(() => {
    if (props.value !== innerCode) {
      updateCode(props.value);
      setIndexes();
    }
  }, [props.value]);

  useUpdateEffect(() => {
    setIndexes(codeRef.current);
  }, [props.areaList, props.columnsNum]);

  useImperativeHandle(ref, () => ({
    reset,
    getArea,
    getValues,
  }));

  const columns = useMemo(
    () => columnsData.slice(0, +props.columnsNum).map((values) => ({ values })),
    [props.columnsNum, columnsData],
  );

  return (
    <Picker
      ref={pickerRef}
      className={clsx(bem())}
      columns={columns}
      columnsFieldNames={{ text: 'name' }}
      onChange={onChange}
      onCancel={onCancel}
      onConfirm={onConfirm}
      {...pick(props, INHERIT_PROPS)}
    />
  );
});

function isOverseaCode(code: string) {
  return code[0] === '9';
}

Area.defaultProps = {
  areaList: {},
  columnsNum: 3,
  columnsPlaceholder: [],
  isOverseaCode,
};

export default Area;

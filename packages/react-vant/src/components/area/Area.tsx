/* eslint-disable no-plusplus */
import React, { forwardRef, useContext, useImperativeHandle, useMemo, useRef } from 'react';
import clsx from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { AreaColumnOption, AreaInstance, AreaList, AreaProps } from './PropsType';
import Picker from '../picker';
import { pick } from '../utils';
import { PickerPopupActions } from '../picker/PropsType';

const INHERIT_PROPS = [
  'title',
  'value',
  'defaultValue',
  'loading',
  'readOnly',
  'itemHeight',
  'swipeDuration',
  'visibleItemCount',
  'cancelButtonText',
  'confirmButtonText',
  'toolbar',
  'columnsTop',
  'columnsBottom',
  'optionRender',
  'placeholder',
  'onChange',
  'onCancel',
  'onConfirm',
] as const;

function parseVanAreaList(data: AreaList, columnsNum: number) {
  const { province_list = {}, city_list = {}, county_list = {} } = data;

  const provinces = Object.entries(province_list).map(([code, name]) => ({
    name,
    code,
  }));

  const citys = Object.entries(city_list).map(([code, name]) => ({ name, code }));
  const countrys = Object.entries(county_list).map(([code, name]) => ({ name, code }));

  // provinces.unshift({ code: undefined, name: '请选择' });
  // citys.unshift({ code: undefined, name: '请选择' });
  // countrys.unshift({ code: undefined, name: '请选择' });

  if (columnsNum > 2) {
    citys.forEach((city: any) => {
      const code = city.code?.slice(0, 4);
      const children = countrys.filter((country) => country.code?.slice(0, 4) === code);
      city.children = children;
    });
  }

  if (columnsNum > 1) {
    provinces.forEach((province: any) => {
      const provinceCode = province.code?.slice(0, 2);
      const children = citys.filter((city) => city.code?.slice(0, 2) === provinceCode);
      province.children = children;
    });
  }

  return provinces;
}

const Area = forwardRef<AreaInstance, AreaProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('area', prefixCls);

  const columns = useMemo(
    () => props.columns ?? parseVanAreaList(props.areaList, +props.columnsNum),
    [props.columnsNum, props.areaList, props.columns],
  );

  const pickerRef = useRef<PickerPopupActions>();

  useImperativeHandle(ref, () => ({
    ...pickerRef.current,
  }));

  return (
    <Picker<AreaColumnOption>
      ref={pickerRef}
      style={props.style}
      className={clsx(bem(), props.className)}
      columns={columns}
      columnsFieldNames={{ text: 'name', value: 'code' }}
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
  isOverseaCode,
};

export default Area;

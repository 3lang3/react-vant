/* eslint-disable no-plusplus */
import React, { forwardRef, useContext, useMemo } from 'react';
import clsx from 'clsx';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { AreaColumnOption, AreaInstance, AreaList, AreaProps } from './PropsType';
import Picker from '../picker';
import { pick } from '../utils';
import { PickerColumn } from '../picker/PropsType';

const INHERIT_PROPS = [
  'title',
  'visible',
  'popup',
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
  'children',
] as const;

function parseVanAreaList(data: AreaList, columnsNum: number): PickerColumn<AreaColumnOption> {
  const { province_list = {}, city_list = {}, county_list = {} } = data;

  const provinces = Object.entries(province_list).map(([value, text]) => ({
    value,
    text,
  }));

  const citys = Object.entries(city_list).map(([value, text]) => ({ value, text }));
  const countrys = Object.entries(county_list).map(([value, text]) => ({ value, text }));

  if (columnsNum > 2) {
    citys.forEach((city: any) => {
      const value = city.value?.slice(0, 4);
      const children = countrys.filter((country) => country.value?.slice(0, 4) === value);
      city.children = children;
    });
  }

  if (columnsNum > 1) {
    provinces.forEach((province: any) => {
      const provinceCode = province.value?.slice(0, 2);
      const children = citys.filter((city) => city.value?.slice(0, 2) === provinceCode);
      province.children = children;
    });
  }

  return provinces;
}

const Area = forwardRef<AreaInstance, AreaProps<AreaColumnOption>>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('area', prefixCls);

  const columns = useMemo(
    () => props.columns ?? parseVanAreaList(props.areaList, +props.columnsNum),
    [props.columnsNum, props.areaList, props.columns],
  );

  return (
    <Picker<AreaColumnOption>
      ref={ref}
      style={props.style}
      className={clsx(bem(), props.className)}
      columns={columns}
      {...pick(props, INHERIT_PROPS)}
    />
  );
});

Area.defaultProps = {
  areaList: {},
  columnsNum: 3,
};

export default Area;

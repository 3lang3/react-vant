import React, { useState } from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  const [value, setValue] = useState(['330000', '330300', '330302']);
  return (
    <Area
      title="标题"
      areaList={areaList}
      value={value}
      onChange={(val, options) => {
        console.log('selected value: ', val);
        console.log('selected option: ', options);
        setValue(val);
      }}
      onConfirm={(v, options) => console.log(v, options)}
    />
  );
};

import React, { useState } from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  const [value] = useState('330302');
  return (
    <Area
      title="标题"
      areaList={areaList}
      value={value}
      onChange={(v, options) => console.log(v, options)}
      onConfirm={(v, options) => console.log(v, options)}
    />
  );
};

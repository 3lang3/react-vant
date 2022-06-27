import React from 'react';
import { Area } from 'react-vant';
import { areaList } from '@vant/area-data';

export default () => {
  const [value, setValue] = React.useState(['220000', '220300', '220303']);
  return (
    <>
      <Area
        title="标题"
        value={value}
        areaList={areaList}
        placeholder={['请选择🤔', '请选择🤔', '请选择🤔']}
        onChange={(val, options) => {
          console.log('selected value: ', val);
          console.log('selected option: ', options);
          setValue(val)
        }}
        onConfirm={(v) => console.log(v)}
      />
      <button onClick={() => setValue(['330000', '330200', '330206'])}>change</button>
      <button onClick={() => setValue(undefined)}>change undefined</button>
    </>
  );
};
